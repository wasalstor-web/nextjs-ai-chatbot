import { Suspense } from "react";

export default function AdminUsersPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة المستخدمين</h1>
        <p className="text-muted-foreground mt-2">
          عرض وإدارة جميع المستخدمين في النظام
        </p>
      </div>
      <Suspense fallback={<div className="flex h-dvh" />}>
        <div className="rounded-lg border p-6">
          <p className="text-muted-foreground">قريباً: صفحة إدارة المستخدمين</p>
        </div>
      </Suspense>
    </div>
  );
}

