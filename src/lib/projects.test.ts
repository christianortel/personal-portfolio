import { describe, expect, it } from "vitest";
import { FEATURED_PROJECTS, MORE_PROJECTS, PROFESSIONAL_CASES, REPO_CATEGORIES } from "./projects";

describe("PROFESSIONAL_CASES", () => {
  it("has complete case-study fields with stack tags", () => {
    expect(PROFESSIONAL_CASES.length).toBeGreaterThanOrEqual(3);
    for (const item of PROFESSIONAL_CASES) {
      expect(item.title).toBeTruthy();
      expect(item.context).toBeTruthy();
      expect(item.problem).toBeTruthy();
      expect(item.approach).toBeTruthy();
      expect(item.outcome).toBeTruthy();
      expect(item.stack.length).toBeGreaterThanOrEqual(3);
    }
  });
});

describe("FEATURED_PROJECTS", () => {
  it("numbers cards sequentially from 01 with no duplicates", () => {
    const ns = FEATURED_PROJECTS.map((p) => p.n);
    expect(new Set(ns).size).toBe(ns.length);
    expect(ns).toEqual(ns.map((_, i) => String(i + 1).padStart(2, "0")));
  });

  it("uses https or mailto links only", () => {
    for (const p of FEATURED_PROJECTS) {
      expect(p.href).toMatch(/^(https:\/\/|mailto:)/);
    }
  });

  it("gives every card exactly three metrics", () => {
    for (const p of FEATURED_PROJECTS) {
      expect(p.metrics).toHaveLength(3);
    }
  });

  it("marks every pre-launch venture as Founder", () => {
    const prelaunch = FEATURED_PROJECTS.filter((p) => p.year.includes("Pre-launch"));
    expect(prelaunch.length).toBeGreaterThanOrEqual(4);
    for (const p of prelaunch) {
      expect(`${p.client} ${p.metrics.map((m) => m.k + m.v).join(" ")}`).toMatch(/Founder/);
    }
  });
});

describe("MORE_PROJECTS", () => {
  it("only uses declared categories", () => {
    for (const r of MORE_PROJECTS) {
      expect(REPO_CATEGORIES).toContain(r.category);
    }
  });

  it("every category has at least one repo", () => {
    for (const cat of REPO_CATEGORIES) {
      expect(MORE_PROJECTS.some((r) => r.category === cat)).toBe(true);
    }
  });

  it("links every repo to Christian's GitHub with unique names", () => {
    const names = MORE_PROJECTS.map((r) => r.name);
    expect(new Set(names).size).toBe(names.length);
    for (const r of MORE_PROJECTS) {
      expect(r.href).toBe(`https://github.com/christianortel/${r.name}`);
    }
  });
});
