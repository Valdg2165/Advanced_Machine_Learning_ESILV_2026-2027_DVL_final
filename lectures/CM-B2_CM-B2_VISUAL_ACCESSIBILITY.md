# CM-B2 visual descriptions

These descriptions accompany the deterministic diagrams rendered in the
student PDF. Their source is
`scripts/presentations/render_lecture_pdfs.py`. The environment transcript is
reproducible from `shared/inventory_env.py` with reset seed `11`.

## Slide 05 — Agent-environment loop

An agent sends an action to the environment. The environment returns the next
state and reward. A separate evidence ledger records versions, seeds, costs,
and limitations. The environment contract determines what a policy result can
mean.

## Slide 06 — MDP tuple

Five labelled boxes show state, action, transition, reward, and discount.
Changing one component creates a different learning problem and invalidates
comparisons against the previous environment.

## Slide 08 — Environment contract and trace

The contract card states `MultiDiscrete([9, 2])` observations,
`Discrete(3)` actions, and reset state `[1, 0]` for seed `11`. Four fixed
actions `2, 1, 0, 2` yield next states `[2, 0]`, `[3, 0]`, `[1, 0]`, and
`[3, 1]`, with rewards `-1.50`, `-1.35`, `-0.30`, and `-1.80`. Neither
termination nor truncation occurs during these four steps.

## Slide 09 — Reward cost ledger

Three boxes decompose reward into order, holding, and unmet-demand costs. A
formula below them shows that reward is the negative sum of those costs.
Omitted operational costs remain specification choices and incentives.

## Slide 14 — Bellman action continuations

One state branches into three available actions. Each branch leads to an
immediate reward plus discounted best next-state value. The first action is
fixed before the later maximum is taken.

## Slide 20 — Terminal-aware Q-learning target

A decision branch asks whether a transition truly terminated. If yes, the
target is the immediate reward. Otherwise, including a time-limit truncation,
the target adds the discounted next-state value. The executable definition is
`shared/rl.py:20-23`.

## Slide 21 — Auditable Q-learning update

Four connected boxes show the sequence old Q, target, temporal-difference
error, and new Q. Each box states the operation to perform but withholds the
numerical answer for the instructor-led debrief. The prompt separately asks
what changes on genuine termination.

## Slide 27 — Training/evaluation separation

A pipeline trains Q with exploration on development seeds, freezes the Q-table,
and evaluates without exploration on disjoint seeds. Training return is not
presented as final policy evidence.

## Slide 28 — Fair policy comparison

Random actions, a transparent reorder heuristic, and a frozen learned policy
enter one shared evaluator. The evaluator uses the same environment version,
seeds, and KPIs, then reports distributions of cost, service, and uncertainty.

## Slide 29 — Repeated policy outcomes

Three horizontal dot ranges show illustrative repeated outcomes for random,
reorder, and frozen Q policies. Each row displays dispersion and a marked
median. The fixed example teaches paired distribution comparison, not a claimed
empirical ranking.
