import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { getAllAgents } from "@/lib/db/agents-queries";

export async function GET() {
  const session = await auth();

  // TODO: Add admin role check
  // if (!session?.user || session.user.role !== "admin") {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }

  try {
    const agents = await getAllAgents({ limit: 1000 });
    return NextResponse.json({ success: true, agents });
  } catch (error) {
    console.error("Error fetching agents:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch agents", agents: [] },
      { status: 500 }
    );
  }
}

