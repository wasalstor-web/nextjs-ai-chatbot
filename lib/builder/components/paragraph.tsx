import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type ParagraphProps = {
  text: string;
  fontSize: "sm" | "base" | "lg" | "xl";
  align: "left" | "center" | "right";
};

export const Paragraph: ComponentConfig<ParagraphProps> = {
  label: "فقرة",
  fields: {
    text: { type: "textarea" },
    fontSize: {
      type: "select",
      options: [
        { label: "صغير", value: "sm" },
        { label: "عادي", value: "base" },
        { label: "كبير", value: "lg" },
        { label: "كبير جداً", value: "xl" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "يسار", value: "left" },
        { label: "وسط", value: "center" },
        { label: "يمين", value: "right" },
      ],
    },
  },
  defaultProps: {
    text: "اكتب نصك هنا...",
    fontSize: "base",
    align: "right",
  },
  render: ({ text, fontSize, align }) => {
    return (
      <p
        className={cn(
          "leading-relaxed text-muted-foreground",
          fontSize === "sm" && "text-sm",
          fontSize === "base" && "text-base",
          fontSize === "lg" && "text-lg",
          fontSize === "xl" && "text-xl",
          align === "center" && "text-center",
          align === "left" && "text-left",
          align === "right" && "text-right"
        )}
      >
        {text}
      </p>
    );
  },
};
