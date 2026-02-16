import { Suspense } from "react";
import { ChatsManagement } from "@/components/admin/chats-management";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";

export default function AdminChatsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة المحادثات</h1>
        <p className="text-muted-foreground mt-2">
          عرض وإدارة جميع المحادثات في النظام
        </p>
      </div>
      <Suspense fallback={<AdminTableSkeleton />}>
        <ChatsManagement />
      </Suspense>
    </div>
  );
}

