# Just-in-Time Refresh — MDP and Tabular Q-Learning

> **Use:** optional before TD3; revisit before TD4/TDo2 if needed  
> **Timebox:** 20 minutes  
> **Status:** ungraded support; no assessed environment results appear here

## 1. Retrieve the MDP contract — 4 minutes

An MDP specifies states `S`, actions `A`, transition behaviour `P`, reward `R`,
and discount `gamma`. In inventory control, a state may encode stock and demand
regime; an action may be an order quantity. The reward must be traceable to the
declared ordering, holding, and shortage costs. An agent cannot repair an
ambiguous reward contract by training longer.

Write one sentence for each: state, action, transition, reward, terminal rule.
Then identify which quantities are observable before the action.

## 2. Bellman target and update — 6 minutes

For a non-terminal transition `(s, a, r, s_next)`, tabular Q-learning uses:

`target = r + gamma * max_a Q[s_next, a]`

`Q[s, a] <- Q[s, a] + alpha * (target - Q[s, a])`

For a terminal transition, omit the future-value term. Compute one update for
`Q[s,a]=2`, `r=-1`, `gamma=0.9`, `max Q[s_next,:]=4`, and `alpha=0.5`.

<details>
<summary>Checkpoint answer</summary>

The target is `-1 + 0.9*4 = 2.6`. The temporal-difference error is `0.6`, so the
updated value is `2 + 0.5*0.6 = 2.3`. If the transition were terminal, the target
would be `-1`.

</details>

## 3. Learning is not release evidence — 5 minutes

Exploration is permitted during training. Release evaluation instead freezes
the Q-table and policy, disables learning, and compares against random and a
transparent reorder policy on identical unseen seeds. Retain per-episode return,
stockout/shortage cost, holding cost, order cost, and safety failures. Mean
training reward alone cannot support a deployment claim.

Audit this proposal: “Select the seed with the highest training return, keep
epsilon at 0.1 during evaluation, and report its mean reward.” Name three
violations.

<details>
<summary>Checkpoint answer</summary>

It selects a favourable seed, evaluates a stochastic exploratory rather than
the frozen release policy, and lacks paired unseen cases plus transparent
baselines and operational/safety metrics.

</details>

## 4. Ready-for-TD checkpoint — 5 minutes

You are ready for the Core starter when you can answer all four:

- Can I map every state and action index to an operational meaning?
- Can I reconstruct one reward from its cost terms?
- Can I compute terminal and non-terminal Q-learning updates?
- Can I distinguish training seeds from paired unseen evaluation seeds?

If one answer is no, enter the Support starter and record the earliest missing
item in [`templates/LEARNING_CHECKPOINT.md`](templates/LEARNING_CHECKPOINT.html).
The route does not cap your mark.
