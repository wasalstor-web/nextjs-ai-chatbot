import { getPublishedAgents } from "@/lib/db/agents-queries";
import { MarketplaceClient } from "./marketplace-client";

export const dynamic = "force-dynamic";

export default async function MarketplacePage() {
  let agents: any[] = [];
  
  try {
    agents = await getPublishedAgents({ limit: 50 });
  } catch (error) {
    console.error("Failed to load agents:", error);
    // Will show empty state
  }

  return <MarketplaceClient initialAgents={agents} />;
}
