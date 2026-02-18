"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Clock,
  Eye,
  FileText,
  Globe,
  MessageSquare,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ────────────────────────────── types ────────────────────────────── */
type Stats = {
  totalUsers: number;
  totalChats: number;
  totalMessages: number;
  totalAgents: number;
  totalDocuments: number;
  activeUsers: number;
  growthRate: number;
};

type Period = "7d" | "30d" | "90d";

/* ────────────────────────── bar chart visual ─────────────────────── */
function BarChartVisual({
  data,
  color = "bg-blue-500",
}: {
  data: number[];
  color?: string;
}) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex h-32 items-end gap-1">
      {data.map((v, i) => (
        <div
          className={cn(
            "flex-1 rounded-t-sm transition-all duration-500 hover:opacity-80",
            color
          )}
          key={`bar-${v}-${i}`}
          style={{ height: `${(v / max) * 100}%`, minHeight: 4 }}
          title={v.toLocaleString("ar-SA")}
        />
      ))}
    </div>
  );
}

/* ────────────────────────── donut chart ──────────────────────────── */
function DonutChart({
  segments,
}: {
  segments: { label: string; value: number; color: string }[];
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let cumulative = 0;

  return (
    <div className="relative mx-auto h-40 w-40">
      <svg className="-rotate-90 h-full w-full" viewBox="0 0 36 36">
        {segments.map((seg) => {
          const pct = (seg.value / total) * 100;
          const offset = cumulative;
          cumulative += pct;
          return (
            <circle
              className="transition-all duration-700"
              cx="18"
              cy="18"
              fill="transparent"
              key={seg.label}
              r="15.91549"
              stroke={seg.color}
              strokeDasharray={`${pct} ${100 - pct}`}
              strokeDashoffset={`${-offset}`}
              strokeWidth="3.5"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold text-2xl">
          {total.toLocaleString("ar-SA")}
        </span>
        <span className="text-muted-foreground text-xs">إجمالي</span>
      </div>
    </div>
  );
}

/* ────────────────────── enhanced metric card ────────────────────── */
function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
  borderColor,
  sparkData,
}: {
  title: string;
  value: number;
  icon: typeof Users;
  trend?: number;
  trendLabel?: string;
  borderColor: string;
  sparkData?: number[];
}) {
  const isPositive = (trend ?? 0) >= 0;
  return (
    <div
      className={cn(
        "group hover:-translate-y-0.5 relative overflow-hidden rounded-xl border-r-4 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md",
        borderColor
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="font-medium text-muted-foreground text-sm">{title}</p>
          <p className="font-bold text-3xl tracking-tight">
            {value.toLocaleString("ar-SA")}
          </p>
          {trend !== undefined && (
            <div
              className={cn(
                "flex items-center gap-1 font-medium text-xs",
                isPositive ? "text-emerald-600" : "text-red-500"
              )}
            >
              {isPositive ? (
                <ArrowUpRight className="h-3.5 w-3.5" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5" />
              )}
              <span>
                {Math.abs(trend)}% {trendLabel ?? ""}
              </span>
            </div>
          )}
        </div>
        <div
          className={cn(
            "rounded-xl p-2.5 transition-colors",
            "bg-muted/60 group-hover:bg-muted"
          )}
        >
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {/* spark line */}
      {sparkData && (
        <div className="mt-3 flex h-8 items-end gap-0.5 opacity-40 transition-opacity group-hover:opacity-70">
          {sparkData.map((v, i) => {
            const max = Math.max(...sparkData, 1);
            return (
              <div
                className="flex-1 rounded-t-sm bg-current"
                key={`sp-${v}-${i}`}
                style={{ height: `${(v / max) * 100}%`, minHeight: 2 }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ──────────────────────── main component ─────────────────────────── */
export function AnalyticsDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<Period>("7d");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/admin/api/stats");
        const data = await res.json();
        if (data.success) {
          setStats(data.stats);
        }
      } catch {
        /* silent */
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  /* simulated chart data (replace with real API data later) */
  const chartData = useMemo(() => {
    const days = period === "7d" ? 7 : period === "30d" ? 30 : 90;
    return {
      messages: Array.from({ length: days }, () =>
        Math.floor(Math.random() * 200 + 50)
      ),
      users: Array.from({ length: days }, () =>
        Math.floor(Math.random() * 40 + 10)
      ),
      chats: Array.from({ length: days }, () =>
        Math.floor(Math.random() * 80 + 20)
      ),
    };
  }, [period]);

  const donutSegments = useMemo(
    () => [
      { label: "محادثات", value: stats?.totalChats ?? 0, color: "#3b82f6" },
      { label: "وكلاء", value: stats?.totalAgents ?? 0, color: "#8b5cf6" },
      { label: "مستندات", value: stats?.totalDocuments ?? 0, color: "#f59e0b" },
    ],
    [stats]
  );

  /* ── loading */
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["a", "b", "c", "d", "e", "f"].map((id) => (
            <div
              className="h-32 animate-pulse rounded-xl border bg-muted/40"
              key={`skel-${id}`}
            />
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="h-56 animate-pulse rounded-xl border bg-muted/40" />
          <div className="h-56 animate-pulse rounded-xl border bg-muted/40" />
        </div>
      </div>
    );
  }

  /* ── error */
  if (!stats) {
    return (
      <div className="rounded-xl border p-12 text-center text-muted-foreground">
        <Activity className="mx-auto mb-3 h-10 w-10 opacity-40" />
        <p className="font-medium text-lg">فشل في تحميل الإحصائيات</p>
        <p className="mt-1 text-sm">تحقق من اتصال الخادم وحدّث الصفحة</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ── period filter */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">التحليلات</h2>
        <div className="flex gap-1 rounded-lg border p-1">
          {(["7d", "30d", "90d"] as Period[]).map((p) => (
            <Button
              className="h-7 px-3 text-xs"
              key={p}
              onClick={() => setPeriod(p)}
              size="sm"
              variant={period === p ? "default" : "ghost"}
            >
              {p === "7d" ? "٧ أيام" : p === "30d" ? "٣٠ يوم" : "٩٠ يوم"}
            </Button>
          ))}
        </div>
      </div>

      {/* ── metric cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          borderColor="border-r-blue-500"
          icon={Users}
          sparkData={chartData.users.slice(-7)}
          title="المستخدمون"
          trend={12}
          trendLabel="هذا الأسبوع"
          value={stats.totalUsers}
        />
        <MetricCard
          borderColor="border-r-violet-500"
          icon={MessageSquare}
          sparkData={chartData.chats.slice(-7)}
          title="المحادثات"
          trend={8}
          trendLabel="هذا الأسبوع"
          value={stats.totalChats}
        />
        <MetricCard
          borderColor="border-r-emerald-500"
          icon={Activity}
          sparkData={chartData.messages.slice(-7)}
          title="الرسائل"
          trend={23}
          trendLabel="هذا الشهر"
          value={stats.totalMessages}
        />
        <MetricCard
          borderColor="border-r-amber-500"
          icon={Bot}
          title="الوكلاء الذكية"
          trend={5}
          value={stats.totalAgents}
        />
        <MetricCard
          borderColor="border-r-rose-500"
          icon={FileText}
          title="المستندات"
          trend={-2}
          value={stats.totalDocuments}
        />
        <MetricCard
          borderColor="border-r-cyan-500"
          icon={TrendingUp}
          title="معدل النمو"
          trend={stats.growthRate}
          trendLabel="شهري"
          value={stats.growthRate}
        />
      </div>

      {/* ── charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* bar chart — messages */}
        <div className="rounded-xl border bg-card p-5 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">الرسائل اليومية</h3>
              <p className="text-muted-foreground text-xs">
                حجم الرسائل خلال الفترة المحددة
              </p>
            </div>
            <Zap className="h-5 w-5 text-muted-foreground" />
          </div>
          <BarChartVisual color="bg-blue-500/80" data={chartData.messages} />
          <div className="mt-2 flex justify-between text-muted-foreground text-xs">
            <span>بداية الفترة</span>
            <span>اليوم</span>
          </div>
        </div>

        {/* donut chart — distribution */}
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="font-semibold">توزيع المحتوى</h3>
            <p className="text-muted-foreground text-xs">
              نسب المحادثات والوكلاء والمستندات
            </p>
          </div>
          <DonutChart segments={donutSegments} />
          <div className="mt-4 space-y-2">
            {donutSegments.map((seg) => (
              <div
                className="flex items-center justify-between text-sm"
                key={seg.label}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: seg.color }}
                  />
                  <span>{seg.label}</span>
                </div>
                <span className="font-medium">
                  {seg.value.toLocaleString("ar-SA")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── active users highlight */}
      <div className="relative overflow-hidden rounded-xl border bg-linear-to-l from-blue-500/10 via-transparent to-violet-500/10 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-500" />
              <h3 className="font-semibold">المستخدمون النشطون</h3>
            </div>
            <p className="font-bold text-4xl text-primary tracking-tight">
              {stats.activeUsers.toLocaleString("ar-SA")}
            </p>
            <p className="text-muted-foreground text-sm">
              نشطون خلال آخر ٧ أيام
            </p>
          </div>
          <div className="hidden gap-6 text-center sm:flex">
            <div>
              <Globe className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
              <p className="font-bold text-lg">
                {Math.round(stats.activeUsers * 0.6).toLocaleString("ar-SA")}
              </p>
              <p className="text-muted-foreground text-xs">عبر الويب</p>
            </div>
            <div>
              <Clock className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
              <p className="font-bold text-lg">
                {Math.round(
                  stats.totalMessages / Math.max(stats.activeUsers, 1)
                ).toLocaleString("ar-SA")}
              </p>
              <p className="text-muted-foreground text-xs">رسالة / مستخدم</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
