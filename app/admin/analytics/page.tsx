import { Suspense } from "react";

export default function AdminAnalyticsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">الإحصائيات والتحليلات</h1>
        <p className="text-muted-foreground mt-2">
          عرض الإحصائيات والتحليلات التفصيلية للنظام
        </p>
      </div>
      <Suspense fallback={<div className="flex h-dvh" />}>
        <div className="rounded-lg border p-6">
          <p className="text-muted-foreground">قريباً: صفحة الإحصائيات والتحليلات</p>
        </div>
      </Suspense>
    </div>
  );
}

