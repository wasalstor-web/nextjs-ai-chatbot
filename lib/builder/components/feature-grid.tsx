import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type FeatureGridProps = {
  columns: "2" | "3" | "4";
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
};

export const FeatureGrid: ComponentConfig<FeatureGridProps> = {
  label: "شبكة مميزات",
  fields: {
    columns: {
      type: "select",
      options: [
        { label: "عمودين", value: "2" },
        { label: "3 أعمدة", value: "3" },
        { label: "4 أعمدة", value: "4" },
      ],
    },
    items: {
      type: "array",
      arrayFields: {
        icon: { type: "text" },
        title: { type: "text" },
        description: { type: "textarea" },
      },
      defaultItemProps: {
        icon: "⭐",
        title: "ميزة جديدة",
        description: "وصف الميزة",
      },
    },
  },
  defaultProps: {
    columns: "3",
    items: [
      { icon: "🚀", title: "سريع", description: "أداء عالي السرعة" },
      { icon: "🔒", title: "آمن", description: "حماية متقدمة للبيانات" },
      { icon: "🎨", title: "جميل", description: "تصميم عصري وأنيق" },
    ],
  },
  render: ({ columns, items }) => {
    return (
      <div
        className={cn(
          "grid gap-6 w-full",
          columns === "2" && "grid-cols-1 md:grid-cols-2",
          columns === "3" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columns === "4" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {items.map((item, i) => (
          <div
            key={`feature-${i}`}
            className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
          >
            <span className="text-3xl mb-3">{item.icon}</span>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    );
  },
};
