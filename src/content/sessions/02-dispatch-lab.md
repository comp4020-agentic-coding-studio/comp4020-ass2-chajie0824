---
title: Dispatch lab
description:
  A hands-on session reverse-engineering a real delivery app's ETA and
  batching behaviour from the outside
week: 2
date: 2027-08-02
teachers:
  - wei-chen
spec:
  - you have logged at least three ETA readings for the same order at different points in its journey
  - you can point to one moment the ETA changed and propose why
  - you have named one design decision from the lecture reading that a rider would experience differently than an engineer intended
related:
  - lectures/week-02
  - checkpoints/week-02
---

## Before the session

Complete the [week 2 checkpoint](/checkpoints/week-02/): log at least three
timestamped ETA readings for one order from a named app, and mark the
moment it jumped.

## In the session

Working in pairs with your logged readings (or, if placing a live order
isn't practical, a partner's logged screenshots), reconstruct where the
shown ETA moved and why — a rider reassigned mid-route, a batching decision
that added a second stop, a recalculated distance after the restaurant
confirmed prep time. Groups compare notes across apps: does Meituan's ETA
move the same way Uber Eats' does?

## Afterwards

Your ETA log becomes raw material for week 3's case-study reading — keep it.
