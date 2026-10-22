# Ungraded Diagnostic and Bridge Paths

> **Complete before TD1.**  
> **Purpose:** choose useful support, not rank students.  
> **Submission:** only the readiness result and unresolved needs; diagnostic
> mistakes are not graded.

Complete the runtime preflight in the
[`student start guide`](../00_start/START_HERE.html) before assigning
a readiness status. An incomplete extraction is a packaging problem, not a
statistics result.

## 1. What the diagnostic measures

The diagnostic checks prerequisites needed to benefit from the module:

- environment and notebook execution;
- Python and tabular-data fluency;
- basic probability and metric interpretation;
- evaluation roles, temporal leakage awareness, and fair comparison;
- reproducible working habits.

It does not test forecasting models or reinforcement-learning algorithms before
they are taught. The diagnostic checks only the prerequisites required to learn
them safely.

## 2. Readiness scale

For each check, record one status:

- **Independent:** completed and explained without a hint;
- **Supported:** completed after a hint, example, or documentation lookup;
- **Not yet:** incomplete, or completed without being able to explain the result.

Documentation lookup is normal professional practice. Copying a result that you
cannot explain is `Not yet`.

## 3. Diagnostic checks

### A. Environment and reproducibility

| ID | Check | Evidence to retain |
|---|---|---|
| D1 | Create/activate the approved course environment and print Python plus key package versions | `diagnostic/environment.txt` |
| D2 | Execute the provided smoke notebook from a clean kernel and save its declared output | Executed notebook and output file |
| D3 | Set a seed, run the same small stochastic function twice, and explain what is and is not guaranteed to repeat | Short note plus outputs |

### B. Python and data handling

| ID | Check | Evidence to retain |
|---|---|---|
| D4 | Write a function with inputs, return value, and one assertion for an edge case | Python file or notebook cell |
| D5 | Load a dated demand table; report shape, column types, missingness, date range, duplicate dates, and target summary without manually counting rows | Machine-readable summary and short interpretation |
| D6 | Select rows and columns, create one derived feature without overwriting the raw table, and save the result | Code plus saved sample |

### C. Statistics and evaluation

| ID | Check | Evidence to retain |
|---|---|---|
| D7P | Compute an empirical event probability, its complement, and an expected count for a stated batch size; explain why the observed rate is an estimate | Calculation plus two-sentence interpretation |
| D7 | Explain mean versus standard deviation using a supplied set of repeated metric values | Three-to-five sentence explanation |
| D8 | Choose an appropriate metric for one demand-forecasting or stochastic-policy scenario and identify one limitation | Short justified choice |
| D9 | Distinguish training, development, and protected-evaluation roles; identify future leakage in a supplied temporal-split example | Corrected protocol diagram or note |
| D10 | Explain why two models must be compared on the same folds or evaluation cases | Short explanation |

### D. Technical communication

| ID | Check | Evidence to retain |
|---|---|---|
| D11 | Turn one metric result into a narrow claim containing task, comparator, metric, and limitation | One claim sentence |
| D12 | Follow a relative path from a report statement to the configuration and result file that support it | Three resolved paths |

## 4. Choose a temporary path

### Foundation bridge

Choose this path when any of D1, D2, D4, D5, D7P, D8, or D9 is `Not yet`, or when
several other checks require support. Complete only the relevant bridge units
before TD1. Their exit checks support self-routing and help requests; they are
not collected or graded.

This path is intended for students who are beginners with the course's technical
prerequisites. It does not mean they are incapable of advanced ML.

### Core refresh

Choose this path when all critical checks are at least `Supported` and most are
`Independent`. Review the weak categories, then begin TD1 on the Core route.

This will be the normal entry route for many students who have completed an
introductory ML course but have not yet practised rigorous evidence packaging.

### Extension preparation

Choose this path when all checks are `Independent` and you can also write a
simple test for data shape/leakage assumptions. Prepare the extension tooling,
but do not skip the Core route or replace the required baseline with a complex
model.

The route is selected per topic. A student may use Extension Preparation for
Python engineering and the Support route for reinforcement learning.

