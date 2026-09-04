# Your harness

Nothing about the starter is recorded here. The platform under you is fixed and
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build.

The rules below are ones I actually decided on while building this, not a
generic checklist — update them here, in the same session, the moment a new
one gets settled. A rule that only exists in chat history didn't happen as
far as the marker is concerned.

## Content rules

- All site prose is in English, no exceptions — even though the working
  conversation with me happens in Chinese.
- China's delivery-platform sector is one detailed case study, used per
  lecture where it's the sharpest example (dispatch mechanics, the Renwu
  "trapped in the system" reporting). It is never the only country the
  top-level framing rests on — every comparative point (dispatch, ratings,
  regulation) needs at least one non-China example alongside it, since the
  course's actual claim is a three-way comparison (China / Australia / EU),
  not a China case study with two footnotes.

## Schema rules

- The four content collections, their keys, and the build pipeline are the
  platform's and stay untouched. Anything I add to a collection's schema is
  additive only (a new optional field on a `.loose()` schema), never a
  rename or removal of what shipped with the template.
- Tutorials (`sessions`) never carry a formal marking model — that belongs
  to `assessments` only. A tutorial can carry an optional `weight` for a
  graded live checkpoint, but the page never renders a marking breakdown for
  it; only the pass/fail-style "checked live" line.

## Process rules

- Commit every real change as its own commit, with a message describing the
  change, not the conversation that produced it. Never push without asking
  first, even when a push would be a safe fast-forward.
- If the platform template moves ahead of this repo (schema fields added
  upstream after this repo was already cloned from it), reconcile with a
  single merge, not a rebase — a rebase would force re-resolving the same
  drift once per commit; a merge resolves it once and keeps every commit's
  real timestamp and message intact.
