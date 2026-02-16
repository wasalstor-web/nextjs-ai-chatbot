"use client";

import {
  ArrowUp,
  History,
  Image as ImageIcon,
  Loader2,
  LogOut,
  Menu,
  Paperclip,
  Plus,
  Settings,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  attachments?: { type: string; url: string; name: string }[];
}

interface Chat {
  id: string;
  title: string;
  createdAt: Date;
}

export default function MobileChatPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "مرحباً! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Load chat history
    const loadHistory = async () => {
      try {
        const response = await fetch("/api/history");
        if (response.ok) {
          const data = await response.json();
          setChatHistory(data.chats || []);
        }
      } catch (error) {
        console.error("Failed to load history:", error);
      }
    };

    if (session) {
      loadHistory();
    }
  }, [session]);

  const handleNewChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        content: "مرحباً! كيف يمكنني مساعدتك في محادثة جديدة؟",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
    setIsSidebarOpen(false);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/mobile/login");
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments((prev) => [...prev, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("فشل الاتصال");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aiResponse = "";
      const aiMessageId = (Date.now() + 1).toString();

      setMessages((prev) => [
        ...prev,
        {
          id: aiMessageId,
          content: "",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        aiResponse += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId ? { ...msg, content: aiResponse } : msg
          )
        );
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "عذراً، حدث خطأ في الاتصال. حاول مرة أخرى.",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex h-screen flex-col bg-linear-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950"
      dir="rtl"
    >
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 dark:bg-gray-900 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="border-gray-200 border-b p-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              {session?.user?.image ? (
                <img
                  alt="Profile"
                  className="h-12 w-12 rounded-full"
                  src={session.user.image}
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-green-600 to-green-500 font-bold text-white">
                  {session?.user?.email?.[0]?.toUpperCase() || "Z"}
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {session?.user?.email || "زائر"}
                </p>
                <p className="text-gray-500 text-xs">
                  {session ? "مستخدم مسجل" : "وضع الزائر"}
                </p>
              </div>
            </div>
          </div>

          {/* New Chat Button */}
          <div className="p-4">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-green-600 to-green-500 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl"
              onClick={handleNewChat}
            >
              <Plus className="h-5 w-5" />
              محادثة جديدة
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto px-4">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-500 text-sm dark:text-gray-400">
              <History className="h-4 w-4" />
              المحادثات السابقة
            </h3>
            <div className="space-y-2">
              {chatHistory.length > 0 ? (
                chatHistory.slice(0, 10).map((chat) => (
                  <button
                    className="w-full rounded-xl p-3 text-right transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    key={chat.id}
                  >
                    <p className="truncate font-medium text-gray-900 text-sm dark:text-white">
                      {chat.title}
                    </p>
                    <p className="mt-1 text-gray-500 text-xs">
                      {new Date(chat.createdAt).toLocaleDateString("ar-SA")}
                    </p>
                  </button>
                ))
              ) : (
                <p className="py-8 text-center text-gray-500 text-sm">
                  لا توجد محادثات سابقة
                </p>
              )}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="space-y-2 border-gray-200 border-t p-4 dark:border-gray-800">
            <Link
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/mobile/settings"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">الإعدادات</span>
            </Link>
            {session ? (
              <button
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={handleSignOut}
              >
                <LogOut className="h-5 w-5" />
                <span>تسجيل الخروج</span>
              </button>
            ) : (
              <Link
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-green-600 transition-colors hover:bg-green-50 dark:hover:bg-green-900/20"
                href="/mobile/login"
                onClick={() => setIsSidebarOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>تسجيل الدخول</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-10 border-gray-200 border-b bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="font-bold text-gray-900 text-lg dark:text-white">
            مساعد ذكي
          </h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <div
            className={`flex ${message.role === "user" ? "justify-start" : "justify-end"}`}
            key={message.id}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-900 shadow-md dark:bg-gray-800 dark:text-white"
              }`}
            >
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.content}
              </p>
              <span className="mt-1 block text-xs opacity-70">
                {message.timestamp.toLocaleTimeString("ar-SA", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end">
            <div className="rounded-2xl bg-gray-100 px-4 py-3 dark:bg-gray-800">
              <Loader2 className="h-5 w-5 animate-spin text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 border-gray-200 border-t bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        {/* Attachments Preview */}
        {attachments.length > 0 && (
          <div className="mb-3 flex gap-2 overflow-x-auto pb-2">
            {attachments.map((file, index) => (
              <div
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                {file.type.startsWith("image/") ? (
                  <img
                    alt={file.name}
                    className="h-full w-full object-cover"
                    src={URL.createObjectURL(file)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Paperclip className="h-6 w-6 text-gray-500" />
                  </div>
                )}
                <button
                  className="-top-1 -left-1 absolute flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white shadow-lg"
                  onClick={() => removeAttachment(index)}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        <form className="flex items-end gap-2" onSubmit={handleSubmit}>
          {/* File Input Button */}
          <input
            accept="image/*,.pdf,.doc,.docx,.txt"
            className="hidden"
            multiple
            onChange={handleFileSelect}
            ref={fileInputRef}
            type="file"
          />
          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-600 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            onClick={() => fileInputRef.current?.click()}
            type="button"
          >
            <Paperclip className="h-5 w-5" />
          </button>

          <div className="relative flex-1">
            <textarea
              className="w-full resize-none rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="اكتب رسالتك..."
              rows={1}
              style={{ maxHeight: "120px" }}
              value={input}
            />
          </div>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all duration-200 hover:bg-green-700 disabled:bg-gray-300 disabled:shadow-none dark:disabled:bg-gray-700"
            disabled={(!input.trim() && attachments.length === 0) || isLoading}
            type="submit"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
