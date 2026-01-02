import { NextRequest, NextResponse } from "next/server";

// In-memory storage for agents
const agentsStore: Map<string, any> = new Map();

// Sample agents
const sampleAgents = [
  {
    id: "agent_sample_1",
    name: "كاتب المحتوى الذكي",
    description: "إنشاء مقالات ومحتوى تسويقي احترافي",
    category: "creative",
    status: "published",
    capabilities: ["مقالات", "إعلانات"],
    rating: 4.9,
    usageCount: 12000,
    source: "mubasat",
  },
  {
    id: "agent_sample_2",
    name: "مساعد البرمجة",
    description: "كتابة وتصحيح الأكواد",
    category: "coding",
    status: "published",
    capabilities: ["كتابة الأكواد", "تصحيح"],
    rating: 4.9,
    usageCount: 5000,
    source: "mubasat",
  },
];

for (const agent of sampleAgents) {
  agentsStore.set(agent.id, agent);
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function GET() {
  const agents = Array.from(agentsStore.values()).filter(a => a.status === "published");
  return NextResponse.json({ success: true, agents, count: agents.length }, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.name) {
      return NextResponse.json({ success: false, error: "Name required" }, { status: 400, headers: corsHeaders });
    }
    
    const agentId = "agent_" + Date.now();
    const agent = {
      id: agentId,
      name: body.name,
      description: body.description || "",
      category: body.category || "assistant",
      status: body.autoPublish ? "published" : "draft",
      capabilities: body.capabilities || [],
      rating: 5.0,
      usageCount: 0,
      source: body.source || "nagra-ai",
    };
    
    agentsStore.set(agentId, agent);
    return NextResponse.json({ success: true, agent }, { status: 201, headers: corsHeaders });
  } catch {
    return NextResponse.json({ success: false, error: "Error" }, { status: 500, headers: corsHeaders });
  }
}
