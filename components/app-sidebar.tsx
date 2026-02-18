"use client";

import { ScaleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";
import { useState } from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";
import { unstable_serialize } from "swr/infinite";
import { PlusIcon, TrashIcon } from "@/components/icons";
import {
  getChatHistoryPaginationKey,
  SidebarHistory,
} from "@/components/sidebar-history";
import { SidebarUserNav } from "@/components/sidebar-user-nav";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function AppSidebar({ user }: { user: User | undefined }) {
  const router = useRouter();
  const { setOpenMobile } = useSidebar();
  const { mutate } = useSWRConfig();
  const [showdeleteDialog, setShowdeleteDialog] = useState(false);

  const handledelete = () => {
    const deletePromise = fetch("/api/history", {
      method: "DELETE",
    });

    toast.promise(deletePromise, {
      loading: "جاري حذف المحادثات...",
      success: () => {
        mutate(unstable_serialize(getChatHistoryPaginationKey));
        setShowdeleteDialog(false);
        router.replace("/");
        router.refresh();
        return "تم حذف جميع المحادثات بنجاح";
      },
      error: "فشل في حذف المحادثات",
    });
  };

  return (
    <>
      <Sidebar className="group-data-[side=left]:border-r-0">
        <SidebarHeader className="pb-1">
          <SidebarMenu>
            <div className="flex flex-row items-center justify-between">
              <Link
                className="group flex flex-row items-center gap-3"
                href="/"
                onClick={() => {
                  setOpenMobile(false);
                }}
              >
                <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <ScaleIcon className="size-4.5" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col">
                  <span className="cursor-pointer font-bold text-[15px] text-foreground tracking-tight">
                    محامي <span className="font-black text-primary">فيصل</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    المساعد القانوني
                  </span>
                </div>
              </Link>
              <div className="flex flex-row gap-0.5">
                {user && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="size-9 rounded-xl text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive active:scale-95"
                        onClick={() => setShowdeleteDialog(true)}
                        type="button"
                        variant="ghost"
                      >
                        <TrashIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent align="end" className="hidden md:block">
                      حذف جميع المحادثات
                    </TooltipContent>
                  </Tooltip>
                )}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="size-9 rounded-xl text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary active:scale-95"
                      onClick={() => {
                        setOpenMobile(false);
                        router.push("/");
                        router.refresh();
                      }}
                      type="button"
                      variant="ghost"
                    >
                      <PlusIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent align="end" className="hidden md:block">
                    محادثة جديدة
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarHistory user={user} />
        </SidebarContent>
        <SidebarFooter>{user && <SidebarUserNav user={user} />}</SidebarFooter>
      </Sidebar>

      <AlertDialog onOpenChange={setShowdeleteDialog} open={showdeleteDialog}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[16px]">
              حذف جميع المحادثات؟
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[13px] leading-relaxed">
              لا يمكن التراجع عن هذا الإجراء. سيتم حذف جميع محادثاتك نهائياً.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel className="rounded-lg">إلغاء</AlertDialogCancel>
            <AlertDialogAction className="rounded-lg" onClick={handledelete}>
              حذف الكل
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
