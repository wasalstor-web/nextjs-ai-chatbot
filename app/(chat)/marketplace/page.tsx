import { MarketplaceClient } from "./marketplace-client";

export default async function MarketplacePage() {
  let agents: any[] = [];

  try {
    // Fetch from external API instead of database
    const res = await fetch("https://mubasat-api.vercel.app/api/agents?marketplace=true", {
      cache: "no-store"
    });
    const data = await res.json();
    if (data.success) {
      agents = data.agents;
    }
  } catch (error) {
    console.error("Failed to load agents:", error);
  }

  return <MarketplaceClient initialAgents={agents} />;
}
