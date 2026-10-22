# TD4 analytic rubric

This is a **20-point local rubric**. Any later module rescaling remains subject
to the approved ESILV assessment rule. A protocol defect removes credit only
from the affected criterion until repaired and rerun; unaffected criteria
remain assessable.

| Points | Criterion | Full-credit evidence |
|---:|---|---|
| 4 | Learning contract | Q-table shape, hyperparameters, seed derivation, and truncation semantics are explicit |
| 7 | Q-learning implementation | epsilon-greedy action, target, update, episode accounting, and five-seed loop are correct |
| 3 | Training diagnostics | cost trace and state-policy map are interpreted without final-performance overclaim |
| 4 | Development comparison | Q-learning and both TD3 baselines share separate public episodes and cost/service metrics |
| 2 | Freeze and provenance | finite Q-table, configuration, source, hash, and evidence paths are preserved |

## Cross-level grading rule

The common Core determines all 20 points. Support scaffolds do not reduce the
attainable mark. Optional extensions add no points and are reviewed only after
the Core is valid and reproducible. Prewritten assertions, shapes, and toy
examples earn no credit without the student's completed decisions, results,
and interpretation.
