# B4 — Evidence and Technical Writing

> **Timebox:** 30 minutes (5 min lesson/example, 20 min practice, 5 min exit check)  
> **Status:** ungraded support; do not submit this work

## Why this matters

A defensible result sentence names the versioned data or environment, protocol,
baseline, metric, repeated evidence, artifact path, and material limitation. It
does not turn a development-origin difference into protected-horizon,
industrial, or causal evidence.

Use this pattern:

> Under **[protocol and budget]** on **[versioned task/data]**, **[candidate]**
> differed from **[baseline]** by **[metric result and repetitions]**. This
> supports **[bounded decision]**, but not **[material limitation]**.

## Worked micro-example

Suppose five development origins report mean MAE `8.4` for seasonal naive and
`7.9` for ETS, with paired MAE differences ranging from `-1.2` to `0.3` demand
units. A defensible sentence is:

> On `daily_demand_synthetic_v1`, across five frozen development origins with a
> 7-day horizon, ETS mean MAE was 7.9 versus 8.4 for seasonal naive; paired
> origin differences ranged from -1.2 to 0.3 units. This supports freezing ETS
> for the protected classroom release, but not superiority on every origin or
> transfer to real inventory operations.

The negative and positive paired differences expose non-uniform behaviour. The
claim neither invents significance nor uses the protected horizon.

## Practice — 20 minutes

Use this supplied map:

```text
data/daily_demand_manifest.json
src/td2_forecast.py
configs/td2_rolling_origin.yaml
evidence/td2/per_origin.csv
evidence/td2/summary.json
```

The summary states:

```json
{
  "dataset": "daily_demand_synthetic_v1",
  "split": "development_origins_only",
  "horizon_days": 7,
  "origins": 5,
  "metric": "MAE",
  "seasonal_naive_mean": 8.4,
  "ets_mean": 7.9,
  "paired_difference_range": [-1.2, 0.3]
}
```

1. Write one claim of at most 65 words using the pattern above.
2. Name the exact provenance, code, configuration, per-origin, and summary
   paths.
3. Assign `supported`, `partial`, `failed`, or `withdrawn`; justify the status.
4. State one decision the evidence supports and two claims it does not support.

Do not invent protected-horizon performance, a confidence interval, p-value,
runtime, stock-cost benefit, or real-world effect.

## Exit check — 5 minutes

1. Can a reviewer locate evidence for every number?
2. Does the limitation materially narrow the claim?
3. What additional evidence is needed before an inventory-policy claim?

Mark B4 `Independent` when every path resolves in the supplied map and no
statement exceeds the supplied evidence.

<details>
<summary>Recovery answer</summary>

The worked sentence is acceptable. One trace is:

- provenance: `data/daily_demand_manifest.json`;
- code: `src/td2_forecast.py`;
- frozen protocol: `configs/td2_rolling_origin.yaml`;
- paired evidence: `evidence/td2/per_origin.csv`;
- aggregate evidence: `evidence/td2/summary.json`.

`supported` applies only to the narrow development-origin comparison. The
evidence supports freezing ETS for the declared protected classroom evaluation.
It does not support superiority at every origin or an operational inventory
benefit. The latter requires a declared demand-to-decision interface, frozen
policy comparators, paired protected episodes, operational cost/safety metrics,
and limitations.

</details>
