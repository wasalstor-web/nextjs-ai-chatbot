"use client";

import { Bell, Database, Globe, Key, type Settings } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SettingSection {
  id: string;
  title: string;
  description: string;
  icon: typeof Settings;
}

const sections: SettingSection[] = [
  {
    id: "general",
    title: "عام",
    description: "إعدادات عامة للمنصة — الاسم، اللغة، المنطقة الزمنية",
    icon: Globe,
  },
  {
    id: "api",
    title: "مفاتيح API",
    description: "إدارة مفاتيح الوصول للخدمات الخارجية",
    icon: Key,
  },
  {
    id: "notifications",
    title: "الإشعارات",
    description: "إعدادات البريد الإلكتروني والإشعارات",
    icon: Bell,
  },
  {
    id: "database",
    title: "قاعدة البيانات",
    description: "معلومات الاتصال والنسخ الاحتياطي",
    icon: Database,
  },
];

export default function AdminSettingsPage() {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="font-bold text-3xl">الإعدادات</h1>
        <p className="mt-2 text-muted-foreground">إعدادات النظام العامة</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              className={cn(
                "flex items-start gap-3 rounded-lg border p-4 text-start transition-colors",
                activeSection === section.id
                  ? "border-primary bg-primary/5"
                  : "hover:bg-muted/50"
              )}
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              type="button"
            >
              <div className="rounded-lg bg-muted p-2">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {section.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground text-sm">
          إعدادات قسم &quot;
          {sections.find((s) => s.id === activeSection)?.title}&quot; — سيتم
          تفعيلها في التحديث القادم
        </p>
      </div>
    </div>
  );
}
