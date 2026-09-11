---
title: Dispatch lab
description:
  A hands-on session reverse-engineering a real delivery app's ETA and
  batching behaviour from the outside
week: 2
date: 2027-08-04
teachers:
  - chajie-zhou
weight: 2
spec:
  - "at least three timestamped ETA readings for the same cart, logged from a named app (Uber Eats, DoorDash, Menulog, Meituan, or Ele.me)"
  - one moment the ETA changed is marked, with a specific proposed reason
  - you have named one design decision from the lecture reading that a rider would experience differently than an engineer intended
related:
  - lectures/week-02
---

## Before the session

Build a cart in a delivery app and step through to checkout — no need to pay
— logging the ETA it shows at three or more points: cart added, address
entered, checkout reached, and any jump in between. A phone screenshot with a
timestamp is enough; a spreadsheet row per reading is better, since week 3
reuses this log's format.

## In the session

Working in pairs with your logged readings, reconstruct where the shown ETA
moved and why — a batching assumption changing as the cart grows, a
recalculated distance once an address is entered, a jump between checkout
steps that has no obvious cause. Groups compare notes across apps: does
Meituan's ETA move the same way Uber Eats' does?

## Afterwards

Your ETA log becomes raw material for week 3's case-study reading — keep it.
