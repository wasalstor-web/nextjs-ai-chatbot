import { eq } from "drizzle-orm";
import { auth } from "@/app/(auth)/auth";
import { db } from "@/lib/db";
import { user } from "@/lib/db/schema";

/**
 * Check if the current user is an admin using DB role field
 */
export async function isAdmin(): Promise<boolean> {
  const session = await auth();

  if (!session?.user?.id) {
    return false;
  }

  // Check admin emails from env (fast path)
  const adminEmails =
    process.env.ADMIN_EMAILS?.split(",").map((e) => e.trim()) || [];
  if (session.user.email && adminEmails.includes(session.user.email)) {
    return true;
  }

  // Check role in DB
  try {
    const [dbUser] = await db
      .select({ role: user.role })
      .from(user)
      .where(eq(user.id, session.user.id));

    return dbUser?.role === "admin" || dbUser?.role === "super_admin";
  } catch {
    return false;
  }
}

/**
 * Require admin access - throws error if user is not admin
 */
export async function requireAdmin() {
  const isUserAdmin = await isAdmin();

  if (!isUserAdmin) {
    throw new Error("Unauthorized: Admin access required");
  }
}
