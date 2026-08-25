import { describe, expect, it } from "vitest";
import { formatEpisodeIdsForDisplay, isValidEpisodeIds, normalizeEpisodeIds } from "./episodeIds";

describe("normalizeEpisodeIds", () => {
  it("trims whitespace around each id", () => {
    expect(normalizeEpisodeIds(" 10 , 28 ")).toBe("10,28");
  });

  it("drops empty segments", () => {
    expect(normalizeEpisodeIds("10,,28,")).toBe("10,28");
  });

  it("keeps a single id unchanged", () => {
    expect(normalizeEpisodeIds("10")).toBe("10");
  });
});

describe("isValidEpisodeIds", () => {
  it("accepts a single numeric id", () => {
    expect(isValidEpisodeIds("10")).toBe(true);
  });

  it("accepts a comma-separated list of numeric ids", () => {
    expect(isValidEpisodeIds("10,28")).toBe(true);
  });

  it("rejects non-numeric input", () => {
    expect(isValidEpisodeIds("abc")).toBe(false);
  });

  it("rejects a trailing comma", () => {
    expect(isValidEpisodeIds("10,")).toBe(false);
  });

  it("rejects an empty string", () => {
    expect(isValidEpisodeIds("")).toBe(false);
  });
});

describe("formatEpisodeIdsForDisplay", () => {
  it("joins ids with a comma and space", () => {
    expect(formatEpisodeIdsForDisplay("10,28")).toBe("10, 28");
  });
});
