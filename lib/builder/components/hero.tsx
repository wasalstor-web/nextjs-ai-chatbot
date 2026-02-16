import type { ComponentConfig } from "@puckeditor/core";
import { DropZone } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type HeroProps = {
  title: string;
  subtitle: string;
  bgImage: string;
  bgOverlay: "yes" | "no";
  align: "left" | "center" | "right";
  minHeight: "sm" | "md" | "lg" | "xl";
};

export const Hero: ComponentConfig<HeroProps> = {
  label: "قسم رئيسي",
  fields: {
    title: { type: "text" },
    subtitle: { type: "textarea" },
    bgImage: { type: "text" },
    bgOverlay: {
      type: "radio",
      options: [
        { label: "لا", value: "no" },
        { label: "نعم", value: "yes" },
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
    minHeight: {
      type: "select",
      options: [
        { label: "صغير (300px)", value: "sm" },
        { label: "متوسط (400px)", value: "md" },
        { label: "كبير (500px)", value: "lg" },
        { label: "ملء الشاشة", value: "xl" },
      ],
    },
  },
  defaultProps: {
    title: "مرحباً بالعالم",
    subtitle: "ابدأ ببناء صفحتك هنا",
    bgImage: "",
    bgOverlay: "yes",
    align: "center",
    minHeight: "md",
  },
  render: ({ title, subtitle, bgImage, bgOverlay, align, minHeight }) => {
    const heightMap: Record<string, string> = {
      sm: "min-h-[300px]",
      md: "min-h-[400px]",
      lg: "min-h-[500px]",
      xl: "min-h-[80vh]",
    };

    return (
      <section
        className={cn(
          "relative flex w-full flex-col items-center justify-center",
          heightMap[minHeight],
          bgImage ? "bg-center bg-cover" : "bg-muted"
        )}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      >
        {bgImage && bgOverlay === "yes" && (
          <div className="absolute inset-0 bg-black/50" />
        )}
        <div
          className={cn(
            "relative z-10 w-full max-w-screen-xl space-y-4 px-6 py-12",
            align === "center" && "text-center",
            align === "left" && "text-left",
            align === "right" && "text-right"
          )}
        >
          <h1
            className={cn(
              "font-bold text-4xl tracking-tight md:text-5xl",
              bgImage ? "text-white" : "text-foreground"
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "max-w-2xl text-lg md:text-xl",
                align === "center" && "mx-auto",
                bgImage ? "text-white/90" : "text-muted-foreground"
              )}
            >
              {subtitle}
            </p>
          )}
          <div className="pt-4">
            <DropZone zone="extra" />
          </div>
        </div>
      </section>
    );
  },
};
