import type { ComponentConfig } from "@puckeditor/core";
import { DropZone } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type CTASectionProps = {
  title: string;
  subtitle: string;
  bg: "primary" | "muted" | "card" | "transparent";
  align: "left" | "center" | "right";
};

export const CTASection: ComponentConfig<CTASectionProps> = {
  label: "قسم دعوة",
  fields: {
    title: { type: "text" },
    subtitle: { type: "textarea" },
    bg: {
      type: "select",
      options: [
        { label: "أساسي", value: "primary" },
        { label: "رمادي", value: "muted" },
        { label: "بطاقة", value: "card" },
        { label: "شفاف", value: "transparent" },
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
    title: "جاهز للبدء؟",
    subtitle: "ابدأ الآن وانطلق نحو النجاح",
    bg: "primary",
    align: "center",
  },
  render: ({ title, subtitle, bg, align }) => {
    const isPrimary = bg === "primary";
    return (
      <section
        className={cn(
          "w-full rounded-lg px-6 py-16",
          bg === "primary" && "bg-primary text-primary-foreground",
          bg === "muted" && "bg-muted",
          bg === "card" && "border bg-card",
          bg === "transparent" && "bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-screen-md space-y-4",
            align === "center" && "text-center",
            align === "left" && "text-left",
            align === "right" && "text-right"
          )}
        >
          <h2 className="font-bold text-3xl tracking-tight">{title}</h2>
          <p
            className={cn(
              "text-lg",
              isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"
            )}
          >
            {subtitle}
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <DropZone zone="content" />
          </div>
        </div>
      </section>
    );
  },
};
