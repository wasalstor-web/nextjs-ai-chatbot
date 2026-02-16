"use client";

import { useEffect, useState } from "react";
import { FileText, Code, Image, Sheet } from "lucide-react";
import { AdminDataTable } from "@/components/admin/admin-data-table";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";
import { cn } from "@/lib/utils";

interface DocumentRow extends Record<string, unknown> {
  id: string;
  title: string;
  kind: string;
  createdAt: string;
  userId: string;
}

const kindConfig: Record<string, { label: string; icon: typeof FileText; className: string }> = {
  text: { label: "نص", icon: FileText, className: "text-blue-500" },
  code: { label: "كود", icon: Code, className: "text-green-500" },
  image: { label: "صورة", icon: Image, className: "text-purple-500" },
  sheet: { label: "جدول", icon: Sheet, className: "text-orange-500" },
};

export function DocumentsManagement() {
  const [documents, setDocuments] = useState<DocumentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const fetchDocuments = async (p = page) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: "20" });
      const res = await fetch(`/admin/api/documents?${params}`);
      const data = await res.json();
      if (data.success) {
        setDocuments(data.documents);
        setTotal(data.total);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const columns = [
    { key: "title", header: "العنوان" },
    {
      key: "kind",
      header: "النوع",
      render: (row: DocumentRow) => {
        const cfg = kindConfig[row.kind] || kindConfig.text;
        const Icon = cfg.icon;
        return (
          <span className="inline-flex items-center gap-1 text-xs">
            <Icon className={cn("h-3.5 w-3.5", cfg.className)} />
            {cfg.label}
          </span>
        );
      },
    },
    {
      key: "createdAt",
      header: "التاريخ",
      render: (row: DocumentRow) => (
        <span className="text-xs text-muted-foreground">
          {new Date(row.createdAt).toLocaleDateString("ar-SA")}
        </span>
      ),
    },
    {
      key: "userId",
      header: "المستخدم",
      render: (row: DocumentRow) => (
        <span className="font-mono text-xs text-muted-foreground">
          {row.userId.slice(0, 8)}…
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        <AdminTableSkeleton />
      ) : (
        <AdminDataTable<DocumentRow>
          columns={columns}
          data={documents}
          emptyMessage="لا توجد مستندات"
        />
      )}

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>الإجمالي: {total}</span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => { setPage(page - 1); fetchDocuments(page - 1); }}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            السابق
          </button>
          <span className="px-2 py-1">صفحة {page}</span>
          <button
            type="button"
            disabled={documents.length < 20}
            onClick={() => { setPage(page + 1); fetchDocuments(page + 1); }}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}
