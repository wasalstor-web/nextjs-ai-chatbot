import { NextRequest, NextResponse } from "next/server";

// CORS headers for Subspace webhook
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Subspace-Signature",
};

// Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

// POST - Receive webhook from Subspace
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify webhook signature if provided
    const signature = request.headers.get("x-subspace-signature");
    const apiKey = process.env.SUBSPACE_API_KEY;
    
    if (apiKey && signature) {
      // TODO: Implement signature verification
      // For now, we'll accept all requests
    }

    // Extract message data from Subspace webhook
    const { 
      message, 
      user_id, 
      channel_id, 
      agent_id,
      event_type 
    } = body;

    // Handle different event types
    if (event_type === "message.received") {
      // Process incoming message from Subspace
      // Forward to agent chat endpoint
      const agentChatUrl = `${process.env.NEXT_PUBLIC_APP_URL || "https://mubasat-api.vercel.app"}/api/agents/${agent_id}/chat`;
      
      try {
        const response = await fetch(agentChatUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message.text || message.content,
            user_id,
            channel_id,
            source: "subspace",
          }),
        });

        const agentResponse = await response.json();

        // Send response back to Subspace
        // TODO: Implement Subspace API call to send message back
        return NextResponse.json(
          {
            success: true,
            message: "Webhook processed",
            response: agentResponse,
          },
          { headers: corsHeaders }
        );
      } catch (error) {
        console.error("Error processing Subspace webhook:", error);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to process webhook",
          },
          { status: 500, headers: corsHeaders }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Webhook received",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error handling Subspace webhook:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request",
      },
      { status: 400, headers: corsHeaders }
    );
  }
}

