# TD1 — Temporal data contract and forecasting baselines

**Duration:** 3 hours  
**Mode:** paired implementation, individual evidence and interpretation  
**Scope:** Time Series and Reinforcement Learning only  
**CPU profile:** verified local Python 3.11/3.12; no GPU required

## Decision scenario

Define a defensible daily-demand forecasting task before selecting a model. The operations team needs a 28-day planning forecast, but the protected final horizon cannot be used for baseline choice.

## Student route at a glance

- 01 — **WHERE AM I?** Time Series: first practical after CM-B1, before TD2 and TDo1.
- 02 — **TODAY'S OBJECTIVE:** State the daily target/time contract and establish three target-safe baselines.
- 03 — **WHAT YOU NEED:** The locked local Python 3.11/3.12 environment and the public development data/card.
- 04 — **CORE ROUTE:** [Open the Core notebook](student_starter.ipynb).
- 05 — **SUPPORT ROUTE:** [Open the guided Support notebook](support_starter.ipynb); it has the same assessed Core and 20/20 ceiling.
- 06 — **CHECKPOINTS:** Follow the [180-minute route](#180-minute-route).
- 07 — **WHAT TO SUBMIT / RETAIN:** Use [Deliverables](#deliverables) and [Submission hygiene](#submission-hygiene).
- 08 — **COMMON FAILURE MODES:** See [TD1 recovery checks](failure_modes.html).
- 09 — **WHAT THIS PREPARES NEXT:** Freeze the temporal contract and baseline evidence for TD2.

## Learning outcomes

- state the unit, target, frequency, forecast origin, horizon, and prediction-time feature availability
- verify date ordering, uniqueness, daily continuity, missingness, zeros, and stockout-censoring flags with executable invariants
- implement mean, last-value, and seven-day seasonal-naive baselines on one development-only temporal block
- interpret MAE and sMAPE without treating one validation block as universal evidence

## Before class — verified local runtime

From the course root run `uv sync --frozen`, then
`uv run python scripts/check_setup.py`. Colab is an optional
portability path governed by the release evidence for the exact archive in use;
see `../COLAB_PREFLIGHT.md`.

Read the applicable contract before modelling: `shared/datasets/cards/daily_demand.md`.


## Initialise the progressive portfolio

Before leaving TD1, copy the **contents** of
`03_capstone/student/templates/model_repository/` to the stable-pair repository
root. Record the first data hash, temporal boundary, baseline evidence,
**provisional development claim candidate**, and contribution row. Reuse that
repository through TD2–TD4 and TDo1–TDo2;
this is evidence capture inside the six sessions, not a seventh session.



## Capstone evidence boundary

Append this session's evidence and a **provisional development claim
candidate** to the portfolio. It may support model/reward choice and provenance,
but it is not a final empirical release claim. TDo1 or TDo2 must later confirm,
revise, or reject it using the protected/controlled protocol.


## Choose your route

- **Support:** open `support_starter.ipynb` for smaller steps, contracts, assertions, micro-examples, and recovery checkpoints.
- **Core:** open `student_starter.ipynb` for the less-scaffolded implementation.
- **Extension:** attempt the bounded optional task only after valid Core evidence.

Support and Core share the same outcomes and full 20/20 ceiling. Extensions add
no points and cannot repair invalid Core evidence.

## 180-minute route

- 0–20 min — verified runtime, data hash, and forecast decision statement
- 20–55 min — temporal data contract and executable index invariants
- 55–85 min — trend, weekly structure, zeros, promotions, holidays, and stockout censoring
- 85–130 min — mean, last-value, and seasonal-naive baselines on a frozen 28-day development block
- 130–165 min — MAE/sMAPE table, aligned plot, and baseline failure analysis
- 165–180 min — evidence freeze, claim boundary, and exit ticket

## Assessed Core

- Use only `daily_demand_development.csv`; do not read or infer protected final targets.
- Assert 1,433 unique, strictly increasing daily dates with no gap before modelling.
- Declare that `stockout_flag=1` marks censored recorded sales, not latent unconstrained demand.
- Freeze the final 28 development days as one baseline comparison block; fit every baseline on earlier rows only.
- Keep this public 28-day practice block distinct from TD2's three 14-day comparison windows and TDo1's separate protected 28-day final horizon.
- Implement historical-mean, last-value, and lag-7 seasonal-naive forecasts with exactly 28 aligned predictions.
- Report MAE and sMAPE for all three baselines plus one failure period and one operational limitation.

## Support/Core/Extension parity

- **Beginner/Support:** complete every assessed decision and interpretation; prewritten checks are navigation, not evidence credit.
- **Intermediate/Core:** implement directly from the contract and add one justified diagnostic.
- **Advanced/Extension:** freeze valid Core first, then record the separate configuration and compute budget.

## Optional Advanced extension — ungraded

Without changing the frozen 28-day block, decompose baseline error by weekday and stockout-flag status. Treat small slices as diagnostic, not as a new model-selection leaderboard.

## Evidence contract

Every substantive claim identifies the data/environment version, protocol,
baseline, metric, repeated evidence, reproducible code/configuration, and a
material limitation. Use public base seeds `11, 23, 37, 51, 71` wherever the
session requires repeated stochastic evidence.

## Deliverables

- completed notebook
- temporal data contract and invariant results
- three-baseline metric table
- aligned actual-versus-forecast figure
- one bounded baseline claim and limitation

## Submission hygiene

- restart the kernel and run top to bottom;
- keep outputs concise and preserve failed or partial evidence;
- never include private teaching or evaluation material;
- update the pair evidence, claim-candidate/decision, and contribution records before leaving;
- freeze the relevant configuration, artifact hashes, and commit/checkpoint.
