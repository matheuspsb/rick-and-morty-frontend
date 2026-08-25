import { useCallback, useMemo, useState } from "react";
import { clampPage } from "../utils/pagination";

export function usePagination<T>(items: readonly T[], pageSize: number) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = clampPage(page, pageCount);

  const pageItems = useMemo(
    () => items.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [items, currentPage, pageSize],
  );

  const goToPage = useCallback(
    (nextPage: number) => {
      setPage(clampPage(nextPage, pageCount));
    },
    [pageCount],
  );

  return { page: currentPage, pageCount, pageItems, goToPage };
}
