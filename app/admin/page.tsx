import { Suspense } from "react";
import { DashboardOverview } from "@/components/admin/dashboard-overview";

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="flex h-dvh" />}>
      <DashboardOverview />
    </Suspense>
  );
}

