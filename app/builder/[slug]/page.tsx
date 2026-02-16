/**
 * Builder editor page (server component).
 *
 * Pattern from: puckeditor/puck → recipes/next/app/puck/[...puckPath]/page.tsx
 * Loads page data from PostgreSQL → passes to <EditorClient>.
 */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBuilderPageBySlugAnyStatus } from "@/lib/db/builder-queries";
import { EditorClient } from "./editor-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: `تحرير: ${slug}` };
}

export default async function BuilderEditorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getBuilderPageBySlugAnyStatus({ slug });

  if (!page) {
    return notFound();
  }

  return (
    <EditorClient
      slug={page.slug}
      pageId={page.id}
      data={page.data as Record<string, unknown>}
    />
  );
}

export const dynamic = "force-dynamic";
