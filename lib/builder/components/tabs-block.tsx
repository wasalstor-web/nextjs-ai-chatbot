import type { ComponentConfig } from "@puckeditor/core";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type TabsBlockProps = {
  tabs: {
    label: string;
    content: string;
  }[];
};

export const TabsBlock: ComponentConfig<TabsBlockProps> = {
  label: "تبويبات",
  fields: {
    tabs: {
      type: "array",
      arrayFields: {
        label: { type: "text" },
        content: { type: "textarea" },
      },
      defaultItemProps: {
        label: "تبويب جديد",
        content: "محتوى التبويب...",
      },
    },
  },
  defaultProps: {
    tabs: [
      { label: "نظرة عامة", content: "محتوى النظرة العامة." },
      { label: "المميزات", content: "قائمة المميزات الرئيسية." },
      { label: "التسعير", content: "خطط الأسعار المتاحة." },
    ],
  },
  render: ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="w-full">
        <div className="flex gap-1 border-b" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={`tab-${i}`}
              type="button"
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                i === activeTab
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
              role="tab"
              aria-selected={i === activeTab}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4" role="tabpanel">
          {tabs[activeTab] && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tabs[activeTab].content}
            </p>
          )}
        </div>
      </div>
    );
  },
};
