import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";
import { createBuilderAsset, getBuilderAssets } from "@/lib/db/builder-queries";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const assets = await getBuilderAssets();
  return NextResponse.json(assets);
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

  const formData = (await request.formData()) as unknown as globalThis.FormData;
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  try {
    // Upload to Vercel Blob
    const blob = await put(`builder/${file.name}`, file, {
      access: "public",
    });

    // Save metadata to DB
    const asset = await createBuilderAsset({
      name: file.name,
      url: blob.url,
      type: file.type.startsWith("image/")
        ? "image"
        : file.type.startsWith("video/")
          ? "video"
          : "document",
      size: file.size,
      mimeType: file.type,
      creatorId: session.user.id,
    });

    return NextResponse.json(asset, { status: 201 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to upload asset";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
