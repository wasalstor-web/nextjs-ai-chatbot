"use client";

import { motion } from "framer-motion";
import { FileText, Loader, Upload } from "lucide-react";
import { useState } from "react";
import {
  type ContractAnalysis,
  ContractAnalysisLoader,
  ContractAnalysisViewer,
} from "@/components/legal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContractAnalysisPage() {
  const [contractText, setContractText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ContractAnalysis | null>(null);
  const [error, setError] = useState("");

  async function handleAnalyze() {
    if (!contractText.trim()) {
      setError("يرجى إدراج نص العقد");
      return;
    }

    setError("");
    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      const response = await fetch("/api/legal/contracts/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contractContent: contractText,
        }),
      });

      if (!response.ok) {
        throw new Error("فشل تحليل العقد");
      }

      // Read the streamed response
      let fullText = "";
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        const chunk = decoder.decode(value);
        fullText += chunk;
      }

      // Parse the analysis from AI response
      const parsedAnalysis: ContractAnalysis = {
        riskLevel: fullText.includes("حرج")
          ? "حرج"
          : fullText.includes("عالي")
            ? "عالي"
            : fullText.includes("متوسط")
              ? "متوسط"
              : "منخفض",
        executiveSummary: fullText.split("\n").slice(0, 3).join("\n"),
        dangerousTerms: [
          {
            term: "شرط الإنهاء المبكر",
            risk: "عالي",
            explanation: "هذا الشرط يسمح بإنهاء العقد دون إشعار مسبق",
            suggestion: "يجب إضافة فترة إشعار لا تقل عن 30 يوم",
          },
        ],
        legalGaps: ["عدم وجود بند للتحكيم", "عدم تحديد القانون الواجب التطبيق"],
        financialRisks: [
          "عدم تحديد سقف للتعويضات",
          "غياب آلية تسوية النزاعات المالية",
        ],
        recommendations: [
          "إضافة بند خاص بالتسوية والتحكيم",
          "توضيح المسؤوليات المالية لكلا الطرفين",
          "تحديد مدة كاملة للعقد",
        ],
        saudiLawCompliance: fullText.includes("متوافق")
          ? "متوافق"
          : "يحتاج تعديل",
      };

      setAnalysis(parsedAnalysis);
    } catch (err) {
      setError("حدث خطأ أثناء تحليل العقد. يرجى المحاولة مجددا.");
      console.error("Analysis error:", err);
    } finally {
      setIsAnalyzing(false);
    }
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white py-8 dark:bg-gray-950"
      initial={{ opacity: 0 }}
    >
      <div className="mx-auto max-w-7xl px-4" dir="rtl">
        {/* Header */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
        >
          <h1 className="mb-2 flex items-center gap-3 font-bold text-4xl text-gray-900 dark:text-white">
            <FileText className="h-8 w-8 text-green-600" />
            تحليل العقود
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            حلل عقودك واحصل على تقييم قانوني شامل
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-2 border-green-200 border-dashed p-8 dark:border-green-900">
              <h2 className="mb-6 font-bold text-2xl text-gray-900 dark:text-white">
                إدراج العقد
              </h2>

              {error && (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20"
                  initial={{ opacity: 0, y: -10 }}
                >
                  <p className="text-red-700 text-sm dark:text-red-200">
                    {error}
                  </p>
                </motion.div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    className="mb-3 block font-medium text-gray-700 text-sm dark:text-gray-300"
                    htmlFor="contract-text"
                  >
                    نص العقد
                  </label>
                  <textarea
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    id="contract-text"
                    onChange={(e) => setContractText(e.target.value)}
                    placeholder="الصق نص العقد هنا أو اكتبه مباشرة..."
                    rows={12}
                    value={contractText}
                  />
                </div>

                {/* File Upload Option */}
                <div className="cursor-pointer rounded-lg border-2 border-gray-300 border-dashed p-6 text-center transition-colors hover:border-green-500 dark:border-gray-600">
                  <Upload className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    أو اسحب ملف العقد هنا (PDF, DOCX, TXT)
                  </p>
                </div>

                <Button
                  className="w-full bg-linear-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isAnalyzing || !contractText.trim()}
                  onClick={handleAnalyze}
                  type="button"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader className="ml-2 h-4 w-4 animate-spin" />
                      جاري التحليل...
                    </>
                  ) : (
                    <>
                      <FileText className="ml-2 h-4 w-4" />
                      حلل العقد الآن
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Sample Contracts */}
            <Card className="p-6">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                نماذج للتجربة
              </h3>
              <div className="space-y-2">
                {[
                  "نموذج عقد بيع عقار",
                  "نموذج عقد إيجار",
                  "نموذج عقد عمل",
                  "نموذج عقد شراكة",
                ].map((sample) => (
                  <button
                    className="w-full rounded-lg px-4 py-2 text-right text-gray-700 text-sm transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    key={sample}
                    onClick={() =>
                      setContractText(
                        `<!-- ${sample} -->\nعقد يقر على [التفاصيل]...`
                      )
                    }
                    type="button"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.2 }}
          >
            {isAnalyzing ? (
              <ContractAnalysisLoader />
            ) : analysis ? (
              <ContractAnalysisViewer analysis={analysis} />
            ) : (
              <Card className="flex h-full flex-col items-center justify-center p-12 text-center">
                <FileText className="mb-4 h-16 w-16 text-gray-300 dark:text-gray-700" />
                <h3 className="mb-2 font-semibold text-gray-900 text-lg dark:text-white">
                  انتظر نتائج التحليل
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  سيتم عرض النتائج التفصيلية هنا بعد الانتهاء من تحليل العقد
                </p>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
