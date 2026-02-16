import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";
import { drizzle } from "drizzle-orm/postgres-js";
import { count, gte, sql } from "drizzle-orm";
import postgres from "postgres";
import { user, chat, message, document } from "@/lib/db/schema";
import { agent } from "@/lib/db/agents-schema";

const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client);

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Run all counts in parallel
    const [
      totalUsersResult,
      totalChatsResult,
      totalMessagesResult,
      totalAgentsResult,
      totalDocumentsResult,
      recentUsersResult,
      recentChatsResult,
    ] = await Promise.all([
      db.select({ value: count() }).from(user),
      db.select({ value: count() }).from(chat),
      db.select({ value: count() }).from(message),
      db.select({ value: count() }).from(agent).catch(() => [{ value: 0 }]),
      db.select({ value: count() }).from(document).catch(() => [{ value: 0 }]),
      db.select({ value: count() }).from(chat).where(gte(chat.createdAt, sevenDaysAgo)),
      db.select({ value: count() }).from(chat).where(gte(chat.createdAt, thirtyDaysAgo)),
    ]);

    const totalUsers = totalUsersResult[0]?.value ?? 0;
    const totalChats = totalChatsResult[0]?.value ?? 0;
    const totalMessages = totalMessagesResult[0]?.value ?? 0;
    const totalAgents = totalAgentsResult[0]?.value ?? 0;
    const totalDocuments = totalDocumentsResult[0]?.value ?? 0;
    const activeUsers = recentUsersResult[0]?.value ?? 0;
    const recentChats = recentChatsResult[0]?.value ?? 0;

    // Growth rate = (recent / total) * 100
    const growthRate = totalChats > 0
      ? Math.round((recentChats / totalChats) * 100 * 10) / 10
      : 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers,
        totalChats,
        totalMessages,
        totalAgents,
        totalDocuments,
        totalFiles: 0,
        activeUsers,
        growthRate,
      },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch stats" },
      { status: 500 },
    );
  }
}
