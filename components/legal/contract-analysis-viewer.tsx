"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ChevronDown, FileText, Undo } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface ContractAnalysis {
  riskLevel: "منخفض" | "متوسط" | "عالي" | "حرج";
  executiveSummary: string;
  dangerousTerms: Array<{
    term: string;
    risk: string;
    explanation: string;
    suggestion: string;
  }>;
  legalGaps: string[];
  financialRisks: string[];
  recommendations: string[];
  saudiLawCompliance: string;
}

interface ContractAnalysisViewerProps {
  analysis: ContractAnalysis;
  contractTitle?: string;
  onExport?: () => void;
}

export function ContractAnalysisViewer({
  analysis,
  contractTitle = "العقد",
  onExport,
}: ContractAnalysisViewerProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    summary: true,
    dangerous: true,
    recommendations: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const riskColors: Record<string, string> = {
    حرج: "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-900",
    عالي: "bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-900",
    متوسط:
      "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-900",
    منخفض:
      "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-900",
  };

  const riskBadgeColors: Record<string, string> = {
    حرج: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    عالي: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    متوسط:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    منخفض: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="space-y-6"
      initial={{ opacity: 0 }}
    >
      {/* Header */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
      >
        <div>
          <h2 className="flex items-center gap-2 font-bold text-2xl text-gray-900 dark:text-white">
            <FileText className="h-6 w-6 text-green-600" />
            تحليل العقد: {contractTitle}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            تقرير شامل عن المخاطر والتوصيات
          </p>
        </div>
        {onExport && (
          <Button onClick={onExport} size="sm" variant="outline">
            تحميل PDF
          </Button>
        )}
      </motion.div>

      {/* Risk Level Summary */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-lg border-2 p-6 ${riskColors[analysis.riskLevel]}`}
        initial={{ opacity: 0, scale: 0.95 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900 text-lg dark:text-white">
              مستوى المخاطر الإجمالي
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              تقييم شامل لمخاطر هذا العقد
            </p>
          </div>
          <span
            className={`rounded-full px-4 py-2 font-bold text-xl ${riskBadgeColors[analysis.riskLevel]}`}
          >
            {analysis.riskLevel}
          </span>
        </div>
      </motion.div>

      {/* Executive Summary */}
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card
          className="cursor-pointer border-l-4 border-l-green-500 p-6 transition-all hover:shadow-md"
          onClick={() => toggleSection("summary")}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900 text-lg dark:text-white">
              الملخص التنفيذي
            </h3>
            <motion.div
              animate={{ rotate: expandedSections.summary ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </div>

          <AnimatePresence>
            {expandedSections.summary && (
              <motion.div
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                initial={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {analysis.executiveSummary}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>

      {/* Dangerous Terms */}
      {analysis.dangerousTerms.length > 0 && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            className="cursor-pointer border-l-4 border-l-red-500 p-6 transition-all hover:shadow-md"
            onClick={() => toggleSection("dangerous")}
          >
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-bold text-gray-900 text-lg dark:text-white">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                البنود الخطيرة
              </h3>
              <motion.div
                animate={{ rotate: expandedSections.dangerous ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </motion.div>
            </div>

            <AnimatePresence>
              {expandedSections.dangerous && (
                <motion.div
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 space-y-4"
                  exit={{ opacity: 0, height: 0 }}
                  initial={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {analysis.dangerousTerms.map((term, idx) => (
                    <div
                      className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20"
                      key={idx}
                    >
                      <div className="mb-3 flex items-start justify-between">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {term.term}
                        </p>
                        <span className="rounded-full bg-red-100 px-3 py-1 font-bold text-red-700 text-xs dark:bg-red-900 dark:text-red-200">
                          {term.risk}
                        </span>
                      </div>
                      <p className="mb-3 text-gray-600 text-sm dark:text-gray-400">
                        {term.explanation}
                      </p>
                      <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950/30">
                        <p className="font-semibold text-green-800 text-sm dark:text-green-200">
                          الاقتراح:
                        </p>
                        <p className="text-green-700 text-sm dark:text-green-300">
                          {term.suggestion}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      )}

      {/* Compliance Status */}
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-l-4 border-l-blue-500 p-6">
          <h3 className="font-bold text-gray-900 text-lg dark:text-white">
            الامتثال للقانون السعودي
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {analysis.saudiLawCompliance}
          </p>
        </Card>
      </motion.div>

      {/* Recommendations */}
      {analysis.recommendations.length > 0 && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card
            className="cursor-pointer border-l-4 border-l-green-500 p-6 transition-all hover:shadow-md"
            onClick={() => toggleSection("recommendations")}
          >
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-bold text-gray-900 text-lg dark:text-white">
                <Undo className="h-5 w-5 text-green-600" />
                التوصيات
              </h3>
              <motion.div
                animate={{
                  rotate: expandedSections.recommendations ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </motion.div>
            </div>

            <AnimatePresence>
              {expandedSections.recommendations && (
                <motion.div
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 space-y-2"
                  exit={{ opacity: 0, height: 0 }}
                  initial={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {analysis.recommendations.map((rec, idx) => (
                    <div
                      className="flex gap-3 rounded-lg bg-green-50 p-3 dark:bg-green-950/20"
                      key={idx}
                    >
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-200 font-bold text-green-700 text-sm dark:bg-green-900 dark:text-green-200">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">{rec}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}

export function ContractAnalysisLoader() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="space-y-6"
      initial={{ opacity: 0 }}
    >
      {[...Array(4)].map((_, i) => (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          className="h-24 rounded-lg bg-gray-200 dark:bg-gray-700"
          key={i}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </motion.div>
  );
}
