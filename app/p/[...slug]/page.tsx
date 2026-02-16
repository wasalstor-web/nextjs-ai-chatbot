/**
 * Public page render route (SSR + ISR).
 *
 * Pattern from: puckeditor/puck → recipes/next/app/[...puckPath]/page.tsx
 * Adapted: PostgreSQL via getBuilderPageBySlug, ISR via revalidatePath on publish.
 */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBuilderPageBySlug } from "@/lib/db/builder-queries";
import { RenderClient } from "./render-client";
import type { Data } from "@puckeditor/core";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const page = await getBuilderPageBySlug({ slug: path });

  if (!page) return { title: "صفحة غير موجودة" };

  const seo = page.seo as {
    title?: string;
    description?: string;
    ogImage?: string;
  } | null;

  return {
    title: seo?.title || page.title,
    description: seo?.description || page.description || undefined,
    openGraph: seo?.ogImage ? { images: [seo.ogImage] } : undefined,
  };
}

export default async function PublicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const page = await getBuilderPageBySlug({ slug: path });

  if (!page) {
    return notFound();
  }

  return <RenderClient data={page.data as Data} />;
}
