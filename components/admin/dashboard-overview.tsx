"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Clock,
  Eye,
  FileText,
  Globe,
  MessageSquare,
  Package,
  ShoppingBag,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface DashboardStats {
  totalUsers: number;
  totalChats: number;
  totalMessages: number;
  totalAgents: number;
  totalDocuments: number;
  totalFiles: number;
  activeUsers: number;
  growthRate: number;
}

interface ActivityItem {
  id: string;
  type: "user" | "chat" | "agent" | "store";
  title: string;
  description: string;
  time: string;
  icon: typeof Users;
  color: string;
}

const recentActivity: ActivityItem[] = [
  {
    id: "1",
    type: "user",
    title: "مستخدم جديد",
    description: "تم تسجيل مستخدم جديد في المنصة",
    time: "منذ 5 دقائق",
    icon: Users,
    color: "text-blue-500",
  },
  {
    id: "2",
    type: "chat",
    title: "محادثة جديدة",
    description: "بدأ مستخدم محادثة مع GPT-4o",
    time: "منذ 12 دقيقة",
    icon: MessageSquare,
    color: "text-emerald-500",
  },
  {
    id: "3",
    type: "agent",
    title: "وكيل محدث",
    description: "تم تحديث وكيل المبيعات",
    time: "منذ 30 دقيقة",
    icon: Bot,
    color: "text-violet-500",
  },
  {
    id: "4",
    type: "store",
    title: "متجر جديد",
    description: "تم إنشاء متجر إلكتروني جديد",
    time: "منذ ساعة",
    icon: ShoppingBag,
    color: "text-orange-500",
  },
  {
    id: "5",
    type: "chat",
    title: "محادثة مكتملة",
    description: "اكتملت محادثة تحليل بيانات",
    time: "منذ ساعتين",
    icon: MessageSquare,
    color: "text-emerald-500",
  },
];

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  return (
    <div className="flex h-9 items-end gap-[3px]">
      {data.map((v, i) => (
        <div
          className={cn(
            "w-[5px] rounded-full transition-all duration-300",
            color
          )}
          key={`bar-${i}`}
          style={{
            height: `${((v - min) / range) * 100}%`,
            minHeight: "4px",
            opacity: 0.35 + ((v - min) / range) * 0.65,
          }}
        />
      ))}
    </div>
  );
}

export function DashboardOverview() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/admin/api/stats");
        const data = await res.json();
        if (data.success && data.stats) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      title: "المستخدمون",
      value: stats?.totalUsers ?? 0,
      change: stats?.growthRate ?? 0,
      sub: `${stats?.activeUsers ?? 0} نشط`,
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      chart: [12, 18, 14, 22, 19, 28, 25],
      chartColor: "bg-emerald-500",
    },
    {
      title: "المحادثات",
      value: stats?.totalChats ?? 0,
      change: 8.2,
      sub: "محادثة نشطة",
      icon: MessageSquare,
      color: "text-slate-600",
      bg: "bg-slate-50",
      border: "border-slate-200",
      chart: [8, 15, 12, 20, 18, 25, 22],
      chartColor: "bg-slate-500",
    },
    {
      title: "الرسائل",
      value: stats?.totalMessages ?? 0,
      change: 15.3,
      sub: "رسالة مرسلة",
      icon: Activity,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      chart: [30, 45, 38, 55, 48, 62, 58],
      chartColor: "bg-emerald-500",
    },
    {
      title: "الوكلاء",
      value: stats?.totalAgents ?? 0,
      change: 5.1,
      sub: "وكيل منشور",
      icon: Bot,
      color: "text-slate-600",
      bg: "bg-slate-50",
      border: "border-slate-200",
      chart: [2, 3, 5, 4, 6, 8, 7],
      chartColor: "bg-slate-500",
    },
    {
      title: "المستندات",
      value: stats?.totalDocuments ?? 0,
      change: 12.4,
      sub: "مستند منشأ",
      icon: FileText,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      chart: [5, 8, 10, 9, 14, 12, 16],
      chartColor: "bg-emerald-500",
    },
    {
      title: "الملفات",
      value: stats?.totalFiles ?? 0,
      change: 3.7,
      sub: "ملف مرفوع",
      icon: Upload,
      color: "text-slate-600",
      bg: "bg-slate-50",
      border: "border-slate-200",
      chart: [3, 5, 4, 8, 6, 10, 9],
      chartColor: "bg-slate-500",
    },
  ];

  if (loading) {
    return (
      <div className="flex-1 space-y-6 p-6 md:p-8 bg-white dark:bg-slate-950">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-56" />
          <Skeleton className="h-9 w-32 rounded-xl" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card className="overflow-hidden border-slate-100 shadow-sm" key={`skeleton-${i}`}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-28" />
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-2 h-9 w-20" />
                <Skeleton className="h-3 w-36" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 bg-white dark:bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-bold text-3xl tracking-tight text-slate-900 dark:text-white">لوحة التحكم</h2>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            نظرة عامة على نشاط وإحصائيات النظام
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200" variant="outline">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            النظام يعمل
          </Badge>
          <Button className="gap-1.5 text-xs text-slate-500 border-slate-200 bg-white hover:bg-slate-50" size="sm" variant="outline">
            <Clock className="h-3.5 w-3.5" />
            آخر تحديث: الآن
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card
              key={card.title}
              className={cn(
                "overflow-hidden transition-all duration-200 hover:shadow-md border",
                card.border
              )}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {card.title}
                </CardTitle>
                <div className={cn("rounded-full p-2", card.bg)}>
                  <Icon className={cn("h-4 w-4", card.color)} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                     <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                       <AnimatedCounter value={card.value} locale="ar-SA" duration={0.8} />
                     </div>
                     <p className="text-xs text-muted-foreground">
                       {card.sub}
                       {card.change > 0 && (
                         <span className="mr-2 inline-flex items-center text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">
                           <TrendingUp className="h-3 w-3 mr-1" />
                           {card.change}%+
                         </span>
                       )}
                     </p>
                  </div>
                  <MiniChart data={card.chart} color={card.chartColor} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-slate-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">النشاط الأخير</CardTitle>
            <CardDescription>
              آخر العمليات التي تمت على النظام
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-8">
                {recentActivity.map((item) => (
                  <div className="flex items-center" key={item.id}>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                    </div>
                    <div className="mr-auto font-medium text-xs text-slate-400">
                      {item.time}
                    </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>

        {/* Quick Actions / System Health */}
        <Card className="col-span-3 border-slate-100 shadow-sm bg-slate-900 text-white">
          <CardHeader>
            <CardTitle className="text-xl text-white">حالة الخوادم</CardTitle>
            <CardDescription className="text-slate-400">
              مراقبة حية لأداء البنية التحتية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                   <span className="text-slate-300">استهلاك المعالج</span>
                   <span className="text-emerald-400 font-bold">12%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-[12%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
             </div>

             <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                   <span className="text-slate-300">الذاكرة</span>
                   <span className="text-emerald-400 font-bold">45%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-[45%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
             </div>

             <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                   <span className="text-slate-300">قاعدة البيانات</span>
                   <span className="text-emerald-400 font-bold">99.9%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
             </div>

             <div className="pt-4 border-t border-slate-800">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-none">
                   <Activity className="mr-2 h-4 w-4" />
                   تقرير مفصل
                </Button>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
