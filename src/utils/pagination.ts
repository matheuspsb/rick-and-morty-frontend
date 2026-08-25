import { MAX_PAGE_BUTTONS } from "../constants/pagination";

export type PageItem = number | "ellipsis-start" | "ellipsis-end";

export function clampPage(page: number, pageCount: number): number {
  return Math.min(Math.max(page, 1), Math.max(pageCount, 1));
}

export function buildPageItems(
  currentPage: number,
  pageCount: number,
  maxButtons: number = MAX_PAGE_BUTTONS,
): PageItem[] {
  if (pageCount <= maxButtons) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const siblingCount = 1;
  const leftBound = Math.max(2, currentPage - siblingCount);
  const rightBound = Math.min(pageCount - 1, currentPage + siblingCount);

  const items: PageItem[] = [1];

  if (leftBound > 2) {
    items.push("ellipsis-start");
  } else {
    for (let page = 2; page < leftBound; page += 1) items.push(page);
  }

  for (let page = leftBound; page <= rightBound; page += 1) items.push(page);

  if (rightBound < pageCount - 1) {
    items.push("ellipsis-end");
  } else {
    for (let page = rightBound + 1; page < pageCount; page += 1) items.push(page);
  }

  items.push(pageCount);

  return items;
}
