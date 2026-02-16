import { Suspense } from "react";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";
import { UsersManagement } from "@/components/admin/users-management";

export default function AdminUsersPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="font-bold text-3xl">إدارة المستخدمين</h1>
        <p className="mt-2 text-muted-foreground">
          عرض وإدارة جميع المستخدمين في النظام
        </p>
      </div>
      <Suspense fallback={<AdminTableSkeleton />}>
        <UsersManagement />
      </Suspense>
    </div>
  );
}
