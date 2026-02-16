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
          "w-full py-16 px-6 rounded-lg",
          bg === "primary" && "bg-primary text-primary-foreground",
          bg === "muted" && "bg-muted",
          bg === "card" && "bg-card border",
          bg === "transparent" && "bg-transparent"
        )}
      >
        <div
          className={cn(
            "max-w-screen-md mx-auto space-y-4",
            align === "center" && "text-center",
            align === "left" && "text-left",
            align === "right" && "text-right"
          )}
        >
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p
            className={cn(
              "text-lg",
              isPrimary
                ? "text-primary-foreground/80"
                : "text-muted-foreground"
            )}
          >
            {subtitle}
          </p>
          <div className="pt-4 flex gap-3 justify-center">
            <DropZone zone="content" />
          </div>
        </div>
      </section>
    );
  },
};
