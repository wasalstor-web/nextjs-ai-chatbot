"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, LayoutGrid, LayoutList, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  ConsultationsList,
  LegalDashboard,
  NewConsultationForm,
} from "@/components/legal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

type ConsultationStats = {
  totalConsultations: number;
  openConsultations: number;
  closedConsultations: number;
  byType: Record<string, number>;
};

export default function LegalConsultationsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [stats, setStats] = useState<ConsultationStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("الكل");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showNewForm, setShowNewForm] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      fetchConsultations();
    }
    // biome-ignore lint/correctness/useExhaustiveDependencies: fetchConsultations is stable within the component scope
  }, [session?.user?.id]);

  async function fetchConsultations() {
    try {
      setIsLoading(true);
      const response = await fetch("/api/legal/consultations");

      if (!response.ok) {
        throw new Error("Failed to fetch consultations");
      }

      const data = await response.json();
      setConsultations(data);

      // Calculate stats
      const totalConsultations = data.length;
      const openConsultations = data.filter(
        (c: Consultation) => c.status === "مفتوح"
      ).length;
      const closedConsultations = data.filter(
        (c: Consultation) => c.status === "مغلق"
      ).length;

      const byType = data.reduce(
        (acc: Record<string, number>, c: Consultation) => {
          acc[c.consultationType] = (acc[c.consultationType] || 0) + 1;
          return acc;
        },
        {}
      );

      setStats({
        totalConsultations,
        openConsultations,
        closedConsultations,
        byType,
      });
    } catch (error) {
      console.error("Error fetching consultations:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateConsultation(formData: Record<string, string>) {
    try {
      setIsCreating(true);
      const response = await fetch("/api/legal/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          getAIAnalysis: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create consultation");
      }

      setShowNewForm(false);
      await fetchConsultations();
    } catch (error) {
      console.error("Error creating consultation:", error);
      alert("حدث خطأ أثناء إنشاء الاستشارة");
    } finally {
      setIsCreating(false);
    }
  }

  // Filter consultations
  const filteredConsultations = consultations.filter((c) => {
    const matchesSearch =
      c.title.includes(searchTerm) ||
      c.description?.includes(searchTerm) ||
      c.consultationType.includes(searchTerm);

    const matchesFilter = filterStatus === "الكل" || c.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          className="h-12 w-12 rounded-full border-4 border-green-200 border-t-green-600"
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-950"
      initial={{ opacity: 0 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8" dir="rtl">
        {/* Dashboard Stats */}
        {stats && <LegalDashboard consultationStats={stats} />}

        <div className="mt-12 space-y-6">
          {/* Header */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            <div>
              <h2 className="flex items-center gap-3 font-bold text-3xl text-gray-900 dark:text-white">
                <FileText className="h-8 w-8 text-green-600" />
                الاستشارات القانونية
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                إدارة جميع استشاراتك القانونية
              </p>
            </div>
            <Button
              className="bg-linear-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500"
              onClick={() => setShowNewForm(true)}
            >
              <Plus className="ml-2 h-4 w-4" />
              استشارة جديدة
            </Button>
          </motion.div>

          {/* New Consultation Form */}
          <AnimatePresence>
            {showNewForm && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="relative z-50"
                exit={{ opacity: 0, y: -20 }}
                initial={{ opacity: 0, y: -20 }}
              >
                <div className="mb-6">
                  <NewConsultationForm
                    isLoading={isCreating}
                    onSubmit={handleCreateConsultation}
                  />
                  <Button
                    className="mt-4 w-full text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    onClick={() => setShowNewForm(false)}
                    variant="ghost"
                  >
                    إلغاء
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Filters and Search */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative flex-1">
              <Search className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 transform text-gray-400" />
              <Input
                className="py-2.5 pr-10 pl-4"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن استشارة..."
                type="text"
                value={searchTerm}
              />
            </div>

            <div className="flex items-center gap-3">
              <select
                aria-label="تصفية حسب الحالة"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                onChange={(e) => setFilterStatus(e.target.value)}
                value={filterStatus}
              >
                <option value="الكل">جميع الحالات</option>
                <option value="مفتوح">مفتوح</option>
                <option value="قيد الدراسة">قيد الدراسة</option>
                <option value="مغلق">مغلق</option>
                <option value="محفوظ">محفوظ</option>
              </select>

              <div className="flex items-center gap-2 rounded-lg border border-gray-300 p-1 dark:border-gray-600">
                <button
                  className={`rounded p-2 ${
                    viewMode === "grid"
                      ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  onClick={() => setViewMode("grid")}
                  title="عرض شبكة"
                  type="button"
                >
                  <LayoutGrid className="h-5 w-5" />
                </button>
                <button
                  className={`rounded p-2 ${
                    viewMode === "list"
                      ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  onClick={() => setViewMode("list")}
                  title="عرض قائمة"
                  type="button"
                >
                  <LayoutList className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Consultations List */}
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isLoading ? (
              <div className="py-12 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  className="mx-auto h-12 w-12 rounded-full border-4 border-green-200 border-t-green-600"
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            ) : (
              <ConsultationsList
                consultations={filteredConsultations}
                onView={(id) => router.push(`/legal/consultations/${id}`)}
              />
            )}
          </motion.div>

          {/* Empty State */}
          {!isLoading && filteredConsultations.length === 0 && !showNewForm && (
            <motion.div
              animate={{ opacity: 1 }}
              className="py-12 text-center"
              initial={{ opacity: 0 }}
            >
              <FileText className="mx-auto mb-4 h-16 w-16 text-gray-300 dark:text-gray-700" />
              <h3 className="mb-2 font-semibold text-gray-900 text-lg dark:text-white">
                {consultations.length === 0
                  ? "لا توجد استشارات"
                  : "لم تجد نتائج للبحث"}
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {consultations.length === 0
                  ? "ابدأ باستشارة قانونية جديدة"
                  : "جرب تغيير معايير البحث"}
              </p>
              {consultations.length === 0 && (
                <Button
                  className="bg-linear-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500"
                  onClick={() => setShowNewForm(true)}
                >
                  <Plus className="ml-2 h-4 w-4" />
                  إنشاء استشارة
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
