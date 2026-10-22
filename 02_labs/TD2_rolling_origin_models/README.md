# TD2 — Rolling-origin ETS and SARIMA comparison

**Duration:** 3 hours  
**Mode:** paired implementation, individual evidence and interpretation  
**Scope:** Time Series and Reinforcement Learning only  
**CPU profile:** verified local Python 3.11/3.12; no GPU required

## Decision scenario

Decide whether ETS or SARIMA adds repeatable development value beyond the TD1 seasonal-naive baseline while every method sees identical forecast origins.

## Student route at a glance

- 01 — **WHERE AM I?** Time Series: after CM-B1 and TD1, before the TDo1 release.
- 02 — **TODAY'S OBJECTIVE:** Compare seasonal naive, ETS, and bounded SARIMA on the same rolling-origin cases.
- 03 — **WHAT YOU NEED:** The locked local Python 3.11/3.12 environment, TD1 contract, and public development data/card.
- 04 — **CORE ROUTE:** [Open the Core notebook](student_starter.ipynb).
- 05 — **SUPPORT ROUTE:** [Open the guided Support notebook](support_starter.ipynb); it has the same assessed Core and 20/20 ceiling.
- 06 — **CHECKPOINTS:** Follow the [180-minute route](#180-minute-route).
- 07 — **WHAT TO SUBMIT / RETAIN:** Use [Deliverables](#deliverables) and [Submission hygiene](#submission-hygiene); freeze the selected specification and fallback.
- 08 — **COMMON FAILURE MODES:** See [TD2 recovery checks](failure_modes.html).
- 09 — **WHAT THIS PREPARES NEXT:** Carry the frozen development decision into TDo1; protected results cannot reopen selection.

## Learning outcomes

- construct expanding-window rolling origins without future leakage
- fit additive ETS and a bounded SARIMA specification on training history at each origin
- compare seasonal naive, ETS, and SARIMA on identical cases using fold-level and aggregate evidence
- freeze a model-selection rule before the protected 28-day horizon is scored

## Before class — verified local runtime

From the course root run `uv sync --frozen`, then
`uv run python scripts/check_setup.py`. Colab is an optional
portability path governed by the release evidence for the exact archive in use;
see `../COLAB_PREFLIGHT.md`.

Read the applicable contract before modelling: `shared/datasets/cards/daily_demand.md`.




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

- 0–20 min — restore TD1 data contract and baseline implementation
- 20–50 min — freeze three expanding-window origins and a 14-day horizon
- 50–90 min — fit additive ETS at every origin
- 90–130 min — fit bounded SARIMA at every origin
- 130–165 min — fold table, aggregate MAE/sMAPE, residual checks, and model decision
- 165–180 min — evidence freeze and exit ticket

## Assessed Core

- Use origins generated with `initial=1250`, `step=60`, `n_origins=3`, and horizon 14.
- Implement the rolling loop explicitly; a completed course comparison helper is not part of the student path.
- Fit seasonal naive, additive ETS, and SARIMA(1,1,1)(1,0,1,7) on history ending strictly before each origin.
- Retain nine fold rows and aggregate mean/spread without dropping a failed origin.
- Use MAE as the primary selection metric and sMAPE as a scale-free diagnostic.
- Freeze the development evidence, selected specification, and fallback before TDo1. The existing interval-aware release gate is documented in [TDo1 Assessed Core](../TDo1_forecasting_release/README.html#assessed-core): prefer SARIMA only when its mean MAE is within 5% of the best development model; otherwise document the development winner as fallback. TDo1 applies this predeclared gate once, without protected-target-driven reselection.
- Record convergence warnings and residual autocorrelation as limitations rather than silently suppressing failed evidence.
- For the fitted SARIMA residual check, state lags 7/14 and four estimated AR/MA coefficients; the Ljung–Box reference degrees of freedom are lag minus four.

## Support/Core/Extension parity

- **Beginner/Support:** complete every assessed decision and interpretation; prewritten checks are navigation, not evidence credit.
- **Intermediate/Core:** implement directly from the contract and add one justified diagnostic.
- **Advanced/Extension:** freeze valid Core first, then record the separate configuration and compute budget.

## Optional Advanced extension — ungraded

Evaluate one predeclared alternative SARIMA order on the same three origins and same metric budget. Keep the seasonal-naive comparator and do not inspect protected targets.

## Evidence contract

Every substantive claim identifies the data/environment version, protocol,
baseline, metric, repeated evidence, reproducible code/configuration, and a
material limitation. Use public base seeds `11, 23, 37, 51, 71` wherever the
session requires repeated stochastic evidence.

## Deliverables

- completed notebook
- three-origin protocol table
- nine-row model-by-origin result table
- aggregate comparison and residual diagnostic
- pre-final-horizon model decision record

## Submission hygiene

- restart the kernel and run top to bottom;
- keep outputs concise and preserve failed or partial evidence;
- never include private teaching or evaluation material;
- update the pair evidence, claim-candidate/decision, and contribution records before leaving;
- freeze the relevant configuration, artifact hashes, and commit/checkpoint.
