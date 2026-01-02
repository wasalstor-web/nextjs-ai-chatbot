import { cookies } from "next/headers";
import Script from "next/script";
import { Suspense } from "react";
import { DataStreamProviderWrapper } from "@/components/data-stream-provider-wrapper";
import { SidebarWrapperClient } from "@/components/sidebar-wrapper";
import { auth } from "../(auth)/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <DataStreamProviderWrapper>
        <Suspense fallback={<div className="flex h-dvh" />}>
          <SidebarWrapper>{children}</SidebarWrapper>
        </Suspense>
      </DataStreamProviderWrapper>
    </>
  );
}

async function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  const isCollapsed = cookieStore.get("sidebar_state")?.value !== "true";

  return (
    <SidebarWrapperClient
      user={session?.user}
      defaultOpen={!isCollapsed}
    >
      {children}
    </SidebarWrapperClient>
  );
}
