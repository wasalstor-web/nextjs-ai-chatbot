import { Suspense } from "react";
import { Loader } from "@/components/elements/loader";

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">الإعدادات</h1>
        <p className="text-muted-foreground mt-2">
          إعدادات النظام العامة
        </p>
      </div>
      <Suspense fallback={
        <div className="flex h-64 flex-col items-center justify-center gap-4">
          <Loader size={32} />
          <p className="text-sm text-muted-foreground">جاري التحميل...</p>
        </div>
      }>
        <div className="rounded-lg border p-6">
          <p className="text-muted-foreground">قريباً: صفحة الإعدادات</p>
        </div>
      </Suspense>
    </div>
  );
}

