# Process overview

## What I built

A course website for "Trapped in the System," a course about algorithmic
management of delivery labour, built on the `astro-theme-university` Slop
identity. The site treats its own information architecture as part of the
course's actual claim rather than as a container for it: several structural
choices below — how an assessment is marked, which case study anchors which
half of the semester — are themselves working examples of the phenomenon the
course studies, not just prose describing it.

## The moments that mattered

### 1. The marking model as an argument, not a default

Each of the three big assessments needed a marking mode, and my first pass
just picked one per assessment with no reasoning behind which got which.
Since the course's actual claim in weeks 7–12 is that China, Australia and
the EU each answer "who gets to override an algorithm's call" differently, I
decided the three marking modes should model that same question directly: a
pure weighted rubric with no appeal step (the China case study's logic), a
holistic mark gated on a mandatory self-review step (Fair Work's
right-of-reply), and a public rubric with one criterion reserved for a
marker's override (the EU Platform Work Directive's human-review
requirement). I added a `markingRationale` field to each assessment so the
parallel is stated on the page itself, not left for a reader to infer, and
checked it wasn't decorative by writing each rationale as a sentence that
names the actual regulatory logic, not "graded this way for variety."
[`3c4bc79`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chajie0824/commit/3c4bc79)

### 2. Assessment architecture, rebuilt against the real course instead of guessed

My first assessment structure was one large project plus a vague set of
smaller tasks — plausible, but invented rather than grounded in anything.
Told this read as too generic, I didn't just adjust the weights; I checked
the real COMP4020 course site's own published API and found it actually runs
three large assessments weighted 20/20/40 plus ten weekly checkpoints (weeks
2–11) absorbing the remaining 20%. I rebuilt the assessment collection to
match that shape exactly, then extended `spec/course-content.test.ts` to
assert the weights sum to 100 and that every week 2–11 carries a checkpoint,
so the structure can't silently drift out of shape on a later edit.
[`69784bd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chajie0824/commit/69784bd),
[`2c452ed`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chajie0824/commit/2c452ed),
[`1ad45e3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chajie0824/commit/1ad45e3)

### 3. Keeping Uber as the throughline case without hiding where the course's title came from

Weeks 1–6 originally ran on China's delivery-platform sector as the running
case, including a tutorial that asked students to log ETA readings from
Meituan and Ele.me — apps not usable from Australia, which I should have
caught the first time. Rewriting this wasn't a search-and-replace job: the
course's own title, "Trapped in the System," is drawn directly from a 2020
Renwu magazine report on Chinese delivery riders, so deleting the China
material outright would have severed the title from its source. I made Uber
(via Rosenblat and Stark's 2016 study) the sustained case for weeks 1–6,
moved the Renwu report to week 3 as its own documented case, and rewrote the
semester-halves slide and lecture text to say outright where the title comes
from, rather than leaving that connection implicit. I checked the fix held
by re-running a Unicode grep for CJK characters across `src/` after every
edit, which caught one citation that still carried the report's original
Chinese-language title.
[`305d81b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chajie0824/commit/305d81b),
[`4207318`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chajie0824/commit/4207318),
[`1bebde0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chajie0824/commit/1bebde0)
