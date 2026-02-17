"use client";

import { motion } from "framer-motion";
import {
  Building2,
  FileSearch,
  Gavel,
  Globe,
  Landmark,
  Lightbulb,
  Scale,
  Search,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/landing/glass-card";

const useCases = [
  {
    icon: Building2,
    title: "القانون العقاري",
    description: "استشارات متخصصة في الأنظمة العقارية والإيجار التجاري",
    examples: [
      "مراجعة عقود الإيجار التجاري والسكني",
      "حقوق المستأجر والمؤجر",
      "نظام التسجيل العيني للعقار",
      "نزاعات الملكية وفض المنازعات",
    ],
    gradient: "from-amber-500 to-orange-600",
    testimony: {
      name: "عبدالرحمن المالكي",
      role: "مستثمر عقاري",
      text: "مبسط LAW ساعدني في فهم حقوقي كمؤجر واكتشاف ثغرات في عقود الإيجار قبل التوقيع.",
    },
  },
  {
    icon: Users,
    title: "القانون العمالي",
    description: "كل ما يخص نظام العمل والعلاقات العمالية في المملكة",
    examples: [
      "حقوق الموظف ونهاية الخدمة",
      "عقود العمل وشروطها النظامية",
      "الفصل التعسفي والتعويضات",
      "نظام التأمينات الاجتماعية",
    ],
    gradient: "from-blue-500 to-indigo-600",
    testimony: {
      name: "سارة القحطاني",
      role: "مديرة موارد بشرية",
      text: "أصبحت أراجع جميع عقود التوظيف عبر مبسط LAW. وفّر عليّ الاستعانة بمحامٍ في الحالات البسيطة.",
    },
  },
  {
    icon: Landmark,
    title: "القانون التجاري",
    description: "تأسيس الشركات والعقود التجارية والملكية الفكرية",
    examples: [
      "تأسيس الشركات واختيار الكيان المناسب",
      "العقود التجارية والوكالات",
      "نظام الشركات الجديد",
      "حماية العلامة التجارية والملكية الفكرية",
    ],
    gradient: "from-amber-400 to-amber-500",
    testimony: {
      name: "فهد العتيبي",
      role: "رائد أعمال",
      text: "أسست شركتي بثقة بعد استشارة مبسط LAW حول نظام الشركات والكيان الأنسب لمشروعي.",
    },
  },
  {
    icon: Gavel,
    title: "القانون الجزائي",
    description: "فهم الأنظمة الجزائية وحقوق المتهم في المملكة",
    examples: [
      "حقوق المتهم في التحقيق والمحاكمة",
      "نظام الإجراءات الجزائية",
      "العقوبات التعزيرية والحدود",
      "الكفالة والإفراج المؤقت",
    ],
    gradient: "from-red-500 to-rose-600",
    testimony: {
      name: "خالد الشمري",
      role: "محامٍ جزائي",
      text: "أداة ممتازة للبحث السريع في نظام الإجراءات الجزائية واستخراج المواد المطلوبة.",
    },
  },
  {
    icon: Users,
    title: "قانون الأحوال الشخصية",
    description: "الزواج، الطلاق، الحضانة، والنفقة حسب النظام السعودي",
    examples: [
      "حقوق الزوجين والطلاق",
      "أحكام الحضانة والنفقة",
      "الولاية والوصاية",
      "قسمة التركات والميراث",
    ],
    gradient: "from-pink-500 to-fuchsia-600",
    testimony: {
      name: "نورة الدوسري",
      role: "مستشارة اجتماعية",
      text: "ساعدني في فهم حقوق الحضانة وتقديم نصائح دقيقة للعائلات التي أساعدها.",
    },
  },
  {
    icon: Shield,
    title: "القانون الإداري",
    description: "المنازعات الإدارية والتعامل مع الجهات الحكومية",
    examples: [
      "الطعن في القرارات الإدارية",
      "نظام المنافسات والمشتريات الحكومية",
      "حقوق الموظف الحكومي",
      "التظلمات والشكاوى الإدارية",
    ],
    gradient: "from-cyan-500 to-teal-600",
    testimony: {
      name: "محمد الغامدي",
      role: "مستشار إداري",
      text: "مرجع سريع وموثوق للأنظمة الإدارية. أستخدمه يومياً في عملي.",
    },
  },
  {
    icon: Globe,
    title: "التجارة الإلكترونية",
    description: "الأنظمة المنظمة للتجارة الإلكترونية وحماية المستهلك",
    examples: [
      "نظام التجارة الإلكترونية",
      "حقوق المستهلك والاسترجاع",
      "سياسات الخصوصية المطلوبة",
      "العقود الإلكترونية والتوقيع الرقمي",
    ],
    gradient: "from-violet-500 to-purple-600",
    testimony: {
      name: "ريم السبيعي",
      role: "صاحبة متجر إلكتروني",
      text: "ساعدني في صياغة سياسة الخصوصية والشروط والأحكام لمتجري بشكل قانوني سليم.",
    },
  },
  {
    icon: FileSearch,
    title: "تحليل العقود",
    description: "فحص العقود واكتشاف الثغرات والبنود المجحفة",
    examples: [
      "مراجعة بنود العقد مادة بمادة",
      "اكتشاف الثغرات والمخاطر القانونية",
      "مقارنة العقد مع الأنظمة المعتمدة",
      "اقتراح تعديلات لحماية حقوقك",
    ],
    gradient: "from-teal-500 to-amber-500",
    testimony: {
      name: "أحمد العمري",
      role: "مدير تنفيذي",
      text: "اكتشفت ثغرة في عقد شراكة كانت ستكلفني الملايين. لا غنى عنه لأي رجل أعمال.",
    },
  },
];

export default function UseCasesPage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 font-medium text-amber-500 text-sm dark:text-amber-300">
          <Lightbulb className="h-4 w-4" />
          مجالات التخصص
        </div>
        <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl">
          لكل قضية، حل قانوني
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          اكتشف كيف يساعد مبسط LAW المحامين ورجال الأعمال والأفراد في جميع المجالات القانونية
        </p>
      </motion.div>

      {/* Use Cases Grid */}
      <div className="mb-16 grid gap-8 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            key={useCase.title}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="h-full p-8 transition-all hover:border-amber-400/30 hover:shadow-xl">
              {/* Icon & Title */}
              <div className="mb-6 flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${useCase.gradient} text-white shadow-lg`}
                >
                  <useCase.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 text-right">
                  <h3 className="mb-2 font-bold text-2xl">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </div>

              {/* Examples */}
              <div className="mb-6 space-y-2">
                {useCase.examples.map((example) => (
                  <div
                    className="flex items-start gap-2 text-right"
                    key={example}
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span className="text-muted-foreground text-sm">
                      {example}
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimony */}
              <div className="rounded-lg bg-muted/30 p-4">
                <p className="mb-3 text-right text-sm italic">
                  &ldquo;{useCase.testimony.text}&rdquo;
                </p>
                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <div className="font-semibold text-sm">
                      {useCase.testimony.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {useCase.testimony.role}
                    </div>
                  </div>
                  <div className="h-10 w-10 shrink-0 rounded-full bg-linear-to-br from-amber-300 to-amber-400" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.8 }}
      >
        <GlassCard className="mx-auto max-w-3xl p-12">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-linear-to-br from-amber-300 to-amber-400 p-4">
              <Scale className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mb-4 font-bold text-3xl">
            جاهز للحصول على استشارة قانونية سعودية دقيقة؟
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            انضم إلى آلاف المستخدمين الذين يثقون بمبسط LAW لاستشاراتهم القانونية
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 font-semibold text-lg text-white transition-all hover:bg-amber-500 hover:shadow-amber-400/50 hover:shadow-lg"
              href="/register"
            >
              ابدأ استشارتك مجاناً
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-8 py-4 font-semibold text-amber-500 text-lg transition-all hover:bg-amber-400/20 dark:text-amber-300"
              href="/pricing"
            >
              شاهد الباقات
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
