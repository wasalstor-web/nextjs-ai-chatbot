/**
 * Publish API route.
 *
 * Pattern from: puckeditor/puck → recipes/next/app/puck/api/route.ts
 * Adapted: PostgreSQL instead of fs, revalidatePath for ISR.
 */
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";
import { publishBuilderPage } from "@/lib/db/builder-queries";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { data, slug } = await request.json();

  if (!data || !slug) {
    return NextResponse.json(
      { error: "data and slug are required" },
      { status: 400 }
    );
  }

  try {
    const page = await publishBuilderPage({ slug, data });

    // Purge Next.js cache for the public page (ISR)
    revalidatePath(`/p/${slug}`);

    return NextResponse.json({ status: "ok", page });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to publish page";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
