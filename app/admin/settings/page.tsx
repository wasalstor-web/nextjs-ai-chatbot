import { Suspense } from "react";

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">الإعدادات</h1>
        <p className="text-muted-foreground mt-2">
          إعدادات النظام العامة
        </p>
      </div>
      <Suspense fallback={<div className="flex h-dvh" />}>
        <div className="rounded-lg border p-6">
          <p className="text-muted-foreground">قريباً: صفحة الإعدادات</p>
        </div>
      </Suspense>
    </div>
  );
}

