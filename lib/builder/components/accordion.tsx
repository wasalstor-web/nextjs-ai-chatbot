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
          <details key={`accordion-${i}`} className="group">
            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium hover:bg-muted/50 transition-colors">
              <span>{item.title}</span>
              <svg
                className="size-4 shrink-0 transition-transform group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              {item.content}
            </div>
          </details>
        ))}
      </div>
    );
  },
};
