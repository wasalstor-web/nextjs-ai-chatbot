import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type CardBlockProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  variant: "default" | "outline" | "ghost";
};

export const CardBlock: ComponentConfig<CardBlockProps> = {
  label: "بطاقة",
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    image: { type: "text" },
    href: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "افتراضي", value: "default" },
        { label: "محيط", value: "outline" },
        { label: "شفاف", value: "ghost" },
      ],
    },
  },
  defaultProps: {
    title: "عنوان البطاقة",
    description: "وصف مختصر للبطاقة",
    image: "",
    href: "#",
    variant: "default",
  },
  render: ({ title, description, image, href, variant }) => {
    return (
      <a
        className={cn(
          "block overflow-hidden rounded-lg transition-shadow hover:shadow-lg",
          variant === "default" &&
            "border bg-card text-card-foreground shadow-sm",
          variant === "outline" && "border-2 bg-transparent",
          variant === "ghost" && "hover:bg-muted"
        )}
        href={href}
      >
        {image && (
          <img
            alt={title}
            className="aspect-video w-full object-cover"
            src={image}
          />
        )}
        <div className="space-y-2 p-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </a>
    );
  },
};
