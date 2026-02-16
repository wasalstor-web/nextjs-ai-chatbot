import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type RichTextProps = {
  html: string;
};

export const RichText: ComponentConfig<RichTextProps> = {
  label: "نص منسق",
  fields: {
    html: { type: "textarea" },
  },
  defaultProps: {
    html: "<p>نص منسق يدعم <strong>HTML</strong></p>",
  },
  render: ({ html }) => {
    return (
      <div
        className={cn(
          "prose prose-zinc dark:prose-invert max-w-none",
          "prose-headings:font-semibold prose-a:text-primary"
        )}
        // biome-ignore lint: dangerously set HTML for rich text
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  },
};
