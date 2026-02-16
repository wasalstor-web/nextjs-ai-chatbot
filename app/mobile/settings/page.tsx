"use client";

import {
  ArrowRight,
  Bell,
  ChevronRight,
  Globe,
  Info,
  Key,
  Lock,
  type LucideIcon,
  Mail,
  Moon,
  Sun,
  Trash2,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface SettingsItem {
  icon: LucideIcon;
  label: string;
  value?: string | boolean;
  onClick?: () => void;
  showArrow?: boolean;
  toggle?: boolean;
  onChange?: () => void;
  danger?: boolean;
}

interface SettingsSection {
  title: string;
  items: SettingsItem[];
}

export default function MobileSettingsPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);

  const settingsSections: SettingsSection[] = [
    {
      title: "الحساب",
      items: [
        {
          icon: User,
          label: "الملف الشخصي",
          value: session?.user?.email || "زائر",
          onClick: () => {},
        },
        {
          icon: Mail,
          label: "البريد الإلكتروني",
          value: session?.user?.email || "غير مسجل",
          onClick: () => {},
        },
        {
          icon: Key,
          label: "تغيير كلمة المرور",
          onClick: () => {},
          showArrow: true,
        },
      ],
    },
    {
      title: "التفضيلات",
      items: [
        {
          icon: theme === "dark" ? Moon : Sun,
          label: "الوضع الليلي",
          toggle: true,
          value: theme === "dark",
          onChange: () => setTheme(theme === "dark" ? "light" : "dark"),
        },
        {
          icon: Bell,
          label: "الإشعارات",
          toggle: true,
          value: notifications,
          onChange: () => setNotifications(!notifications),
        },
        {
          icon: Globe,
          label: "اللغة",
          value: "العربية",
          onClick: () => {},
          showArrow: true,
        },
      ],
    },
    {
      title: "الخصوصية والأمان",
      items: [
        {
          icon: Lock,
          label: "الخصوصية",
          onClick: () => {},
          showArrow: true,
        },
        {
          icon: Trash2,
          label: "حذف جميع المحادثات",
          onClick: async () => {
            if (confirm("هل أنت متأكد من حذف جميع المحادثات؟")) {
              try {
                await fetch("/api/history", { method: "DELETE" });
                alert("تم حذف جميع المحادثات بنجاح");
              } catch (error) {
                alert("فشل حذف المحادثات");
              }
            }
          },
          danger: true,
        },
      ],
    },
    {
      title: "معلومات",
      items: [
        {
          icon: Info,
          label: "حول التطبيق",
          value: "الإصدار 1.0.0",
          onClick: () => {},
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950" dir="rtl">
      {/* Header */}
      <div className="sticky top-0 z-10 border-gray-200 border-b bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-4 px-4 py-4">
          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => router.back()}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
          <h1 className="font-bold text-gray-900 text-xl dark:text-white">
            الإعدادات
          </h1>
        </div>
      </div>

      {/* Settings Content */}
      <div className="mx-auto max-w-3xl space-y-6 p-4">
        {/* Profile Card */}
        {session && (
          <div className="rounded-2xl bg-linear-to-br from-green-700 to-green-500 p-6 text-white shadow-lg">
            <div className="flex items-center gap-4">
              {session.user?.image ? (
                <img
                  alt="Profile"
                  className="h-16 w-16 rounded-full border-4 border-white/20"
                  src={session.user.image}
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/20 bg-white/20 font-bold text-2xl">
                  {session.user?.email?.[0]?.toUpperCase()}
                </div>
              )}
              <div>
                <h2 className="font-bold text-xl">{session.user?.email}</h2>
                <p className="text-green-100 text-sm">مستخدم نشط</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Sections */}
        {settingsSections.map((section) => (
          <div
            className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-gray-900"
            key={section.title}
          >
            <h3 className="border-gray-100 border-b px-4 py-3 font-semibold text-gray-500 text-sm dark:border-gray-800 dark:text-gray-400">
              {section.title}
            </h3>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {section.items.map((item, index) => (
                <div
                  className={`flex items-center justify-between px-4 py-4 ${
                    item.onClick && !item.toggle
                      ? "cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                      : ""
                  }`}
                  key={index}
                  onClick={item.toggle ? undefined : item.onClick}
                >
                  <div className="flex flex-1 items-center gap-3">
                    <div
                      className={`rounded-lg p-2 ${
                        item.danger
                          ? "bg-red-100 dark:bg-red-900/20"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          item.danger
                            ? "text-red-600 dark:text-red-400"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          item.danger
                            ? "text-red-600 dark:text-red-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {item.label}
                      </p>
                      {item.value && !item.toggle && (
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.toggle && (
                      <button
                        className={`relative h-7 w-12 rounded-full transition-colors ${
                          item.value
                            ? "bg-green-600"
                            : "bg-gray-300 dark:bg-gray-700"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          item.onChange?.();
                        }}
                      >
                        <span
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                            item.value ? "left-1" : "left-6"
                          }`}
                        />
                      </button>
                    )}
                    {item.showArrow && (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* App Info */}
        <div className="py-6 text-center text-gray-500 text-sm">
          <p>مساعد ذكي - تطبيق محادثة بالذكاء الاصطناعي</p>
          <p className="mt-1">© 2026 جميع الحقوق محفوظة</p>
        </div>
      </div>
    </div>
  );
}
