import { describe, expect, it } from "vitest";
import { formatEntityCode, padEntityId } from "./formatEntity";

describe("padEntityId", () => {
  it("pads ids below 100", () => {
    expect(padEntityId(1)).toBe("001");
  });

  it("keeps 3-digit ids unchanged", () => {
    expect(padEntityId(183)).toBe("183");
  });
});

describe("formatEntityCode", () => {
  it("prefixes the padded id with #", () => {
    expect(formatEntityCode(2)).toBe("#002");
  });
});
