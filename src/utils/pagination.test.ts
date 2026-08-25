import { describe, expect, it } from "vitest";
import { buildPageItems, clampPage } from "./pagination";

describe("clampPage", () => {
  it("keeps a page within bounds unchanged", () => {
    expect(clampPage(3, 5)).toBe(3);
  });

  it("clamps below the first page", () => {
    expect(clampPage(0, 5)).toBe(1);
  });

  it("clamps above the last page", () => {
    expect(clampPage(9, 5)).toBe(5);
  });

  it("always returns at least page 1 when there are no pages", () => {
    expect(clampPage(1, 0)).toBe(1);
  });
});

describe("buildPageItems", () => {
  it("returns every page when the total fits within maxButtons", () => {
    expect(buildPageItems(1, 5, 7)).toEqual([1, 2, 3, 4, 5]);
  });

  it("windows around the current page with a leading ellipsis only", () => {
    expect(buildPageItems(1, 9, 7)).toEqual([1, 2, "ellipsis-end", 9]);
  });

  it("windows around the current page with both ellipses", () => {
    expect(buildPageItems(5, 9, 7)).toEqual([1, "ellipsis-start", 4, 5, 6, "ellipsis-end", 9]);
  });

  it("windows around the current page with a trailing ellipsis only", () => {
    expect(buildPageItems(9, 9, 7)).toEqual([1, "ellipsis-start", 8, 9]);
  });
});
