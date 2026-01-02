import { Suspense } from "react";
import { DashboardOverview } from "@/components/admin/dashboard-overview";
import { Loader } from "@/components/elements/loader";

export default function AdminPage() {
  return (
    <Suspense fallback={
      <div className="flex h-dvh flex-col items-center justify-center gap-4">
        <Loader size={32} />
        <p className="text-sm text-muted-foreground">جاري التحميل...</p>
      </div>
    }>
      <DashboardOverview />
    </Suspense>
  );
}

