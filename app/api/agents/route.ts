import { NextRequest, NextResponse } from "next/server";
import {
  getPublishedAgents,
  createAgent,
} from "@/lib/db/agents-queries";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function GET() {
  try {
    const agents = await getPublishedAgents({ limit: 100 });
    return NextResponse.json(
      { success: true, agents, count: agents.length },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Failed to fetch agents:", error);
    return NextResponse.json(
      { success: false, agents: [], count: 0, error: "Failed to fetch agents" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.name) {
      return NextResponse.json(
        { success: false, error: "Name required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const agent = await createAgent({
      name: body.name,
      description: body.description || "",
      category: body.category || "assistant",
      status: body.autoPublish ? "published" : "draft",
      capabilities: body.capabilities || [],
      systemPrompt: body.systemPrompt,
      modelId: body.modelId || "gpt-4o",
      apiEndpoint: body.apiEndpoint,
      iconUrl: body.iconUrl,
      source: body.source || "api",
      price: body.price || 0,
    });

    return NextResponse.json(
      { success: true, agent },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Failed to create agent:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create agent" },
      { status: 500, headers: corsHeaders }
    );
  }
}
