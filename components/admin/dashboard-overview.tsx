"use client";

import { useEffect, useState } from "react";
import {
  Users,
  MessageSquare,
  Bot,
  FileText,
  TrendingUp,
  Activity,
  Upload,
  BarChart3,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Zap,
  Globe,
  Eye,
  Package,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  { id: "1", type: "user", title: "مستخدم جديد", description: "تم تسجيل مستخدم جديد في المنصة", time: "منذ 5 دقائق", icon: Users, color: "text-blue-500" },
  { id: "2", type: "chat", title: "محادثة جديدة", description: "بدأ مستخدم محادثة مع GPT-4o", time: "منذ 12 دقيقة", icon: MessageSquare, color: "text-emerald-500" },
  { id: "3", type: "agent", title: "وكيل محدث", description: "تم تحديث وكيل المبيعات", time: "منذ 30 دقيقة", icon: Bot, color: "text-violet-500" },
  { id: "4", type: "store", title: "متجر جديد", description: "تم إنشاء متجر إلكتروني جديد", time: "منذ ساعة", icon: ShoppingBag, color: "text-orange-500" },
  { id: "5", type: "chat", title: "محادثة مكتملة", description: "اكتملت محادثة تحليل بيانات", time: "منذ ساعتين", icon: MessageSquare, color: "text-emerald-500" },
];

