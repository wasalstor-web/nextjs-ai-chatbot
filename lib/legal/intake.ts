/**
 * نظام الأسئلة التوضيحية الديناميكية
 * Dynamic Intake Questions System
 */

import type {
  ConsultationType,
  IntakeAnswer,
  IntakeContext,
  IntakeQuestion,
} from "./types";

/**
 * الأسئلة الأساسية لكل نوع استشارة
 */
const INTAKE_QUESTIONS: Record<ConsultationType, IntakeQuestion[]> = {
  عقاري: [
    {
      id: "real_estate_type",
      question: "ما نوع العقار المعني؟",
      type: "single",
      options: ["سكني", "تجاري", "أرض فضاء", "زراعي", "صناعي"],
      required: true,
      category: "عقاري",
      order: 1,
    },
    {
      id: "real_estate_registered",
      question: "هل العقار مسجل بصك رسمي؟",
      type: "single",
      options: ["نعم، صك إلكتروني", "نعم، صك ورقي", "لا يوجد صك", "غير متأكد"],
      required: true,
      category: "عقاري",
      order: 2,
    },
    {
      id: "real_estate_issue",
      question: "ما طبيعة المشكلة العقارية؟",
      type: "single",
      options: [
        "نزاع ملكية",
        "مشكلة إيجارية",
        "تطوير/بناء",
        "بيع وشراء",
        "رهن عقاري",
        "أخرى",
      ],
      required: true,
      category: "عقاري",
      order: 3,
    },
    {
      id: "real_estate_contracts",
      question: "هل توجد عقود موقعة متعلقة بالموضوع؟",
      type: "single",
      options: ["نعم، موثقة رسمياً", "نعم، غير موثقة", "لا توجد عقود"],
      required: true,
      category: "عقاري",
      order: 4,
    },
    {
      id: "real_estate_amount",
      question: "ما القيمة التقريبية للنزاع أو الصفقة؟",
      type: "single",
      options: [
        "أقل من 100,000 ريال",
        "100,000 - 500,000 ريال",
        "500,000 - 1,000,000 ريال",
        "أكثر من 1,000,000 ريال",
      ],
      required: false,
      category: "عقاري",
      order: 5,
    },
  ],
  عمل: [
    {
      id: "labor_role",
      question: "ما موقفك في النزاع العمالي؟",
      type: "single",
      options: ["صاحب عمل", "موظف/عامل", "مستشار قانوني"],
      required: true,
      category: "عمل",
      order: 1,
    },
    {
      id: "labor_issue",
      question: "ما طبيعة المشكلة العمالية؟",
      type: "single",
      options: [
        "فصل تعسفي",
        "مستحقات مالية",
        "إنهاء عقد",
        "إصابة عمل",
        "نقل أو تعديل",
        "استقالة",
        "أخرى",
      ],
      required: true,
      category: "عمل",
      order: 2,
    },
    {
      id: "labor_contract",
      question: "ما نوع عقد العمل؟",
      type: "single",
      options: [
        "محدد المدة",
        "غير محدد المدة",
        "مرن (عمل جزئي)",
        "لا يوجد عقد مكتوب",
      ],
      required: true,
      category: "عمل",
      order: 3,
    },
    {
      id: "labor_duration",
      question: "ما مدة الخدمة؟",
      type: "single",
      options: [
        "أقل من سنة",
        "1-2 سنوات",
        "2-5 سنوات",
        "5-10 سنوات",
        "أكثر من 10 سنوات",
      ],
      required: true,
      category: "عمل",
      order: 4,
    },
    {
      id: "labor_filed_case",
      question: "هل تم تقديم شكوى سابقة؟",
      type: "single",
      options: [
        "لا",
        "نعم، في مكتب العمل",
        "نعم، في المحكمة العمالية",
        "نعم، في كليهما",
      ],
      required: false,
      category: "عمل",
      order: 5,
    },
  ],
  تجاري: [
    {
      id: "commercial_type",
      question: "ما نوع النشاط التجاري؟",
      type: "single",
      options: [
        "شركة (ذات مسؤولية محدودة)",
        "مؤسسة فردية",
        "شركة مساهمة",
        "فرع شركة أجنبية",
        "أخرى",
      ],
      required: true,
      category: "تجاري",
      order: 1,
    },
    {
      id: "commercial_issue",
      question: "ما طبيعة المشكلة التجارية؟",
      type: "single",
      options: [
        "نزاع بين شركاء",
        "تحصيل ديون",
        "إخلال بعقد",
        "تأسيس شركة",
        "تصفية شركة",
        "علامة تجارية",
        "أخرى",
      ],
      required: true,
      category: "تجاري",
      order: 2,
    },
    {
      id: "commercial_amount",
      question: "ما القيمة التقريبية للنزاع؟",
      type: "single",
      options: [
        "أقل من 100,000 ريال",
        "100,000 - 500,000 ريال",
        "500,000 - 2,000,000 ريال",
        "أكثر من 2,000,000 ريال",
      ],
      required: false,
      category: "تجاري",
      order: 3,
    },
    {
      id: "commercial_contracts",
      question: "هل توجد عقود موثقة؟",
      type: "single",
      options: ["نعم", "لا", "جزئياً"],
      required: true,
      category: "تجاري",
      order: 4,
    },
  ],
  جزائي: [
    {
      id: "criminal_role",
      question: "ما موقفك في القضية؟",
      type: "single",
      options: ["مدعي (ضحية)", "متهم", "شاهد", "محامي"],
      required: true,
      category: "جزائي",
      order: 1,
    },
    {
      id: "criminal_type",
      question: "ما نوع القضية الجزائية؟",
      type: "single",
      options: [
        "سرقة/نصب",
        "اعتداء جسدي",
        "تزوير",
        "جرائم معلوماتية",
        "مخدرات",
        "قضايا أخلاقية",
        "أخرى",
      ],
      required: true,
      category: "جزائي",
      order: 2,
    },
    {
      id: "criminal_stage",
      question: "ما مرحلة القضية الحالية؟",
      type: "single",
      options: [
        "لم تُرفع دعوى بعد",
        "تحقيق أولي",
        "نيابة عامة",
        "محكمة ابتدائية",
        "استئناف",
        "عفو/تنفيذ",
      ],
      required: true,
      category: "جزائي",
      order: 3,
    },
    {
      id: "criminal_detained",
      question: "هل هناك موقوف حالياً؟",
      type: "single",
      options: ["نعم", "لا", "تم الإفراج"],
      required: true,
      category: "جزائي",
      order: 4,
    },
  ],
  أسري: [
    {
      id: "family_type",
      question: "ما نوع القضية الأسرية؟",
      type: "single",
      options: [
        "طلاق",
        "حضانة أطفال",
        "نفقة",
        "رؤية أطفال",
        "زواج",
        "ميراث",
        "عنف أسري",
        "أخرى",
      ],
      required: true,
      category: "أسري",
      order: 1,
    },
    {
      id: "family_children",
      question: "هل يوجد أطفال قصّر؟",
      type: "single",
      options: ["نعم", "لا"],
      required: true,
      category: "أسري",
      order: 2,
    },
    {
      id: "family_stage",
      question: "ما مرحلة القضية؟",
      type: "single",
      options: [
        "لم تُرفع دعوى",
        "محاولة صلح",
        "محكمة ابتدائية",
        "استئناف",
        "تنفيذ حكم",
      ],
      required: true,
      category: "أسري",
      order: 3,
    },
    {
      id: "family_urgency",
      question: "هل هناك خطر على الأطفال أو أحد الأطراف؟",
      type: "single",
      options: ["لا", "نعم، خطر محتمل", "نعم، خطر فوري"],
      required: true,
      category: "أسري",
      order: 4,
    },
  ],
  إداري: [
    {
      id: "admin_type",
      question: "ما نوع النزاع الإداري؟",
      type: "single",
      options: [
        "قرار حكومي",
        "عقد حكومي",
        "تعويض",
        "تظلم وظيفي",
        "ترخيص",
        "أخرى",
      ],
      required: true,
      category: "إداري",
      order: 1,
    },
    {
      id: "admin_entity",
      question: "ما الجهة الحكومية المعنية؟",
      type: "text",
      required: true,
      category: "إداري",
      order: 2,
    },
    {
      id: "admin_grievance",
      question: "هل تم تقديم تظلم رسمي؟",
      type: "single",
      options: ["لا", "نعم، منتظر الرد", "نعم، تم الرفض"],
      required: true,
      category: "إداري",
      order: 3,
    },
  ],
  "ملكية فكرية": [
    {
      id: "ip_type",
      question: "ما نوع الملكية الفكرية؟",
      type: "single",
      options: [
        "علامة تجارية",
        "براءة اختراع",
        "حق مؤلف",
        "تصميم صناعي",
        "اسم تجاري",
        "أخرى",
      ],
      required: true,
      category: "ملكية فكرية",
      order: 1,
    },
    {
      id: "ip_issue",
      question: "ما طبيعة المشكلة؟",
      type: "single",
      options: [
        "تسجيل جديد",
        "تعدي/سرقة",
        "نزاع ملكية",
        "ترخيص استخدام",
        "أخرى",
      ],
      required: true,
      category: "ملكية فكرية",
      order: 2,
    },
    {
      id: "ip_registered",
      question: "هل الملكية مسجلة رسمياً؟",
      type: "single",
      options: ["نعم", "لا", "قيد التسجيل"],
      required: true,
      category: "ملكية فكرية",
      order: 3,
    },
  ],
  استثمار: [
    {
      id: "investment_type",
      question: "ما نوع الاستثمار؟",
      type: "single",
      options: [
        "استثمار أجنبي مباشر",
        "شراكة محلية",
        "صندوق استثماري",
        "عقاري",
        "أخرى",
      ],
      required: true,
      category: "استثمار",
      order: 1,
    },
    {
      id: "investment_license",
      question: "هل تملك رخصة استثمارية؟",
      type: "single",
      options: ["نعم", "لا", "قيد الإصدار"],
      required: true,
      category: "استثمار",
      order: 2,
    },
    {
      id: "investment_issue",
      question: "ما طبيعة الاستفسار؟",
      type: "single",
      options: [
        "تأسيس كيان",
        "نزاع مع شريك",
        "امتثال تنظيمي",
        "إغلاق/خروج",
        "أخرى",
      ],
      required: true,
      category: "استثمار",
      order: 3,
    },
  ],
  عقود: [
    {
      id: "contract_type",
      question: "ما نوع العقد؟",
      type: "single",
      options: ["بيع", "إيجار", "خدمات", "توظيف", "شراكة", "قرض", "أخرى"],
      required: true,
      category: "عقود",
      order: 1,
    },
    {
      id: "contract_status",
      question: "ما حالة العقد؟",
      type: "single",
      options: [
        "قيد الإعداد",
        "ساري المفعول",
        "مخل به",
        "منتهي",
        "متنازع عليه",
      ],
      required: true,
      category: "عقود",
      order: 2,
    },
    {
      id: "contract_written",
      question: "هل العقد مكتوب وموثق؟",
      type: "single",
      options: ["نعم، موثق رسمياً", "نعم، غير موثق", "شفهي فقط"],
      required: true,
      category: "عقود",
      order: 3,
    },
    {
      id: "contract_need",
      question: "ما المطلوب؟",
      type: "single",
      options: [
        "مراجعة عقد",
        "صياغة عقد جديد",
        "تعديل عقد قائم",
        "حل نزاع",
        "فسخ عقد",
      ],
      required: true,
      category: "عقود",
      order: 4,
    },
  ],
  أخرى: [
    {
      id: "other_description",
      question: "يرجى وصف موضوع الاستشارة بالتفصيل",
      type: "text",
      required: true,
      category: "أخرى",
      order: 1,
    },
    {
      id: "other_urgency",
      question: "ما مدى إلحاح الموضوع؟",
      type: "single",
      options: ["عاجل جداً", "مهم", "عادي"],
      required: true,
      category: "أخرى",
      order: 2,
    },
    {
      id: "other_outcome",
      question: "ما النتيجة المطلوبة؟",
      type: "text",
      required: true,
      category: "أخرى",
      order: 3,
    },
  ],
};

