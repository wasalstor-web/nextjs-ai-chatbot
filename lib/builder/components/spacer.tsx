import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type SpacerProps = {
  height: "4" | "8" | "12" | "16" | "24" | "32";
};

export const Spacer: ComponentConfig<SpacerProps> = {
  label: "مسافة",
  fields: {
    height: {
      type: "select",
      options: [
        { label: "16px", value: "4" },
        { label: "32px", value: "8" },
        { label: "48px", value: "12" },
        { label: "64px", value: "16" },
        { label: "96px", value: "24" },
        { label: "128px", value: "32" },
      ],
    },
  },
  defaultProps: {
    height: "8",
  },
  render: ({ height }) => {
    const heightMap: Record<string, string> = {
      "4": "h-4",
      "8": "h-8",
      "12": "h-12",
      "16": "h-16",
      "24": "h-24",
      "32": "h-32",
    };

    return (
      <div aria-hidden="true" className={cn(heightMap[height], "w-full")} />
    );
  },
};
