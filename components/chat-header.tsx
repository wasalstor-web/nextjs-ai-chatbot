"use client";

import { ScaleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { useWindowSize } from "usehooks-ts";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "./icons";
import { useSidebar } from "./ui/sidebar";
import { VisibilitySelector, type VisibilityType } from "./visibility-selector";

function PureChatHeader({
  chatId,
  selectedVisibilityType,
  isReadonly,
}: {
  chatId: string;
  selectedVisibilityType: VisibilityType;
  isReadonly: boolean;
}) {
  const router = useRouter();
  const { open } = useSidebar();

  const { width: windowWidth } = useWindowSize();

  return (
    <header className="sticky top-0 z-20 flex items-center gap-2 border-border/40 border-b bg-background/80 px-3 py-2.5 backdrop-blur-xl md:px-4">
      <SidebarToggle />

      {/* Logo */}
      <Link
        className="group flex items-center gap-2 transition-opacity hover:opacity-80 active:scale-[0.97]"
        href="/"
      >
        <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm">
          <ScaleIcon className="size-4" strokeWidth={1.8} />
        </div>
        <div className="hidden items-center gap-1.5 md:flex">
          <span className="font-bold text-[14px] text-foreground tracking-tight">
            محامي <span className="font-black text-primary">فيصل</span>
          </span>
        </div>
      </Link>

      {(!open || windowWidth < 768) && (
        <Button
          className="order-2 h-8 gap-1.5 rounded-lg px-3 text-[13px] active:scale-[0.97] md:order-1"
          onClick={() => {
            router.push("/");
            router.refresh();
          }}
          variant="outline"
        >
          <PlusIcon />
          <span className="hidden sm:inline">جديدة</span>
        </Button>
      )}

      {!isReadonly && (
        <VisibilitySelector
          chatId={chatId}
          className="order-1 mr-auto md:order-2"
          selectedVisibilityType={selectedVisibilityType}
        />
      )}
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return (
    prevProps.chatId === nextProps.chatId &&
    prevProps.selectedVisibilityType === nextProps.selectedVisibilityType &&
    prevProps.isReadonly === nextProps.isReadonly
  );
});
