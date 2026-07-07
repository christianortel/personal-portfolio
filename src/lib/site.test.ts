import { describe, expect, it } from "vitest";
import { SITE_URL, RESUME_URL, ogImage, canonical, EMAIL, PHONE_INTL } from "./site";

describe("site constants", () => {
  it("uses the .com domain everywhere", () => {
    expect(SITE_URL).toBe("https://christianortel.com");
    expect(ogImage("home")).toBe("https://christianortel.com/og/home.jpg");
    expect(canonical("/about")).toBe("https://christianortel.com/about");
  });

  it("serves the resume from public/ (no third-party asset host)", () => {
    expect(RESUME_URL).toBe("/christian-ortel-resume.pdf");
    expect(RESUME_URL).not.toContain("__l5e");
  });

  it("has well-formed contact details", () => {
    expect(EMAIL).toContain("@");
    expect(PHONE_INTL).toMatch(/^\+1-/);
  });
});
