import { Suspense } from "react";

export default function AdminFilesPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة الملفات</h1>
        <p className="text-muted-foreground mt-2">
          عرض وإدارة جميع الملفات المرفوعة في النظام
        </p>
      </div>
      <Suspense fallback={<div className="flex h-dvh" />}>
        <div className="rounded-lg border p-6">
          <p className="text-muted-foreground">قريباً: صفحة إدارة الملفات</p>
        </div>
      </Suspense>
    </div>
  );
}

