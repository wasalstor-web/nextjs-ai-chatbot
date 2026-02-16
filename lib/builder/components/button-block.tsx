import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type ButtonBlockProps = {
  label: string;
  href: string;
  variant: "default" | "secondary" | "outline" | "ghost" | "destructive";
  size: "sm" | "default" | "lg";
  fullWidth: "yes" | "no";
};

export const ButtonBlock: ComponentConfig<ButtonBlockProps> = {
  label: "زر",
  fields: {
    label: { type: "text" },
    href: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "رئيسي", value: "default" },
        { label: "ثانوي", value: "secondary" },
        { label: "محيط", value: "outline" },
        { label: "شفاف", value: "ghost" },
        { label: "خطر", value: "destructive" },
      ],
    },
    size: {
      type: "select",
      options: [
        { label: "صغير", value: "sm" },
        { label: "عادي", value: "default" },
        { label: "كبير", value: "lg" },
      ],
    },
    fullWidth: {
      type: "radio",
      options: [
        { label: "لا", value: "no" },
        { label: "نعم", value: "yes" },
      ],
    },
  },
  defaultProps: {
    label: "اضغط هنا",
    href: "#",
    variant: "default",
    size: "default",
    fullWidth: "no",
  },
  render: ({ label, href, variant, size, fullWidth }) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

    const variantClasses: Record<string, string> = {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
    };

    const sizeClasses: Record<string, string> = {
      sm: "h-8 px-3 text-xs",
      default: "h-9 px-4 py-2 text-sm",
      lg: "h-10 px-6 text-base",
    };

    return (
      <a
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth === "yes" && "w-full"
        )}
        href={href}
      >
        {label}
      </a>
    );
  },
};
