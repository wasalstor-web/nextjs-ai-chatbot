"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { User } from "next-auth";
import { AppSidebar } from "./app-sidebar";

export function SidebarWrapperClient({
  user,
  defaultOpen,
  children,
}: {
  user: User | undefined;
  defaultOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar user={user} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}

