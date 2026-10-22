# Advanced Machine Learning — ESILV syllabus

**Edition:** R2 interactive course, private candidate under course-owner authority  
**Teaching language:** English  
**Official academic year:** pending authoritative ESILV record  
**Official module code:** pending authoritative ESILV record  
**ECTS:** pending authoritative ESILV record

The pending fields are not official ESILV catalogue values and will be replaced
only from the LMS or programme record.
The course owner authorises this revision. Hours and assessment remain unchanged.
The twelve-chapter interactive book is an optional explanation and recovery
resource, not extra assessed work. This revised payload needs its own archive
and acceptance evidence. Public
redistribution and external certification remain
explicitly outside this release.

## Purpose

This course teaches engineers to make defensible forecasting and sequential-
decision claims. Algorithmic sophistication is subordinate to a valid data or
environment contract, a serious baseline, fair repeated evaluation, reproducible
artifacts, and an honest limitation.

> Every performance claim must identify the data or environment version,
> evaluation protocol, baseline, metric, repeated evidence, reproducible code
> and configuration, and at least one known limitation.

## Contact hours and ownership

| Block | Owner | Hours | Released content |
|---|---|---:|---|
| CM-S1 | Sana Ben Hmida | 3 | Data preprocessing, ensemble learning, active learning; Sana-owned lecture artifacts are distributed outside this repository |
| CM-S2 | Sana Ben Hmida | 3 | Evolutionary ML and distributed evolutionary algorithms; Sana-owned lecture artifacts are distributed outside this repository |
| CM-B1 | Badr Tajini | 3 | Time-series structure, trustworthy forecasting, rolling-origin evaluation, uncertainty |
| CM-B2 | Badr Tajini | 3 | MDPs, Bellman equations, tabular Q-learning, reward design, trustworthy policy evaluation |
| TD1–TD4 | Badr Tajini for the assigned group | 12 | Four three-hour Time-Series/RL tutorials |
| TDo1–TDo2 | Badr Tajini for the assigned group | 6 | Two three-hour controlled computer tutorials |

Totals are exactly **12 h CM + 12 h TD + 6 h TDo = 30 h**. The assigned
group's complete 18-hour practical lane is split evenly: **9 h Time Series and
9 h Reinforcement Learning**. No preprocessing, ensemble, active-learning, or
evolutionary-ML practical is included in this release.

## Learning outcomes

After the common Core route, every student can:

1. define a time-series target, unit, frequency, origin, horizon, and
   prediction-time feature boundary;
2. detect temporal leakage and test date/index assumptions;
3. implement and defend mean, last-value, and seasonal-naive baselines;
4. compare seasonal naive, ETS, and bounded SARIMA on identical rolling origins;
5. interpret residual diagnostics, uncertainty, operational loss, and limits;
6. specify an inventory MDP, reward decomposition, horizon, and truncation
   semantics;
7. implement transparent random and reorder comparator policies;
8. trace and implement tabular Q-learning without an opaque training framework;
9. compare frozen policies over common evaluation seeds using cost, service,
   resource, and safety metrics;
10. reproduce a result from versioned data/environment, configuration, code,
    seeds, and evidence paths;
11. write a bounded operational recommendation and state what would reverse it.

## Relative teaching sequence

The exact timetable is supplied later by ESILV. The dependency order is binding:
the relevant CM precedes its TD/TDo.

| Period | Session | Three-hour outcome |
|---|---|---|
| September | TD1 — Temporal data contract and baselines | Freeze the forecasting contract, test the daily index, and compare three transparent baselines on development data |
| October | TD2 — Rolling-origin models | Compare seasonal naive, ETS, and SARIMA on three identical origins; freeze a development selection rule |
| November | TD3 — MDP, reward, and baselines | Verify the inventory environment and reward, then compare random and reorder policies on common public seeds |
| December | TD4 — Tabular Q-learning | Implement Q-learning explicitly, freeze a finite Q-table, and compare it on separate development episodes |
| First half of January | TDo1 — Forecasting release | Score the frozen forecasting decision on the protected 28-day horizon once; issue a bounded operational release |
| Second half of January | TDo2 — RL safety release | Evaluate the frozen Q-table on injected protected seeds; issue release, fallback, monitoring, and rollback conditions |

The capstone consolidates these sessions. It does not create a seventh practical
session or require a new model after TDo2.

## Support, Core, and Extension

All students are assessed against the same Core outcomes.

- **Support** provides guided cells, checkpoints, micro-examples, visual
  explanations, and recovery instructions.
- **Core** is the common assessed protocol and can earn the maximum mark.
- **Extension** adds one bounded ablation, sensitivity, uncertainty, or
  engineering study only after Core validity passes.

An extension never repairs leakage, protected-data tuning, a missing baseline,
unequal cases/budgets, seed cherry-picking, or an irreproducible result. The
ungraded diagnostic routes each student to only the bridge material they need.

## Technical environment

- supported primary profile: local CPU, Python 3.11–3.12, locked with uv;
- optional compatibility route: Google Colab using requirements-colab.txt;
- GPU: not required;
- public tools: NumPy, pandas, SciPy, scikit-learn, statsmodels, Matplotlib,
  and Gymnasium;
- common development seeds: 11, 23, 37, 51, 71;
- protected forecasting labels and RL evaluation seeds remain instructor-only.

The historical R1 was replayed in two fresh live-Colab CPU runtimes. Those
receipts do not cover the changed R2 sources. R2 local and browser verification
is recorded separately; no live R2 Colab acceptance is claimed.

## Assessment

The course-owner assessment rule is:

| Component | Weight |
|---|---:|
| Progressive evidence portfolio | 40% |
| Reproducible two-strand capstone | 40% |
| Individual verification | 20% |

The detailed rule, invalidation conditions, pair-work obligations, and AI policy
are in [ASSESSMENT_AND_AI_USE_POLICY.md](ASSESSMENT_AND_AI_USE_POLICY.html).
The filename is retained for compatibility; its internal teaching rule is
accepted by the course owner. If the LMS configuration differs, the official
value replaces it and the package is rebuilt.

## Capstone

The capstone contains exactly:

1. a forecasting release claim produced from TDo1;
2. an RL policy release claim produced from TDo2;
3. a cross-strand forecast-to-inventory operational and safety synthesis.

Development evidence from TD1–TD4 supports provenance and method explanation,
but it is not substituted for either controlled release receipt. The capstone
requires replayable artifacts, submission.yaml, claims_evidence.csv, an AI use
log, contribution records, limitations, fallback, monitoring, and rollback.

## Integrity and safety

Generative AI is allowed only when its tool, purpose, reused content, tests, and
human verification are disclosed. A result that a student cannot explain or
reproduce receives no credit. Pair work does not remove individual
accountability.

The inventory policy remains a simulated classroom decision. It is not
authorised for production, autonomous procurement, or real operational control.
