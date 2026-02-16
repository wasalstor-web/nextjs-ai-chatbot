import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";
import {
  createBuilderPage,
  getBuilderPageBySlugAnyStatus,
  getBuilderPages,
} from "@/lib/db/builder-queries";
import { isValidSlug } from "@/lib/builder/utils";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const pages = await getBuilderPages();
  return NextResponse.json(pages);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const { title, slug, description, template } = body;

  if (!title || !slug) {
    return NextResponse.json(
      { error: "title and slug are required" },
      { status: 400 }
    );
  }

  if (!isValidSlug(slug)) {
    return NextResponse.json(
      { error: "الرابط غير صالح — حروف إنجليزية صغيرة وأرقام وشرطات فقط" },
      { status: 400 }
    );
  }

  // Check for duplicate slug
  const existing = await getBuilderPageBySlugAnyStatus({ slug });
  if (existing) {
    return NextResponse.json(
      { error: "هذا الرابط مستخدم بالفعل — اختر رابطاً آخر" },
      { status: 409 }
    );
  }

  try {
    const page = await createBuilderPage({
      title,
      slug,
      description,
      template,
      creatorId: session.user.id,
    });
    return NextResponse.json(page, { status: 201 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to create page";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
