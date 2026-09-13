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
- This is an Australian course, so weeks 1–6's sustained case study is
  Uber (real citation: Rosenblat & Stark 2016), not a named Chinese
  platform — a tutorial can never ask a student to actually install or log
  into software that isn't realistically usable from Australia (I made
  this mistake once: week 2's dispatch-lab listed Meituan/Ele.me as apps
  for students to log ETA readings from; fixed to Uber Eats/DoorDash/
  Menulog only). China's delivery-platform sector stays in the course as
  one specific, closely-documented example — the Renwu "trapped in the
  system" reporting is week 3's case study and the source of the course's
  own title — but it is a supporting citation, never the top-level framing
  for the first half. Every comparative point in weeks 7–12 (dispatch,
  ratings, regulation) still needs all three regimes represented, since
  the course's actual claim there is a three-way comparison (China /
  Australia / EU), not a China case study with two footnotes.
- Lecture and tutorial pages never display a literal calendar date, even
  though `date:` stays required in frontmatter (the platform's own
  `spec/data-integrity.test.ts` only checks that underlying field, never
  what a page renders). Every page title/heading says "Week N" instead —
  that's the only time reference a reader sees.
- Course copy never asks a reader to spend real money or place a real
  order as "fieldwork" (e.g. the homepage's "who it is for" text, or a
  tutorial brief) — this is a fictional course brief, not an actual
  assignment, and that framing has to hold up as something a real class
  could actually be asked to do.
- A real photo supplied for the People page is used as given — no cropping,
  no exposure/colour correction, no reframing. I made this mistake once
  (tightened a crop and gamma-corrected a backlit photo without being asked)
  and was told the original was already fine; the fix was to use the
  original file untouched, not a better edit of it.
- That "no crop" rule also covers how the theme renders the file, not just
  the file itself: the theme's Card/Hero frames force a fixed aspect ratio
  with `object-fit: cover`, which silently crops a tall portrait photo (both
  People photos are portraits) even though the source file is never
  touched. Fixed via `src/styles/people-photos.css` (loaded as a second
  `brandCss` entry in `astro.config.ts`), which switches those two photos
  specifically to `object-fit: contain` so the full frame always shows.
  Don't reintroduce a cover-crop for a People photo without re-checking this.
- Each `assessments` entry's `marking` mode is a deliberate echo of one of
  the three regulatory regimes the course compares, not a copy of this
  actual course's own process/response/artefact split: a pure weighted
  rubric with no appeal step (the China case study's logic), a holistic
  judgement gated on one mandatory self-review element (Fair Work's
  right-of-reply), or a public weighted rubric with one criterion reserved
  for a marker's holistic override (the Platform Work Directive's
  human-review requirement). The `markingRationale` field on each entry
  states the parallel explicitly — don't let the choice of mode be
  decorative or unexplained.

## Schema rules

- The four content collections, their keys, and the build pipeline are the
  platform's and stay untouched. Anything I add to a collection's schema is
  additive only (a new optional field on a `.loose()` schema), never a
  rename or removal of what shipped with the template.
- Tutorials (`sessions`) never carry a formal marking model — that belongs
  to `assessments` only. A tutorial can carry an optional `weight` for a
  graded live checkpoint, but the page never renders a marking breakdown for
  it; only the pass/fail-style "checked live" line.
- `assessments` carries one more additive optional field beyond the
  platform's own schema: `markingRationale` (string), rendered as a "why
  marked this way" note under the marking table/description. It exists to
  make the regulatory-parallel marking design (see Content rules) legible
  to a reader instead of implicit.

## Process rules

- Commit every real change as its own commit, with a message describing the
  change, not the conversation that produced it. Never push without asking
  first, even when a push would be a safe fast-forward.
- If the platform template moves ahead of this repo (schema fields added
  upstream after this repo was already cloned from it), reconcile with a
  single merge, not a rebase — a rebase would force re-resolving the same
  drift once per commit; a merge resolves it once and keeps every commit's
  real timestamp and message intact.
