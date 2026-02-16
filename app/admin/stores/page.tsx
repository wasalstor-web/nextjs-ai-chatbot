import { Suspense } from "react";
import { StoresManagement } from "@/components/admin/stores-management";

export default function AdminStoresPage() {
  return (
    <Suspense fallback={<div className="flex h-dvh" />}>
      <StoresManagement />
    </Suspense>
  );
}
