---
title: "The mechanics of dispatch"
description:
  Inside the three models that actually run a delivery platform — ETA
  prediction, order batching, and rating thresholds
week: 2
date: 2027-08-02
teachers:
  - wei-chen
related:
  - sessions/02-dispatch-lab
---

## Outline

- ETA prediction is a live optimisation problem re-solved every few seconds,
  not a fixed promise — and the gap between the number shown to the customer
  and the number a rider is actually held to is where most of this course's
  tension lives
- Order batching: why a platform assigning you a second pickup mid-route is a
  margin decision, not a routing convenience, and what it does to the first
  order's promised time
- Rating and lateness thresholds as soft discipline — no manager issues the
  warning, the number does, and the number doesn't have to explain itself

## Reading before the session

A public writeup of a dispatch or ETA system (a platform engineering blog
post is fine) — bring one design decision from it that you think a rider
would experience differently than an engineer intended.
