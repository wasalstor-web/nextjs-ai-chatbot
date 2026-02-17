"use client";

import type { UseChatHelpers } from "@ai-sdk/react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  BuildingIcon,
  FileTextIcon,
  GavelIcon,
} from "lucide-react";
import { memo } from "react";
import type { ChatMessage } from "@/lib/types";
import type { VisibilityType } from "./visibility-selector";

type SuggestedActionsProps = {
  chatId: string;
  sendMessage: UseChatHelpers<ChatMessage>["sendMessage"];
  selectedVisibilityType: VisibilityType;
};

const SUGGESTED_ACTIONS = [
  {
    icon: BriefcaseIcon,
    label: "حقوق الموظف",
    text: "ما هي حقوقي كموظف في القطاع الخاص عند الفصل التعسفي؟",
    color: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-400/10",
  },
  {
    icon: FileTextIcon,
    label: "عقد إيجار",
    text: "كيف أسجل عقد إيجار موحد في منصة إيجار؟",
    color: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10 dark:bg-blue-400/10",
  },
  {
    icon: BuildingIcon,
    label: "تأسيس شركة",
    text: "ما هي شروط تأسيس شركة ذات مسؤولية محدودة في السعودية؟",
    color: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-500/10 dark:bg-violet-400/10",
  },
  {
    icon: GavelIcon,
    label: "دعوى عمالية",
    text: "اشرح لي آلية رفع دعوى في المحكمة العمالية",
    color: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/10 dark:bg-amber-400/10",
  },
];

function PureSuggestedActions({ chatId, sendMessage }: SuggestedActionsProps) {
  return (
    <div
      className="grid w-full gap-3 sm:grid-cols-2"
      data-testid="suggested-actions"
    >
      {SUGGESTED_ACTIONS.map((action, index) => (
        <motion.button
          animate={{ opacity: 1, scale: 1 }}
          className="group flex w-full items-start gap-3 rounded-xl border border-border/40 bg-background p-3.5 text-right transition-all duration-200 hover:border-border hover:shadow-sm active:scale-[0.98] dark:bg-card"
          exit={{ opacity: 0, scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.95 }}
          key={action.label}
          onClick={() => {
            window.history.pushState({}, "", `/chat/${chatId}`);
            sendMessage({
              role: "user",
              parts: [{ type: "text", text: action.text }],
            });
          }}
          transition={{
            delay: 0.05 * index,
            duration: 0.3,
            ease: [0.2, 0, 0, 1],
          }}
          type="button"
        >
          <div
            className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${action.iconBg} ${action.color} transition-transform duration-200 group-hover:scale-105`}
          >
            <action.icon className="size-4.5" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[13px] text-foreground">
              {action.label}
            </span>
            <span className="line-clamp-2 text-[11px] text-muted-foreground leading-relaxed">
              {action.text}
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => {
    if (prevProps.chatId !== nextProps.chatId) {
      return false;
    }
    if (prevProps.selectedVisibilityType !== nextProps.selectedVisibilityType) {
      return false;
    }

    return true;
  }
);
