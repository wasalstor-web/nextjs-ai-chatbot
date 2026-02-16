import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type ImageBlockProps = {
  src: string;
  alt: string;
  borderRadius: "none" | "sm" | "md" | "lg" | "full";
  aspectRatio: "auto" | "square" | "video" | "wide";
};

export const ImageBlock: ComponentConfig<ImageBlockProps> = {
  label: "صورة",
  fields: {
    src: { type: "text" },
    alt: { type: "text" },
    borderRadius: {
      type: "select",
      options: [
        { label: "بدون", value: "none" },
        { label: "صغير", value: "sm" },
        { label: "متوسط", value: "md" },
        { label: "كبير", value: "lg" },
        { label: "دائري", value: "full" },
      ],
    },
    aspectRatio: {
      type: "select",
      options: [
        { label: "تلقائي", value: "auto" },
        { label: "مربع", value: "square" },
        { label: "فيديو 16:9", value: "video" },
        { label: "عريض 21:9", value: "wide" },
      ],
    },
  },
  defaultProps: {
    src: "",
    alt: "صورة",
    borderRadius: "md",
    aspectRatio: "auto",
  },
  render: ({ src, alt, borderRadius, aspectRatio }) => {
    if (!src) {
      return (
        <div
          className={cn(
            "flex items-center justify-center bg-muted text-muted-foreground",
            "min-h-[200px] w-full",
            borderRadius === "sm" && "rounded-sm",
            borderRadius === "md" && "rounded-md",
            borderRadius === "lg" && "rounded-lg",
            borderRadius === "full" && "rounded-full"
          )}
        >
          <span className="text-sm">اسحب صورة أو ألصق رابطها</span>
        </div>
      );
    }

    return (
      <img
        alt={alt}
        className={cn(
          "w-full object-cover",
          borderRadius === "sm" && "rounded-sm",
          borderRadius === "md" && "rounded-md",
          borderRadius === "lg" && "rounded-lg",
          borderRadius === "full" && "rounded-full",
          aspectRatio === "square" && "aspect-square",
          aspectRatio === "video" && "aspect-video",
          aspectRatio === "wide" && "aspect-[21/9]"
        )}
        src={src}
      />
    );
  },
};
