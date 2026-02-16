import { Suspense } from "react";
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard";

export default function AdminAnalyticsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">الإحصائيات والتحليلات</h1>
        <p className="text-muted-foreground mt-2">
          عرض الإحصائيات والتحليلات التفصيلية للنظام
        </p>
      </div>
      <Suspense
        fallback={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`analytics-fallback-${i}`}
                className="h-24 animate-pulse rounded-lg border bg-muted/40"
              />
            ))}
          </div>
        }
      >
        <AnalyticsDashboard />
      </Suspense>
    </div>
  );
}

