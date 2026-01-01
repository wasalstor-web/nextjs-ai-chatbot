"use client";

import { useState, useEffect } from "react";
import { Bot, Search, Star, Users, Zap, TrendingUp, Package, Sparkles, ArrowLeft, X, MessageCircle, Globe, Code, Copy, Check, ExternalLink, Smartphone } from "lucide-react";
import Link from "next/link";

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
  iconUrl: string | null;
}

interface MarketplaceClientProps {
  initialAgents: Agent[];
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
  { id: "business", name: "أعمال", icon: TrendingUp },
  { id: "creative", name: "إبداعي", icon: Sparkles },
];

const integrationOptions: IntegrationOption[] = [
  {
    id: "telegram",
    name: "تيليجرام",
    nameEn: "Telegram",
    icon: MessageCircle,
    color: "text-sky-400",
    bgColor: "bg-sky-500/20 hover:bg-sky-500/30 border-sky-500/50",
    description: "ربط الوكيل ببوت تيليجرام للتواصل المباشر"
  },
  {
    id: "whatsapp",
    name: "واتساب",
    nameEn: "WhatsApp",
    icon: Smartphone,
    color: "text-green-400",
    bgColor: "bg-green-500/20 hover:bg-green-500/30 border-green-500/50",
    description: "ربط الوكيل برقم واتساب للرد التلقائي"
  },
  {
    id: "website",
    name: "موقع إلكتروني",
    nameEn: "Website Widget",
    icon: Globe,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/50",
    description: "إضافة ويدجت الدردشة لموقعك الإلكتروني"
  },
  {
    id: "api",
    name: "واجهة برمجية",
    nameEn: "REST API",
    icon: Code,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20 hover:bg-orange-500/30 border-orange-500/50",
    description: "دمج الوكيل عبر API في تطبيقك"
  },
];