function AnimatedCounter({ value, duration = 800 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (value === 0) return;
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <>{count.toLocaleString("ar-SA")}</>;
}

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  return (
    <div className="flex items-end gap-[3px] h-9">
      {data.map((v, i) => (
        <div
          key={`bar-${i}`}
          className={cn("w-[5px] rounded-full transition-all duration-300", color)}
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
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      chart: [12, 18, 14, 22, 19, 28, 25],
      chartColor: "bg-blue-500",
    },
    {
      title: "المحادثات",
      value: stats?.totalChats ?? 0,
      change: 8.2,
      sub: "محادثة نشطة",
      icon: MessageSquare,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      chart: [8, 15, 12, 20, 18, 25, 22],
      chartColor: "bg-emerald-500",
    },
    {
      title: "الرسائل",
      value: stats?.totalMessages ?? 0,
      change: 15.3,
      sub: "رسالة مرسلة",
      icon: Activity,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      chart: [30, 45, 38, 55, 48, 62, 58],
      chartColor: "bg-violet-500",
    },
    {
      title: "الوكلاء",
      value: stats?.totalAgents ?? 0,
      change: 5.1,
      sub: "وكيل منشور",
      icon: Bot,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      chart: [2, 3, 5, 4, 6, 8, 7],
      chartColor: "bg-orange-500",
    },
    {
      title: "المستندات",
      value: stats?.totalDocuments ?? 0,
      change: 12.4,
      sub: "مستند منشأ",
      icon: FileText,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      chart: [5, 8, 10, 9, 14, 12, 16],
      chartColor: "bg-pink-500",
    },
    {
      title: "الملفات",
      value: stats?.totalFiles ?? 0,
      change: 3.7,
      sub: "ملف مرفوع",
      icon: Upload,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      chart: [3, 5, 4, 8, 6, 10, 9],
      chartColor: "bg-cyan-500",
    },
  ];

  if (loading) {
    return (
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-56" />
          <Skeleton className="h-9 w-32 rounded-xl" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={`skeleton-${i}`} className="overflow-hidden">
              <CardHeader className="pb-2"><Skeleton className="h-4 w-28" /></CardHeader>
              <CardContent><Skeleton className="h-9 w-20 mb-2" /><Skeleton className="h-3 w-36" /></CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">لوحة التحكم</h2>
          <p className="text-muted-foreground mt-1">نظرة عامة على نشاط وإحصائيات النظام</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 py-1 px-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            النظام يعمل
          </Badge>
          <Button variant="outline" size="sm" className="gap-1.5 text-xs">
            <Clock className="h-3.5 w-3.5" />
            آخر تحديث: الآن
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;
          const isPositive = card.change >= 0;
          return (
            <Card
              key={card.title}
              className={cn(
                "overflow-hidden border transition-all duration-200 hover:shadow-md hover:scale-[1.01]",
                card.border,
              )}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
                <div className={cn("p-2.5 rounded-xl", card.bg)}>
                  <Icon className={cn("h-4 w-4", card.color)} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold tracking-tight">
                      <AnimatedCounter value={card.value} />
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span
                        className={cn(
                          "inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full",
                          isPositive
                            ? "text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10"
                            : "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-500/10",
                        )}
                      >
                        {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {Math.abs(card.change)}%
                      </span>
                      <span className="text-xs text-muted-foreground">{card.sub}</span>
                    </div>
                  </div>
                  <MiniChart data={card.chart} color={card.chartColor} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Activity Feed */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-muted-foreground" />
                  النشاط الأخير
                </CardTitle>
                <CardDescription>آخر الأحداث في النظام</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">عرض الكل</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {recentActivity.map((item, index) => {
                const AIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted/50",
                      index < recentActivity.length - 1 && "border-b border-border/40",
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-xl p-2 shrink-0",
                        item.type === "user" ? "bg-blue-500/10" :
                        item.type === "chat" ? "bg-emerald-500/10" :
                        item.type === "agent" ? "bg-violet-500/10" :
                        "bg-orange-500/10",
                      )}
                    >
                      <AIcon className={cn("h-4 w-4", item.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions + Top Agents */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              إجراءات سريعة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Bot, label: "وكيل جديد", href: "/admin/agents", color: "text-violet-500", bg: "bg-violet-500/10 hover:bg-violet-500/20" },
                { icon: ShoppingBag, label: "متجر جديد", href: "/admin/stores", color: "text-orange-500", bg: "bg-orange-500/10 hover:bg-orange-500/20" },
                { icon: Users, label: "المستخدمون", href: "/admin/users", color: "text-blue-500", bg: "bg-blue-500/10 hover:bg-blue-500/20" },
                { icon: BarChart3, label: "الإحصائيات", href: "/admin/analytics", color: "text-emerald-500", bg: "bg-emerald-500/10 hover:bg-emerald-500/20" },
              ].map((action) => {
                const QIcon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className={cn("flex flex-col items-center gap-2 rounded-xl p-3.5 transition-all", action.bg)}
                  >
                    <QIcon className={cn("h-5 w-5", action.color)} />
                    <span className="text-xs font-medium">{action.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="border-t" />

            <div>
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Bot className="h-4 w-4 text-muted-foreground" />
                الوكلاء الأكثر استخداماً
              </h4>
              <div className="space-y-2.5">
                {[
                  { name: "مساعد المبيعات", usage: 1250, trend: "+12%" },
                  { name: "مساعد البرمجة", usage: 980, trend: "+8%" },
                  { name: "المساعد الإبداعي", usage: 756, trend: "+15%" },
                  { name: "مساعد التحليل", usage: 543, trend: "+5%" },
                ].map((a, i) => (
                  <div key={a.name} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 text-xs font-bold text-violet-600 dark:text-violet-400">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{a.name}</p>
                      <p className="text-xs text-muted-foreground">{a.usage.toLocaleString("ar-SA")} استخدام</p>
                    </div>
                    <Badge variant="secondary" className="text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 text-[10px]">
                      {a.trend}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health Bar */}
      <Card className="border-emerald-500/20 bg-gradient-to-l from-emerald-500/5 to-transparent">
        <CardContent className="py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              { label: "وقت الاستجابة", value: "45ms", icon: Zap },
              { label: "الذاكرة", value: "62%", icon: Activity },
              { label: "المعالجة", value: "28%", icon: BarChart3 },
              { label: "التخزين", value: "1.2 GB", icon: Package },
              { label: "الزوار اليوم", value: "342", icon: Eye },
              { label: "وقت التشغيل", value: "99.9%", icon: Globe },
            ].map((m) => {
              const MIcon = m.icon;
              return (
                <div key={m.label} className="flex items-center gap-2">
                  <MIcon className="h-4 w-4 text-emerald-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="text-sm font-semibold">{m.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

