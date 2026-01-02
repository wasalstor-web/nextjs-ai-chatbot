import { auth } from "@/app/(auth)/auth";

/**
 * Check if the current user is an admin
 * For now, we'll use email-based check. In production, you should add a role field to the User table.
 */
export async function isAdmin(): Promise<boolean> {
  const session = await auth();
  
  if (!session?.user) {
    return false;
  }

  // TODO: Replace with proper role-based check after adding role field to User table
  // For now, check if email matches admin emails (you can configure this via env variable)
  const adminEmails = process.env.ADMIN_EMAILS?.split(",").map((e) => e.trim()) || [];
  
  if (session.user.email && adminEmails.includes(session.user.email)) {
    return true;
  }

  // Fallback: Check if user type is regular (for now, only regular users can be admins)
  // This is a temporary solution until role field is added
  return session.user.type === "regular";
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

