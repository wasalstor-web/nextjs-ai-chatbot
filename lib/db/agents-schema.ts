import type { InferSelectModel } from "drizzle-orm";
import {
  boolean,
  integer,
  json,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./schema";

export const agent = pgTable("Agent", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  externalId: varchar("externalId", { length: 128 }), // ID from external system (Nagra AI)
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  category: varchar("category", { length: 64 }).default("assistant"),
  status: varchar("status", { enum: ["draft", "published", "active", "suspended"] })
    .notNull()
    .default("draft"),
  capabilities: json("capabilities").$type<string[]>().default([]),
  systemPrompt: text("systemPrompt"),
  modelId: varchar("modelId", { length: 64 }).default("gpt-4o"),
  apiEndpoint: text("apiEndpoint"),
  iconUrl: text("iconUrl"),
  usageCount: integer("usageCount").default(0),
  rating: real("rating").default(5.0),
  isPublic: boolean("isPublic").default(true),
  price: real("price").default(0),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  creatorId: uuid("creatorId").references(() => user.id),
  source: varchar("source", { length: 64 }).default("mubasat"), // mubasat, nagra-ai, api
});

export type Agent = InferSelectModel<typeof agent>;

// Agent analytics/metrics
export const agentUsage = pgTable("AgentUsage", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  agentId: uuid("agentId")
    .notNull()
    .references(() => agent.id),
  userId: uuid("userId").references(() => user.id),
  sessionId: varchar("sessionId", { length: 128 }),
  messageCount: integer("messageCount").default(0),
  tokensUsed: integer("tokensUsed").default(0),
  duration: integer("duration").default(0), // in seconds
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export type AgentUsage = InferSelectModel<typeof agentUsage>;
