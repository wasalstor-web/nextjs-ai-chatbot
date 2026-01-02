import { NextRequest, NextResponse } from "next/server";

// In-memory storage for agents (production should use database)
// biome-ignore lint/suspicious/noExplicitAny: needed for flexibility
const agentsStore: Map<string, any> = new Map();

// Initialize with some sample agents
const sampleAgents = [
  {
    id: "agent_sample_1",
    externalId: "sample_1",
    name: "كاتب المحتوى الذكي",
    description: "إنشاء مقالات ومحتوى تسويقي احترافي بالعربية والإنجليزية",
    category: "creative",
    status: "published",
    capabilities: ["مقالات SEO", "إعلانات", "رسائل بريدية"],
    rating: 4.9,
    usageCount: 12000,
    source: "mubasat",
    createdAt: new Date().toISOString(),
  },
  {
    id: "agent_sample_2",
    externalId: "sample_2",
    name: "مساعد البرمجة",
    description: "كتابة وتصحيح وشرح الأكواد البرمجية بسهولة",
    category: "coding",
    status: "published",
    capabilities: ["كتابة الأكواد", "تصحيح الأخطاء", "شرح مفصل"],
    rating: 4.9,
    usageCount: 5000,
    source: "mubasat",
    createdAt: new Date().toISOString(),
  },
];

for (const agent of sampleAgents) {
  agentsStore.set(agent.id, agent);
}

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
    const limit = Number.parseInt(searchParams.get("limit") || "50");
    const status = searchParams.get("status") || "published";
    
    const agents = Array.from(agentsStore.values())
      .filter(a => status === "all" || a.status === status)
      .slice(0, limit);

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
      { success: false, error: "Failed to fetch agents", agents: [] },
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
    const externalId = body.externalId || body.id;
    if (externalId) {
      const existingAgent = Array.from(agentsStore.values()).find(
        a => a.externalId === externalId
      );

      if (existingAgent) {
        // Update existing agent
        const updated = {
          ...existingAgent,
          name: body.name || existingAgent.name,
          description: body.description || existingAgent.description,
          category: body.category || existingAgent.category,
          capabilities: body.capabilities || existingAgent.capabilities,
          systemPrompt: body.systemPrompt || existingAgent.systemPrompt,
          modelId: body.modelId || existingAgent.modelId,
          status: body.status || existingAgent.status,
          updatedAt: new Date().toISOString(),
        };
        agentsStore.set(existingAgent.id, updated);

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
    const agentId = "agent_" + Date.now() + "_" + Math.random().toString(36).substring(2, 11);
    const agent = {
      id: agentId,
      externalId: externalId || agentId,
      name: body.name,
      description: body.description || "وكيل ذكاء اصطناعي متقدم",
      category: body.category || "assistant",
      capabilities: body.capabilities || [],
      systemPrompt: body.systemPrompt,
      modelId: body.modelId || "gpt-4o",
      status: body.autoPublish ? "published" : "draft",
      rating: 5.0,
      usageCount: 0,
      source: body.source || "nagra-ai",
      price: body.price || 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    agentsStore.set(agentId, agent);

    return NextResponse.json(
      {
        success: true,
        agent,
        action: "created",
        message: "تم إنشاء الوكيل بنجاح",
        marketplaceUrl: "https://mubasat-ai.vercel.app/market",
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
