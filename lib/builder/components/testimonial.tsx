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
      <blockquote className="rounded-lg border bg-card p-6 space-y-4">
        <p className="text-lg italic text-foreground leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="size-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </footer>
      </blockquote>
    );
  },
};
