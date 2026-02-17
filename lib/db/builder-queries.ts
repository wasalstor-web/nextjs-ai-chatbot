import "server-only";

import { and, desc, eq } from "drizzle-orm";
import {
  type BuilderAsset,
  type BuilderPage,
  type BuilderSnapshot,
  builderAsset,
  builderPage,
  builderSnapshot,
} from "./builder-schema";
import { db } from "./index";

// ─── Pages ───────────────────────────────────────────────

export async function getBuilderPages({
  limit = 100,
}: {
  limit?: number;
} = {}) {
  return db
    .select()
    .from(builderPage)
    .orderBy(desc(builderPage.updatedAt))
    .limit(limit);
}

export async function getBuilderPageById({ id }: { id: string }) {
  const [result] = await db
    .select()
    .from(builderPage)
    .where(eq(builderPage.id, id));
  return result ?? null;
}

export async function getBuilderPageBySlug({ slug }: { slug: string }) {
  const [result] = await db
    .select()
    .from(builderPage)
    .where(
      and(eq(builderPage.slug, slug), eq(builderPage.status, "published"))
    );
  return result ?? null;
}

export async function getBuilderPageBySlugAnyStatus({
  slug,
}: {
  slug: string;
}) {
  const [result] = await db
    .select()
    .from(builderPage)
    .where(eq(builderPage.slug, slug));
  return result ?? null;
}

export async function createBuilderPage({
  title,
  slug,
  description,
  template,
  creatorId,
}: Pick<BuilderPage, "title" | "slug"> &
  Partial<Pick<BuilderPage, "description" | "template" | "creatorId">>) {
  const [result] = await db
    .insert(builderPage)
    .values({ title, slug, description, template, creatorId })
    .returning();
  return result;
}

export async function updateBuilderPage({
  id,
  ...values
}: { id: string } & Partial<
  Pick<
    BuilderPage,
    | "title"
    | "slug"
    | "description"
    | "status"
    | "data"
    | "seo"
    | "thumbnail"
    | "template"
    | "sortOrder"
  >
>) {
  const [result] = await db
    .update(builderPage)
    .set({ ...values, updatedAt: new Date() })
    .where(eq(builderPage.id, id))
    .returning();
  return result;
}

export async function publishBuilderPage({
  slug,
  data,
}: {
  slug: string;
  data: Record<string, unknown>;
}) {
  const [result] = await db
    .update(builderPage)
    .set({
      data,
      status: "published",
      publishedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(builderPage.slug, slug))
    .returning();
  return result;
}

export async function deleteBuilderPage({ id }: { id: string }) {
  await db.delete(builderPage).where(eq(builderPage.id, id));
}

// ─── Assets ──────────────────────────────────────────────

export async function getBuilderAssets({
  limit = 100,
}: {
  limit?: number;
} = {}) {
  return db
    .select()
    .from(builderAsset)
    .orderBy(desc(builderAsset.createdAt))
    .limit(limit);
}

export async function createBuilderAsset({
  name,
  url,
  type,
  size,
  mimeType,
  pageId,
  creatorId,
}: Pick<BuilderAsset, "name" | "url" | "type"> &
  Partial<Pick<BuilderAsset, "size" | "mimeType" | "pageId" | "creatorId">>) {
  const [result] = await db
    .insert(builderAsset)
    .values({ name, url, type, size, mimeType, pageId, creatorId })
    .returning();
  return result;
}

export async function deleteBuilderAsset({ id }: { id: string }) {
  await db.delete(builderAsset).where(eq(builderAsset.id, id));
}

// ─── Snapshots ───────────────────────────────────────────

export async function getBuilderSnapshots({
  pageId,
  limit = 20,
}: {
  pageId: string;
  limit?: number;
}) {
  return db
    .select()
    .from(builderSnapshot)
    .where(eq(builderSnapshot.pageId, pageId))
    .orderBy(desc(builderSnapshot.createdAt))
    .limit(limit);
}

export async function createBuilderSnapshot({
  pageId,
  label,
  data,
  creatorId,
}: Pick<BuilderSnapshot, "pageId" | "data"> &
  Partial<Pick<BuilderSnapshot, "label" | "creatorId">>) {
  const [result] = await db
    .insert(builderSnapshot)
    .values({ pageId, label, data, creatorId })
    .returning();
  return result;
}

export async function restoreBuilderSnapshot({
  snapshotId,
}: {
  snapshotId: string;
}) {
  const [snapshot] = await db
    .select()
    .from(builderSnapshot)
    .where(eq(builderSnapshot.id, snapshotId));

  if (!snapshot) return null;

  const [result] = await db
    .update(builderPage)
    .set({ data: snapshot.data, updatedAt: new Date() })
    .where(eq(builderPage.id, snapshot.pageId))
    .returning();
  return result;
}
