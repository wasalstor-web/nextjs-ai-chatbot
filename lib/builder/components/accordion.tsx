import type { ComponentConfig } from "@puckeditor/core";
import { cn } from "@/lib/utils";

export type AccordionProps = {
  items: {
    title: string;
    content: string;
  }[];
};

export const Accordion: ComponentConfig<AccordionProps> = {
  label: "أكورديون",
  fields: {
    items: {
      type: "array",
      arrayFields: {
        title: { type: "text" },
        content: { type: "textarea" },
      },
      defaultItemProps: {
        title: "سؤال جديد",
        content: "الإجابة هنا...",
      },
    },
  },
  defaultProps: {
    items: [
      { title: "ما هي الخدمة؟", content: "نقدم خدمة بناء صفحات احترافية." },
      {
        title: "كيف أبدأ؟",
        content: "سجّل حسابك وابدأ بإنشاء صفحتك الأولى.",
      },
      {
        title: "هل يوجد دعم فني؟",
        content: "نعم، فريق الدعم متاح 24/7.",
      },
    ],
  },
  render: ({ items }) => {
    return (
      <div className="w-full divide-y rounded-lg border">
        {items.map((item, i) => (
          <details className="group" key={`accordion-${i}`}>
            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium transition-colors hover:bg-muted/50">
              <span>{item.title}</span>
              <svg
                className="size-4 shrink-0 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">
              {item.content}
            </div>
          </details>
        ))}
      </div>
    );
  },
};
