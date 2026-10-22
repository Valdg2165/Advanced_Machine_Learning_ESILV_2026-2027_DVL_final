# TD3 — Inventory MDP, reward design, and baseline policies

**Duration:** 3 hours  
**Mode:** paired implementation, individual evidence and interpretation  
**Scope:** Time Series and Reinforcement Learning only  
**CPU profile:** verified local Python 3.11/3.12; no GPU required

## Decision scenario

Before learning a policy, formalise the inventory decision process and determine whether its reward and baseline policies measure the operational behaviour intended.

## Student route at a glance

- 01 — **WHERE AM I?** RL: first practical after CM-B2, before TD4 and TDo2.
- 02 — **TODAY'S OBJECTIVE:** Validate the inventory MDP and reward before evaluating transparent comparators.
- 03 — **WHAT YOU NEED:** The locked local Python 3.11/3.12 environment and the public `shared/inventory_env.py` contract.
- 04 — **CORE ROUTE:** [Open the Core notebook](student_starter.ipynb).
- 05 — **SUPPORT ROUTE:** [Open the guided Support notebook](support_starter.ipynb); it has the same assessed Core and 20/20 ceiling.
- 06 — **CHECKPOINTS:** Follow the [180-minute route](#180-minute-route).
- 07 — **WHAT TO SUBMIT / RETAIN:** Use [Deliverables](#deliverables) and [Submission hygiene](#submission-hygiene).
- 08 — **COMMON FAILURE MODES:** See [TD3 recovery checks](failure_modes.html).
- 09 — **WHAT THIS PREPARES NEXT:** Freeze the MDP, reward, and comparator evidence for TD4.

## Learning outcomes

- map the environment to state, action, transition, reward, horizon, and truncation semantics
- reconstruct order, holding, and unmet-demand cost from one-step evidence
- implement random and regime-aware reorder baselines under a common evaluation protocol
- interpret cost, fill rate, unmet demand, stock, and order quantity jointly

## Before class — verified local runtime

From the course root run `uv sync --frozen`, then
`uv run python scripts/check_setup.py`. Colab is an optional
portability path governed by the release evidence for the exact archive in use;
see `../COLAB_PREFLIGHT.md`.

Read the applicable contract before modelling: `shared/inventory_env.py`.




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

- 0–20 min — environment check and MDP contract
- 20–55 min — state/action enumeration and transition observations
- 55–90 min — reward decomposition and sign/unit tests
- 90–130 min — random and reorder baseline policy implementation
- 130–165 min — five-seed common-episode evaluation and safety interpretation
- 165–180 min — baseline freeze and exit ticket

## Assessed Core

- Run Gymnasium's environment checker and assert state shape `(2,)`, three actions, and 40-step horizon.
- Document state `(stock_level, demand_regime)` and action indices mapping to order quantities `(0,1,2)`.
- For a declared transition, reconstruct total cost from order, holding, and unmet-demand components and assert `reward == -cost`.
- Implement a random policy and a transparent regime-aware reorder policy before Q-learning.
- Evaluate both policies on public seeds 11, 23, 37, 51, and 71 using identical episodes.
- Report cost, fill rate, unmet demand, mean stock, and mean order quantity; a baseline is not ranked from reward alone.
- Define course fill rate as the mean of step-level served/demand ratios, assigning 1 to zero-demand steps; it is not the aggregate fraction of units served.

## Support/Core/Extension parity

- **Beginner/Support:** complete every assessed decision and interpretation; prewritten checks are navigation, not evidence credit.
- **Intermediate/Core:** implement directly from the contract and add one justified diagnostic.
- **Advanced/Extension:** freeze valid Core first, then record the separate configuration and compute budget.

## Optional Advanced extension — ungraded

On public seeds only, compare one predeclared alternative pair of reorder targets. Keep the original heuristic in the table and interpret service/cost sensitivity, not superiority.

## Evidence contract

Every substantive claim identifies the data/environment version, protocol,
baseline, metric, repeated evidence, reproducible code/configuration, and a
material limitation. Use public base seeds `11, 23, 37, 51, 71` wherever the
session requires repeated stochastic evidence.

## Deliverables

- completed notebook
- MDP and reward contract
- reward decomposition assertion
- five-seed baseline result table and plot
- baseline safety/limitations note

## Submission hygiene

- restart the kernel and run top to bottom;
- keep outputs concise and preserve failed or partial evidence;
- never include private teaching or evaluation material;
- update the pair evidence, claim-candidate/decision, and contribution records before leaving;
- freeze the relevant configuration, artifact hashes, and commit/checkpoint.
