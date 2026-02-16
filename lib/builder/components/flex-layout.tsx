import type { ComponentConfig } from "@puckeditor/core";
import { DropZone } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type FlexLayoutProps = {
  direction: "row" | "column";
  gap: "2" | "4" | "6" | "8";
  align: "start" | "center" | "end" | "stretch";
  justify: "start" | "center" | "end" | "between" | "around";
  wrap: "yes" | "no";
};

export const FlexLayout: ComponentConfig<FlexLayoutProps> = {
  label: "تخطيط مرن",
  fields: {
    direction: {
      type: "radio",
      options: [
        { label: "أفقي", value: "row" },
        { label: "عمودي", value: "column" },
      ],
    },
    gap: {
      type: "select",
      options: [
        { label: "8px", value: "2" },
        { label: "16px", value: "4" },
        { label: "24px", value: "6" },
        { label: "32px", value: "8" },
      ],
    },
    align: {
      type: "select",
      options: [
        { label: "البداية", value: "start" },
        { label: "المنتصف", value: "center" },
        { label: "النهاية", value: "end" },
        { label: "تمدد", value: "stretch" },
      ],
    },
    justify: {
      type: "select",
      options: [
        { label: "البداية", value: "start" },
        { label: "المنتصف", value: "center" },
        { label: "النهاية", value: "end" },
        { label: "بين", value: "between" },
        { label: "حول", value: "around" },
      ],
    },
    wrap: {
      type: "radio",
      options: [
        { label: "لا", value: "no" },
        { label: "نعم", value: "yes" },
      ],
    },
  },
  defaultProps: {
    direction: "row",
    gap: "4",
    align: "stretch",
    justify: "start",
    wrap: "no",
  },
  render: ({ direction, gap, align, justify, wrap }) => {
    const gapMap: Record<string, string> = {
      "2": "gap-2",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
    };

    return (
      <div
        className={cn(
          "flex w-full min-h-[60px]",
          direction === "column" && "flex-col",
          gapMap[gap],
          align === "start" && "items-start",
          align === "center" && "items-center",
          align === "end" && "items-end",
          align === "stretch" && "items-stretch",
          justify === "start" && "justify-start",
          justify === "center" && "justify-center",
          justify === "end" && "justify-end",
          justify === "between" && "justify-between",
          justify === "around" && "justify-around",
          wrap === "yes" && "flex-wrap"
        )}
      >
        <DropZone zone="children" />
      </div>
    );
  },
};
