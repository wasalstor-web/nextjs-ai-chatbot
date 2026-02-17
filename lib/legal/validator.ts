/**
 * نظام التحقق والتصعيد
 * Validation and Escalation System
 */

import type {
  ConfidenceLevel,
  ConsultationType,
  EscalationRule,
  IntakeAnswer,
  LegalResponse,
  RiskLevel,
} from "./types";

/**
 * قواعد التصعيد الإلزامي
 */
const ESCALATION_RULES: EscalationRule[] = [
  // قضايا جنائية - تصعيد إلزامي
  {
    id: "criminal_mandatory",
    condition: "جنائي",
    action: "require_lawyer",
    message:
      "⚠️ تنبيه: القضايا الجنائية تتطلب تمثيلاً قانونياً متخصصاً. يُنصح بشدة بالتواصل مع محامٍ مرخص.",
    priority: 1,
    isAutomatic: true,
  },
  // قضايا حضانة - تصعيد إلزامي
  {
    id: "custody_mandatory",
    condition: "حضانة",
    action: "require_lawyer",
    message:
      "⚠️ تنبيه: قضايا الحضانة والأطفال تتطلب تمثيلاً قانونياً. مصلحة الطفل هي الأولوية.",
    priority: 1,
    isAutomatic: true,
  },
  // مبالغ كبيرة - تصعيد إلزامي
  {
    id: "high_value_mandatory",
    condition: "amount_over_500000",
    action: "require_lawyer",
    message:
      "⚠️ تنبيه: المبالغ الكبيرة تتطلب مراجعة قانونية متخصصة لحماية حقوقك.",
    priority: 2,
    isAutomatic: true,
  },
  // ثقة منخفضة - تصعيد موصى
  {
    id: "low_confidence",
    condition: "confidence_below_0.6",
    action: "recommend_lawyer",
    message:
      "💡 ملاحظة: هذه الإجابة عامة. للحصول على مشورة دقيقة، يُنصح بالتواصل مع محامٍ متخصص.",
    priority: 3,
    isAutomatic: true,
  },
  // عنف أسري - تصعيد فوري
  {
    id: "domestic_violence",
    condition: "عنف_أسري",
    action: "emergency_referral",
    message:
      "🚨 حالة طوارئ: في حالات العنف الأسري، يمكنك التواصل مع: خط مساندة 920020165 أو تطبيق كلنا أمن.",
    priority: 0,
    isAutomatic: true,
  },
  // حرية شخصية - تصعيد فوري
  {
    id: "personal_freedom",
    condition: "توقيف",
    action: "require_lawyer",
    message:
      "⚠️ تنبيه: في حالات التوقيف، يحق لك التواصل مع محامٍ فوراً. اتصل بالرقم الموحد لحقوق الإنسان 0112188888.",
    priority: 0,
    isAutomatic: true,
  },
];

/**
 * الكلمات المفتاحية للتصعيد
 */
const ESCALATION_KEYWORDS: Record<string, string[]> = {
  criminal: ["جنائي", "جناية", "جريمة", "توقيف", "سجن", "اعتقال", "نيابة"],
  custody: ["حضانة", "رؤية أطفال", "نفقة أطفال", "طفل", "أطفال قصّر"],
  violence: ["عنف", "ضرب", "إيذاء", "تهديد", "اعتداء", "خطر"],
  highRisk: ["قتل", "مخدرات", "إرهاب", "غسيل أموال", "تزوير وثائق رسمية"],
};

/**
 * أنماط المحتوى المحظور (على مستوى الوحدة للأداء)
 */
const PROHIBITED_PATTERNS = [
  { pattern: /كيف\s*(أ|ا)قتل/i, reason: "محتوى عنيف" },
  { pattern: /كيف\s*(أ|ا)هرب\s*من\s*السجن/i, reason: "نشاط غير قانوني" },
  { pattern: /طريقة\s*غسيل\s*(ا|أ)موال/i, reason: "جريمة مالية" },
  { pattern: /كيف\s*(أ|ا)تهرب\s*من\s*الضرائب/i, reason: "تهرب ضريبي" },
] as const;

