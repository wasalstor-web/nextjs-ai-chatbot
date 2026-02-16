"use client";

import { useEffect, useState } from "react";
import { Shield, User, Crown } from "lucide-react";
import { AdminDataTable } from "@/components/admin/admin-data-table";
import { AdminTableSkeleton } from "@/components/admin/admin-table-skeleton";
import { cn } from "@/lib/utils";

interface UserRow extends Record<string, unknown> {
  id: string;
  email: string;
  role: string;
}

const roleBadge: Record<string, { label: string; className: string; icon: typeof User }> = {
  user: { label: "مستخدم", className: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300", icon: User },
  admin: { label: "مدير", className: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300", icon: Shield },
  super_admin: { label: "مدير أعلى", className: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300", icon: Crown },
};

export function UsersManagement() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchUsers = async (p = page, q = search) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: "20" });
      if (q) params.set("q", q);
      const res = await fetch(`/admin/api/users?${params}`);
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
        setTotal(data.total);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchUsers(1, search);
  };

  const columns = [
    { key: "email", header: "البريد الإلكتروني" },
    {
      key: "role",
      header: "الدور",
      render: (row: UserRow) => {
        const badge = roleBadge[row.role] || roleBadge.user;
        const Icon = badge.icon;
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
              badge.className,
            )}
          >
            <Icon className="h-3 w-3" />
            {badge.label}
          </span>
        );
      },
    },
    {
      key: "id",
      header: "المعرف",
      render: (row: UserRow) => (
        <span className="font-mono text-xs text-muted-foreground">
          {row.id.slice(0, 8)}…
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
          placeholder="بحث بالبريد الإلكتروني..."
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
        <AdminDataTable<UserRow>
          columns={columns}
          data={users}
          emptyMessage="لا يوجد مستخدمون"
        />
      )}

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>الإجمالي: {total}</span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => { setPage(page - 1); fetchUsers(page - 1, search); }}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            السابق
          </button>
          <span className="px-2 py-1">صفحة {page}</span>
          <button
            type="button"
            disabled={users.length < 20}
            onClick={() => { setPage(page + 1); fetchUsers(page + 1, search); }}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}
