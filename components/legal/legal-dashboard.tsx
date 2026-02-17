"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LegalCaseStats {
  totalCases: number;
  openCases: number;
  closedCases: number;
  wonCases: number;
  byType: Record<string, number>;
}

interface ConsultationStats {
  totalConsultations: number;
  openConsultations: number;
  closedConsultations: number;
  byType: Record<string, number>;
}

interface ContractStats {
  totalContracts: number;
  draftContracts: number;
  signedContracts: number;
  totalDownloads: number;
}

interface LegalDashboardProps {
  consultationStats?: ConsultationStats;
  caseStats?: LegalCaseStats;
  contractStats?: ContractStats;
}

const statCardConfig = [
  {
    key: "consultations",
    label: "الاستشارات",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    key: "cases",
    label: "القضايا",
    icon: Briefcase,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    key: "contracts",
    label: "العقود",
    icon: FileText,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    key: "team",
    label: "الفريق",
    icon: Users,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
  },
];

export function StatCard({
  icon: Icon,
  label,
  value,
  subtext,
  bgColor,
  gradientColor,
  trend,
}: {
  icon: React.ComponentType<any>;
  label: string;
  value: string | number;
  subtext?: string;
  bgColor: string;
  gradientColor: string;
  trend?: { value: number; isPositive: boolean };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card className={`overflow-hidden ${bgColor}`}>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div
              className={`rounded-lg bg-gradient-to-br p-3 ${gradientColor}`}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            {trend && (
              <div
                className={`flex items-center gap-1 font-semibold text-sm ${trend.isPositive ? "text-green-600" : "text-red-600"}`}
              >
                <TrendingUp
                  className={`h-4 w-4 ${!trend.isPositive && "rotate-180"}`}
                />
                {Math.abs(trend.value)}%
              </div>
            )}
          </div>
          <h3 className="mb-1 font-medium text-gray-600 text-sm dark:text-gray-400">
            {label}
          </h3>
          <p className="font-bold text-3xl text-gray-900 dark:text-white">
            {value}
          </p>
          {subtext && (
            <p className="mt-2 text-gray-500 text-xs dark:text-gray-400">
              {subtext}
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

export function LegalDashboard({
  consultationStats,
  caseStats,
  contractStats,
}: LegalDashboardProps) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="space-y-8"
      initial={{ opacity: 0 }}
    >
      {/* Header */}
      <div dir="rtl">
        <h1 className="mb-2 font-bold text-4xl text-gray-900 dark:text-white">
          لوحة تحكم المستشار القانوني
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          مرحباً بك، إليك ملخص نشاطك القانوني
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Consultations */}
        {consultationStats && (
          <StatCard
            bgColor="bg-blue-50 dark:bg-blue-900/20"
            gradientColor="from-blue-500 to-blue-600"
            icon={FileText}
            label="الاستشارات القانونية"
            subtext={`${consultationStats.openConsultations} مفتوحة`}
            trend={{ value: 12, isPositive: true }}
            value={consultationStats.totalConsultations}
          />
        )}

        {/* Cases */}
        {caseStats && (
          <StatCard
            bgColor="bg-purple-50 dark:bg-purple-900/20"
            gradientColor="from-purple-500 to-purple-600"
            icon={Briefcase}
            label="القضايا المعلقة"
            subtext={`${caseStats.totalCases} إجمالي`}
            trend={{ value: 5, isPositive: false }}
            value={caseStats.openCases}
          />
        )}

        {/* Contracts */}
        {contractStats && (
          <StatCard
            bgColor="bg-green-50 dark:bg-green-900/20"
            gradientColor="from-green-500 to-green-600"
            icon={FileText}
            label="العقود النشطة"
            subtext={`${contractStats.draftContracts} في الصيغة الأولية`}
            trend={{ value: 8, isPositive: true }}
            value={contractStats.signedContracts}
          />
        )}

        {/* Success Rate */}
        {caseStats && (
          <StatCard
            bgColor="bg-emerald-50 dark:bg-emerald-900/20"
            gradientColor="from-emerald-500 to-emerald-600"
            icon={CheckCircle}
            label="معدل النجاح"
            subtext={`${caseStats.wonCases} قضايا فائزة`}
            value={`${Math.round((caseStats.wonCases / (caseStats.closedCases || 1)) * 100)}%`}
          />
        )}
      </div>

      {/* Consultation Types Breakdown */}
      {consultationStats?.byType &&
        Object.keys(consultationStats.byType).length > 0 && (
          <Card className="p-6">
            <h2 className="mb-6 flex items-center gap-2 font-bold text-gray-900 text-xl dark:text-white">
              <BarChart3 className="h-5 w-5" />
              توزيع الاستشارات حسب النوع
            </h2>
            <div className="space-y-4">
              {Object.entries(consultationStats.byType).map(([type, count]) => {
                const percentage = Math.round(
                  (count / consultationStats.totalConsultations) * 100
                );
                return (
                  <div key={type}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {type}
                      </span>
                      <span className="text-gray-600 text-sm dark:text-gray-400">
                        {count}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                        initial={{ width: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileInView={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

      {/* Case Types Distribution */}
      {caseStats?.byType && Object.keys(caseStats.byType).length > 0 && (
        <Card className="p-6">
          <h2 className="mb-6 flex items-center gap-2 font-bold text-gray-900 text-xl dark:text-white">
            <Briefcase className="h-5 w-5" />
            توزيع القضايا حسب النوع
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(caseStats.byType).map(([type, count]) => (
              <div
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                key={type}
              >
                <p className="mb-1 text-gray-600 text-sm dark:text-gray-400">
                  {type}
                </p>
                <p className="font-bold text-2xl text-gray-900 dark:text-white">
                  {count}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Quick Actions */}
      <Card className="border-l-4 border-l-green-500 p-6">
        <h2 className="mb-4 font-bold text-gray-900 text-xl dark:text-white">
          الإجراءات السريعة
        </h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Button className="h-auto justify-start bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 text-white hover:from-green-600 hover:to-emerald-600">
            <FileText className="ml-2 h-4 w-4" />
            <span>استشارة جديدة</span>
          </Button>
          <Button className="h-auto justify-start px-4 py-3" variant="outline">
            <Briefcase className="ml-2 h-4 w-4" />
            <span>قضية جديدة</span>
          </Button>
          <Button className="h-auto justify-start px-4 py-3" variant="outline">
            <FileText className="ml-2 h-4 w-4" />
            <span>عقد جديد</span>
          </Button>
          <Button className="h-auto justify-start px-4 py-3" variant="outline">
            <FileText className="ml-2 h-4 w-4" />
            <span>تحليل عقد</span>
          </Button>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="mb-6 font-bold text-gray-900 text-xl dark:text-white">
          النشاط الأخير
        </h2>
        <div className="max-h-80 space-y-4 overflow-y-auto">
          {[
            {
              type: "consultation",
              title: "استشارة جديدة: عقد بيع عقاري",
              time: "منذ ساعة",
              status: "جديد",
            },
            {
              type: "case",
              title: "تم إغلاق القضية: قضية تجارية",
              time: "منذ 3 ساعات",
              status: "مغلق",
            },
            {
              type: "contract",
              title: "تم تحليل العقد: عقد استئجار",
              time: "منذ يوم واحد",
              status: "تحليل",
            },
          ].map((activity, idx) => (
            <div
              className="flex items-start gap-4 border-gray-200 border-b pb-4 last:border-b-0 last:pb-0 dark:border-gray-700"
              key={idx}
            >
              <div
                className={`rounded-lg p-2 ${activity.type === "consultation" ? "bg-blue-100 dark:bg-blue-900" : activity.type === "case" ? "bg-purple-100 dark:bg-purple-900" : "bg-green-100 dark:bg-green-900"}`}
              >
                <FileText
                  className={`h-4 w-4 ${activity.type === "consultation" ? "text-blue-600" : activity.type === "case" ? "text-purple-600" : "text-green-600"}`}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {activity.time}
                </p>
              </div>
              <Badge variant="outline">{activity.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
