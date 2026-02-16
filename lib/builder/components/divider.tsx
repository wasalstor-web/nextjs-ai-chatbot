import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type DividerProps = {
  color: "default" | "muted" | "primary";
  thickness: "thin" | "normal" | "thick";
};

export const Divider: ComponentConfig<DividerProps> = {
  label: "فاصل",
  fields: {
    color: {
      type: "select",
      options: [
        { label: "افتراضي", value: "default" },
        { label: "خفيف", value: "muted" },
        { label: "أساسي", value: "primary" },
      ],
    },
    thickness: {
      type: "select",
      options: [
        { label: "رفيع", value: "thin" },
        { label: "عادي", value: "normal" },
        { label: "سميك", value: "thick" },
      ],
    },
  },
  defaultProps: {
    color: "default",
    thickness: "normal",
  },
  render: ({ color, thickness }) => {
    return (
      <hr
        className={cn(
          "w-full border-0",
          color === "default" && "bg-border",
          color === "muted" && "bg-muted",
          color === "primary" && "bg-primary",
          thickness === "thin" && "h-px",
          thickness === "normal" && "h-0.5",
          thickness === "thick" && "h-1"
        )}
      />
    );
  },
};
