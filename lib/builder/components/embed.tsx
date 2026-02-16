import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type EmbedProps = {
  url: string;
  aspectRatio: "video" | "square" | "wide";
};

export const Embed: ComponentConfig<EmbedProps> = {
  label: "تضمين",
  fields: {
    url: { type: "text" },
    aspectRatio: {
      type: "select",
      options: [
        { label: "فيديو 16:9", value: "video" },
        { label: "مربع", value: "square" },
        { label: "عريض 21:9", value: "wide" },
      ],
    },
  },
  defaultProps: {
    url: "",
    aspectRatio: "video",
  },
  render: ({ url, aspectRatio }) => {
    if (!url) {
      return (
        <div
          className={cn(
            "flex items-center justify-center bg-muted rounded-lg text-muted-foreground",
            aspectRatio === "video" && "aspect-video",
            aspectRatio === "square" && "aspect-square",
            aspectRatio === "wide" && "aspect-[21/9]"
          )}
        >
          <span className="text-sm">ألصق رابط YouTube أو Vimeo هنا</span>
        </div>
      );
    }

    // Convert YouTube/Vimeo URLs to embeddable format
    let embedSrc = url;
    const youtubeMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
    );
    if (youtubeMatch) {
      embedSrc = `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      embedSrc = `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return (
      <div
        className={cn(
          "w-full overflow-hidden rounded-lg",
          aspectRatio === "video" && "aspect-video",
          aspectRatio === "square" && "aspect-square",
          aspectRatio === "wide" && "aspect-[21/9]"
        )}
      >
        <iframe
          src={embedSrc}
          title="Embedded content"
          className="size-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  },
};