/**
 * الحصول على أسئلة نوع الاستشارة
 */
export function getIntakeQuestions(
  consultationType: ConsultationType
): IntakeQuestion[] {
  return INTAKE_QUESTIONS[consultationType] || INTAKE_QUESTIONS.أخرى;
}

/**
 * حساب نسبة اكتمال الأسئلة
 */
export function calculateCompletionPercentage(
  consultationType: ConsultationType,
  answers: IntakeAnswer[]
): number {
  const questions = getIntakeQuestions(consultationType);
  const requiredQuestions = questions.filter((q) => q.required);
  const answeredRequired = answers.filter((a) =>
    requiredQuestions.some((q) => q.id === a.questionId)
  );

  return Math.round((answeredRequired.length / requiredQuestions.length) * 100);
}

/**
 * التحقق من اكتمال السياق
 */
export function isIntakeComplete(
  consultationType: ConsultationType,
  answers: IntakeAnswer[]
): boolean {
  const questions = getIntakeQuestions(consultationType);
  const requiredQuestions = questions.filter((q) => q.required);

  return requiredQuestions.every((q) =>
    answers.some((a) => a.questionId === q.id && a.answer !== "")
  );
}

/**
 * الحصول على الأسئلة المتبقية
 */
export function getRemainingQuestions(
  consultationType: ConsultationType,
  answers: IntakeAnswer[]
): IntakeQuestion[] {
  const questions = getIntakeQuestions(consultationType);
  const answeredIds = new Set(answers.map((a) => a.questionId));

  return questions.filter((q) => !answeredIds.has(q.id) && q.required);
}

/**
 * بناء سياق الاستشارة
 */
export function buildIntakeContext(
  consultationType: ConsultationType,
  answers: IntakeAnswer[]
): IntakeContext {
  const remaining = getRemainingQuestions(consultationType, answers);

  return {
    consultationType,
    jurisdiction: "SA",
    answers,
    isComplete: isIntakeComplete(consultationType, answers),
    completionPercentage: calculateCompletionPercentage(
      consultationType,
      answers
    ),
    remainingQuestions: remaining.length,
  };
}

/**
 * تحويل الإجابات إلى نص للـ AI
 */
export function formatAnswersForAI(
  consultationType: ConsultationType,
  answers: IntakeAnswer[]
): string {
  const questions = getIntakeQuestions(consultationType);
  const lines: string[] = [`نوع الاستشارة: ${consultationType}`, ""];

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question) {
      const answerText = Array.isArray(answer.answer)
        ? answer.answer.join("، ")
        : String(answer.answer);
      lines.push(`${question.question}`);
      lines.push(`الإجابة: ${answerText}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}
