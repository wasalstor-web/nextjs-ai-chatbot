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
          "w-full rounded-lg px-6 py-10",
          bg === "muted" && "bg-muted",
          bg === "card" && "border bg-card"
        )}
      >
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <div className="space-y-1" key={`stat-${i}`}>
              <p className="font-bold text-3xl text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
