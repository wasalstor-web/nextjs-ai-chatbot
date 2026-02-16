import type { InferSelectModel } from "drizzle-orm";
import {
  boolean,
  integer,
  json,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./schema";

// ─── Enums ───────────────────────────────────────────────
export const pageStatusEnum = pgEnum("page_status", [
  "draft",
  "published",
  "archived",
]);

// ─── Builder Page ────────────────────────────────────────
export const builderPage = pgTable("BuilderPage", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  title: varchar("title", { length: 256 }).notNull(),
  slug: varchar("slug", { length: 256 }).notNull().unique(),
  description: text("description"),
  status: pageStatusEnum("status").notNull().default("draft"),
  data: json("data")
    .$type<Record<string, unknown>>()
    .notNull()
    .default({}),
  seo: json("seo")
    .$type<{
      title?: string;
      description?: string;
      ogImage?: string;
      keywords?: string[];
    }>()
    .default({}),
  thumbnail: text("thumbnail"),
  template: varchar("template", { length: 64 }),
  sortOrder: integer("sortOrder").default(0),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  publishedAt: timestamp("publishedAt"),
  creatorId: uuid("creatorId").references(() => user.id),
});

export type BuilderPage = InferSelectModel<typeof builderPage>;

// ─── Builder Asset ───────────────────────────────────────
export const builderAsset = pgTable("BuilderAsset", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: varchar("name", { length: 256 }).notNull(),
  url: text("url").notNull(),
  type: varchar("type", { length: 32 }).notNull(), // image, video, document
  size: integer("size").default(0),
  mimeType: varchar("mimeType", { length: 128 }),
  pageId: uuid("pageId").references(() => builderPage.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  creatorId: uuid("creatorId").references(() => user.id),
});

export type BuilderAsset = InferSelectModel<typeof builderAsset>;

// ─── Builder Snapshot ────────────────────────────────────
export const builderSnapshot = pgTable("BuilderSnapshot", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  pageId: uuid("pageId")
    .notNull()
    .references(() => builderPage.id, { onDelete: "cascade" }),
  label: varchar("label", { length: 256 }),
  data: json("data").$type<Record<string, unknown>>().notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  creatorId: uuid("creatorId").references(() => user.id),
});

export type BuilderSnapshot = InferSelectModel<typeof builderSnapshot>;
