import { count, desc, eq, like } from "drizzle-orm";
import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";
import { db } from "@/lib/db";
import { user } from "@/lib/db/schema";

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

    const baseCondition = search ? like(user.email, `%${search}%`) : undefined;

    const [totalResult, users] = await Promise.all([
      db.select({ value: count() }).from(user).where(baseCondition),
      db
        .select({
          id: user.id,
          email: user.email,
          role: user.role,
        })
        .from(user)
        .where(baseCondition)
        .orderBy(desc(user.email))
        .limit(limit)
        .offset(offset),
    ]);

    return NextResponse.json({
      success: true,
      users,
      total: totalResult[0]?.value ?? 0,
      page,
      limit,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
