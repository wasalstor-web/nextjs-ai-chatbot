export function AdminTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <div className="space-y-3 p-4">
        <div className="h-8 w-full animate-pulse rounded bg-muted/60" />
        {Array.from({ length: rows }).map((_, i) => (
          <div className="flex gap-4" key={`skeleton-row-${i}`}>
            <div className="h-6 flex-1 animate-pulse rounded bg-muted/40" />
            <div className="h-6 w-32 animate-pulse rounded bg-muted/40" />
            <div className="h-6 w-24 animate-pulse rounded bg-muted/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
