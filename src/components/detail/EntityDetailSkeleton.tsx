import { ENTITY_DETAIL_PORTRAIT_GRID_COLS } from "../../constants/layout";

export function EntityDetailSkeleton() {
  return (
    <div aria-hidden="true" className="flex flex-1 animate-pulse flex-col">
      <div className="h-7 border-b border-archive-line" />
      <div className={`grid ${ENTITY_DETAIL_PORTRAIT_GRID_COLS} gap-4 py-4`}>
        <div className="archive-texture aspect-archive-portrait rounded-archive border border-archive-line" />
        <div className="flex flex-col gap-2.5 pt-2">
          <div className="h-6 w-3/4 rounded-full bg-archive-line/60" />
          <div className="h-4 w-1/3 rounded-full bg-archive-line/60" />
          <div className="mt-4 h-3 w-1/4 rounded-full bg-archive-line/60" />
          <div className="h-3 w-2/3 rounded-full bg-archive-line/60" />
        </div>
      </div>
      <div className="h-44 rounded-archive border border-archive-line bg-archive-panel" />
    </div>
  );
}
