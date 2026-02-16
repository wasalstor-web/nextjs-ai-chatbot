import { type NextRequest, NextResponse } from "next/server";
import {
  deleteAgent,
  getAgentById,
  incrementAgentUsage,
  updateAgent,
  updateAgentStatus,
} from "@/lib/db/agents-queries";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-API-Key",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

// GET - Get single agent
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const agent = await getAgentById({ id });

    if (!agent) {
      return NextResponse.json(
        { success: false, error: "Agent not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    // Increment usage count when agent is accessed
    await incrementAgentUsage({ id });

    return NextResponse.json(
      { success: true, agent },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error fetching agent:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch agent" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// PUT - Update agent
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const existing = await getAgentById({ id });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Agent not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    const updated = await updateAgent({
      id,
      name: body.name,
      description: body.description,
      category: body.category,
      capabilities: body.capabilities,
      systemPrompt: body.systemPrompt,
      modelId: body.modelId,
      apiEndpoint: body.apiEndpoint,
      iconUrl: body.iconUrl,
      price: body.price,
    });

    return NextResponse.json(
      {
        success: true,
        agent: updated,
        message: "تم تحديث الوكيل بنجاح",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error updating agent:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update agent" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// PATCH - Update agent status (publish/unpublish)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!body.status) {
      return NextResponse.json(
        { success: false, error: "Status is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const updated = await updateAgentStatus({
      id,
      status: body.status,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Agent not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    const statusMessages: Record<string, string> = {
      published: "تم نشر الوكيل في السوق بنجاح! 🎉",
      draft: "تم إرجاع الوكيل للمسودة",
      active: "تم تفعيل الوكيل",
      suspended: "تم إيقاف الوكيل مؤقتاً",
    };

    return NextResponse.json(
      {
        success: true,
        agent: updated,
        message: statusMessages[body.status] || "تم تحديث الحالة",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error updating agent status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update agent status" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// DELETE - Delete agent
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const deleted = await deleteAgent({ id });

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Agent not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "تم حذف الوكيل بنجاح",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error deleting agent:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete agent" },
      { status: 500, headers: corsHeaders }
    );
  }
}
