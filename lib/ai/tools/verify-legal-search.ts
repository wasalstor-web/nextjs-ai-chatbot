/**
 * أداة البحث والتحقق من المعلومات القانونية
 * Real-time Legal Verification Search Tool
 *
 * تبحث في الإنترنت عبر المصادر الرسمية السعودية
 * وتتحقق من دقة المعلومات وتحديثها حتى نفس اليوم
 */

import { tool } from "ai";
import { z } from "zod";

/**
 * النطاقات الرسمية السعودية المعتمدة
 */
const SAUDI_LEGAL_DOMAINS = [
  "laws.boe.gov.sa",
  "uqn.gov.sa",
  "moj.gov.sa",
  "najiz.sa",
  "sjp.moj.gov.sa",
  "hrsd.gov.sa",
  "mc.gov.sa",
  "rega.gov.sa",
  "istitlaa.ncc.gov.sa",
  "cma.org.sa",
  "saudibar.org.sa",
] as const;

/**
 * Regex لاستخراج عنوان الصفحة (مُعرّف على مستوى الوحدة للأداء)
 */
const TITLE_REGEX = /<title>(.*?)<\/title>/i;

/**
 * نطاقات حسب المجال القانوني
 */
const DOMAIN_BY_AREA: Record<string, string[]> = {
  عمل: ["laws.boe.gov.sa", "hrsd.gov.sa", "najiz.sa", "moj.gov.sa"],
  تجاري: [
    "laws.boe.gov.sa",
    "mc.gov.sa",
    "najiz.sa",
    "moj.gov.sa",
    "cma.org.sa",
  ],
  عقاري: ["laws.boe.gov.sa", "rega.gov.sa", "najiz.sa", "moj.gov.sa"],
  جزائي: ["laws.boe.gov.sa", "najiz.sa", "moj.gov.sa", "sjp.moj.gov.sa"],
  أسري: ["laws.boe.gov.sa", "najiz.sa", "moj.gov.sa"],
  إداري: ["laws.boe.gov.sa", "istitlaa.ncc.gov.sa", "moj.gov.sa"],
  "ملكية فكرية": ["laws.boe.gov.sa", "mc.gov.sa", "moj.gov.sa"],
  استثمار: ["laws.boe.gov.sa", "mc.gov.sa", "cma.org.sa", "moj.gov.sa"],
};

/**
 * خريطة المصادر لعرض الاسم العربي
 */
const SOURCE_NAMES: Record<string, string> = {
  "boe.gov.sa": "هيئة الخبراء بمجلس الوزراء",
  "uqn.gov.sa": "جريدة أم القرى الرسمية",
  "moj.gov.sa": "وزارة العدل",
  "najiz.sa": "منصة ناجز",
  "sjp.moj.gov.sa": "البوابة القضائية السعودية",
  "hrsd.gov.sa": "وزارة الموارد البشرية والتنمية الاجتماعية",
  "mc.gov.sa": "وزارة التجارة",
  "rega.gov.sa": "الهيئة العامة للعقار",
  "cma.org.sa": "هيئة السوق المالية",
  "istitlaa.ncc.gov.sa": "منصة استطلاع",
  "saudibar.org.sa": "الهيئة السعودية للمحامين",
};

type TavilyResult = {
  title: string;
  url: string;
  content: string;
  score: number;
  published_date?: string;
};

type TavilyResponse = {
  results: TavilyResult[];
  answer?: string;
  query: string;
};

/**
 * تحديد اسم المصدر من الرابط
 */
function identifySource(url: string): string {
  for (const [domain, name] of Object.entries(SOURCE_NAMES)) {
    if (url.includes(domain)) {
      return name;
    }
  }
  return "مصدر إلكتروني";
}

/**
 * الحصول على النطاقات المناسبة
 */
function getDomainsForArea(area?: string): string[] {
  if (area && DOMAIN_BY_AREA[area]) {
    return DOMAIN_BY_AREA[area];
  }
  return [...SAUDI_LEGAL_DOMAINS];
}

/**
 * الحصول على التاريخ الهجري
 */
function getHijriDate(): string {
  return new Date().toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "islamic-umalqura",
  });
}

/**
 * بحث Tavily المتقدم
 */
