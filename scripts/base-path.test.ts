import { describe, expect, test } from "bun:test";
import { normalizeBasePath } from "./base-path";

describe("GitHub Pages base path", () => {
  test("root deployment stays at /", () => expect(normalizeBasePath()).toBe("/"));
  test("project deployment uses /softa-interior/", () => expect(normalizeBasePath("softa-interior")).toBe("/softa-interior/"));
  test("configured project path keeps one trailing slash", () => expect(normalizeBasePath("/softa-interior/")).toBe("/softa-interior/"));
  test("external URLs cannot become repository paths", () => expect(() => normalizeBasePath("https://example.com/")).toThrow());
});