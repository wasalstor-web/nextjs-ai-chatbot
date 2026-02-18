"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  BarChart3,
  CalendarDays,
  DollarSign,
  Eye,
  FileText,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AdminMetrics {
  totalUsers: number;
  activeConsultations: number;
  totalContracts: number;
  systemHealth: number;
  pendingReview: number;
  weeklyGrowth: number;
}

const defaultMetrics: AdminMetrics = {
  totalUsers: 1250,
  activeConsultations: 342,
  totalContracts: 589,
  systemHealth: 99.2,
  pendingReview: 28,
  weeklyGrowth: 12,
};

const statCards = [
  {
    title: "المستخدمون النشطون",
    value: "1,250",
    change: "+12%",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "الاستشارات المفتوحة",
    value: "342",
    change: "+8%",
    icon: FileText,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "العقود المعالجة",
    value: "589",
    change: "+15%",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "صحة النظام",
    value: "99.2%",
    change: "✓ ممتاز",
    icon: Eye,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
  },
];

export default function AdminDashboardPage() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-gray-950"
      initial={{ opacity: 0 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12" dir="rtl">
        {/* Header */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
        >
          <h1 className="mb-2 font-bold text-4xl text-gray-900 dark:text-white">
            لوحة التحكم الإدارية
          </h1>
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>آخر تحديث: </span>
            <span>
              {new Date().toLocaleDateString("ar-SA", {
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                key={idx}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card className={`overflow-hidden p-6 ${stat.bgColor}`}>
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`rounded-lg bg-linear-to-br p-3 ${stat.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-semibold text-green-600 text-sm dark:text-green-400">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="mb-1 text-gray-600 text-sm dark:text-gray-400">
                    {stat.title}
                  </h3>
                  <p className="font-bold text-3xl text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          {/* Activity Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Card className="p-8">
              <h2 className="mb-6 flex items-center gap-2 font-bold text-gray-900 text-xl dark:text-white">
                <TrendingUp className="h-5 w-5 text-green-600" />
                نشاط الاستشارات
              </h2>

              <div className="space-y-4">
                {[
                  { day: "الأحد", count: 45, percent: 60 },
                  { day: "الاثنين", count: 67, percent: 90 },
                  { day: "الثلاثاء", count: 52, percent: 70 },
                  { day: "الأربعاء", count: 71, percent: 95 },
                  { day: "الخميس", count: 58, percent: 77 },
                  { day: "الجمعة", count: 64, percent: 85 },
                  { day: "السبت", count: 49, percent: 65 },
                ].map((item) => (
                  <div key={item.day}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-700 text-sm dark:text-gray-300">
                        {item.day}
                      </span>
                      <span className="text-gray-600 text-sm dark:text-gray-400">
                        {item.count} استشارة
                      </span>
                    </div>
                    <motion.div
                      className="h-2 rounded-full bg-linear-to-r from-green-500 to-emerald-500"
                      initial={{ width: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileInView={{ width: `${item.percent}%` }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Consultation Types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Card className="p-8">
              <h2 className="mb-6 flex items-center gap-2 font-bold text-gray-900 text-xl dark:text-white">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                توزيع أنواع الاستشارات
              </h2>

              <div className="space-y-4">
                {[
                  { type: "عقاري", count: "125", percent: 65 },
                  { type: "عمل", count: "98", percent: 50 },
                  { type: "تجاري", count: "67", percent: 35 },
                  { type: "جزائي", count: "52", percent: 27 },
                ].map((item) => (
                  <div key={item.type}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-700 text-sm dark:text-gray-300">
                        {item.type}
                      </span>
                      <span className="font-semibold text-gray-900 text-sm dark:text-white">
                        {item.count}
                      </span>
                    </div>
                    <motion.div
                      className="h-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-500"
                      initial={{ width: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileInView={{ width: `${item.percent}%` }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* System Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="border-l-4 border-l-green-500 p-8">
            <h2 className="mb-6 font-bold text-2xl text-gray-900 dark:text-white">
              إدارة النظام
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Database Status */}
              <div className="rounded-lg bg-linear-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-800 dark:to-slate-900">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  قاعدة البيانات
                </h3>
                <p className="mb-2 font-bold text-4xl text-gray-900 dark:text-white">
                  99.8%
                </p>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  استقرار النظام
                </p>
              </div>

              {/* Storage */}
              <div className="rounded-lg bg-linear-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-800 dark:to-slate-900">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  التخزين
                </h3>
                <p className="mb-2 font-bold text-4xl text-gray-900 dark:text-white">
                  245GB
                </p>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  من 500GB متاح
                </p>
              </div>

              {/* API Response */}
              <div className="rounded-lg bg-linear-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-800 dark:to-slate-900">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  API Performance
                </h3>
                <p className="mb-2 font-bold text-4xl text-gray-900 dark:text-white">
                  45ms
                </p>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  وقت الاستجابة
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                عرض السجلات
              </Button>
              <Button variant="outline">إعدادات النظام</Button>
              <Button variant="outline">التقارير</Button>
              <Button variant="outline">المستخدمون</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
