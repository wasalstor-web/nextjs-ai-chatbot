"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { User } from "next-auth";
import { AdminSidebar } from "./admin/admin-sidebar";

export function AdminSidebarWrapperClient({
  user,
  defaultOpen,
  children,
}: {
  user: User;
  defaultOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AdminSidebar user={user} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}

