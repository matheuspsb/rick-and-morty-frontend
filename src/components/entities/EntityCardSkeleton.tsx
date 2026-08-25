export function EntityCardSkeleton() {
  return (
    <li aria-hidden="true" className="animate-pulse rounded-archive border border-archive-line bg-archive-panel">
      <div className="archive-texture aspect-archive-card rounded-t-archive" />
      <div className="flex flex-col gap-2.5 px-3 py-2.5">
        <div className="h-3.5 w-3/4 rounded-full bg-archive-line/60" />
        <div className="h-2.5 w-1/2 rounded-full bg-archive-line/60" />
        <div className="h-2.5 w-2/3 rounded-full bg-archive-line/60" />
      </div>
    </li>
  );
}
