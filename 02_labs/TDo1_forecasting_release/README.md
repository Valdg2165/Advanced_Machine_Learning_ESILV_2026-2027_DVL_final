# TDo1 — Forecast uncertainty and operational release

**Duration:** 3 hours  
**Mode:** paired implementation, individual evidence and interpretation  
**Scope:** Time Series and Reinforcement Learning only  
**CPU profile:** verified local Python 3.11/3.12; no GPU required

## Decision scenario

Turn the frozen TD2 development decision into a 28-day operational forecast with prediction intervals, diagnostic limits, and a protected final-horizon handoff.

## Student route at a glance

- 01 — **WHERE AM I?** Time Series: controlled release after CM-B1, TD1, and TD2.
- 02 — **TODAY'S OBJECTIVE:** Apply the frozen development decision once and prepare a target-free 28-day forecast release.
- 03 — **WHAT YOU NEED:** The locked local Python 3.11/3.12 environment, frozen TD2 evidence, and public future-feature interface.
- 04 — **CORE ROUTE:** [Open the Core notebook](student_starter.ipynb).
- 05 — **SUPPORT ROUTE:** [Open the guided Support notebook](support_starter.ipynb); it has the same assessed Core and 20/20 ceiling.
- 06 — **CHECKPOINTS:** Follow the [180-minute route](#180-minute-route).
- 07 — **WHAT TO SUBMIT / RETAIN:** Use [Deliverables](#deliverables) and [Submission hygiene](#submission-hygiene); retain the forecast artifact, hash, and handoff evidence.
- 08 — **COMMON FAILURE MODES:** See [TDo1 recovery checks](failure_modes.html).
- 09 — **WHAT THIS PREPARES NEXT:** Supply the forecasting release claim and protected receipt to the two-strand capstone.

## Learning outcomes

- evaluate interval coverage and width across the frozen rolling origins
- interpret SARIMA residual ACF and Ljung–Box evidence without claiming proof
- apply a predeclared operational selection/fallback rule from development evidence
- produce a strict 28-row forecast release without protected targets

## Before class — verified local runtime

From the course root run `uv sync --frozen`, then
`uv run python scripts/check_setup.py`. Colab is an optional
portability path governed by the release evidence for the exact archive in use;
see `../COLAB_PREFLIGHT.md`.

Read the applicable contract before modelling: `shared/datasets/cards/daily_demand.md`.




## Capstone evidence boundary

Append the protected/controlled evidence, receipt/hash, and the resulting
claim decision to the portfolio. This session may confirm, revise, or reject
earlier provisional candidates; a negative or baseline-winning result remains
valid final empirical evidence when the protocol is sound.


## Choose your route

- **Support:** open `support_starter.ipynb` for smaller steps, contracts, assertions, micro-examples, and recovery checkpoints.
- **Core:** open `student_starter.ipynb` for the less-scaffolded implementation.
- **Extension:** attempt the bounded optional task only after valid Core evidence.

Support and Core share the same outcomes and full 20/20 ceiling. Extensions add
no points and cannot repair invalid Core evidence.

## 180-minute route

- 0–20 min — restore TD2 origins, models, decision rule, and frozen evidence
- 20–60 min — SARIMA 80%/95% interval coverage and width across common origins
- 60–95 min — residual ACF, Ljung–Box, convergence, and censoring limits
- 95–130 min — operational selection/fallback and release schema
- 130–160 min — refit public history and generate 28 point/interval forecasts
- 160–180 min — schema/hash freeze, protected-horizon handoff, and exit ticket

## Assessed Core

- Reuse the TD2 three origins, horizon, model orders, and point-metric evidence without a new sweep.
- Report empirical 80%/95% coverage and mean width only for intervals actually produced.
- Treat three origins and 42 forecast cases as small dependent evidence, not calibrated-production proof.
- Apply the frozen rule: prefer SARIMA for interval-aware release only when its mean MAE is within 5% of the best development model; otherwise document the fallback limitation.
- Create exactly 28 public future dates with finite non-negative point forecasts and, when SARIMA is released, nested 80%/95% bounds.
- Do not include `demand_units` or any protected target in the student artifact.

## Support/Core/Extension parity

- **Beginner/Support:** complete every assessed decision and interpretation; prewritten checks are navigation, not evidence credit.
- **Intermediate/Core:** implement directly from the contract and add one justified diagnostic.
- **Advanced/Extension:** freeze valid Core first, then record the separate configuration and compute budget.

## Optional Advanced extension — ungraded

On rolling-origin development cases only, compare model-based SARIMA intervals with one predeclared residual-quantile interval. Keep point forecasts and origins fixed.

## Evidence contract

Every substantive claim identifies the data/environment version, protocol,
baseline, metric, repeated evidence, reproducible code/configuration, and a
material limitation. Use public base seeds `11, 23, 37, 51, 71` wherever the
session requires repeated stochastic evidence.

## Deliverables

- completed notebook
- rolling interval and residual evidence
- operational release/fallback decision
- 28-row `final_forecast.csv` and SHA-256
- protected-horizon handoff record and limitations

## Submission hygiene

- restart the kernel and run top to bottom;
- keep outputs concise and preserve failed or partial evidence;
- never include private teaching or evaluation material;
- update the pair evidence, claim-candidate/decision, and contribution records before leaving;
- freeze the relevant configuration, artifact hashes, and commit/checkpoint.
