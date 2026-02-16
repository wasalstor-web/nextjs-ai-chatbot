import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";
import {
  createBuilderSnapshot,
  getBuilderSnapshots,
  restoreBuilderSnapshot,
} from "@/lib/db/builder-queries";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return NextResponse.json({ error: "pageId is required" }, { status: 400 });
  }

  const snapshots = await getBuilderSnapshots({ pageId });
  return NextResponse.json(snapshots);
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
  const { pageId, label, data } = body;

  if (!pageId || !data) {
    return NextResponse.json(
      { error: "pageId and data are required" },
      { status: 400 }
    );
  }

  try {
    const snapshot = await createBuilderSnapshot({
      pageId,
      label,
      data,
      creatorId: session.user.id,
    });
    return NextResponse.json(snapshot, { status: 201 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to create snapshot";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const { snapshotId } = body;

  if (!snapshotId) {
    return NextResponse.json(
      { error: "snapshotId is required" },
      { status: 400 }
    );
  }

  try {
    const page = await restoreBuilderSnapshot({ snapshotId });

    if (!page) {
      return NextResponse.json(
        { error: "Snapshot not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(page);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to restore snapshot";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
