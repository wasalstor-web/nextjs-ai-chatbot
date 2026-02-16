import type { ComponentConfig } from "@puckeditor/core";
import { DropZone } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type ColumnsProps = {
  columns: "2" | "3" | "4";
  gap: "2" | "4" | "6" | "8";
};

export const Columns: ComponentConfig<ColumnsProps> = {
  label: "أعمدة",
  fields: {
    columns: {
      type: "select",
      options: [
        { label: "عمودين", value: "2" },
        { label: "3 أعمدة", value: "3" },
        { label: "4 أعمدة", value: "4" },
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
  },
  defaultProps: {
    columns: "2",
    gap: "4",
  },
  render: ({ columns, gap }) => {
    const colCount = Number.parseInt(columns, 10);

    const gapMap: Record<string, string> = {
      "2": "gap-2",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
    };

    return (
      <div
        className={cn(
          "grid w-full",
          columns === "2" && "grid-cols-1 md:grid-cols-2",
          columns === "3" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columns === "4" &&
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          gapMap[gap]
        )}
      >
        {Array.from({ length: colCount }).map((_, i) => (
          <div key={`col-${i}`} className="min-h-[80px]">
            <DropZone zone={`column-${i}`} />
          </div>
        ))}
      </div>
    );
  },
};
