"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  ArrowRight,
  Moon,
  Sun,
  Bell,
  Globe,
  Lock,
  Trash2,
  User,
  Mail,
  Key,
  ChevronRight,
  Info,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

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
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4 px-4 py-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            الإعدادات
          </h1>
        </div>
      </div>

      {/* Settings Content */}
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Profile Card */}
        {session && (
          <div className="bg-linear-to-br from-green-700 to-green-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-4">
              {session.user?.image ? (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-4 border-white/20"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-white/20 border-4 border-white/20 flex items-center justify-center text-2xl font-bold">
                  {session.user?.email?.[0]?.toUpperCase()}
                </div>
              )}
              <div>
                <h2 className="text-xl font-bold">{session.user?.email}</h2>
                <p className="text-green-100 text-sm">مستخدم نشط</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Sections */}
        {settingsSections.map((section) => (
          <div
            key={section.title}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden"
          >
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              {section.title}
            </h3>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between px-4 py-4 ${
                    item.onClick && !item.toggle
                      ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      : ""
                  }`}
                  onClick={item.toggle ? undefined : item.onClick}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`p-2 rounded-lg ${
                        item.danger
                          ? "bg-red-100 dark:bg-red-900/20"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
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
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.toggle && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          item.onChange?.();
                        }}
                        className={`relative w-12 h-7 rounded-full transition-colors ${
                          item.value ? "bg-green-600" : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      >
                        <span
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                            item.value ? "left-1" : "left-6"
                          }`}
                        />
                      </button>
                    )}
                    {item.showArrow && (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* App Info */}
        <div className="text-center py-6 text-sm text-gray-500">
          <p>مساعد ذكي - تطبيق محادثة بالذكاء الاصطناعي</p>
          <p className="mt-1">© 2026 جميع الحقوق محفوظة</p>
        </div>
      </div>
    </div>
  );
}
