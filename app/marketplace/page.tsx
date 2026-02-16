"use client";

import { useEffect, useState } from "react";
import { MarketplaceClientStandalone } from "./marketplace-client";

interface MarketplaceAgent {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  status: string;
  capabilities: string[] | null;
  usageCount: number | null;
  rating: number | null;
  createdAt: string;
  source: string | null;
}

export default function MarketplacePage() {
  const [agents, setAgents] = useState<MarketplaceAgent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await fetch("/api/marketplace/agents");
        const data = await res.json();
        if (data.success) {
          setAgents(data.agents);
        }
      } catch {
        // Silent fail — empty state shown
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="h-4 w-32 rounded bg-muted" />
        </div>
      </div>
    );
  }

  return <MarketplaceClientStandalone initialAgents={agents} />;
}
