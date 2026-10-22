# TD1 analytic rubric

This is a **20-point local rubric**. Any later module rescaling remains subject
to the approved ESILV assessment rule. A protocol defect removes credit only
from the affected criterion until repaired and rerun; unaffected criteria
remain assessable.

| Points | Criterion | Full-credit evidence |
|---:|---|---|
| 4 | Temporal contract | unit, target, frequency, origin, horizon, known-at-origin fields, and protected horizon are explicit |
| 4 | Executable data controls | date uniqueness/order/continuity, missingness, and censoring checks run and include one expected negative test |
| 5 | Baseline implementation | mean, last-value, and seasonal-naive forecasts use training history only and align to 28 validation dates |
| 5 | Evaluation and interpretation | MAE/sMAPE, aligned figure, failure period, and non-universal conclusion are correct |
| 2 | Reproducibility | hash, versions, configuration, output paths, and evidence status are recorded |

## Cross-level grading rule

The common Core determines all 20 points. Support scaffolds do not reduce the
attainable mark. Optional extensions add no points and are reviewed only after
the Core is valid and reproducible. Prewritten assertions, shapes, and toy
examples earn no credit without the student's completed decisions, results,
and interpretation.
