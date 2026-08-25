import { memo, useMemo } from "react";
import { buildPageItems } from "../../utils/pagination";

interface ArchivePaginationProps {
  page: number;
  pageCount: number;
  onGoToPage: (page: number) => void;
}

interface PageButtonProps {
  page: number;
  active: boolean;
  onGoToPage: (page: number) => void;
}

function PageButtonComponent({ page, active, onGoToPage }: PageButtonProps) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      onClick={() => onGoToPage(page)}
      className={`h-7.5 min-w-7.5 rounded-archive border font-mono text-archive-sm transition-colors hover:border-archive-ink ${
        active ? "border-archive-accent bg-archive-accent text-archive-bg" : "border-archive-line bg-transparent text-archive-ink"
      }`}
    >
      {page}
    </button>
  );
}

const PageButton = memo(PageButtonComponent);

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "previous" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={direction === "previous" ? "Previous page" : "Next page"}
      className="h-7.5 min-w-7.5 rounded-archive border border-archive-line font-mono text-archive-sm text-archive-ink transition-colors enabled:hover:border-archive-ink disabled:opacity-30"
    >
      {direction === "previous" ? "‹" : "›"}
    </button>
  );
}

export function ArchivePagination({ page, pageCount, onGoToPage }: ArchivePaginationProps) {
  const items = useMemo(() => buildPageItems(page, pageCount), [page, pageCount]);

  if (pageCount <= 1) return null;

  return (
    <nav aria-label="Archive pages" className="mt-7.5 flex items-center justify-center gap-1.5 font-mono text-archive-sm">
      <ArrowButton direction="previous" disabled={page === 1} onClick={() => onGoToPage(page - 1)} />
      {items.map((item, index) =>
        typeof item === "number" ? (
          <PageButton key={item} page={item} active={item === page} onGoToPage={onGoToPage} />
        ) : (
          <span key={`${item}-${index}`} aria-hidden="true" className="min-w-7.5 text-center text-archive-muted">
            …
          </span>
        ),
      )}
      <ArrowButton direction="next" disabled={page === pageCount} onClick={() => onGoToPage(page + 1)} />
    </nav>
  );
}
