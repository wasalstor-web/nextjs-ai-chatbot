"use client";

import {
  Bot,
  Check,
  Code,
  Copy,
  ExternalLink,
  Globe,
  MessageCircle,
  Package,
  RefreshCw,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface Agent {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  status: string;
  capabilities: string[] | null;
  usageCount: number | null;
  rating: number | null;
  createdAt: string;
  source: string | null;
  type?: string;
}

interface IntegrationOption {
  id: string;
  name: string;
  nameEn: string;
  icon: any;
  color: string;
  bgColor: string;
  description: string;
}

const categories = [
  { id: "all", name: "الكل", icon: Package },
  { id: "assistant", name: "مساعد", icon: Bot },
  { id: "coding", name: "برمجة", icon: Zap },
  { id: "creative", name: "إبداعي", icon: Sparkles },
];

const integrationOptions: IntegrationOption[] = [
  {
    id: "telegram",
    name: "تيليجرام",
    nameEn: "Telegram",
    icon: MessageCircle,
    color: "text-sky-400",
    bgColor: "bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/50",
    description: "ربط الوكيل ببوت تيليجرام",
  },
  {
    id: "whatsapp",
    name: "واتساب",
    nameEn: "WhatsApp",
    icon: Smartphone,
    color: "text-green-400",
    bgColor: "bg-green-500/20 hover:bg-green-500/30 border border-green-500/50",
    description: "ربط الوكيل برقم واتساب",
  },
  {
    id: "website",
    name: "موقع إلكتروني",
    nameEn: "Website Widget",
    icon: Globe,
    color: "text-purple-400",
    bgColor:
      "bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50",
    description: "إضافة ويدجت للموقع",
  },
  {
    id: "api",
    name: "API",
    nameEn: "REST API",
    icon: Code,
    color: "text-orange-400",
    bgColor:
      "bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50",
    description: "دمج عبر API",
  },
  {
    id: "subspace",
    name: "Subspace",
    nameEn: "Subspace",
    icon: Rocket,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50",
    description: "ربط الوكيل مع Subspace",
  },
];

export function MarketplaceClientStandalone({
  initialAgents,
}: {
  initialAgents: Agent[];
}) {
  // Use lazy initialization to set initial value only once on mount
  // This prevents resetting agents when parent re-renders with new array reference
  const [agents, setAgents] = useState<Agent[]>(() => initialAgents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedIntegration, setSelectedIntegration] =
    useState<IntegrationOption | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (agent.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      agent.category === selectedCategory ||
      agent.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const refreshAgents = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://mubasat-api.vercel.app/api/agents?marketplace=true"
      );
      const data = await res.json();
      if (data.success) setAgents(data.agents);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCode = (agent: Agent, integration: IntegrationOption) => {
    const id = agent.id;
    if (integration.id === "telegram") {
      return `{\n  "bot_token": "YOUR_BOT_TOKEN",\n  "agent_id": "${id}",\n  "api": "https://mubasat-api.vercel.app/api/agents/${id}/chat"\n}`;
    }
    if (integration.id === "whatsapp") {
      return `{\n  "phone_id": "YOUR_PHONE_ID",\n  "token": "YOUR_TOKEN",\n  "agent_id": "${id}"\n}`;
    }
    if (integration.id === "website") {
      return `<script src="https://mubasat-ai.vercel.app/widget.js"></script>\n<script>MubasatWidget.init({ agentId: '${id}' });</script>`;
    }
    if (integration.id === "subspace") {
      const webhookUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/api/subspace/webhook`
          : "https://mubasat-api.vercel.app/api/subspace/webhook";

      return `{\n  "subspace_api_key": "YOUR_SUBSPACE_API_KEY",\n  "agent_id": "${id}",\n  "endpoint": "https://mubasat-api.vercel.app/api/agents/${id}/chat",\n  "webhook_url": "${webhookUrl}",\n  "send_url": "https://mubasat-api.vercel.app/api/subspace/send"\n}`;
    }
    return `fetch('https://mubasat-api.vercel.app/api/agents/${id}/chat', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ message: 'مرحبا' })\n});`;
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 border-zinc-800 border-b bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-green-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl">سوق الوكلاء</h1>
              <p className="text-xs text-zinc-500">مبسط AI</p>
            </div>
          </div>
          <button
            className="rounded-lg bg-zinc-800 p-2 hover:bg-zinc-700"
            disabled={loading}
            onClick={refreshAgents}
          >
            <RefreshCw className={loading ? "animate-spin" : ""} size={18} />
          </button>
        </div>
      </header>

      {/* Search & Categories */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-bold text-3xl">🚀 اكتشف الوكلاء الذكية</h2>
          <p className="text-zinc-400">اختر وكيل وقم بربطه بمنصتك المفضلة</p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="-translate-y-1/2 absolute top-1/2 right-3 text-zinc-500"
              size={18}
            />
            <input
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pr-10 pl-4 outline-none focus:border-emerald-500"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث..."
              type="text"
              value={searchTerm}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition ${
                  selectedCategory === cat.id
                    ? "border border-emerald-500/50 bg-emerald-500/20 text-emerald-400"
                    : "border border-zinc-800 bg-zinc-900 text-zinc-400"
                }`}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Agents Grid */}
        {filteredAgents.length === 0 ? (
          <div className="py-20 text-center">
            <Bot className="mx-auto mb-4 text-zinc-700" size={60} />
            <p className="text-zinc-500">لا توجد وكلاء</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAgents.map((agent) => (
              <div
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-emerald-500/50"
                key={agent.id}
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
                    <Bot className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{agent.name}</h3>
                    <div className="mt-1 flex gap-2">
                      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                        {agent.category || agent.type || "عام"}
                      </span>
                      {agent.source === "nagra-ai" && (
                        <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-purple-400 text-xs">
                          Nagra
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star fill="currentColor" size={14} />
                    <span className="text-sm">{agent.rating || 5}</span>
                  </div>
                </div>
                <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
                  {agent.description || "وكيل ذكاء اصطناعي"}
                </p>
                {agent.capabilities && agent.capabilities.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1">
                    {agent.capabilities.slice(0, 3).map((c, i) => (
                      <span
                        className="rounded bg-zinc-800 px-2 py-1 text-xs"
                        key={i}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mb-4 flex items-center justify-between text-sm text-zinc-500">
                  <span>
                    <Users className="mr-1 inline" size={14} />
                    {agent.usageCount || 0}
                  </span>
                </div>
                <button
                  className="w-full rounded-xl bg-emerald-500 py-3 font-medium text-white transition hover:bg-emerald-400"
                  onClick={() => {
                    setSelectedAgent(agent);
                    setSelectedIntegration(null);
                  }}
                >
                  اختر هذا الوكيل
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Integration Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="flex items-center justify-between border-zinc-800 border-b p-5">
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8 text-emerald-400" />
                <div>
                  <h2 className="font-bold text-lg">{selectedAgent.name}</h2>
                  <p className="text-xs text-zinc-500">اختر طريقة التكامل</p>
                </div>
              </div>
              <button
                className="rounded-lg p-2 hover:bg-zinc-800"
                onClick={() => setSelectedAgent(null)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-5">
              {selectedIntegration ? (
                <div>
                  <button
                    className="mb-4 flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
                    onClick={() => setSelectedIntegration(null)}
                  >
                    ← العودة
                  </button>
                  <div className="mb-4 flex items-center gap-3">
                    <selectedIntegration.icon
                      className={`h-10 w-10 ${selectedIntegration.color}`}
                    />
                    <div>
                      <div
                        className={`font-bold text-lg ${selectedIntegration.color}`}
                      >
                        {selectedIntegration.name}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {selectedIntegration.nameEn}
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-zinc-950 p-4">
                    <button
                      className="absolute top-2 left-2 rounded p-2 text-zinc-400 hover:bg-zinc-800"
                      onClick={() =>
                        copyCode(getCode(selectedAgent, selectedIntegration))
                      }
                    >
                      {copied ? (
                        <Check className="text-emerald-400" size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                    <pre className="overflow-x-auto whitespace-pre text-sm text-zinc-300">
                      {getCode(selectedAgent, selectedIntegration)}
                    </pre>
                  </div>
                  <p className="mt-4 text-xs text-zinc-500">
                    💡 للمساعدة: support@mubasat.ai
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {integrationOptions.map((opt) => (
                    <button
                      className={`rounded-xl p-4 ${opt.bgColor} text-right transition`}
                      key={opt.id}
                      onClick={() => setSelectedIntegration(opt)}
                    >
                      <opt.icon className={`h-8 w-8 ${opt.color} mb-2`} />
                      <div className={`font-semibold ${opt.color}`}>
                        {opt.name}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {opt.description}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
