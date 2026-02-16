import { type NextRequest, NextResponse } from "next/server";

import {
  createAgent,
  getAgentByExternalId,
  getPublishedAgents,
  searchAgents,
  updateAgent,
} from "@/lib/db/agents-queries";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-API-Key",
};

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10);
    const category = searchParams.get("category") || undefined;
    const query = searchParams.get("q") || undefined;

    const agents =
      query || (category && category !== "all")
        ? await searchAgents({ query, category, limit })
        : await getPublishedAgents({ limit });

    return NextResponse.json(
      { success: true, agents, count: agents.length },
      { headers: corsHeaders }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch agents";
    return NextResponse.json(
      { success: false, error: message, agents: [] },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    if (!body.name) {
      return NextResponse.json(
        { success: false, error: "Agent name is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const externalId = body.externalId || body.id;

    if (externalId) {
      const existing = await getAgentByExternalId({ externalId });
      if (existing) {
        const updated = await updateAgent({
          id: existing.id,
          name: body.name || existing.name,
          description: body.description || existing.description,
          category: body.category || existing.category,
          capabilities: body.capabilities || existing.capabilities,
          systemPrompt: body.systemPrompt || existing.systemPrompt,
          modelId: body.modelId || existing.modelId,
          status: body.status || existing.status,
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

    const created = await createAgent({
      externalId: externalId || undefined,
      name: body.name,
      description: body.description || "وكيل ذكاء اصطناعي متقدم",
      category: body.category || "assistant",
      capabilities: body.capabilities || [],
      systemPrompt: body.systemPrompt,
      modelId: body.modelId || "gpt-4o",
      status: body.autoPublish ? "published" : "draft",
      source: body.source || "external",
      price: body.price || 0,
    });

    return NextResponse.json(
      {
        success: true,
        agent: created,
        action: "created",
        message: "تم إنشاء الوكيل بنجاح",
      },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create agent";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500, headers: corsHeaders }
    );
  }
}
