/**
 * Subspace API Client
 * Handles communication with Subspace platform
 */

interface SubspaceMessage {
  text: string;
  channel_id: string;
  user_id?: string;
  agent_id?: string;
}

interface SubspaceConfig {
  apiKey: string;
  apiUrl?: string;
  webhookUrl?: string;
}

export class SubspaceClient {
  private apiKey: string;
  private apiUrl: string;

  constructor(config: SubspaceConfig) {
    this.apiKey = config.apiKey;
    this.apiUrl = config.apiUrl || "https://api.subspace.com/v1";
  }

  /**
   * Send a message to Subspace channel
   */
  async sendMessage(
    message: SubspaceMessage
  ): Promise<{ success: boolean; data?: unknown; error?: string }> {
    try {
      const response = await fetch(`${this.apiUrl}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          channel_id: message.channel_id,
          user_id: message.user_id,
          message: {
            text: message.text,
            agent_id: message.agent_id,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        return {
          success: false,
          error: `Subspace API error: ${errorData}`,
        };
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(
    signature: string,
    payload: string,
    secret: string
  ): boolean {
    // TODO: Implement signature verification based on Subspace documentation
    // For now, return true if signature exists
    return Boolean(signature);
  }

  /**
   * Process incoming webhook from Subspace
   */
  async processWebhook(webhookData: {
    message: { text?: string; content?: string };
    user_id?: string;
    channel_id?: string;
    agent_id?: string;
    event_type?: string;
  }): Promise<{ success: boolean; response?: unknown; error?: string }> {
    if (webhookData.event_type === "message.received") {
      // Extract message text
      const messageText =
        webhookData.message?.text || webhookData.message?.content || "";

      // Forward to agent chat endpoint
      const agentId = webhookData.agent_id;
      if (!agentId) {
        return {
          success: false,
          error: "Agent ID is required",
        };
      }

      const appUrl =
        process.env.NEXT_PUBLIC_APP_URL || "https://mubasat-api.vercel.app";
      const agentChatUrl = `${appUrl}/api/agents/${agentId}/chat`;

      try {
        const response = await fetch(agentChatUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: messageText,
            user_id: webhookData.user_id,
            channel_id: webhookData.channel_id,
            source: "subspace",
          }),
        });

        const agentResponse = await response.json();

        return {
          success: true,
          response: agentResponse,
        };
      } catch (error) {
        return {
          success: false,
          error:
            error instanceof Error
              ? error.message
              : "Failed to process webhook",
        };
      }
    }

    return {
      success: true,
    };
  }
}

/**
 * Create Subspace client instance
 */
export function createSubspaceClient(): SubspaceClient | null {
  const apiKey = process.env.SUBSPACE_API_KEY;
  if (!apiKey) {
    return null;
  }

  return new SubspaceClient({
    apiKey,
    apiUrl: process.env.SUBSPACE_API_URL,
    webhookUrl: process.env.SUBSPACE_WEBHOOK_URL,
  });
}
