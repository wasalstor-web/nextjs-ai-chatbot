import "server-only";

import { and, desc, eq } from "drizzle-orm";
import { type Agent, agent, agentUsage } from "./agents-schema";
import { db } from "./index";

// Get all published agents for marketplace
export async function getPublishedAgents({
  limit = 50,
}: {
  limit?: number;
} = {}) {
  return db
    .select()
    .from(agent)
    .where(eq(agent.status, "published"))
    .orderBy(desc(agent.createdAt))
    .limit(limit);
}

// Get all agents (admin)
export async function getAllAgents({ limit = 100 }: { limit?: number } = {}) {
  return db.select().from(agent).orderBy(desc(agent.createdAt)).limit(limit);
}

// Get agent by ID
export async function getAgentById({ id }: { id: string }) {
  const [result] = await db.select().from(agent).where(eq(agent.id, id));
  return result;
}

// Get agent by external ID (from Nagra AI)
export async function getAgentByExternalId({
  externalId,
}: {
  externalId: string;
}) {
  const [result] = await db
    .select()
    .from(agent)
    .where(eq(agent.externalId, externalId));
  return result;
}

// Create agent
export async function createAgent({
  id,
  externalId,
  name,
  description,
  category,
  status,
  capabilities,
  systemPrompt,
  modelId,
  apiEndpoint,
  iconUrl,
  creatorId,
  source,
  price,
}: Partial<Agent> & { name: string }) {
  const [result] = await db
    .insert(agent)
    .values({
      id,
      externalId,
      name,
      description: description || "وكيل ذكاء اصطناعي متقدم",
      category: category || "assistant",
      status: status || "draft",
      capabilities: capabilities || [],
      systemPrompt,
      modelId: modelId || "gpt-4o",
      apiEndpoint,
      iconUrl,
      creatorId,
      source: source || "mubasat",
      price: price || 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();
  return result;
}

// Update agent
export async function updateAgent({
  id,
  ...data
}: Partial<Agent> & { id: string }) {
  const [result] = await db
    .update(agent)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(agent.id, id))
    .returning();
  return result;
}

// Update agent status (publish/unpublish)
export async function updateAgentStatus({
  id,
  status,
}: {
  id: string;
  status: "draft" | "published" | "active" | "suspended";
}) {
  const [result] = await db
    .update(agent)
    .set({
      status,
      updatedAt: new Date(),
    })
    .where(eq(agent.id, id))
    .returning();
  return result;
}

// Delete agent
export async function deleteAgent({ id }: { id: string }) {
  // First delete usage records
  await db.delete(agentUsage).where(eq(agentUsage.agentId, id));
  // Then delete agent
  const [result] = await db.delete(agent).where(eq(agent.id, id)).returning();
  return result;
}

// Increment usage count
export async function incrementAgentUsage({ id }: { id: string }) {
  const existing = await getAgentById({ id });
  if (!existing) return null;

  const [result] = await db
    .update(agent)
    .set({
      usageCount: (existing.usageCount || 0) + 1,
      updatedAt: new Date(),
    })
    .where(eq(agent.id, id))
    .returning();
  return result;
}

// Record agent usage session
export async function recordAgentUsage({
  agentId,
  userId,
  sessionId,
  messageCount,
  tokensUsed,
  duration,
}: {
  agentId: string;
  userId?: string;
  sessionId?: string;
  messageCount?: number;
  tokensUsed?: number;
  duration?: number;
}) {
  const [result] = await db
    .insert(agentUsage)
    .values({
      agentId,
      userId,
      sessionId,
      messageCount: messageCount || 0,
      tokensUsed: tokensUsed || 0,
      duration: duration || 0,
      createdAt: new Date(),
    })
    .returning();

  // Also increment the agent's usage count
  await incrementAgentUsage({ id: agentId });

  return result;
}

// Get agents by creator
export async function getAgentsByCreator({ creatorId }: { creatorId: string }) {
  return db
    .select()
    .from(agent)
    .where(eq(agent.creatorId, creatorId))
    .orderBy(desc(agent.createdAt));
}

// Search agents
export async function searchAgents({
  query,
  category,
  limit = 20,
}: {
  query?: string;
  category?: string;
  limit?: number;
}) {
  const conditions = [eq(agent.status, "published")];

  if (category && category !== "all") {
    conditions.push(eq(agent.category, category));
  }

  return db
    .select()
    .from(agent)
    .where(and(...conditions))
    .orderBy(desc(agent.usageCount))
    .limit(limit);
}