## 5. Foundation bridge units

Each linked unit is a complete 30-minute micro-lesson with a worked example,
20-minute practice, exit check, and recovery answer. Completing every unit takes
at most **150 minutes (2h30)**, but most students should complete only the units
selected by the diagnostic. See the [bridge index](bridge/README.html).

### [B0 — Environment and notebook discipline](bridge/B0_ENVIRONMENT_AND_NOTEBOOK_DISCIPLINE.html)

**Study:** environments, kernels, relative paths, restarting/running all cells,
and saving text/CSV/JSON evidence.  
**Exit check:** D1–D3 are at least `Supported`, and the smoke notebook works from
a fresh kernel.

### [B1 — Python essentials for experiments](bridge/B1_PYTHON_FOR_EXPERIMENTS.html)

**Study:** functions, loops/comprehensions, dictionaries, exceptions, assertions,
and deterministic parameter/config handling.  
**Exit check:** D4 is `Independent`; a small function passes a normal and edge-case
assertion.

### [B2 — Arrays and dataframes](bridge/B2_ARRAYS_AND_DATAFRAMES.html)

**Study:** shapes, dtypes, missing values, filtering, grouping, non-mutating
feature construction, and target separation.  
**Exit check:** D5–D6 are at least `Supported`, with an accurate machine-readable
summary.

### [B3 — Evaluation and leakage](bridge/B3_EVALUATION_AND_LEAKAGE.html)

**Study:** training/validation/test roles, fit versus transform, cross-validation,
baseline, metric direction, repeated evidence, and data leakage.  
**Exit check:** D7P and D7–D10 are at least `Supported`; D9 must be `Independent` before
assessed test evidence is generated.

### [B4 — Evidence and technical writing](bridge/B4_EVIDENCE_AND_TECHNICAL_WRITING.html)

**Study:** narrow claims, relative artifact paths, result tables, assumptions,
and limitations.  
**Exit check:** D11–D12 are `Independent` for one supplied example.

## 6. Core-refresh menu

Complete only the units corresponding to `Supported` diagnostic checks:

- temporal-boundary and feature-availability exercise;
- metric and variability interpretation exercise;
- reproducible seed/config exercise;
- claim-to-artifact trace exercise;
- dataframe missingness and type exercise.

The goal is to repair a specific prerequisite, not create busywork.

## 7. Extension-preparation menu

After all core readiness checks pass, advanced students may prepare:

- automated invariant tests for split boundaries and result schemas;
- configuration-driven repeated experiments;
- temporal-boundary and origin invariant tests;
- optional forecasting uncertainty diagnostics;
- RL environment and reward invariant tests;
- bounded multi-seed sensitivity tooling;
- compact command-line reproduction in addition to notebooks.

These are preparation aids. Optional ungraded extension tasks remain in the
relevant lab and are reviewed only after valid Core evidence.

## 8. Just-in-time topic refreshers

The diagnostic deliberately does not pre-test material that the course teaches.
If retrieval practice shows that the new topic is still unclear, use one short
refresher immediately before the corresponding practical:

- [`TOPIC_REFRESH_TIME_SERIES.md`](TOPIC_REFRESH_TIME_SERIES.html) before TD1:
  temporal order, origins, horizon, seasonal-naive, and rolling-origin checks;
- [`TOPIC_REFRESH_RL.md`](TOPIC_REFRESH_RL.html) before TD3: MDP elements,
  return, Bellman target, Q-learning update, and controlled policy evaluation.

These refreshers are ungraded and contain no assessed dataset results. They do
not authorize skipping the lecture, starter notebook, or Core evidence gates.

## 9. If you are still blocked

Use `templates/HELP_REQUEST.md` and identify:

1. the first check that fails;
2. expected versus observed behaviour;
3. environment and command/cell used;
4. the smallest relevant error excerpt;
5. what you already tried;
6. whether restricted data or credentials are involved—never paste them.

The teaching team should respond to the earliest failure, not ask you to rerun an
entire project blindly.
