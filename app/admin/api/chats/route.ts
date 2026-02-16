import { NextResponse } from "next/server";

import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";
import { drizzle } from "drizzle-orm/postgres-js";
import { count, desc, eq, like } from "drizzle-orm";
import postgres from "postgres";
import { chat, user } from "@/lib/db/schema";

const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client);

export async function GET(request: Request): Promise<NextResponse> {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get("page") || "1", 10);
    const limit = Number.parseInt(searchParams.get("limit") || "20", 10);
    const search = searchParams.get("q") || "";
    const offset = (page - 1) * limit;

    const baseCondition = search
      ? like(chat.title, `%${search}%`)
      : undefined;

    const [totalResult, chats] = await Promise.all([
      db
        .select({ value: count() })
        .from(chat)
        .where(baseCondition),
      db
        .select({
          id: chat.id,
          title: chat.title,
          createdAt: chat.createdAt,
          visibility: chat.visibility,
          userId: chat.userId,
        })
        .from(chat)
        .where(baseCondition)
        .orderBy(desc(chat.createdAt))
        .limit(limit)
        .offset(offset),
    ]);

    return NextResponse.json({
      success: true,
      chats,
      total: totalResult[0]?.value ?? 0,
      page,
      limit,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch chats" },
      { status: 500 },
    );
  }
}
