import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { getAllAgents } from "@/lib/db/agents-queries";
import { isAdmin } from "@/lib/auth/admin";

export async function GET() {
  const session = await auth();

  // Check if user is authenticated
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check if user has admin access
  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json(
      { error: "Forbidden: Admin access required" },
      { status: 403 }
    );
  }

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