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
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

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

export function DashboardOverview() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchStats = async () => {
      try {
        // Simulated data for now
        setStats({
          totalUsers: 1250,
          totalChats: 5430,
          totalMessages: 125000,
          totalAgents: 45,
          totalDocuments: 890,
          totalFiles: 234,
          activeUsers: 320,
          growthRate: 12.5,
        });
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
      title: "إجمالي المستخدمين",
      value: stats?.totalUsers ?? 0,
      description: `${stats?.activeUsers ?? 0} مستخدم نشط`,
      icon: Users,
      trend: `+${stats?.growthRate ?? 0}%`,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "إجمالي المحادثات",
      value: stats?.totalChats ?? 0,
      description: "محادثات نشطة",
      icon: MessageSquare,
      trend: "+8.2%",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "إجمالي الرسائل",
      value: stats?.totalMessages ?? 0,
      description: "رسائل مرسلة",
      icon: Activity,
      trend: "+15.3%",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "إجمالي الوكلاء",
      value: stats?.totalAgents ?? 0,
      description: "وكلاء منشورة",
      icon: Bot,
      trend: "+5.1%",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "المستندات",
      value: stats?.totalDocuments ?? 0,
      description: "مستندات منشأة",
      icon: FileText,
      trend: "+12.4%",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      title: "الملفات المرفوعة",
      value: stats?.totalFiles ?? 0,
      description: "ملفات مخزنة",
      icon: Upload,
      trend: "+3.7%",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  if (loading) {
    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <Skeleton className="h-8 w-48" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-4 rounded" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-24 mb-2" />
                <Skeleton className="h-3 w-40" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">لوحة التحكم</h2>
          <p className="text-muted-foreground">
            نظرة عامة على إحصائيات النظام
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${card.bgColor}`}>
                  <Icon className={`h-4 w-4 ${card.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                  <span>{card.description}</span>
                  <span className="flex items-center text-green-500">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {card.trend}
                  </span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>نشاط المستخدمين</CardTitle>
            <CardDescription>
              آخر 30 يوم
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-[300px] text-muted-foreground">
              <BarChart3 className="h-12 w-12 opacity-50" />
              <span className="ml-2">الرسم البياني سيظهر هنا</span>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>الوكلاء الأكثر استخداماً</CardTitle>
            <CardDescription>
              Top 5 Agents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">وكيل {i}</p>
                      <p className="text-xs text-muted-foreground">
                        {Math.floor(Math.random() * 1000)} استخدام
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

