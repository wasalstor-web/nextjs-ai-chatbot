"use client";

import { useEffect, useState } from "react";
import { Globe, Lock } from "lucide-react";
import { AdminDataTable } from "@/components/admin/admin-data-table";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";
import { cn } from "@/lib/utils";

interface ChatRow extends Record<string, unknown> {
  id: string;
  title: string;
  createdAt: string;
  visibility: string;
  userId: string;
}

export function ChatsManagement() {
  const [chats, setChats] = useState<ChatRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchChats = async (p = page, q = search) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: "20" });
      if (q) params.set("q", q);
      const res = await fetch(`/admin/api/chats?${params}`);
      const data = await res.json();
      if (data.success) {
        setChats(data.chats);
        setTotal(data.total);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchChats(1, search);
  };

  const columns = [
    {
      key: "title",
      header: "العنوان",
      render: (row: ChatRow) => (
        <span className="max-w-[300px] truncate block">{row.title}</span>
      ),
    },
    {
      key: "visibility",
      header: "الرؤية",
      render: (row: ChatRow) => (
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
            row.visibility === "public"
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
          )}
        >
          {row.visibility === "public" ? (
            <><Globe className="h-3 w-3" /> عام</>
          ) : (
            <><Lock className="h-3 w-3" /> خاص</>
          )}
        </span>
      ),
    },
    {
      key: "createdAt",
      header: "التاريخ",
      render: (row: ChatRow) => (
        <span className="text-xs text-muted-foreground">
          {new Date(row.createdAt).toLocaleDateString("ar-SA")}
        </span>
      ),
    },
    {
      key: "userId",
      header: "المستخدم",
      render: (row: ChatRow) => (
        <span className="font-mono text-xs text-muted-foreground">
          {row.userId.slice(0, 8)}…
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="بحث بالعنوان..."
          className="flex-1 rounded-lg border bg-background px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          بحث
        </button>
      </form>

      {loading ? (
        <AdminTableSkeleton />
      ) : (
        <AdminDataTable<ChatRow>
          columns={columns}
          data={chats}
          emptyMessage="لا توجد محادثات"
        />
      )}

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>الإجمالي: {total}</span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => { setPage(page - 1); fetchChats(page - 1, search); }}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            السابق
          </button>
          <span className="px-2 py-1">صفحة {page}</span>
          <button
            type="button"
            disabled={chats.length < 20}
            onClick={() => { setPage(page + 1); fetchChats(page + 1, search); }}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}
