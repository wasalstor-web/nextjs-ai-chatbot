import { generateImage } from "ai";
import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { getLanguageModel } from "@/lib/ai/providers";
import { ChatSDKError } from "@/lib/errors";

export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return new ChatSDKError("unauthorized:chat").toResponse();
    }

    const { prompt, model = "grok-2-vision-1212" } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    try {
      // Use the AI SDK to generate image
      const result = await generateImage({
        model: getLanguageModel(model),
        prompt: prompt,
      });

      // Return the image as base64
      return NextResponse.json({
        success: true,
        image: result.image,
      });
    } catch (error) {
      console.error("Image generation error:", error);
      
      // If image generation fails, try using text-to-image via chat
      // This is a fallback approach
      return NextResponse.json(
        {
          success: false,
          error: "Image generation is not directly supported. Please use the chat interface to request image generation.",
          message: "The current model may not support direct image generation. Try asking in the chat: 'ارسم صورة: [وصفك]'",
        },
        { status: 501 }
      );
    }
  } catch (error) {
    console.error("Error in image generation API:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