/**
 * حساب مستوى الثقة
 */
export function calculateConfidence(
  consultationType: ConsultationType,
  answers: IntakeAnswer[],
  hasValidSources: boolean,
  sourceCount: number
): ConfidenceLevel {
  let score = 0;

  // نقاط اكتمال الإجابات (0-30)
  const completionScore = Math.min(answers.length * 6, 30);
  score += completionScore;

  // نقاط المصادر (0-40)
  if (hasValidSources) {
    score += Math.min(sourceCount * 10, 40);
  }

  // نقاط نوع الاستشارة (0-30)
  const typeScores: Record<ConsultationType, number> = {
    عقاري: 25,
    عمل: 25,
    تجاري: 20,
    جزائي: 5, // ثقة منخفضة دائماً للجنائي
    أسري: 15,
    إداري: 20,
    "ملكية فكرية": 20,
    استثمار: 15,
    عقود: 25,
    أخرى: 10,
  };
  score += typeScores[consultationType] || 10;

  // تحديد المستوى
  if (score >= 80) {
    return "high";
  }
  if (score >= 60) {
    return "medium";
  }
  return "low";
}

/**
 * حساب مستوى المخاطرة
 */
export function assessRiskLevel(
  consultationType: ConsultationType,
  answers: IntakeAnswer[],
  userMessage: string
): RiskLevel {
  const message = userMessage.toLowerCase();
  const answersText = answers.map((a) => String(a.answer)).join(" ");
  const fullText = `${message} ${answersText}`;

  // فحص الكلمات المفتاحية عالية الخطورة
  for (const keyword of ESCALATION_KEYWORDS.highRisk) {
    if (fullText.includes(keyword)) {
      return "حرج";
    }
  }

  // فحص الكلمات المفتاحية للعنف
  for (const keyword of ESCALATION_KEYWORDS.violence) {
    if (fullText.includes(keyword)) {
      return "عالي";
    }
  }

  // فحص الكلمات المفتاحية الجنائية
  if (consultationType === "جزائي") {
    return "عالي";
  }
  for (const keyword of ESCALATION_KEYWORDS.criminal) {
    if (fullText.includes(keyword)) {
      return "عالي";
    }
  }

  // فحص الكلمات المفتاحية للحضانة
  for (const keyword of ESCALATION_KEYWORDS.custody) {
    if (fullText.includes(keyword)) {
      return "متوسط";
    }
  }

  // تقييم حسب نوع الاستشارة
  const typeRisk: Record<ConsultationType, RiskLevel> = {
    جزائي: "عالي",
    أسري: "متوسط",
    عقاري: "منخفض",
    عمل: "منخفض",
    تجاري: "متوسط",
    إداري: "منخفض",
    "ملكية فكرية": "منخفض",
    استثمار: "متوسط",
    عقود: "منخفض",
    أخرى: "منخفض",
  };

  return typeRisk[consultationType] || "low";
}

/**
 * الحصول على قواعد التصعيد المطبقة
 */
export function getApplicableEscalationRules(
  consultationType: ConsultationType,
  answers: IntakeAnswer[],
  confidence: ConfidenceLevel,
  userMessage: string
): EscalationRule[] {
  const applicable: EscalationRule[] = [];
  const fullText = `${consultationType} ${userMessage} ${answers.map((a) => String(a.answer)).join(" ")}`;

  for (const rule of ESCALATION_RULES) {
    let matches = false;

    switch (rule.condition) {
      case "جنائي":
        matches = consultationType === "جزائي";
        break;
      case "حضانة":
        matches = ESCALATION_KEYWORDS.custody.some((k) => fullText.includes(k));
        break;
      case "amount_over_500000":
        matches = answers.some(
          (a) =>
            String(a.answer).includes("500,000") ||
            String(a.answer).includes("1,000,000") ||
            String(a.answer).includes("2,000,000")
        );
        break;
      case "confidence_below_0.6":
        matches = confidence === "low";
        break;
      case "عنف_أسري":
        matches = ESCALATION_KEYWORDS.violence.some((k) =>
          fullText.includes(k)
        );
        break;
      case "توقيف":
        matches =
          fullText.includes("توقيف") ||
          fullText.includes("سجن") ||
          fullText.includes("اعتقال");
        break;
      default:
        matches = fullText.includes(rule.condition);
    }

    if (matches) {
      applicable.push(rule);
    }
  }

  // ترتيب حسب الأولوية
  return applicable.sort((a, b) => a.priority - b.priority);
}

