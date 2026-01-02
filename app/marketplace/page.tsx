import { MarketplaceClientStandalone } from "./marketplace-client";

export const dynamic = "force-dynamic";

export default async function MarketplacePage() {
  let agents: any[] = [];

  try {
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

  return <MarketplaceClientStandalone initialAgents={agents} />;
}
