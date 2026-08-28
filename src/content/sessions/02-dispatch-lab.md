---
title: Dispatch lab
description:
  A hands-on session reverse-engineering a real delivery app's ETA and
  batching behaviour from the outside
week: 2
teachers:
  - wei-chen
weight: 2
marking:
  mode: holistic
  description: >
    Checked live at the start of the session: the log exists, has at least
    three timestamped readings, and names the app it came from. Whether your
    proposed reason for the jump is correct is not judged here — that it's a
    specific, falsifiable claim rather than a shrug is.
spec:
  - "at least three timestamped ETA readings for the same order, logged from a named app (Uber Eats, DoorDash, Menulog, Meituan, or Ele.me)"
  - one moment the ETA changed is marked, with a specific proposed reason
  - you have named one design decision from the lecture reading that a rider would experience differently than an engineer intended
related:
  - lectures/week-02
---

## Before the session

Place one order through a delivery app and log the ETA it shows at three or
more points — order placed, "preparing," rider assigned, and any jump in
between. A phone screenshot with a timestamp is enough; a spreadsheet row per
reading is better, since week 3 reuses this log's format.

## In the session

Working in pairs with your logged readings (or, if placing a live order
isn't practical, a partner's logged screenshots), reconstruct where the
shown ETA moved and why — a rider reassigned mid-route, a batching decision
that added a second stop, a recalculated distance after the restaurant
confirmed prep time. Groups compare notes across apps: does Meituan's ETA
move the same way Uber Eats' does?

## Afterwards

Your ETA log becomes raw material for week 3's case-study reading — keep it.
