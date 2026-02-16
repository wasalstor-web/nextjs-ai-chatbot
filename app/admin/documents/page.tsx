import { Suspense } from "react";
import { DocumentsManagement } from "@/components/admin/documents-management";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";

export default function AdminDocumentsPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة المستندات</h1>
        <p className="text-muted-foreground mt-2">
          عرض وإدارة جميع المستندات في النظام
        </p>
      </div>
      <Suspense fallback={<AdminTableSkeleton />}>
        <DocumentsManagement />
      </Suspense>
    </div>
  );
}

