---
title: "The mechanics of dispatch"
description:
  Inside the three models that actually run a delivery platform — ETA
  prediction, order batching, and rating thresholds
week: 2
date: 2027-08-02
teachers:
  - chajie-zhou
related:
  - sessions/02-dispatch-lab
---

## A promise made twice

The number the customer sees is a live optimisation problem, re-solved every
few seconds as new information arrives — a kitchen running behind, a rider
taking a wrong turn, another order dropped into the same route. Uber's own
engineering writeup on its arrival-time model, "DeepETA: How Uber Predicts
Arrival Times Using Deep Learning," describes exactly this: a prediction
retrained continuously against live signal, explicitly not a fixed promise
anyone signed off on. The number the rider is actually held to, by
contrast, behaves much more like one: fall behind it too often and a
rating or an acceptance-rate metric moves against you. The gap between
those two numbers — one soft and constantly renegotiated, one hard and
counted against you — is where most of this course's tension lives, and
it's exactly what your dispatch-lab log is built to catch happening in
real time.

## Batching is a margin decision wearing a routing costume

When a platform assigns you a second pickup mid-route, it's presented as
efficient routing — one rider, two nearby orders, less total driving. It's
also, inescapably, a decision that the first order's promised time is now
negotiable, made without asking the customer who was quoted that time or
the rider now responsible for keeping it. A second, subtler version of the
same move shows up in how a platform chooses which restaurant to route a
rider through first when two pickups are on the same street but ready at
different times: whichever order goes second effectively subsidises the
other's on-time delivery with its own lateness risk, and the rider absorbs
whichever choice the batching algorithm made on their behalf. Whether
batching is efficient logistics or a quiet cost transfer depends entirely
on who absorbs the slippage when the second stop takes longer than the
model assumed — and that's a design choice, not a law of routing.

## The threshold that never has to explain itself

No manager reviews a late delivery and decides to say something. A rating
drops, or a lateness counter increments, and the response is automatic and
pre-specified — which is exactly what makes it discipline without a
disciplinarian. Nobody has to defend the threshold in the moment it fires,
and by the time a rider notices the pattern, there's no single conversation
left to have about it. That's the shape algorithmic management keeps taking
all semester: a decision that used to require someone to say it out loud,
now happening without anyone having to.

## Reading before the session

A public writeup of a dispatch or ETA system (a platform engineering blog
post is fine — Uber's DeepETA post above is one valid choice) — bring one
design decision from it that you think a rider would experience
differently than an engineer intended.
