# TD4 — Tabular Q-learning under a frozen development protocol

**Duration:** 3 hours  
**Mode:** paired implementation, individual evidence and interpretation  
**Scope:** Time Series and Reinforcement Learning only  
**CPU profile:** verified local Python 3.11/3.12; no GPU required

## Decision scenario

Train a transparent tabular policy for the TD3 inventory MDP and determine whether its development behaviour warrants controlled final evaluation.

## Student route at a glance

- 01 — **WHERE AM I?** RL: after CM-B2 and TD3, before the controlled TDo2 release.
- 02 — **TODAY'S OBJECTIVE:** Implement explicit tabular Q-learning and compare a frozen policy on separate public development episodes.
- 03 — **WHAT YOU NEED:** The locked local Python 3.11/3.12 environment and the public TD3 environment/evaluation contracts.
- 04 — **CORE ROUTE:** [Open the Core notebook](student_starter.ipynb).
- 05 — **SUPPORT ROUTE:** [Open the guided Support notebook](support_starter.ipynb); it has the same assessed Core and 20/20 ceiling.
- 06 — **CHECKPOINTS:** Follow the [180-minute route](#180-minute-route).
- 07 — **WHAT TO SUBMIT / RETAIN:** Use [Deliverables](#deliverables) and [Submission hygiene](#submission-hygiene); freeze the Q-table, configuration, and hash.
- 08 — **COMMON FAILURE MODES:** See [TD4 recovery checks](failure_modes.html).
- 09 — **WHAT THIS PREPARES NEXT:** Hand the unchanged Q-table and protocol to TDo2 for controlled evaluation.

## Learning outcomes

- implement epsilon-greedy tabular Q-learning with explicit seeds and decay
- handle Gymnasium termination and time-limit truncation correctly in the TD target
- diagnose training cost without presenting it as independent policy evidence
- compare the frozen Q-table with TD3 baselines on separate public development episodes

## Before class — verified local runtime

From the course root run `uv sync --frozen`, then
`uv run python scripts/check_setup.py`. Colab is an optional
portability path governed by the release evidence for the exact archive in use;
see `../COLAB_PREFLIGHT.md`.

Read the applicable contract before modelling: `shared/inventory_env.py` and `shared/rl.py`.




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

- 0–20 min — restore TD3 MDP/reward/baseline contract
- 20–55 min — Q-table shape, Bellman target, and truncation micro-tests
- 55–110 min — explicit episode/step/update loop over five public training seeds
- 110–140 min — learning trace and state-policy inspection
- 140–165 min — separate public development evaluation against both baselines
- 165–180 min — freeze Q-table/configuration and exit ticket

## Assessed Core

- Implement the Q-learning loop explicitly; no completed trainer is distributed in the student path.
- Train one Q-table through base-seed blocks 11, 23, 37, 51, and 71 with 350 episodes each; these are not five independent training runs. Use one action RNG seeded from 11 and a single linear epsilon decay from 0.85 to 0.05 across all 1,750 episodes.
- Bootstrap across time-limit truncation and zero continuation only on genuine termination.
- Retain per-episode cost and epsilon; training curves are diagnostics, not final evaluation.
- Evaluate the frozen table, random policy, and reorder heuristic on five separately derived public development seeds under identical episodes.
- Save a finite Q-table with shape `(9,2,3)`, configuration, hash, and development evidence for TDo2 handoff.

## Support/Core/Extension parity

- **Beginner/Support:** complete every assessed decision and interpretation; prewritten checks are navigation, not evidence credit.
- **Intermediate/Core:** implement directly from the contract and add one justified diagnostic.
- **Advanced/Extension:** freeze valid Core first, then record the separate configuration and compute budget.

## Optional Advanced extension — ungraded

Repeat one public-seed development run with a predeclared slower epsilon decay. Hold all other settings fixed and report stability/cost, not a post-hoc winner.

## Evidence contract

Every substantive claim identifies the data/environment version, protocol,
baseline, metric, repeated evidence, reproducible code/configuration, and a
material limitation. Use public base seeds `11, 23, 37, 51, 71` wherever the
session requires repeated stochastic evidence.

## Deliverables

- completed notebook
- explicit Q-learning implementation and target tests
- training trace and policy-map figure
- three-policy public development comparison
- frozen `q_table.npy`, configuration, and hash

## Submission hygiene

- restart the kernel and run top to bottom;
- keep outputs concise and preserve failed or partial evidence;
- never include private teaching or evaluation material;
- update the pair evidence, claim-candidate/decision, and contribution records before leaving;
- freeze the relevant configuration, artifact hashes, and commit/checkpoint.
