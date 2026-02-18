"use client";

import { motion } from "framer-motion";
import { AlertCircle, Award, CheckCircle, Clock } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Consultation = {
  id: string;
  title: string;
  consultationType: string;
  severity: "عاجل" | "مهم" | "عادي";
  status: "مفتوح" | "قيد الدراسة" | "مغلق" | "محفوظ";
  description: string;
  createdAt: Date;
  riskLevel?: "منخفض" | "متوسط" | "عالي" | "حرج";
};

const consultationTypeConfig: Record<
  string,
  { label: string; color: string; icon: string }
> = {
  عقاري: {
    label: "استشارة عقارية",
    color: "from-blue-500 to-blue-600",
    icon: "🏠",
  },
  عمل: {
    label: "استشارة عمل",
    color: "from-green-500 to-green-600",
    icon: "💼",
  },
  تجاري: {
    label: "استشارة تجارية",
    color: "from-purple-500 to-purple-600",
    icon: "🏪",
  },
  جزائي: {
    label: "استشارة جزائية",
    color: "from-red-500 to-red-600",
    icon: "⚖️",
  },
  أسري: {
    label: "استشارة أسرية",
    color: "from-pink-500 to-pink-600",
    icon: "👨‍👩‍👧",
  },
  إداري: {
    label: "استشارة إدارية",
    color: "from-orange-500 to-orange-600",
    icon: "📋",
  },
  "ملكية فكرية": {
    label: "استشارة ملكية فكرية",
    color: "from-indigo-500 to-indigo-600",
    icon: "🔒",
  },
  استثمار: {
    label: "استشارة استثمار",
    color: "from-emerald-500 to-emerald-600",
    icon: "📈",
  },
  عقود: {
    label: "استشارة عقود",
    color: "from-cyan-500 to-cyan-600",
    icon: "📄",
  },
  أخرى: {
    label: "استشارة أخرى",
    color: "from-gray-500 to-gray-600",
    icon: "❓",
  },
};

const statusConfig: Record<
  string,
  { label: string; icon: ReactNode; color: string }
> = {
  مفتوح: {
    label: "مفتوح",
    icon: <AlertCircle className="h-4 w-4" />,
    color: "text-orange-600",
  },
  "قيد الدراسة": {
    label: "قيد الدراسة",
    icon: <Clock className="h-4 w-4" />,
    color: "text-blue-600",
  },
  مغلق: {
    label: "مغلق",
    icon: <CheckCircle className="h-4 w-4" />,
    color: "text-green-600",
  },
  محفوظ: {
    label: "محفوظ",
    icon: <Award className="h-4 w-4" />,
    color: "text-purple-600",
  },
};

export function ConsultationCard({
  consultation,
  onView,
}: {
  consultation: Consultation;
  onView: (id: string) => void;
}) {
  const typeConfig =
    consultationTypeConfig[consultation.consultationType] ||
    consultationTypeConfig.أخرى;
  const statusColorConfig = statusConfig[consultation.status];

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card className="overflow-hidden border-l-4 border-l-green-500 p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-start gap-3">
            <span className="text-3xl">{typeConfig.icon}</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                {consultation.title}
              </h3>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                {typeConfig.label}
              </p>
            </div>
          </div>
          <div
            className={`rounded-full px-3 py-1 font-semibold text-xs ${
              consultation.severity === "عاجل"
                ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                : consultation.severity === "مهم"
                  ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200"
                  : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
            }`}
          >
            {consultation.severity}
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-gray-600 text-sm dark:text-gray-400">
          {consultation.description}
        </p>

        <div className="mb-4 flex items-center gap-2">
          <span
            className={`flex items-center gap-1 text-sm ${statusColorConfig.color}`}
          >
            {statusColorConfig.icon}
            {statusColorConfig.label}
          </span>
          {consultation.riskLevel && (
            <span
              className={`rounded px-2 py-1 font-semibold text-xs ${
                consultation.riskLevel === "حرج"
                  ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                  : consultation.riskLevel === "عالي"
                    ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200"
                    : consultation.riskLevel === "متوسط"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
              }`}
            >
              {consultation.riskLevel}
            </span>
          )}
        </div>

        <Button
          className="w-full bg-linear-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500"
          onClick={() => onView(consultation.id)}
          size="sm"
        >
          عرض التفاصيل
        </Button>
      </Card>
    </motion.div>
  );
}

export function ConsultationsList({
  consultations,
  onView,
}: {
  consultations: Consultation[];
  onView: (id: string) => void;
}) {
  if (consultations.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">لا توجد استشارات</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {consultations.map((consultation) => (
        <ConsultationCard
          consultation={consultation}
          key={consultation.id}
          onView={onView}
        />
      ))}
    </div>
  );
}

export function NewConsultationForm({
  isLoading,
  onSubmit,
}: {
  isLoading: boolean;
  onSubmit: (data: Record<string, string>) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    consultationType: "عقاري",
    severity: "عادي",
  });

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10"
      initial={{ opacity: 0, y: -20 }}
    >
      <Card className="border-2 border-green-500 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/20">
        <h3 className="mb-6 font-bold text-gray-900 text-xl dark:text-white">
          إنشاء استشارة قانونية جديدة
        </h3>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
        >
          <div>
            <label
              className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
              htmlFor="consultation-type"
            >
              نوع الاستشارة
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              id="consultation-type"
              onChange={(e) =>
                setFormData({ ...formData, consultationType: e.target.value })
              }
              value={formData.consultationType}
            >
              {Object.entries(consultationTypeConfig).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
              htmlFor="consultation-title"
            >
              العنوان
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              id="consultation-title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="مثال: قضية عقارية في الرياض"
              required
              type="text"
              value={formData.title}
            />
          </div>

          <div>
            <label
              className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
              htmlFor="consultation-description"
            >
              الوصف التفصيلي
            </label>
            <textarea
              className="min-h-24 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              id="consultation-description"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="اشرح الحالة والمشكلة بشكل تفصيلي..."
              required
              value={formData.description}
            />
          </div>

          <div>
            <label
              className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
              htmlFor="consultation-severity"
            >
              درجة الاستعجالية
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              id="consultation-severity"
              onChange={(e) =>
                setFormData({ ...formData, severity: e.target.value })
              }
              value={formData.severity}
            >
              <option value="عادي">عادي</option>
              <option value="مهم">مهم</option>
              <option value="عاجل">عاجل</option>
            </select>
          </div>

          <motion.button
            className="w-full rounded-lg bg-linear-to-r from-green-600 to-emerald-600 py-2.5 font-semibold text-white transition-all hover:from-green-500 hover:to-emerald-500 disabled:opacity-50"
            disabled={isLoading}
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? "جاري المعالجة..." : "إنشاء الاستشارة"}
          </motion.button>
        </form>
      </Card>
    </motion.div>
  );
}
