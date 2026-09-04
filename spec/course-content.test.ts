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
  it("gives every week exactly one lecture, and every week 2-11 exactly one session", () => {
    const sessions = byType("sessions");
    const lectures = byType("lectures");
    for (let week = 1; week <= 12; week++) {
      expect(lectures.filter((n) => weekOf(n) === week), `week ${week} lecture`).toHaveLength(1);
    }
    for (let week = 2; week <= 11; week++) {
      expect(sessions.filter((n) => weekOf(n) === week), `week ${week} session`).toHaveLength(1);
    }
  });

  it("holds the two-half teaching structure: weeks 1-6 with Chajie Zhou, weeks 7-12 with Sichen Ye", () => {
    for (const node of [...byType("sessions"), ...byType("lectures")]) {
      const week = weekOf(node);
      const expected = week <= 6 ? "chajie-zhou" : "sichen-ye";
      expect(teachersOf(node), `${node.id} (week ${week}) teacher`).toContain(expected);
    }
  });

  it("sums assessment weights and weekly checkpoint (session) weights to exactly 100", () => {
    const total = [...byType("assessments"), ...byType("sessions")].reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("has a graded checkpoint on every session in weeks 2-11, and no session outside that range", () => {
    const sessions = byType("sessions");
    for (let week = 2; week <= 11; week++) {
      const weekSessions = sessions.filter((n) => weekOf(n) === week);
      expect(weekSessions, `week ${week} session`).toHaveLength(1);
      expect(weekSessions[0]?.meta?.weight, `week ${week} session weight`).toBe(2);
    }
    for (const week of [1, 12]) {
      expect(sessions.filter((n) => weekOf(n) === week), `week ${week} should have no session`).toHaveLength(0);
    }
  });

  it("ships at least one lecture with a real slide deck", () => {
    const withSlides = byType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });
});
