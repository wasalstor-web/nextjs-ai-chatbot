"use client";

import { AlertTriangle, Lock, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SecurityStats {
  totalUsers: number;
  adminCount: number;
}

export default function AdminSecurityPage() {
  const [stats, setStats] = useState<SecurityStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/admin/api/users?limit=1000");
        const data = await res.json();
        if (data.success) {
          const adminCount = data.users.filter(
            (u: { role: string }) =>
              u.role === "admin" || u.role === "super_admin"
          ).length;
          setStats({ totalUsers: data.total, adminCount });
        }
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const securityChecks = [
    {
      title: "المصادقة",
      description: "NextAuth v5 مع تشفير bcrypt للكلمات السرية",
      status: "active" as const,
      icon: Lock,
    },
    {
      title: "التحكم بالصلاحيات",
      description: "RBAC — أدوار المستخدم / المدير / المدير الأعلى",
      status: "active" as const,
      icon: Shield,
    },
    {
      title: "حماية الجلسات",
      description: "JWT httpOnly مع تجديد تلقائي",
      status: "active" as const,
      icon: Shield,
    },
    {
      title: "حماية SQL",
      description: "استعلامات معلمة عبر Drizzle ORM",
      status: "active" as const,
      icon: Shield,
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="font-bold text-3xl">الأمان</h1>
        <p className="mt-2 text-muted-foreground">إعدادات الأمان والصلاحيات</p>
      </div>

      {/* Security Status */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">
              إجمالي المستخدمين
            </span>
          </div>
          <p className="mt-1 font-bold text-2xl">
            {loading ? "—" : (stats?.totalUsers ?? 0)}
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">المديرون</span>
          </div>
          <p className="mt-1 font-bold text-2xl">
            {loading ? "—" : (stats?.adminCount ?? 0)}
          </p>
        </div>
      </div>

      {/* Security checks */}
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">فحوصات الأمان</h2>
        {securityChecks.map((check) => {
          const Icon = check.icon;
          return (
            <div
              className="flex items-center gap-3 rounded-lg border p-3"
              key={check.title}
            >
              <div
                className={cn(
                  "rounded-full p-1.5",
                  check.status === "active"
                    ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                    : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
                )}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{check.title}</p>
                <p className="text-muted-foreground text-xs">
                  {check.description}
                </p>
              </div>
              <span className="font-medium text-green-600 text-xs dark:text-green-400">
                فعّال
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
