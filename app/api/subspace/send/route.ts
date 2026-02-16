import { type NextRequest, NextResponse } from "next/server";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

// POST - Send message to Subspace
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, channel_id, user_id, agent_id } = body;

    if (!message || !channel_id) {
      return NextResponse.json(
        { success: false, error: "Message and channel_id are required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const subspaceApiKey = process.env.SUBSPACE_API_KEY;
    const subspaceApiUrl =
      process.env.SUBSPACE_API_URL || "https://api.subspace.com/v1";

    if (!subspaceApiKey) {
      return NextResponse.json(
        { success: false, error: "Subspace API key not configured" },
        { status: 500, headers: corsHeaders }
      );
    }

    // Send message to Subspace
    try {
      const response = await fetch(`${subspaceApiUrl}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${subspaceApiKey}`,
        },
        body: JSON.stringify({
          channel_id,
          user_id,
          message: {
            text: message,
            agent_id,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Subspace API error:", errorData);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to send message to Subspace",
            details: errorData,
          },
          { status: response.status, headers: corsHeaders }
        );
      }

      const data = await response.json();

      return NextResponse.json(
        {
          success: true,
          message: "Message sent to Subspace",
          data,
        },
        { headers: corsHeaders }
      );
    } catch (error) {
      console.error("Error sending message to Subspace:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to connect to Subspace API",
          details: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (error) {
    console.error("Error in Subspace send endpoint:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request",
      },
      { status: 400, headers: corsHeaders }
    );
  }
}
