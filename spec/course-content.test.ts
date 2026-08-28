import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(
  readFileSync(resolve("dist/api/index.json"), "utf8"),
) as CourseApi;

const byType = (type: string) => api.nodes.filter((node) => node.type === type);
const weekOf = (node: ApiNode) => node.meta?.week as number;
const teachersOf = (node: ApiNode) => (node.meta?.teachers ?? []) as string[];

describe("course-specific promises", () => {
  it("pairs every week with exactly one session and one lecture", () => {
    const sessions = byType("sessions");
    const lectures = byType("lectures");
    for (let week = 1; week <= 12; week++) {
      expect(sessions.filter((n) => weekOf(n) === week), `week ${week} session`).toHaveLength(1);
      expect(lectures.filter((n) => weekOf(n) === week), `week ${week} lecture`).toHaveLength(1);
    }
  });

  it("holds the two-half teaching structure: weeks 1-6 with Wei Chen, weeks 7-12 with Sam Ostrander", () => {
    for (const node of [...byType("sessions"), ...byType("lectures")]) {
      const week = weekOf(node);
      const expected = week <= 6 ? "wei-chen" : "sam-ostrander";
      expect(teachersOf(node), `${node.id} (week ${week}) teacher`).toContain(expected);
    }
  });

  it("sums assessment and checkpoint weights to exactly 100", () => {
    const total = [...byType("assessments"), ...byType("checkpoints")].reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("has exactly one checkpoint for each of weeks 2-11, and none outside that range", () => {
    const checkpoints = byType("checkpoints");
    for (let week = 2; week <= 11; week++) {
      expect(checkpoints.filter((n) => weekOf(n) === week), `week ${week} checkpoint`).toHaveLength(1);
    }
    for (const node of checkpoints) {
      const week = weekOf(node);
      expect(week, `${node.id} week`).toBeGreaterThanOrEqual(2);
      expect(week, `${node.id} week`).toBeLessThanOrEqual(11);
    }
  });

  it("ships at least one lecture with a real slide deck", () => {
    const withSlides = byType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });
});
