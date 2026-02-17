/**
 * أنواع النظام القانوني السعودي
 * Saudi Legal System Types
 */

// أنواع الاستشارات القانونية
export type ConsultationType =
  | "عقاري"
  | "عمل"
  | "تجاري"
  | "جزائي"
  | "أسري"
  | "إداري"
  | "ملكية فكرية"
  | "استثمار"
  | "عقود"
  | "أخرى";

// مستوى الخطورة
export type RiskLevel = "منخفض" | "متوسط" | "عالي" | "حرج";

// مستوى الثقة
export type ConfidenceLevel = "high" | "medium" | "low";

// حالة الاستشارة
export type ConsultationStatus =
  | "intake"
  | "processing"
  | "answered"
  | "escalated";

// سؤال توضيحي
export type IntakeQuestion = {
  id: string;
  question: string;
  type: "single" | "multiple" | "text" | "number" | "date";
  options?: string[];
  required: boolean;
  category: ConsultationType;
  order: number;
  hint?: string;
};

// إجابة سؤال
export type IntakeAnswer = {
  questionId: string;
  answer: string | string[] | number;
};

// سياق الاستشارة
export type IntakeContext = {
  consultationType: ConsultationType;
  jurisdiction: "SA";
  answers: IntakeAnswer[];
  isComplete: boolean;
  completionPercentage: number;
  remainingQuestions: number;
};

// مصدر قانوني سعودي
export type LegalSource = {
  id: string;
  name: string;
  nameAr: string;
  url: string;
  type: "law" | "regulation" | "gazette" | "judicial" | "ministry";
  trustLevel: "primary" | "secondary";
  description?: string;
  issueDate?: string;
  lastUpdate?: string;
  authority?: string;
};

// استشهاد قانوني
export type LegalCitation = {
  source: LegalSource;
  documentTitle: string;
  article?: string;
  section?: string;
  text?: string;
  date?: string;
  relevanceScore: number;
};

// نتيجة الاسترجاع
export type RetrievalResult = {
  citations: LegalCitation[];
  relatedLaws: string[];
  precedents?: string[];
  confidence: number;
};

// سبب التصعيد
export type EscalationReason = {
  code: string;
  reason: string;
  severity: RiskLevel;
  recommendation: string;
};

// الإجابة القانونية الكاملة
export type LegalResponse = {
  // الملخص
  summary: string;

  // الأساس القانوني
  legalBasis: {
    laws: Array<{
      name: string;
      article: string;
      text: string;
    }>;
    citations: LegalCitation[];
  };

  // التقييم
  confidence: ConfidenceLevel;
  confidenceScore: number;
  riskLevel: RiskLevel;

  // التوصيات
  recommendations: string[];
  nextSteps: string[];

  // الإخلاء والتصعيد
  disclaimer: string;
  escalation?: EscalationReason;
  requiresLawyer: boolean;

  // البيانات الوصفية
  metadata: {
    consultationType: ConsultationType;
    processingTime: number;
    modelUsed: string;
    timestamp: Date;
  };
};

// قواعد التصعيد
export type EscalationRule = {
  id: string;
  condition: string;
  action: "require_lawyer" | "recommend_lawyer" | "emergency_referral";
  message: string;
  priority: number;
  isAutomatic: boolean;
};

// تكوين النظام القانوني
export type LegalSystemConfig = {
  minConfidenceThreshold: number;
  maxIntakeQuestions: number;
  minIntakeQuestions: number;
  enabledSources: string[];
  escalationRules: EscalationRule[];
};
