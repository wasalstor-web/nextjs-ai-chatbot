// النماذج المتاحة - فقط النماذج التي لديها مفاتيح API مُفعّلة
export const DEFAULT_CHAT_MODEL = "openai/gpt-5.2";

// For API usage
export const model = DEFAULT_CHAT_MODEL;

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  // كلود (Anthropic)
  {
    id: "anthropic/claude-sonnet-4.5",
    name: "المتقدم",
    provider: "anthropic",
    description: "الأكثر قدرة وذكاءً (افتراضي)",
  },
  {
    id: "anthropic/claude-opus-4.5",
    name: "الاحترافي",
    provider: "anthropic",
    description: "للمهام المعقدة والتحليل العميق",
  },
  {
    id: "anthropic/claude-haiku-4.5",
    name: "السريع",
    provider: "anthropic",
    description: "سريع وفعّال للمهام البسيطة",
  },
  {
    id: "anthropic/claude-3.7-sonnet",
    name: "الكلاسيكي",
    provider: "anthropic",
    description: "الجيل السابق الموثوق",
  },
  // جي بي تي (OpenAI)
  {
    id: "openai/gpt-4o",
    name: "المتقدم",
    provider: "openai",
    description: "الأكثر قدرة من أوبن إيه آي",
  },
  {
    id: "openai/gpt-4o-mini",
    name: "الخفيف",
    provider: "openai",
    description: "سريع واقتصادي",
  },
  {
    id: "openai/gpt-4.1-mini",
    name: "الرشيق",
    provider: "openai",
    description: "الجيل الجديد السريع",
  },
  {
    id: "openai/gpt-5.2",
    name: "الأحدث",
    provider: "openai",
    description: "أحدث إصدار متاح",
  },
];

// أسماء المزودين بالعربي
export const providerDisplayNames: Record<string, string> = {
  anthropic: "كلود",
  openai: "جي بي تي",
};

// Group models by provider for UI
export const modelsByProvider = chatModels.reduce(
  (acc, m) => {
    if (!acc[m.provider]) {
      acc[m.provider] = [];
    }
    acc[m.provider].push(m);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);
