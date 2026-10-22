# B3 — Temporal Evaluation and Controlled Policy Comparison

> **Timebox:** 30 minutes (5 min lesson/example, 20 min practice, 5 min exit check)  
> **Status:** ungraded support; do not submit this work

## Why this matters

An observed event rate is an empirical probability. Its complement is `1 - p`,
and `n * p` is an expected count, not a promise for the next batch.

For forecasting, development origins must preserve time: every fitted value and
feature at origin `t` must come from information available by `t`. Models must
use the same origins, horizons, target observations, and declared metrics.
Final protected-horizon evidence is opened once after the choice is frozen.

For reinforcement learning, training reward is not policy evidence. Freeze the
policy, evaluate candidate and baselines on the same unseen evaluation seeds,
and report reward together with operational costs and safety failures.

## Worked micro-example

```python
import numpy as np

actual = np.array([12.0, 9.0, 15.0])
seasonal_naive = np.array([11.0, 10.0, 13.0])
candidate = np.array([12.0, 11.0, 14.0])

baseline_mae = float(np.mean(np.abs(actual - seasonal_naive)))
candidate_mae = float(np.mean(np.abs(actual - candidate)))
assert np.isclose(baseline_mae, 4 / 3)
assert np.isclose(candidate_mae, 1.0)
```

The comparison is paired because both methods see the same target days. It says
nothing about a protected horizon, a different season, or inventory cost.

## Practice — 20 minutes

First, suppose 18 of 120 simulated evaluation episodes contain a stockout.
Compute the empirical probability, its complement, and the expected number of
episodes with a stockout in 50 further episodes. State why the expected count is
not a guarantee.

Then classify each action as `safe`, `unsafe`, or `depends` and justify it:

1. Choose SARIMA hyperparameters because they minimize protected-horizon MAE.
2. Compare ETS and seasonal naive on identical rolling origins and horizons.
3. Fit a demand scaler using all dates before creating temporal origins.
4. Use a promotion variable known when the forecast is issued.
5. Shuffle dates before forecasting the next seven days.
6. Freeze a Q-table, then compare it with random and reorder-point policies on
   the same injected evaluation seeds.
7. Select the best RL training seed and report only its reward.
8. Report mean return but omit stockout rate and catastrophic-cost episodes.

Finally, repair this protocol in five ordered steps:

> “Try models on all dates, choose the best final score, and deploy the RL run
> with the highest training reward.”

Your repair must isolate development from protected evidence, freeze the
forecasting and policy decisions, use paired evaluation cases, include
baselines, and retain operational/safety metrics.

## Exit check — 5 minutes

1. What information may a model use at a rolling origin?
2. Why must forecasting methods share origins and horizons?
3. Why is RL training reward insufficient for release?
4. If an observed event rate is `p`, what do `1 - p` and `n * p` mean?

Mark B3 `Independent` only if actions 1, 2, 3, 5, 6, 7, and 8 are classified
correctly and the repaired protocol keeps protected evidence outside selection.

<details>
<summary>Recovery answer</summary>

The probability is `18 / 120 = 0.15`, its complement is `0.85`, and the
expected count in 50 episodes is `7.5`. An expectation is a repeated-sample
average; one realised sample contains a whole number and can differ materially.

1. **Unsafe:** protected evidence becomes model selection data.
2. **Safe:** the paired temporal comparison controls evaluation cases.
3. **Unsafe:** future distribution information enters earlier origins.
4. **Depends:** safe only if its value and encoding are genuinely available at
   every origin and applied under the frozen contract.
5. **Unsafe:** future observations can appear in the apparent past.
6. **Safe:** policy and comparators are frozen and receive paired unseen cases.
7. **Unsafe:** selecting and reporting a favourable seed hides instability.
8. **Unsafe for release:** mean return alone hides operational and safety risk.

One repair is: (1) freeze development and protected temporal/evaluation
boundaries; (2) declare baselines, metrics, origins, horizons, and seed budgets;
(3) compare forecasting models only on development origins and train RL using
training seeds; (4) freeze the chosen forecaster and Q-table; (5) evaluate once
against seasonal-naive and transparent policies on protected horizons and
paired unseen seeds, reporting all declared runs, costs, failures, and limits.

</details>
