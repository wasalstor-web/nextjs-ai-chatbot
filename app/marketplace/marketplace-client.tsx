"use client";

import { useState, useEffect } from "react";
import { Bot, Search, Star, Users, Zap, TrendingUp, Package, Sparkles, X, MessageCircle, Globe, Code, Copy, Check, ExternalLink, Smartphone, RefreshCw } from "lucide-react";

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
    description: "ربط الوكيل ببوت تيليجرام"
  },
  {
    id: "whatsapp",
    name: "واتساب",
    nameEn: "WhatsApp",
    icon: Smartphone,
    color: "text-green-400",
    bgColor: "bg-green-500/20 hover:bg-green-500/30 border border-green-500/50",
    description: "ربط الوكيل برقم واتساب"
  },
  {
    id: "website",
    name: "موقع إلكتروني",
    nameEn: "Website Widget",
    icon: Globe,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50",
    description: "إضافة ويدجت للموقع"
  },
  {
    id: "api",
    name: "API",
    nameEn: "REST API",
    icon: Code,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50",
    description: "دمج عبر API"
  },
];

export function MarketplaceClientStandalone({ initialAgents }: { initialAgents: Agent[] }) {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedIntegration, setSelectedIntegration] = useState<IntegrationOption | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync agents state when initialAgents prop changes
  useEffect(() => {
    setAgents(initialAgents);
  }, [initialAgents]);

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (agent.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
      agent.category === selectedCategory || 
      agent.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const refreshAgents = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://mubasat-api.vercel.app/api/agents?marketplace=true");
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
    return `fetch('https://mubasat-api.vercel.app/api/agents/${id}/chat', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ message: 'مرحبا' })\n});`;
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">سوق الوكلاء</h1>
              <p className="text-xs text-zinc-500">مبسط AI</p>
            </div>
          </div>
          <button onClick={refreshAgents} disabled={loading} className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg">
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </header>

      {/* Search & Categories */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">🚀 اكتشف الوكلاء الذكية</h2>
          <p className="text-zinc-400">اختر وكيل وقم بربطه بمنصتك المفضلة</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="ابحث..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-emerald-500 outline-none"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                  selectedCategory === cat.id
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                }`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Agents Grid */}
        {filteredAgents.length === 0 ? (
          <div className="text-center py-20">
            <Bot size={60} className="mx-auto text-zinc-700 mb-4" />
            <p className="text-zinc-500">لا توجد وكلاء</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <div key={agent.id} className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{agent.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-zinc-800 rounded-full text-zinc-400">{agent.category || agent.type || "عام"}</span>
                      {agent.source === "nagra-ai" && <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full">Nagra</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm">{agent.rating || 5}</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{agent.description || "وكيل ذكاء اصطناعي"}</p>
                {agent.capabilities && agent.capabilities.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {agent.capabilities.slice(0, 3).map((c, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-zinc-800 rounded">{c}</span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                  <span><Users size={14} className="inline mr-1" />{agent.usageCount || 0}</span>
                </div>
                <button
                  onClick={() => { setSelectedAgent(agent); setSelectedIntegration(null); }}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-xl transition"
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-2xl w-full max-w-lg border border-zinc-800 max-h-[90vh] overflow-auto">
            <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-8 h-8 text-emerald-400" />
                <div>
                  <h2 className="font-bold text-lg">{selectedAgent.name}</h2>
                  <p className="text-xs text-zinc-500">اختر طريقة التكامل</p>
                </div>
              </div>
              <button onClick={() => setSelectedAgent(null)} className="p-2 hover:bg-zinc-800 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <div className="p-5">
              {!selectedIntegration ? (
                <div className="grid grid-cols-2 gap-3">
                  {integrationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedIntegration(opt)}
                      className={`p-4 rounded-xl ${opt.bgColor} transition text-right`}
                    >
                      <opt.icon className={`w-8 h-8 ${opt.color} mb-2`} />
                      <div className={`font-semibold ${opt.color}`}>{opt.name}</div>
                      <div className="text-xs text-zinc-500">{opt.description}</div>
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <button onClick={() => setSelectedIntegration(null)} className="text-zinc-400 hover:text-white text-sm mb-4 flex items-center gap-1">
                    ← العودة
                  </button>
                  <div className="flex items-center gap-3 mb-4">
                    <selectedIntegration.icon className={`w-10 h-10 ${selectedIntegration.color}`} />
                    <div>
                      <div className={`font-bold text-lg ${selectedIntegration.color}`}>{selectedIntegration.name}</div>
                      <div className="text-xs text-zinc-500">{selectedIntegration.nameEn}</div>
                    </div>
                  </div>
                  <div className="bg-zinc-950 rounded-xl p-4 relative">
                    <button onClick={() => copyCode(getCode(selectedAgent, selectedIntegration))} className="absolute top-2 left-2 p-2 hover:bg-zinc-800 rounded text-zinc-400">
                      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                    <pre className="text-sm text-zinc-300 overflow-x-auto whitespace-pre">{getCode(selectedAgent, selectedIntegration)}</pre>
                  </div>
                  <p className="text-xs text-zinc-500 mt-4">💡 للمساعدة: support@mubasat.ai</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
