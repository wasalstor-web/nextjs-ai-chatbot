import { Suspense } from "react";
import { AgentsManagement } from "@/components/admin/agents-management";
import { Loader } from "@/components/elements/loader";

export default function AdminAgentsPage() {
  return (
    <Suspense fallback={
      <div className="flex h-dvh flex-col items-center justify-center gap-4">
        <Loader size={32} />
        <p className="text-sm text-muted-foreground">جاري التحميل...</p>
      </div>
    }>
      <AgentsManagement />
    </Suspense>
  );
}

