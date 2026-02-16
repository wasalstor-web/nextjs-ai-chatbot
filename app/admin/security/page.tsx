"use client";

import { useEffect, useState } from "react";
import { Shield, Users, Lock, AlertTriangle } from "lucide-react";
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
              u.role === "admin" || u.role === "super_admin",
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
        <h1 className="text-3xl font-bold">الأمان</h1>
        <p className="text-muted-foreground mt-2">
          إعدادات الأمان والصلاحيات
        </p>
      </div>

      {/* Security Status */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              إجمالي المستخدمين
            </span>
          </div>
          <p className="mt-1 text-2xl font-bold">
            {loading ? "—" : stats?.totalUsers ?? 0}
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">المديرون</span>
          </div>
          <p className="mt-1 text-2xl font-bold">
            {loading ? "—" : stats?.adminCount ?? 0}
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
              key={check.title}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <div
                className={cn(
                  "rounded-full p-1.5",
                  check.status === "active"
                    ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                    : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400",
                )}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{check.title}</p>
                <p className="text-xs text-muted-foreground">
                  {check.description}
                </p>
              </div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                فعّال
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

