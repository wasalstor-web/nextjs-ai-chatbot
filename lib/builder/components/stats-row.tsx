import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type StatsRowProps = {
  stats: {
    value: string;
    label: string;
  }[];
  bg: "transparent" | "muted" | "card";
};

export const StatsRow: ComponentConfig<StatsRowProps> = {
  label: "صف إحصائيات",
  fields: {
    stats: {
      type: "array",
      arrayFields: {
        value: { type: "text" },
        label: { type: "text" },
      },
      defaultItemProps: {
        value: "100+",
        label: "عنصر",
      },
    },
    bg: {
      type: "select",
      options: [
        { label: "شفاف", value: "transparent" },
        { label: "رمادي", value: "muted" },
        { label: "بطاقة", value: "card" },
      ],
    },
  },
  defaultProps: {
    stats: [
      { value: "10K+", label: "مستخدم" },
      { value: "500+", label: "مشروع" },
      { value: "99%", label: "رضا" },
      { value: "24/7", label: "دعم" },
    ],
    bg: "muted",
  },
  render: ({ stats, bg }) => {
    return (
      <div
        className={cn(
          "w-full py-10 px-6 rounded-lg",
          bg === "muted" && "bg-muted",
          bg === "card" && "bg-card border"
        )}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-screen-xl mx-auto">
          {stats.map((stat, i) => (
            <div key={`stat-${i}`} className="space-y-1">
              <p className="text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