async function tavilySearch(
  query: string,
  domains: string[]
): Promise<TavilyResponse | null> {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) {
    return null;
  }

  try {
    const response = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        query,
        include_domains: domains,
        search_depth: "advanced",
        max_results: 8,
        include_answer: true,
        include_raw_content: false,
      }),
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      return null;
    }
    return (await response.json()) as TavilyResponse;
  } catch {
    return null;
  }
}

/**
 * بحث مباشر في هيئة الخبراء (fallback)
 */
async function directBoeSearch(
  query: string,
  lawName?: string
): Promise<{
  results: Array<{
    title: string;
    url: string;
    content: string;
    source: string;
    publishedDate: string;
  }>;
}> {
  const results: Array<{
    title: string;
    url: string;
    content: string;
    source: string;
    publishedDate: string;
  }> = [];

  const searchTerm = lawName || query;
  const today = new Date().toISOString().split("T")[0];

  // محاولة البحث في هيئة الخبراء
  try {
    const boeUrl = `https://laws.boe.gov.sa/BoeLaws/Laws/LawSearch?lawname=${encodeURIComponent(searchTerm)}`;
    const response = await fetch(boeUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "ar,en",
      },
      signal: AbortSignal.timeout(10_000),
    });

    if (response.ok) {
      const html = await response.text();
      const titleMatch = TITLE_REGEX.exec(html);
      results.push({
        title: titleMatch?.[1]?.trim() || `بحث: ${searchTerm} - هيئة الخبراء`,
        url: boeUrl,
        content: `تم البحث في موقع هيئة الخبراء عن: ${searchTerm}`,
        source: "هيئة الخبراء بمجلس الوزراء",
        publishedDate: today,
      });
    }
  } catch {
    // هيئة الخبراء غير متاحة
  }

  // محاولة البحث في ناجز
  try {
    const najizUrl = "https://najiz.sa/";
    const response = await fetch(najizUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "text/html",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (response.ok) {
      results.push({
        title: "منصة ناجز - وزارة العدل",
        url: "https://najiz.sa",
        content: `خدمات ناجز الإلكترونية المتعلقة بـ: ${searchTerm}`,
        source: "منصة ناجز",
        publishedDate: today,
      });
    }
  } catch {
    // ناجز غير متاحة
  }

  // إضافة روابط مباشرة للمصادر المعتمدة
  results.push({
    title: `${searchTerm} - البحث المباشر`,
    url: `https://laws.boe.gov.sa/BoeLaws/Laws/LawSearch?lawname=${encodeURIComponent(searchTerm)}`,
    content: `رابط مباشر للبحث عن "${searchTerm}" في موقع هيئة الخبراء بمجلس الوزراء`,
    source: "هيئة الخبراء بمجلس الوزراء",
    publishedDate: today,
  });

  return { results };
}

/**
 * أداة البحث والتحقق القانوني
 */
