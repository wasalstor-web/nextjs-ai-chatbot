"use client";

import { useEffect, useState } from "react";
import { MarketplaceClientStandalone } from "./marketplace-client";

export default function MarketplacePage() {
  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await fetch("https://mubasat-api.vercel.app/api/agents?marketplace=true");
        const data = await res.json();
        if (data.success) {
          setAgents(data.agents);
        }
      } catch (error) {
        console.error("Failed to load agents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-zinc-400">جاري التحميل...</div>
      </div>
    );
  }

  return <MarketplaceClientStandalone initialAgents={agents} />;
}
