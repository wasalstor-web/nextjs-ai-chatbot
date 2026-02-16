import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type HeadingProps = {
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align: "left" | "center" | "right";
};

export const Heading: ComponentConfig<HeadingProps> = {
  label: "عنوان",
  fields: {
    text: { type: "text" },
    level: {
      type: "select",
      options: [
        { label: "H1", value: "h1" },
        { label: "H2", value: "h2" },
        { label: "H3", value: "h3" },
        { label: "H4", value: "h4" },
        { label: "H5", value: "h5" },
        { label: "H6", value: "h6" },
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
    text: "عنوان جديد",
    level: "h2",
    align: "right",
  },
  render: ({ text, level, align }) => {
    const Tag = level;
    const sizeMap: Record<string, string> = {
      h1: "text-4xl font-bold tracking-tight",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
    };
    return (
      <Tag
        className={cn(
          sizeMap[level],
          align === "center" && "text-center",
          align === "left" && "text-left",
          align === "right" && "text-right"
        )}
      >
        {text}
      </Tag>
    );
  },
};
