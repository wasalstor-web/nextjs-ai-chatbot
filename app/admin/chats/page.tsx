import { Suspense } from "react";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";
import { ChatsManagement } from "@/components/admin/chats-management";

export default function AdminChatsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="font-bold text-3xl">إدارة المحادثات</h1>
        <p className="mt-2 text-muted-foreground">
          عرض وإدارة جميع المحادثات في النظام
        </p>
      </div>
      <Suspense fallback={<AdminTableSkeleton />}>
        <ChatsManagement />
      </Suspense>
    </div>
  );
}
