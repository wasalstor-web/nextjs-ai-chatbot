"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code,
  FileText,
  GraduationCap,
  Lightbulb,
  Mail,
  MessageSquare,
  Palette,
  PenTool,
  Search,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/landing/glass-card";

const useCases = [
  {
    icon: Code,
    title: "البرمجة والتطوير",
    description: "مساعدة المطورين في كتابة، مراجعة، وشرح الكود",
    examples: [
      "كتابة functions جاهزة بأي لغة برمجة",
      "مراجعة الكود واكتشاف الأخطاء",
      "شرح مفاهيم برمجية معقدة",
      "تحويل الكود بين اللغات",
    ],
    gradient: "from-blue-500 to-cyan-500",
    testimony: {
      name: "محمد أحمد",
      role: "مطور Full Stack",
      text: "وفر علي ساعات من البحث والتجربة. أصبح شريكي اليومي في البرمجة.",
    },
  },
  {
    icon: FileText,
    title: "كتابة المحتوى",
    description: "إنشاء محتوى احترافي لجميع الأغراض",
    examples: [
      "كتابة مقالات ومدونات جذابة",
      "صياغة رسائل بريد إلكتروني",
      "إنشاء محتوى تسويقي مقنع",
      "كتابة سيناريوهات فيديو",
    ],
    gradient: "from-purple-500 to-pink-500",
    testimony: {
      name: "سارة علي",
      role: "صانعة محتوى",
      text: "ساعدني في مضاعفة إنتاجيتي. اصبحت انشر محتوى عالي الجودة يومياً.",
    },
  },
  {
    icon: GraduationCap,
    title: "التعليم والدراسة",
    description: "مساعد مثالي للطلاب والمعلمين",
    examples: [
      "شرح المفاهيم الصعبة بطريقة بسيطة",
      "حل المسائل الرياضية والفيزيائية",
      "تلخيص المقالات والأوراق البحثية",
      "إعداد الاختبارات والواجبات",
    ],
    gradient: "from-green-500 to-emerald-500",
    testimony: {
      name: "خالد محمود",
      role: "طالب هندسة",
      text: "أفضل مدرس خصوصي! يشرح بسهولة ومتاح 24/7.",
    },
  },
  {
    icon: Briefcase,
    title: "إدارة الأعمال",
    description: "تبسيط المهام اليومية للشركات",
    examples: [
      "كتابة التقارير والعروض التقديمية",
      "تحليل البيانات والإحصائيات",
      "إعداد خطط العمل والاستراتيجيات",
      "صياغة العقود والوثائق",
    ],
    gradient: "from-orange-500 to-red-500",
    testimony: {
      name: "أحمد العمري",
      role: "مدير تنفيذي",
      text: "أداة لا غنى عنها لأي رائد أعمال. توفر الوقت والمال.",
    },
  },
  {
    icon: TrendingUp,
    title: "التسويق والإعلان",
    description: "إنشاء حملات تسويقية ناجحة",
    examples: [
      "كتابة نصوص إعلانية جذابة",
      "توليد أفكار لحملات إبداعية",
      "تحليل المنافسين والسوق",
      "إنشاء محتوى سوشيال ميديا",
    ],
    gradient: "from-pink-500 to-rose-500",
    testimony: {
      name: "ليلى الحسن",
      role: "مديرة تسويق",
      text: "زاد معدل التحويل لحملاتنا بنسبة 40% بفضل المحتوى المميز.",
    },
  },
  {
    icon: BookOpen,
    title: "البحث والكتابة الأكاديمية",
    description: "دعم الباحثين والكتاب",
    examples: [
      "البحث عن مصادر موثوقة",
      "صياغة الأوراق البحثية",
      "مراجعة وتحرير النصوص",
      "إنشاء فهارس ومراجع",
    ],
    gradient: "from-indigo-500 to-purple-500",
    testimony: {
      name: "د. فاطمة الزهراء",
      role: "باحثة أكاديمية",
      text: "اختصر وقت البحث من أسابيع إلى أيام. أداة ثورية للباحثين.",
    },
  },
  {
    icon: Palette,
    title: "الإبداع والفنون",
    description: "إلهام الفنانين والمبدعين",
    examples: [
      "توليد أفكار إبداعية جديدة",
      "كتابة قصص وروايات",
      "إنشاء نصوص أغاني وقصائد",
      "تطوير مفاهيم فنية",
    ],
    gradient: "from-yellow-500 to-orange-500",
    testimony: {
      name: "عمر الفنان",
      role: "كاتب وروائي",
      text: "ساعدني في تجاوز العقبات الإبداعية وإنهاء روايتي.",
    },
  },
  {
    icon: MessageSquare,
    title: "خدمة العملاء",
    description: "تحسين تجربة العملاء",
    examples: [
      "الرد على استفسارات العملاء فوراً",
      "حل المشكلات الشائعة",
      "توفير الدعم بلغات متعددة",
      "تحسين رضا العملاء",
    ],
    gradient: "from-teal-500 to-green-500",
    testimony: {
      name: "نور الشركات",
      role: "مسؤولة دعم عملاء",
      text: "خفض وقت الاستجابة من ساعات إلى ثوان. العملاء أسعد من أي وقت.",
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
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 font-medium text-green-600 text-sm dark:text-green-400">
          <Lightbulb className="h-4 w-4" />
          حالات الاستخدام
        </div>
        <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl">
          لكل مجال، حل مثالي
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          اكتشف كيف يساعد AI Chatbot محترفين من جميع المجالات في تحقيق أهدافهم
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
            <GlassCard className="h-full p-8 transition-all hover:border-green-500/30 hover:shadow-xl">
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
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    <span className="text-muted-foreground text-sm">
                      {example}
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimony */}
              <div className="rounded-lg bg-muted/30 p-4">
                <p className="mb-3 text-right text-sm italic">
                  "{useCase.testimony.text}"
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
                  <div className="h-10 w-10 shrink-0 rounded-full bg-linear-to-br from-green-400 to-emerald-500" />
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
            <div className="rounded-full bg-linear-to-br from-green-400 to-emerald-500 p-4">
              <Search className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mb-4 font-bold text-3xl">
            جاهز لتجربة القوة الحقيقية للذكاء الاصطناعي؟
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            انضم إلى آلاف المحترفين الذين يستخدمون AI Chatbot يومياً لتحقيق
            المزيد
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-lg text-white transition-all hover:bg-green-600 hover:shadow-green-500/50 hover:shadow-lg"
              href="/register"
            >
              ابدأ مجاناً الآن
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-8 py-4 font-semibold text-green-600 text-lg transition-all hover:bg-green-500/20 dark:text-green-400"
              href="/pricing"
            >
              شاهد الأسعار
            </Link>
          </div>
          <p className="mt-6 text-muted-foreground text-sm">
            ✨ لا حاجة لبطاقة ائتمان للبدء
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
