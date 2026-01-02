import { cookies } from "next/headers";
import Script from "next/script";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { DataStreamProviderWrapper } from "@/components/data-stream-provider-wrapper";
import { AdminSidebarWrapperClient } from "@/components/admin-sidebar-wrapper";
import { Loader } from "@/components/elements/loader";
import { auth } from "../(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <DataStreamProviderWrapper>
        <Suspense fallback={
          <div className="flex h-dvh flex-col items-center justify-center gap-4">
            <Loader size={32} />
            <p className="text-sm text-muted-foreground">جاري التحميل...</p>
          </div>
        }>
          <SidebarWrapper>{children}</SidebarWrapper>
        </Suspense>
      </DataStreamProviderWrapper>
    </>
  );
}

async function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  const isCollapsed = cookieStore.get("sidebar_state")?.value !== "true";

  // Check if user is authenticated
  if (!session?.user) {
    redirect("/login");
  }

  // Check if user has admin access
  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    redirect("/");
  }

  return (
    <AdminSidebarWrapperClient
      user={session.user}
      defaultOpen={!isCollapsed}
    >
      {children}
    </AdminSidebarWrapperClient>
  );
}

