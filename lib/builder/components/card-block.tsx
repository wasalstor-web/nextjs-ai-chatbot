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
        href={href}
        className={cn(
          "block rounded-lg overflow-hidden transition-shadow hover:shadow-lg",
          variant === "default" &&
            "bg-card text-card-foreground border shadow-sm",
          variant === "outline" && "border-2 bg-transparent",
          variant === "ghost" && "hover:bg-muted"
        )}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full aspect-video object-cover"
          />
        )}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </a>
    );
  },
};
