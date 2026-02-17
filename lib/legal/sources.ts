/**
 * المصادر القانونية السعودية المعتمدة
 * Saudi Authoritative Legal Sources
 */

import type { LegalSource } from "./types";

/**
 * القائمة البيضاء للمصادر الرسمية
 * يجب أن تكون جميع الاستشهادات من هذه المصادر فقط
 */
export const SAUDI_LEGAL_SOURCES: LegalSource[] = [
  {
    id: "boe",
    name: "Bureau of Experts",
    nameAr: "هيئة الخبراء بمجلس الوزراء",
    url: "https://laws.boe.gov.sa",
    type: "law",
    trustLevel: "primary",
  },
  {
    id: "uqn",
    name: "Umm Al-Qura Official Gazette",
    nameAr: "جريدة أم القرى الرسمية",
    url: "https://uqn.gov.sa",
    type: "gazette",
    trustLevel: "primary",
  },
  {
    id: "moj",
    name: "Ministry of Justice",
    nameAr: "وزارة العدل",
    url: "https://moj.gov.sa",
    type: "ministry",
    trustLevel: "primary",
  },
  {
    id: "najiz",
    name: "Najiz Platform",
    nameAr: "منصة ناجز",
    url: "https://najiz.sa",
    type: "ministry",
    trustLevel: "primary",
  },
  {
    id: "sjp",
    name: "Saudi Judicial Portal",
    nameAr: "البوابة القضائية السعودية",
    url: "https://sjp.moj.gov.sa",
    type: "judicial",
    trustLevel: "primary",
  },
  {
    id: "mol",
    name: "Ministry of Labor",
    nameAr: "وزارة الموارد البشرية والتنمية الاجتماعية",
    url: "https://hrsd.gov.sa",
    type: "ministry",
    trustLevel: "primary",
  },
  {
    id: "mci",
    name: "Ministry of Commerce",
    nameAr: "وزارة التجارة",
    url: "https://mc.gov.sa",
    type: "ministry",
    trustLevel: "primary",
  },
  {
    id: "rega",
    name: "Real Estate General Authority",
    nameAr: "الهيئة العامة للعقار",
    url: "https://rega.gov.sa",
    type: "ministry",
    trustLevel: "primary",
  },
];

/**
 * الأنظمة السعودية الرئيسية
 */
export const SAUDI_MAJOR_LAWS = {
  companies: {
    name: "نظام الشركات",
    source: "boe",
    year: 2022,
    articles: 229,
  },
  labor: {
    name: "نظام العمل",
    source: "boe",
    year: 2005,
    articles: 245,
  },
  civil: {
    name: "نظام المعاملات المدنية",
    source: "boe",
    year: 2023,
    articles: 721,
  },
  criminal: {
    name: "نظام الإجراءات الجزائية",
    source: "boe",
    year: 2001,
    articles: 223,
  },
  realEstate: {
    name: "نظام التسجيل العيني للعقار",
    source: "boe",
    year: 2022,
    articles: 56,
  },
  personalStatus: {
    name: "نظام الأحوال الشخصية",
    source: "boe",
    year: 2022,
    articles: 228,
  },
  arbitration: {
    name: "نظام التحكيم",
    source: "boe",
    year: 2012,
    articles: 58,
  },
  commercialCourt: {
    name: "نظام المحاكم التجارية",
    source: "boe",
    year: 2020,
    articles: 90,
  },
  intellectualProperty: {
    name: "نظام حماية حقوق المؤلف",
    source: "boe",
    year: 2003,
    articles: 26,
  },
  investment: {
    name: "نظام الاستثمار",
    source: "boe",
    year: 2024,
    articles: 45,
  },
};

/**
 * الحصول على مصدر بالمعرف
 */
export function getSourceById(id: string): LegalSource | undefined {
  return SAUDI_LEGAL_SOURCES.find((s) => s.id === id);
}

/**
 * الحصول على المصادر حسب النوع
 */
export function getSourcesByType(type: LegalSource["type"]): LegalSource[] {
  return SAUDI_LEGAL_SOURCES.filter((s) => s.type === type);
}

/**
 * التحقق من صحة المصدر
 */
export function isValidSource(url: string): boolean {
  return SAUDI_LEGAL_SOURCES.some((source) =>
    url.includes(source.url.replace("https://", ""))
  );
}

/**
 * الحصول على النظام المناسب لنوع الاستشارة
 */
export function getRelevantLaws(
  consultationType: string
): Array<keyof typeof SAUDI_MAJOR_LAWS> {
  const mapping: Record<string, Array<keyof typeof SAUDI_MAJOR_LAWS>> = {
    عقاري: ["realEstate", "civil"],
    عمل: ["labor"],
    تجاري: ["companies", "commercialCourt"],
    جزائي: ["criminal"],
    أسري: ["personalStatus"],
    إداري: ["civil"],
    "ملكية فكرية": ["intellectualProperty"],
    استثمار: ["investment", "companies"],
    عقود: ["civil", "companies"],
    أخرى: ["civil"],
  };

  return mapping[consultationType] || ["civil"];
}
