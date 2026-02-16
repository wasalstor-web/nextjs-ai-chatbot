import { Suspense } from "react";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";
import { DocumentsManagement } from "@/components/admin/documents-management";

export default function AdminDocumentsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="font-bold text-3xl">إدارة المستندات</h1>
        <p className="mt-2 text-muted-foreground">
          عرض وإدارة جميع المستندات في النظام
        </p>
      </div>
      <Suspense fallback={<AdminTableSkeleton />}>
        <DocumentsManagement />
      </Suspense>
    </div>
  );
}
