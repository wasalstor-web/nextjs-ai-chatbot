import type { Data } from "@puckeditor/core";

export type PageStatus = "draft" | "published" | "archived";

export interface BuilderPageMeta {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  status: PageStatus;
  thumbnail: string | null;
  template: string | null;
  sortOrder: number | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  creatorId: string | null;
}

export interface BuilderPageData extends BuilderPageMeta {
  data: Partial<Data>;
  seo: {
    title?: string;
    description?: string;
    ogImage?: string;
    keywords?: string[];
  } | null;
}

export interface BuilderAssetMeta {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number | null;
  mimeType: string | null;
  pageId: string | null;
  createdAt: Date;
  creatorId: string | null;
}

export interface BuilderSnapshotMeta {
  id: string;
  pageId: string;
  label: string | null;
  createdAt: Date;
  creatorId: string | null;
}
