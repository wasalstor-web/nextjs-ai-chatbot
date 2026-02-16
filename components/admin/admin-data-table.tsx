"use client";

import { cn } from "@/lib/utils";

interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface AdminDataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export function AdminDataTable<T extends Record<string, unknown>>({
  columns,
  data,
  emptyMessage = "لا توجد بيانات",
}: AdminDataTableProps<T>): React.ReactElement {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border p-12">
        <p className="text-muted-foreground text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            {columns.map((col) => (
              <th
                className="px-4 py-3 text-start font-medium text-muted-foreground"
                key={col.key}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              className={cn(
                "border-b transition-colors hover:bg-muted/30",
                i % 2 === 0 && "bg-background"
              )}
              key={String(row.id ?? i)}
            >
              {columns.map((col) => (
                <td className="px-4 py-3" key={col.key}>
                  {col.render ? col.render(row) : String(row[col.key] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
