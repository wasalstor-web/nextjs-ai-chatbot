import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { gateway } from "@ai-sdk/gateway";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
  type LanguageModel,
} from "ai";
import { isTestEnvironment } from "../constants";

const THINKING_SUFFIX_REGEX = /-thinking$/;

/**
 * Detect whether to use direct provider SDKs or Vercel AI Gateway.
 */
const useDirectAnthropic = !!process.env.ANTHROPIC_API_KEY;
const useDirectOpenAI = !!process.env.OPENAI_API_KEY;

/**
 * Map gateway-style model IDs (e.g. "anthropic/claude-sonnet-4.5")
 * to the bare Anthropic model ID (e.g. "claude-sonnet-4-5-20250514").
 */
const ANTHROPIC_MODEL_MAP: Record<string, string> = {
  "anthropic/claude-haiku-4.5": "claude-3-5-haiku-20241022",
  "anthropic/claude-sonnet-4.5": "claude-sonnet-4-20250514",
  "anthropic/claude-opus-4.5": "claude-opus-4-20250514",
  "anthropic/claude-3.7-sonnet": "claude-3-7-sonnet-20250219",
  "anthropic/claude-3.7-sonnet-thinking": "claude-3-7-sonnet-20250219",
};

/**
 * Map gateway-style OpenAI model IDs to actual OpenAI model names.
 */
const OPENAI_MODEL_MAP: Record<string, string> = {
  "openai/gpt-4.1-mini": "gpt-4o-mini",
  "openai/gpt-5.2": "gpt-4o",
  "openai/gpt-4o": "gpt-4o",
  "openai/gpt-4o-mini": "gpt-4o-mini",
  "openai/gpt-4-turbo": "gpt-4-turbo",
};

// Internal function that returns the raw model type for wrapping
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveModelInternal(modelId: string): any {
  // If the model is an Anthropic model and we have a direct key, use it
  if (useDirectAnthropic && modelId.startsWith("anthropic/")) {
    const bareId = ANTHROPIC_MODEL_MAP[modelId] ?? modelId.replace("anthropic/", "");
    return anthropic(bareId);
  }

  // If the model is an OpenAI model and we have a direct key, use it
  if (useDirectOpenAI && modelId.startsWith("openai/")) {
    const bareId = OPENAI_MODEL_MAP[modelId] ?? modelId.replace("openai/", "");
    return openai(bareId);
  }

  // Otherwise use the gateway
  return gateway.languageModel(modelId);
}

function resolveModel(modelId: string): LanguageModel {
  return resolveModelInternal(modelId) as unknown as LanguageModel;
}

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "chat-model-reasoning": reasoningModel,
          "title-model": titleModel,
          "artifact-model": artifactModel,
        },
      });
    })()
  : null;

export function getLanguageModel(modelId: string): LanguageModel {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId) as unknown as LanguageModel;
  }

  const isReasoningModel =
    modelId.includes("reasoning") || modelId.endsWith("-thinking");

  if (isReasoningModel) {
    const gatewayModelId = modelId.replace(THINKING_SUFFIX_REGEX, "");

    return wrapLanguageModel({
      model: resolveModelInternal(gatewayModelId),
      middleware: extractReasoningMiddleware({ tagName: "thinking" }),
    }) as unknown as LanguageModel;
  }

  return resolveModel(modelId);
}

export function getTitleModel(): LanguageModel {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model") as unknown as LanguageModel;
  }
  return resolveModel("anthropic/claude-haiku-4.5");
}

export function getArtifactModel(): LanguageModel {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("artifact-model") as unknown as LanguageModel;
  }
  return resolveModel("anthropic/claude-haiku-4.5");
}
