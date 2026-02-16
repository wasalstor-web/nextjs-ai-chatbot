export function AdminTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <div className="p-4 space-y-3">
        <div className="h-8 w-full animate-pulse rounded bg-muted/60" />
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={`skeleton-row-${i}`}
            className="flex gap-4"
          >
            <div className="h-6 flex-1 animate-pulse rounded bg-muted/40" />
            <div className="h-6 w-32 animate-pulse rounded bg-muted/40" />
            <div className="h-6 w-24 animate-pulse rounded bg-muted/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
