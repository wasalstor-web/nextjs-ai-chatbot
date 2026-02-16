import type { ComponentConfig } from "@puckeditor/core";
import { DropZone } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type ContainerProps = {
  maxWidth: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  paddingX: "0" | "4" | "6" | "8" | "12";
  paddingY: "0" | "4" | "6" | "8" | "12" | "16";
  bg: "transparent" | "background" | "muted" | "card";
};

export const Container: ComponentConfig<ContainerProps> = {
  label: "حاوية",
  fields: {
    maxWidth: {
      type: "select",
      options: [
        { label: "صغير (640px)", value: "sm" },
        { label: "متوسط (768px)", value: "md" },
        { label: "كبير (1024px)", value: "lg" },
        { label: "كبير جداً (1280px)", value: "xl" },
        { label: "أقصى (1536px)", value: "2xl" },
        { label: "كامل", value: "full" },
      ],
    },
    paddingX: {
      type: "select",
      options: [
        { label: "0", value: "0" },
        { label: "16px", value: "4" },
        { label: "24px", value: "6" },
        { label: "32px", value: "8" },
        { label: "48px", value: "12" },
      ],
    },
    paddingY: {
      type: "select",
      options: [
        { label: "0", value: "0" },
        { label: "16px", value: "4" },
        { label: "24px", value: "6" },
        { label: "32px", value: "8" },
        { label: "48px", value: "12" },
        { label: "64px", value: "16" },
      ],
    },
    bg: {
      type: "select",
      options: [
        { label: "شفاف", value: "transparent" },
        { label: "خلفية", value: "background" },
        { label: "رمادي", value: "muted" },
        { label: "بطاقة", value: "card" },
      ],
    },
  },
  defaultProps: {
    maxWidth: "xl",
    paddingX: "6",
    paddingY: "8",
    bg: "transparent",
  },
  render: ({ maxWidth, paddingX, paddingY, bg }) => {
    const maxWidthMap: Record<string, string> = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    };

    const pxMap: Record<string, string> = {
      "0": "px-0",
      "4": "px-4",
      "6": "px-6",
      "8": "px-8",
      "12": "px-12",
    };

    const pyMap: Record<string, string> = {
      "0": "py-0",
      "4": "py-4",
      "6": "py-6",
      "8": "py-8",
      "12": "py-12",
      "16": "py-16",
    };

    return (
      <div
        className={cn(
          "mx-auto w-full",
          maxWidthMap[maxWidth],
          pxMap[paddingX],
          pyMap[paddingY],
          bg === "background" && "bg-background",
          bg === "muted" && "bg-muted",
          bg === "card" && "bg-card"
        )}
      >
        <DropZone zone="content" />
      </div>
    );
  },
};