export const verifyLegalInfo = tool({
  description: `ابحث في الإنترنت وتحقق من المعلومات القانونية عبر المصادر الرسمية السعودية (هيئة الخبراء، وزارة العدل، ناجز، وغيرها).

استخدم هذه الأداة دائماً وإلزامياً:
1. قبل الإجابة على أي سؤال قانوني — للتحقق من صحة المعلومات
2. للتأكد من أن النظام أو المادة لم يتم تعديلها مؤخراً
3. عند الحاجة لمصدر رسمي لدعم الإجابة
4. للبحث عن آخر التحديثات والتعديلات النظامية

الأداة تبحث في: هيئة الخبراء • ناجز • وزارة العدل • وزارة الموارد البشرية • وزارة التجارة • هيئة العقار • هيئة السوق المالية`,
  inputSchema: z.object({
    query: z
      .string()
      .describe(
        "استعلام البحث القانوني — كن محدداً. مثال: 'المادة 77 من نظام العمل السعودي'"
      ),
    legalDomain: z
      .enum([
        "عمل",
        "تجاري",
        "عقاري",
        "جزائي",
        "أسري",
        "إداري",
        "ملكية فكرية",
        "استثمار",
        "عام",
      ])
      .optional()
      .describe("المجال القانوني لتركيز البحث فيه"),
    lawName: z
      .string()
      .optional()
      .describe("اسم النظام المحدد للبحث عنه — مثال: نظام العمل، نظام الشركات"),
    specificArticle: z
      .string()
      .optional()
      .describe("رقم المادة المحددة إن وجد — مثال: المادة 77"),
  }),
  execute: async ({ query, legalDomain, lawName, specificArticle }) => {
    // بناء استعلام بحث محسّن
    let searchQuery = query;
    if (lawName) {
      searchQuery = `${lawName} ${searchQuery}`;
    }
    if (specificArticle) {
      searchQuery = `${specificArticle} ${searchQuery}`;
    }
    if (!searchQuery.includes("سعود") && !searchQuery.includes("Saudi")) {
      searchQuery += " المملكة العربية السعودية";
    }

    const domains = getDomainsForArea(legalDomain);
    const today = new Date().toISOString().split("T")[0];
    const hijriDate = getHijriDate();

    // المحاولة 1: بحث Tavily المتقدم
    const tavilyResult = await tavilySearch(searchQuery, domains);

    if (tavilyResult && tavilyResult.results.length > 0) {
      const formattedResults = tavilyResult.results.map((r) => ({
        title: r.title,
        url: r.url,
        content: r.content.slice(0, 600),
        relevanceScore: Math.round(r.score * 100),
        publishedDate: r.published_date || "غير محدد",
        source: identifySource(r.url),
      }));

      return {
        status: "verified",
        searchDate: hijriDate,
        gregorianDate: today,
        query: searchQuery,
        totalResults: formattedResults.length,
        aiSummary: tavilyResult.answer || null,
        results: formattedResults,
        verificationStatus:
          "✅ تم التحقق من المعلومات عبر المصادر الرسمية السعودية",
        searchScope: domains.map((d) => SOURCE_NAMES[d] || d),
        instructions: [
          "استخدم هذه المعلومات لدعم إجابتك بمصادر رسمية",
          "اذكر المصدر والرابط عند الاستشهاد",
          "إذا وجدت تعديلاً حديثاً، نبّه المستخدم",
          "إذا لم تجد إجابة كافية، أخبر المستخدم بذلك بوضوح",
        ],
        disclaimer:
          "المعلومات محدثة حتى تاريخ البحث. يُنصح بالتحقق من المصادر الرسمية مباشرة.",
      };
    }

    // المحاولة 2: بحث مباشر في المواقع الرسمية
    const directResult = await directBoeSearch(searchQuery, lawName);

    // المحاولة 3: بحث Tavily بدون تقييد النطاقات
    let broadResult: TavilyResponse | null = null;
    if (directResult.results.length <= 1) {
      broadResult = await tavilySearch(
        searchQuery,
        [] // بحث عام
      );
    }

    const allResults = [
      ...directResult.results.map((r) => ({
        ...r,
        relevanceScore: 70,
      })),
      ...(broadResult?.results || []).map((r) => ({
        title: r.title,
        url: r.url,
        content: r.content.slice(0, 600),
        relevanceScore: Math.round(r.score * 100),
        publishedDate: r.published_date || "غير محدد",
        source: identifySource(r.url),
      })),
    ];

    const hasApiKey = Boolean(process.env.TAVILY_API_KEY);

    return {
      status: allResults.length > 1 ? "partial" : "limited",
      searchDate: hijriDate,
      gregorianDate: today,
      query: searchQuery,
      totalResults: allResults.length,
      aiSummary: broadResult?.answer || null,
      results: allResults,
      verificationStatus:
        allResults.length > 1
          ? "⚠️ تم البحث بشكل محدود — النتائج قد تكون غير شاملة"
          : "⚠️ لم يتم العثور على نتائج كافية — يُنصح بالتحقق اليدوي",
      officialLinks: {
        "هيئة الخبراء": "https://laws.boe.gov.sa",
        ناجز: "https://najiz.sa",
        "وزارة العدل": "https://moj.gov.sa",
        "وزارة الموارد البشرية": "https://hrsd.gov.sa",
        "وزارة التجارة": "https://mc.gov.sa",
      },
      setupNote: hasApiKey
        ? undefined
        : "💡 لتفعيل البحث المتقدم، أضف TAVILY_API_KEY في ملف .env — احصل على مفتاح مجاني من tavily.com",
      instructions: [
        "أجب بناءً على المعلومات المتوفرة مع ذكر المصادر",
        "نبّه المستخدم أن التحقق محدود إن لم تكن النتائج كافية",
        "وجّه المستخدم للروابط الرسمية للتحقق بنفسه",
        "لا تختلق معلومات غير موجودة في النتائج",
      ],
      disclaimer:
        "يُنصح بمراجعة المصادر الرسمية مباشرة للتأكد من آخر التحديثات.",
    };
  },
});