/**
 * التحقق من صحة الرد
 */
export function validateResponse(response: LegalResponse): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // التحقق من وجود إجابة
  if (!response.summary || response.summary.length < 50) {
    issues.push("الإجابة قصيرة جداً");
  }

  // التحقق من وجود إخلاء المسؤولية
  if (!response.disclaimer) {
    issues.push("يجب إضافة إخلاء المسؤولية");
  }

  // التحقق من المصادر للثقة العالية/المتوسطة
  if (
    (response.confidence === "high" || response.confidence === "medium") &&
    (!response.legalBasis?.citations ||
      response.legalBasis.citations.length === 0)
  ) {
    issues.push("يجب إضافة مصادر للإجابات ذات الثقة العالية/المتوسطة");
  }

  // التحقق من التصعيد للمخاطر العالية
  if (
    (response.riskLevel === "عالي" || response.riskLevel === "حرج") &&
    !response.requiresLawyer
  ) {
    issues.push("يجب تفعيل التصعيد للمخاطر العالية");
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}

/**
 * إنشاء إخلاء المسؤولية
 */
export function generateDisclaimer(
  confidence: ConfidenceLevel,
  risk: RiskLevel
): string {
  const baseDisclaimer =
    "⚠️ إخلاء مسؤولية: هذه المعلومات للاسترشاد العام فقط ولا تُعد استشارة قانونية رسمية. القوانين واللوائح قد تتغير، ويُنصح بالتحقق من المصادر الرسمية والتواصل مع محامٍ مرخص للحصول على مشورة قانونية ملزمة.";

  if (risk === "حرج" || risk === "عالي") {
    return `🚨 تحذير هام: نظراً لطبيعة قضيتك، يُنصح بشدة بالتواصل مع محامٍ متخصص فوراً.\n\n${baseDisclaimer}`;
  }

  if (confidence === "low") {
    return `💡 ملاحظة: هذه الإجابة عامة وقد لا تنطبق على حالتك بالتحديد.\n\n${baseDisclaimer}`;
  }

  return baseDisclaimer;
}

/**
 * تحديد ما إذا كان التصعيد مطلوباً
 */
export function isEscalationRequired(
  consultationType: ConsultationType,
  risk: RiskLevel,
  confidence: ConfidenceLevel
): boolean {
  // تصعيد إلزامي للجنائي
  if (consultationType === "جزائي") {
    return true;
  }

  // تصعيد للمخاطر العالية
  if (risk === "عالي" || risk === "حرج") {
    return true;
  }

  // تصعيد للثقة المنخفضة مع مخاطر متوسطة
  if (confidence === "low" && risk === "متوسط") {
    return true;
  }

  return false;
}

/**
 * الحصول على رسائل التصعيد
 */
export function getEscalationMessages(rules: EscalationRule[]): string[] {
  return rules.map((r) => r.message);
}

/**
 * فحص النص للكلمات المحظورة (لا يجب على AI الإجابة)
 */
export function containsProhibitedContent(text: string): {
  prohibited: boolean;
  reason?: string;
} {
  for (const { pattern, reason } of PROHIBITED_PATTERNS) {
    if (pattern.test(text)) {
      return { prohibited: true, reason };
    }
  }

  return { prohibited: false };
}
