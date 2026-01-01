import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import {
  getPublishedAgents,
  createAgent,
  getAgentByExternalId,
  updateAgent,
} from "@/lib/db/agents-queries";

// CORS headers for external API access
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-API-Key",
};

// Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

// GET - List all published agents for marketplace
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50");
    
    const agents = await getPublishedAgents({ limit });
    
    return NextResponse.json(
      {
        success: true,
        agents,
        count: agents.length,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error fetching agents:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch agents" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// POST - Create a new agent (from external system like Nagra AI)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name) {
      return NextResponse.json(
        { success: false, error: "Agent name is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Check if agent with this external ID already exists
    if (body.externalId || body.id) {
      const existingAgent = await getAgentByExternalId({ 
        externalId: body.externalId || body.id 
      });
      
      if (existingAgent) {
        // Update existing agent
        const updated = await updateAgent({
          id: existingAgent.id,
          name: body.name,
          description: body.description,
          category: body.category,
          capabilities: body.capabilities,
          systemPrompt: body.systemPrompt,
          modelId: body.modelId,
          status: body.status || existingAgent.status,
          apiEndpoint: body.apiEndpoint,
          iconUrl: body.iconUrl,
        });
        
        return NextResponse.json(
          {
            success: true,
            agent: updated,
            action: "updated",
            message: "تم تحديث الوكيل بنجاح",
          },
          { headers: corsHeaders }
        );
      }
    }

    // Create new agent
    const agent = await createAgent({
      externalId: body.externalId || body.id,
      name: body.name,
      description: body.description || "وكيل ذكاء اصطناعي متقدم",
      category: body.category || "assistant",
      capabilities: body.capabilities || [],
      systemPrompt: body.systemPrompt,
      modelId: body.modelId || "gpt-4o",
      status: body.autoPublish ? "published" : "draft",
      apiEndpoint: body.apiEndpoint,
      iconUrl: body.iconUrl,
      source: body.source || "nagra-ai",
      price: body.price || 0,
    });

    return NextResponse.json(
      {
        success: true,
        agent,
        action: "created",
        message: "تم إنشاء الوكيل بنجاح",
        marketplaceUrl: `https://nextjs-v0-project.vercel.app/marketplace/${agent.id}`,
      },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error creating agent:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create agent" },
      { status: 500, headers: corsHeaders }
    );
  }
}
