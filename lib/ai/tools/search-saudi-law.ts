/**
 * أداة البحث في الأنظمة السعودية - Saudi Laws Search Tool
 * للبحث في الأنظمة واللوائح والقوانين السعودية
 */

import { tool } from "ai";
import { z } from "zod";
import { getSourcesByType, SAUDI_LEGAL_SOURCES } from "@/lib/legal/sources";
import type { LegalSource } from "@/lib/legal/types";

export const searchSaudiLaw = tool({
  description: `أداة للبحث في الأنظمة واللوائح السعودية الرسمية.

  استخدمها للحصول على:
  - نصوص المواد من الأنظمة السعودية
  - اللوائح التنفيذية والقرارات الوزارية
  - آخر التعديلات على الأنظمة
  - المصادر الرسمية والمراجع القانونية

  المصادر المعتمدة:
  - هيئة الخبراء (boe.gov.sa)
  - جريدة أم القرى (uqn.gov.sa)
  - وزارة العدل (moj.gov.sa)
  - منصة ناجز (najiz.sa)
  - وزارة الموارد البشرية (mol.gov.sa)
  - وزارة التجارة (mci.gov.sa)`,

  inputSchema: z.object({
    query: z.string().describe("استعلام البحث - كلمات مفتاحية أو موضوع قانوني"),

    category: z
      .enum([
        "نظام أساسي",
        "نظام تجاري",
        "نظام عمل",
        "نظام عقاري",
        "نظام جزائي",
        "نظام أحوال شخصية",
        "لائحة تنفيذية",
        "قرار وزاري",
        "كل الفئات",
      ])
      .optional()
      .describe("تصنيف النظام للبحث المحدد"),

    specificLaw: z
      .string()
      .optional()
      .describe(`
      اسم نظام محدد للبحث فيه.
      مثال: "نظام العمل", "نظام الشركات", "نظام الإيجار"
    `),

    articleNumber: z.string().optional().describe("رقم مادة محددة للبحث عنها"),
  }),

  execute: async ({
    query,
    category = "كل الفئات",
    specificLaw,
    articleNumber,
  }) => {
    let searchResults = `## 🔍 نتائج البحث في الأنظمة السعودية

**البحث عن:** "${query}"
${category !== "كل الفئات" ? `**الفئة:** ${category}` : ""}
${specificLaw ? `**النظام المحدد:** ${specificLaw}` : ""}
${articleNumber ? `**رقم المادة:** ${articleNumber}` : ""}

---

`;

    // تصفية المصادر حسب الفئة
    let relevantSources = SAUDI_LEGAL_SOURCES;

    if (category !== "كل الفئات") {
      const categoryMap: Record<string, string> = {
        "نظام أساسي": "نظام",
        "نظام تجاري": "نظام",
        "نظام عمل": "نظام",
        "نظام عقاري": "نظام",
        "نظام جزائي": "نظام",
        "نظام أحوال شخصية": "نظام",
        "لائحة تنفيذية": "لائحة",
        "قرار وزاري": "قرار",
      };

      const typeToSearch = categoryMap[category];
      if (typeToSearch) {
        relevantSources = getSourcesByType(typeToSearch as LegalSource["type"]);
      }
    }

    // البحث بالكلمات المفتاحية
    const queryLower = query.toLowerCase();
    const matchingSources = relevantSources.filter(
      (source) =>
        source.name.toLowerCase().includes(queryLower) ||
        source.nameAr.toLowerCase().includes(queryLower) ||
        source.description?.toLowerCase().includes(queryLower)
    );

    if (matchingSources.length === 0) {
      searchResults += `### ⚠️ لم يتم العثور على نتائج مباشرة

**اقتراحات:**
1. جرب كلمات بحث أخرى أو أكثر عمومية
2. تحقق من التهجئة
3. ابحث عن موضوع عام ثم حدد النظام

**بدلاً من ذلك، يمكنني مساعدتك في:**
- شرح الموضوع القانوني بشكل عام
- توجيهك للجهة المختصة
- تقديم استشارة قانونية عامة حول موضوعك

`;

      // اقتراح أنظمة ذات صلة
      searchResults += "\n### 📚 أنظمة قد تكون مفيدة:\n\n";

      const suggestedSources = relevantSources.slice(0, 5);
      suggestedSources.forEach((source, idx) => {
        searchResults += `${idx + 1}. **${source.nameAr}** (${source.name})\n`;
        searchResults += `   - ${source.description || "نظام رئيسي في النظام القانوني السعودي"}\n`;
        searchResults += `   - 🌐 [الموقع الرسمي](${source.url})\n\n`;
      });

      return {
        status: "no_results",
        query,
        suggestions: suggestedSources.map((s) => s.nameAr),
        searchResults,
      };
    }

    // عرض النتائج
    searchResults += `### ✅ عثرنا على ${matchingSources.length} ${matchingSources.length === 1 ? "نتيجة" : "نتيجة"}\n\n`;

    matchingSources.slice(0, 5).forEach((source, idx) => {
      searchResults += `## ${idx + 1}. ${source.nameAr}

**الاسم الرسمي:** ${source.name}
**النوع:** ${source.type}
**تاريخ الإصدار:** ${source.issueDate || "غير محدد"}
${source.lastUpdate ? `**آخر تحديث:** ${source.lastUpdate}` : ""}

**الوصف:**
${source.description || "أحد الأنظمة الأساسية في المملكة العربية السعودية"}

**الجهة المصدرة:** ${source.authority || source.nameAr}
**المصدر الرسمي:** [${source.url}](${source.url})

---

`;
    });

    // معلومات إضافية عن البحث في مادة محددة
    if (articleNumber && matchingSources.length > 0) {
      const primarySource = matchingSources[0];

      searchResults += `\n### 📄 البحث عن المادة رقم ${articleNumber}\n\n`;
      searchResults += `**في:** ${primarySource.nameAr}\n\n`;
      searchResults +=
        "⚠️ **ملاحظة:** للحصول على نص المادة الدقيق، يُرجى زيارة المصدر الرسمي:\n";
      searchResults += `🌐 [${primarySource.authority || primarySource.nameAr}](${primarySource.url})\n\n`;
      searchResults += "**كيفية الوصول:**\n";
      searchResults += "1. زيارة الموقع الرسمي للجهة\n";
      searchResults += `2. البحث عن "${primarySource.name}"\n`;
      searchResults += `3. الانتقال إلى المادة رقم ${articleNumber}\n\n`;
    }

    // توصيات للمتابعة
    searchResults += "\n## 📌 خطوات إضافية مقترحة\n\n";
    searchResults += "1. **للحصول على النص الكامل:**\n";
    searchResults += "   - زر المواقع الرسمية المذكورة أعلاه\n";
    searchResults += "   - حمّل نسخة PDF من النظام\n\n";

    searchResults += "2. **للتحقق من آخر التعديلات:**\n";
    searchResults += "   - راجع جريدة أم القرى الإلكترونية (uqn.gov.sa)\n";
    searchResults += "   - تابع منصة هيئة الخبراء (boe.gov.sa)\n\n";

    searchResults += "3. **للحصول على استشارة قانونية:**\n";
    searchResults += "   - استشر محامياً مرخصاً\n";
    searchResults += "   - تواصل مع وزارة العدل عبر ناجز (najiz.sa)\n\n";

    searchResults += "\n---\n\n";
    searchResults += "⚖️ **ملاحظة قانونية:**\n";
    searchResults += "- هذه النتائج استرشادية فقط\n";
    searchResults +=
      "- للحصول على النصوص الرسمية والملزمة، راجع المصادر الرسمية\n";
    searchResults += "- الأنظمة قد تتعرض للتعديل، تحقق من آخر الإصدارات\n";
    searchResults += "- للتطبيق العملي، استشر محامياً أو جهة قانونية مختصة\n";

    return {
      status: "success",
      query,
      category,
      resultsCount: matchingSources.length,
      searchResults,
      sources: matchingSources.map((s) => ({
        name: s.nameAr,
        type: s.type,
        url: s.url,
        authority: s.authority || s.nameAr,
      })),
      officialLinks: matchingSources.map((s) => s.url),
    };
  },
});