export function MarketplaceClient({ initialAgents }: MarketplaceClientProps) {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedIntegration, setSelectedIntegration] = useState<IntegrationOption | null>(null);
  const [copied, setCopied] = useState(false);

  // Filter agents
  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (agent.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Refresh agents from API
  const refreshAgents = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/marketplace/agents");
      const data = await res.json();
      if (data.success) {
        setAgents(data.agents);
      }
    } catch (error) {
      console.error("Failed to refresh agents:", error);
    }
    setLoading(false);
  };

  // Handle agent selection
  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent);
    setSelectedIntegration(null);
  };

  // Close modal
  const closeModal = () => {
    setSelectedAgent(null);
    setSelectedIntegration(null);
  };

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate integration code/config
  const getIntegrationConfig = (agent: Agent, integration: IntegrationOption) => {
    const apiKey = "YOUR_API_KEY";
    const agentId = agent.id;
    
    switch (integration.id) {
      case "telegram":
        return {
          title: "إعداد بوت تيليجرام",
          steps: [
            "1. أنشئ بوت جديد عبر @BotFather في تيليجرام",
            "2. احصل على Bot Token",
            "3. أضف الإعدادات التالية في لوحة التحكم"
          ],
          code: `{
  "bot_token": "YOUR_BOT_TOKEN",
  "agent_id": "${agentId}",
  "api_endpoint": "https://mubasat-api.vercel.app/api/agents/${agentId}/chat",
  "webhook_url": "https://your-server.com/telegram/webhook"
}`
        };
      case "whatsapp":
        return {
          title: "إعداد واتساب بيزنس",
          steps: [
            "1. اذهب إلى Meta Business Suite",
            "2. أنشئ تطبيق WhatsApp Business",
            "3. احصل على Access Token و Phone Number ID",
            "4. أضف الإعدادات التالية"
          ],
          code: `{
  "phone_number_id": "YOUR_PHONE_ID",
  "access_token": "YOUR_ACCESS_TOKEN",
  "agent_id": "${agentId}",
  "api_endpoint": "https://mubasat-api.vercel.app/api/agents/${agentId}/chat",
  "verify_token": "YOUR_VERIFY_TOKEN"
}`
        };
      case "website":
        return {
          title: "إضافة ويدجت الموقع",
          steps: [
            "1. انسخ الكود التالي",
            "2. الصقه قبل إغلاق </body> في موقعك"
          ],
          code: `<script>
  (function(w,d,s,o,f,js,fjs){
    w['MubasatWidget']=o;w[o]=w[o]||function(){
    (w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','mw','https://mubasat-ai.vercel.app/widget.js'));
  mw('init', { agentId: '${agentId}' });
</script>`
        };
      case "api":
        return {
          title: "استخدام الـ API",
          steps: [
            "1. احصل على API Key من لوحة التحكم",
            "2. استخدم الكود التالي للتواصل مع الوكيل"
          ],
          code: `// إرسال رسالة للوكيل
const response = await fetch('https://mubasat-api.vercel.app/api/agents/${agentId}/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${apiKey}'
  },
  body: JSON.stringify({
    message: 'مرحباً، كيف يمكنك مساعدتي؟',
    session_id: 'unique-session-id'
  })
});

const data = await response.json();
console.log(data.reply);`
        };
      default:
        return { title: "", steps: [], code: "" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" dir="rtl">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span>العودة</span>
              </Link>
              <div className="h-6 w-px bg-zinc-700" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">سوق الوكلاء</h1>
                  <p className="text-sm text-zinc-500">اكتشف وكلاء الذكاء الاصطناعي</p>
                </div>
              </div>
            </div>
            <button
              onClick={refreshAgents}
              disabled={loading}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? "جاري التحديث..." : "تحديث"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 سوق الوكلاء الذكية
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            اكتشف مجموعة متنوعة من وكلاء الذكاء الاصطناعي المصممة لمساعدتك في مختلف المهام
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
            <input
              type="text"
              placeholder="ابحث عن وكيل..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                    : "bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:border-zinc-600"
                }`}
              >
                <cat.icon size={18} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-800/30 rounded-2xl p-5 border border-zinc-700/50 text-center">
              <div className="text-3xl font-bold text-white mb-1">{agents.length}</div>
              <div className="text-zinc-500 text-sm">وكيل متاح</div>
            </div>
            <div className="bg-zinc-800/30 rounded-2xl p-5 border border-zinc-700/50 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                {agents.reduce((sum, a) => sum + (a.usageCount || 0), 0)}
              </div>
              <div className="text-zinc-500 text-sm">إجمالي الاستخدام</div>
            </div>
            <div className="bg-zinc-800/30 rounded-2xl p-5 border border-zinc-700/50 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">5.0</div>
              <div className="text-zinc-500 text-sm">متوسط التقييم</div>
            </div>
            <div className="bg-zinc-800/30 rounded-2xl p-5 border border-zinc-700/50 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">
                {new Set(agents.map((a) => a.source)).size}
              </div>
              <div className="text-zinc-500 text-sm">مصادر مختلفة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredAgents.length === 0 ? (
            <div className="text-center py-20">
              <Bot size={80} className="mx-auto text-zinc-700 mb-6" />
              <h3 className="text-2xl text-zinc-400 mb-2">لا توجد وكلاء</h3>
              <p className="text-zinc-600">
                {searchTerm
                  ? "لم يتم العثور على نتائج مطابقة"
                  : "لم يتم نشر أي وكلاء بعد"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="group bg-zinc-800/30 rounded-2xl border border-zinc-700/50 hover:border-emerald-500/50 transition-all overflow-hidden"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        {agent.iconUrl ? (
                          <img
                            src={agent.iconUrl}
                            alt={agent.name}
                            className="w-8 h-8 rounded"
                          />
                        ) : (
                          <Bot className="w-7 h-7 text-emerald-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {agent.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
                            {agent.category || "عام"}
                          </span>
                          {agent.source === "nagra-ai" && (
                            <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full">
                              Nagra AI
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm">{agent.rating || 5.0}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                      {agent.description || "وكيل ذكاء اصطناعي متقدم"}
                    </p>

                    {/* Capabilities */}
                    {agent.capabilities && agent.capabilities.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {agent.capabilities.slice(0, 3).map((cap, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-lg"
                          >
                            {cap}
                          </span>
                        ))}
                        {agent.capabilities.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-500 rounded-lg">
                            +{agent.capabilities.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {agent.usageCount || 0} استخدام
                      </span>
                      <span>
                        {new Date(agent.createdAt).toLocaleDateString("ar")}
                      </span>
                    </div>

                    {/* Action - Opens Integration Modal */}
                    <button
                      onClick={() => handleSelectAgent(agent)}
                      className="block w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-xl text-center transition-colors"
                    >
                      اختر هذا الوكيل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Integration Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-zinc-800 shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedAgent.name}</h2>
                    <p className="text-sm text-zinc-500">اختر طريقة التكامل</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {!selectedIntegration ? (
                <>
                  <h3 className="text-lg font-semibold text-white mb-4">اختر منصة التكامل</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {integrationOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedIntegration(option)}
                        className={`p-5 rounded-xl border ${option.bgColor} transition-all text-right`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${option.bgColor}`}>
                            <option.icon className={`w-6 h-6 ${option.color}`} />
                          </div>
                          <div>
                            <h4 className={`font-semibold ${option.color}`}>{option.name}</h4>
                            <p className="text-xs text-zinc-500">{option.nameEn}</p>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-400">{option.description}</p>
                      </button>
                    ))}
                  </div>

                  {/* Quick Use Option */}
                  <div className="mt-6 pt-6 border-t border-zinc-800">
                    <Link
                      href={`/chat?agent=${selectedAgent.id}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors"
                    >
                      <ExternalLink size={18} />
                      استخدام مباشر في المنصة
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedIntegration(null)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors"
                  >
                    <ArrowLeft size={18} />
                    <span>العودة لخيارات التكامل</span>
                  </button>

                  {/* Integration Details */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${selectedIntegration.bgColor}`}>
                      <selectedIntegration.icon className={`w-7 h-7 ${selectedIntegration.color}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${selectedIntegration.color}`}>
                        {selectedIntegration.name}
                      </h3>
                      <p className="text-sm text-zinc-500">{selectedIntegration.nameEn}</p>
                    </div>
                  </div>

                  {(() => {
                    const config = getIntegrationConfig(selectedAgent, selectedIntegration);
                    return (
                      <>
                        <h4 className="text-lg font-semibold text-white mb-4">{config.title}</h4>
                        
                        {/* Steps */}
                        <div className="bg-zinc-800/50 rounded-xl p-4 mb-6">
                          <h5 className="text-sm font-medium text-zinc-400 mb-3">خطوات الإعداد:</h5>
                          <ul className="space-y-2">
                            {config.steps.map((step, i) => (
                              <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                                <span className="text-emerald-400">•</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Code Block */}
                        <div className="relative">
                          <div className="flex items-center justify-between bg-zinc-800 rounded-t-xl px-4 py-2 border-b border-zinc-700">
                            <span className="text-xs text-zinc-500">
                              {selectedIntegration.id === "website" ? "HTML" : selectedIntegration.id === "api" ? "JavaScript" : "JSON"}
                            </span>
                            <button
                              onClick={() => copyToClipboard(config.code)}
                              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                            >
                              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                              {copied ? "تم النسخ!" : "نسخ"}
                            </button>
                          </div>
                          <pre className="bg-zinc-950 rounded-b-xl p-4 overflow-x-auto text-sm">
                            <code className="text-zinc-300 whitespace-pre">{config.code}</code>
                          </pre>
                        </div>

                        {/* Help Link */}
                        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                          <p className="text-sm text-emerald-400">
                            💡 تحتاج مساعدة؟ تواصل معنا عبر support@mubasat.ai
                          </p>
                        </div>
                      </>
                    );
                  })()}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-600">
            © 2025 مبسط AI - سوق الوكلاء الذكية
          </p>
        </div>
      </footer>
    </div>
  );
}
