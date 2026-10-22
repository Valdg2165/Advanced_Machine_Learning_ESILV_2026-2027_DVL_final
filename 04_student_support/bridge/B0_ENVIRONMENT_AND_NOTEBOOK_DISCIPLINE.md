# B0 — Environment and Notebook Discipline

> **Timebox:** 30 minutes (5 min lesson/example, 20 min practice, 5 min exit check)  
> **Status:** ungraded support; do not submit this work

## Why this matters

A result is not reproducible merely because a notebook once displayed it. A
reviewer needs the declared interpreter and packages, paths that work outside
your machine, explicit randomness, and cells that succeed from a fresh kernel in
top-to-bottom order.

Keep four controls visible:

1. **Environment:** record Python and direct package versions.
2. **Location:** build paths from the project root; never depend on your user
   name or desktop folder.
3. **Randomness:** create and pass a named random generator or seed.
4. **State:** restart the kernel and run all cells before trusting output.

## Worked micro-example

This fragment has no hidden notebook state and writes a small, inspectable
environment record.

```python
from importlib.metadata import version
from pathlib import Path
import json
import platform
import numpy as np

project_root = Path.cwd()
evidence_dir = project_root / "diagnostic" / "evidence"
evidence_dir.mkdir(parents=True, exist_ok=True)

rng = np.random.default_rng(11)
sample = rng.integers(0, 10, size=4).tolist()

record = {
    "python": platform.python_version(),
    "numpy": version("numpy"),
    "seed": 11,
    "sample": sample,
}
(evidence_dir / "environment.json").write_text(
    json.dumps(record, indent=2), encoding="utf-8"
)
print(record)
```

By contrast, `Path.home() / "Desktop" / "result.csv"` is machine-specific, and a
cell containing only `scores.mean()` depends on an earlier cell having created
`scores`.

## Practice — 20 minutes

Create a scratch notebook or script and complete all four steps:

1. Define `project_root = Path.cwd()` and an output path
   `diagnostic/evidence/b0_result.json` without an absolute path.
2. With `np.random.default_rng(23)`, generate five integers from 0 through 99.
   Save the seed, values, Python version, NumPy version, and output path in JSON.
3. Deliberately run the generation twice with a newly created generator using
   seed 23. Confirm the two value lists match. Then draw twice from the *same*
   generator and explain why the second draw differs.
4. Restart the kernel or process, run everything top to bottom, and confirm that
   `b0_result.json` is regenerated without manually creating a variable.

Do not install or upgrade packages during this exercise. If `numpy` is absent,
record that as the earliest failure and request the approved environment.

## Exit check — 5 minutes

Answer without running another experiment:

1. Which part makes the path portable?
2. Does setting a seed guarantee identical results across every library version
   and hardware platform?
3. What evidence exposes a notebook cell that depends on hidden state?

Mark B0 `Independent` only if the clean rerun succeeds and you can answer all
three. Mark it `Supported` if the recovery answer was needed. Otherwise mark it
`Not yet` and send the first failure.

<details>
<summary>Recovery answer</summary>

One acceptable practice solution is:

```python
from importlib.metadata import version
from pathlib import Path
import json
import platform
import numpy as np

project_root = Path.cwd()
output_path = project_root / "diagnostic" / "evidence" / "b0_result.json"
output_path.parent.mkdir(parents=True, exist_ok=True)

first = np.random.default_rng(23).integers(0, 100, size=5).tolist()
second = np.random.default_rng(23).integers(0, 100, size=5).tolist()
assert first == second

continued_rng = np.random.default_rng(23)
draw_a = continued_rng.integers(0, 100, size=5).tolist()
draw_b = continued_rng.integers(0, 100, size=5).tolist()
assert draw_a != draw_b

record = {
    "python": platform.python_version(),
    "numpy": version("numpy"),
    "seed": 23,
    "values": first,
    "relative_output": str(output_path.relative_to(project_root)),
}
output_path.write_text(json.dumps(record, indent=2), encoding="utf-8")
```

`project_root / ...` avoids a user-specific absolute path. A seed controls the
generator's starting state, but it is not a universal guarantee across changed
algorithms, library versions, runtime settings, or hardware. Restart-and-run-all is
the decisive hidden-state test: any cell that then needs an undefined variable
is not self-contained.

</details>
