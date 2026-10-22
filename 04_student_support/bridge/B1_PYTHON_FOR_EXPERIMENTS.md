# B1 — Python for Experiments

> **Timebox:** 30 minutes (5 min lesson/example, 20 min practice, 5 min exit check)  
> **Status:** ungraded support; do not submit this work

## Why this matters

Experimental code is easier to test when inputs and outputs are explicit. A
small function should have one purpose, avoid dependence on notebook globals,
validate an impossible input early, and return data rather than only printing
it. Configuration and seeds are inputs, not facts hidden inside the function.

## Worked micro-example

```python
def mean_absolute_error(forecast: list[float], observed: list[float]) -> float:
    """Return mean absolute forecast error for aligned observations."""
    if len(forecast) != len(observed):
        raise ValueError("forecast and observed must have equal length")
    if not observed:
        raise ValueError("at least one observation is required")
    errors = [abs(pred - actual) for pred, actual in zip(forecast, observed)]
    return sum(errors) / len(errors)


assert mean_absolute_error([10.0, 12.0, 9.0], [11.0, 12.0, 11.0]) == 1.0
```

The function can be tested with new inputs. A version that reads global
variables named `forecast` and `observed` cannot be understood from its signature
and is easy to break by running cells out of order.

## Practice — 20 minutes

Implement `summarise_runs(values)` using only the Python standard library. Its
contract is:

- input: an iterable of numeric repeated-run values;
- output: a dictionary with exactly `n`, `mean`, and `population_std`;
- empty input: raise `ValueError` with an informative message;
- invalid non-numeric data: allow a clear `TypeError` or raise one explicitly;
- no printing and no use of a global variable.

Use `statistics.fmean` and `statistics.pstdev`. Add these checks:

```python
summary = summarise_runs([0.70, 0.74, 0.72])
assert summary["n"] == 3
assert abs(summary["mean"] - 0.72) < 1e-12
assert summarise_runs([0.5])["population_std"] == 0.0
```

Finally, write a two-line explanation of why the function returns a dictionary
instead of a formatted sentence, and why the edge-case check belongs before the
calculation.

## Exit check — 5 minutes

1. What information can a caller learn from a function signature?
2. Why is `print(mean)` insufficient evidence for later aggregation?
3. Would hiding a seed inside a function make a comparison easier or harder to
   audit?

Mark B1 `Independent` only if all assertions pass and you can explain the
contract. Opening the recovery answer makes the result `Supported`, not failed.

<details>
<summary>Recovery answer</summary>

```python
from statistics import fmean, pstdev


def summarise_runs(values) -> dict[str, float | int]:
    materialised = list(values)
    if not materialised:
        raise ValueError("summarise_runs requires at least one value")
    return {
        "n": len(materialised),
        "mean": fmean(materialised),
        "population_std": pstdev(materialised),
    }
```

Structured data can be validated, saved, compared, or formatted later; a
sentence is harder to reuse safely. Checking emptiness first converts an opaque
statistics error into a failure that states the violated contract. Seeds should
be caller-visible inputs so two methods can demonstrably receive the same
randomness policy.

</details>
