# B2 — Dated Tables and Dataframes

> **Timebox:** 30 minutes (5 min lesson/example, 20 min practice, 5 min exit check)  
> **Status:** ungraded support; do not submit this work

## Why this matters

A time-series row is not exchangeable with every other row. Before modelling,
establish the observation frequency, ordering, duplicate timestamps, gaps,
target meaning, and which values were available at the forecast origin. Preserve
the raw table and derive a sorted working copy. Do not silently fill a missing
date or demand value: that is a modelling decision whose effect must remain
visible.

## Worked micro-example

```python
import pandas as pd


def audit_demand(frame: pd.DataFrame) -> dict:
    required = {"date", "demand"}
    missing_columns = required.difference(frame.columns)
    if missing_columns:
        raise KeyError(f"missing columns: {sorted(missing_columns)}")

    dates = pd.to_datetime(frame["date"], errors="raise")
    return {
        "shape": list(frame.shape),
        "dtypes": {name: str(dtype) for name, dtype in frame.dtypes.items()},
        "missing": frame.isna().sum().astype(int).to_dict(),
        "date_min": dates.min().date().isoformat(),
        "date_max": dates.max().date().isoformat(),
        "duplicate_dates": int(dates.duplicated().sum()),
        "date_monotonic": bool(dates.is_monotonic_increasing),
        "demand_mean": float(frame["demand"].mean()),
    }
```

The function observes rather than mutates the raw frame. Duplicate dates and an
unsorted index are symptoms; only the data contract determines whether they are
errors.

## Practice — 20 minutes

Use this supplied table:

```python
demand = pd.DataFrame(
    {
        "date": ["2026-01-01", "2026-01-03", "2026-01-02", "2026-01-03"],
        "demand": [10.0, 15.0, None, 15.0],
        "promotion_known": [0, 1, 0, 1],
        "stockout_confirmed_next_day": [0, 1, 0, 1],
    }
)
```

1. Run `audit_demand(demand)` and retain its machine-readable result.
2. Create `work = demand.copy()`, parse `date`, and sort it. Confirm the raw
   frame remains unchanged.
3. Build the expected daily range from minimum to maximum date and identify any
   absent calendar date. Do not create or impute observations.
4. Mark `stockout_confirmed_next_day` unavailable if the forecast must be issued
   at the end of the current day. Explain the timing violation.
5. State whether repeated `2026-01-03` rows should be aggregated, rejected, or
   retained. Your answer must cite an assumed unit of observation.

## Exit check — 5 minutes

1. Is sorting enough to prove the series has no missing dates?
2. Why is a duplicate timestamp not automatically an invalid row?
3. What determines whether a feature is legal at a forecast origin?

Mark B2 `Independent` when the audit is correct, the raw frame is unchanged, and
you can separate observed symptoms from data-contract decisions.

<details>
<summary>Recovery answer</summary>

```python
audit = audit_demand(demand)
assert audit["shape"] == [4, 4]
assert audit["missing"]["demand"] == 1
assert audit["duplicate_dates"] == 1
assert audit["date_monotonic"] is False

work = demand.copy()
work["date"] = pd.to_datetime(work["date"])
work = work.sort_values("date").reset_index(drop=True)
assert demand["date"].dtype == object

expected = pd.date_range(work["date"].min(), work["date"].max(), freq="D")
absent = expected.difference(pd.DatetimeIndex(work["date"]))
assert len(absent) == 0
```

All calendar dates are represented here, despite the unsorted and duplicated
rows. Whether the duplicate is valid depends on whether one row means a day, a
store-day, or a transaction. A next-day confirmation is not available at the
declared current-day origin, regardless of its predictive usefulness. The
missing demand remains explicit until the protocol declares a treatment fitted
or applied inside the permitted temporal boundary.

</details>
