import { Suspense } from "react";
import { AgentsManagement } from "@/components/admin/agents-management";

export default function AdminAgentsPage() {
  return (
    <Suspense fallback={<div className="flex h-dvh" />}>
      <AgentsManagement />
    </Suspense>
  );
}

