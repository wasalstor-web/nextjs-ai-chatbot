// النماذج المتاحة - جي بي تي فقط
export const DEFAULT_CHAT_MODEL = "openai/gpt-4o";

// For API usage
export const model = DEFAULT_CHAT_MODEL;

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "openai/gpt-4o",
    name: "فيصل 1",
    provider: "openai",
    description: "النموذج الأول - الأكثر قدرة",
  },
  {
    id: "openai/gpt-4o-mini",
    name: "فيصل 2",
    provider: "openai",
    description: "النموذج الثاني - سريع واقتصادي",
  },
  {
    id: "openai/gpt-4.1-mini",
    name: "فيصل 3",
    provider: "openai",
    description: "النموذج الثالث - الجيل الجديد",
  },
  {
    id: "openai/gpt-5.2",
    name: "فيصل 4",
    provider: "openai",
    description: "النموذج الرابع - أحدث إصدار",
  },
];

// أسماء المزودين بالعربي
export const providerDisplayNames: Record<string, string> = {
  openai: "فيصل",
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
