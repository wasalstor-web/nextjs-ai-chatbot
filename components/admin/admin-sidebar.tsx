"use client";

import {
  BarChart3,
  Bot,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  Shield,
  ShoppingBag,
  Upload,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { User } from "next-auth";
import { SidebarUserNav } from "@/components/sidebar-user-nav";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "لوحة التحكم",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "المتاجر",
    icon: ShoppingBag,
    href: "/admin/stores",
  },
  {
    title: "الوكلاء",
    icon: Bot,
    href: "/admin/agents",
  },
  {
    title: "المستخدمون",
    icon: Users,
    href: "/admin/users",
  },
  {
    title: "المحادثات",
    icon: MessageSquare,
    href: "/admin/chats",
  },
  {
    title: "المستندات",
    icon: FileText,
    href: "/admin/documents",
  },
  {
    title: "الملفات",
    icon: Upload,
    href: "/admin/files",
  },
  {
    title: "الإحصائيات",
    icon: BarChart3,
    href: "/admin/analytics",
  },
  {
    title: "الإعدادات",
    icon: Settings,
    href: "/admin/settings",
  },
  {
    title: "الأمان",
    icon: Shield,
    href: "/admin/security",
  },
  {
    title: "السوق",
    icon: Package,
    href: "/marketplace",
  },
];

export function AdminSidebar({ user }: { user: User | undefined }) {
  const pathname = usePathname();

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row items-center justify-between">
            <Link className="flex flex-row items-center gap-3" href="/admin">
              <span className="cursor-pointer rounded-md px-2 font-semibold text-lg hover:bg-muted">
                لوحة الإدارة
              </span>
            </Link>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  pathname?.startsWith(`${item.href}/`);
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "w-full justify-start",
                        isActive &&
                          "bg-sidebar-accent text-sidebar-accent-foreground"
                      )}
                      isActive={isActive}
                    >
                      <Link href={item.href}>
                        <Icon className="ml-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>{user && <SidebarUserNav user={user} />}</SidebarFooter>
    </Sidebar>
  );
}
