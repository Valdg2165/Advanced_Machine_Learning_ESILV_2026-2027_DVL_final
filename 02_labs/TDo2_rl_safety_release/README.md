# TDo2 — Controlled RL evaluation and safety release

**Duration:** 3 hours  
**Mode:** paired implementation, individual evidence and interpretation  
**Scope:** Time Series and Reinforcement Learning only  
**CPU profile:** verified local Python 3.11/3.12; no GPU required

## Decision scenario

Submit the frozen TD4 Q-table to a common hidden evaluation batch, then decide whether cost, service, uncertainty, and safety evidence justify release over the TD3 heuristic.

## Student route at a glance

- 01 — **WHERE AM I?** RL: controlled release after CM-B2, TD3, and TD4.
- 02 — **TODAY'S OBJECTIVE:** Evaluate the frozen TD4 policy under the controlled protocol and make a bounded safety/release decision.
- 03 — **WHAT YOU NEED:** The locked local Python 3.11/3.12 environment, frozen Q-table/configuration, and public evaluator contract.
- 04 — **CORE ROUTE:** [Open the Core notebook](student_starter.ipynb).
- 05 — **SUPPORT ROUTE:** [Open the guided Support notebook](support_starter.ipynb); it has the same assessed Core and 20/20 ceiling.
- 06 — **CHECKPOINTS:** Follow the [180-minute route](#180-minute-route).
- 07 — **WHAT TO SUBMIT / RETAIN:** Use [Deliverables](#deliverables) and [Submission hygiene](#submission-hygiene); retain the frozen artifact, returned receipt, and release decision.
- 08 — **COMMON FAILURE MODES:** See [TDo2 recovery checks](failure_modes.html).
- 09 — **WHAT THIS PREPARES NEXT:** Supply the RL policy release claim and controlled receipt to the two-strand capstone.

## Learning outcomes

- validate and hash the frozen Q-table/configuration before controlled evaluation
- define a policy comparison function that accepts injected seeds without revealing them
- interpret cost and fill-rate Student-t intervals with operational safety measures
- issue an accept/conditional/reject decision that permits the transparent heuristic to win

## Before class — verified local runtime

From the course root run `uv sync --frozen`, then
`uv run python scripts/check_setup.py`. Colab is an optional
portability path governed by the release evidence for the exact archive in use;
see `../COLAB_PREFLIGHT.md`.

Read the applicable contract before modelling: `shared/inventory_env.py` and `shared/rl.py`.




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

- 0–20 min — restore and validate frozen Q-table, config, hash, and evaluator
- 20–55 min — public safety replay on separate declared development episodes
- 55–90 min — controlled evaluator contract and instructor handoff
- 90–125 min — aggregate cost/fill intervals, unmet demand, stock, and action audit
- 125–150 min — release gate, risk register, receipt/hash freeze
- 150–155 min — immutable upload and transition to individual conditions
- 155–180 min — standardized individual checkpoint: 20-minute task + 5-minute submission

## Assessed Core

- Load, validate, and hash the TD4 Q-table; it must be finite with shape `(9,2,3)`.
- Keep random, reorder, and Q-learning policies unchanged for all controlled episodes.
- The evaluator must accept injected seeds; student code must not hard-code, print, infer, or search for final seed values.
- Freeze the Q-table, environment source, evaluator source, configuration, and immutable tag before instructor execution.
- Interpret returned mean cost and fill-rate 95% Student-t intervals together with unmet demand, mean stock, and order quantity.
- Use independent episodes as sampling units; state the approximate-normality assumption and distinguish a confidence interval for mean cost from a prediction interval for one future episode.
- The handoff supplies marginal policy intervals, not a paired-difference test. The mean-cost/service release rule is an empirical decision rule and does not establish statistical superiority.
- Apply the predeclared service floor and comparator rule; training reward alone cannot authorize release.

## Support/Core/Extension parity

- **Beginner/Support:** complete every assessed decision and interpretation; prewritten checks are navigation, not evidence credit.
- **Intermediate/Core:** implement directly from the contract and add one justified diagnostic.
- **Advanced/Extension:** freeze valid Core first, then record the separate configuration and compute budget.

## Optional Advanced extension — ungraded

On declared public development episodes only, stress one cost coefficient while keeping all three frozen policies unchanged. Treat this as reward sensitivity, not hidden-batch evidence.

## Evidence contract

Every substantive claim identifies the data/environment version, protocol,
baseline, metric, repeated evidence, reproducible code/configuration, and a
material limitation. Use public base seeds `11, 23, 37, 51, 71` wherever the
session requires repeated stochastic evidence.

## Deliverables

- completed notebook
- validated Q-table/config/hash bundle
- seed-injected evaluator contract
- controlled aggregate and receipt/checksums when issued
- safety gate decision and risk register

## Submission hygiene

- restart the kernel and run top to bottom;
- keep outputs concise and preserve failed or partial evidence;
- never include private teaching or evaluation material;
- update the pair evidence, claim-candidate/decision, and contribution records before leaving;
- freeze the relevant configuration, artifact hashes, and commit/checkpoint.
