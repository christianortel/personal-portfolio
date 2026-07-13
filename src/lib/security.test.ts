import { describe, expect, it } from "vitest";
import { contentSecurityPolicy, SECURITY_HEADERS } from "./security";

describe("security baseline", () => {
  it("blocks framing, cross-origin asset reuse, and unnecessary browser capabilities", () => {
    expect(SECURITY_HEADERS["x-frame-options"]).toBe("DENY");
    expect(SECURITY_HEADERS["cross-origin-resource-policy"]).toBe("same-origin");
    expect(SECURITY_HEADERS["cross-origin-opener-policy"]).toBe("same-origin");
    expect(SECURITY_HEADERS["permissions-policy"]).toContain("camera=()");
    expect(SECURITY_HEADERS["permissions-policy"]).toContain("browsing-topics=()");
  });

  it("uses a nonce-aware CSP without unsafe script execution", () => {
    const policy = contentSecurityPolicy("test-nonce");
    expect(policy).toContain("frame-ancestors 'none'");
    expect(policy).toContain("object-src 'none'");
    expect(policy).toContain("script-src 'self' 'nonce-test-nonce' 'wasm-unsafe-eval'");
    expect(policy).not.toContain("'unsafe-eval'");
    expect(policy).not.toContain("script-src 'self' 'unsafe-inline'");
  });
});
