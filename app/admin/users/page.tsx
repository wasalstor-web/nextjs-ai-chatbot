import { Suspense } from "react";
import { UsersManagement } from "@/components/admin/users-management";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";

export default function AdminUsersPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة المستخدمين</h1>
        <p className="text-muted-foreground mt-2">
          عرض وإدارة جميع المستخدمين في النظام
        </p>
      </div>
      <Suspense fallback={<AdminTableSkeleton />}>
        <UsersManagement />
      </Suspense>
    </div>
  );
}

