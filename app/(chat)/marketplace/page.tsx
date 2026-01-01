import { getPublishedAgents } from "@/lib/db/agents-queries";
import { MarketplaceClient } from "./marketplace-client";

export default async function MarketplacePage() {
  let agents: any[] = [];

  try {
    agents = await getPublishedAgents({ limit: 50 });
  } catch (error) {
    console.error("Failed to load agents:", error);
  }

  return <MarketplaceClient initialAgents={agents} />;
}
