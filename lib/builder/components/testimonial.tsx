import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export const Testimonial: ComponentConfig<TestimonialProps> = {
  label: "شهادة",
  fields: {
    quote: { type: "textarea" },
    author: { type: "text" },
    role: { type: "text" },
    avatar: { type: "text" },
  },
  defaultProps: {
    quote: "منتج رائع وتجربة استخدام ممتازة. أنصح به بشدة!",
    author: "أحمد محمد",
    role: "مدير تقني",
    avatar: "",
  },
  render: ({ quote, author, role, avatar }) => {
    return (
      <blockquote className="space-y-4 rounded-lg border bg-card p-6">
        <p className="text-foreground text-lg italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="flex items-center gap-3">
          {avatar ? (
            <img
              alt={author}
              className="size-10 rounded-full object-cover"
              src={avatar}
            />
          ) : (
            <div className="flex size-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-muted-foreground text-xs">{role}</p>
          </div>
        </footer>
      </blockquote>
    );
  },
};
