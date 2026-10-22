# Support, Core, and Extension Model

## 1. One course, adjustable scaffolding

Every applied topic has one assessed Core route. The Support route changes the
amount of scaffolding, not the learning outcome. The Extension route adds depth
after the Core evidence is valid.

| Route | What changes | What does not change |
|---|---|---|
| Support | More explanation, checkpoint cells, topic-specific hints, a micro-example where it clarifies the assessed construct, and recovery guidance; smoke data only for optional pre-class rehearsal | Canonical assessed data, required protocol, core claim, evidence fields, and validity standard |
| Core | Standard starter, required decisions, declared compute budget | Learning outcomes and evidence contract |
| Extension | One bounded optional methodological/engineering challenge for formative feedback | Core mark ceiling, baseline, fair protocol, reproducibility, and limitations |

Students choose a route at the start of each session and may change after the
first checkpoint. No route appears on the transcript.

## 2. Topic-by-topic routes

| Topic | Support route | Core route | Extension route |
|---|---|---|---|
| Temporal contract and forecasting baselines (TD1) | Guided date-index audit, feature-availability checklist, and baseline checkpoints | Freeze the horizon and origin; implement mean, last-value, and seasonal-naive comparators without leakage | Add weekday/censoring error slices without changing the frozen selection block |
| Rolling-origin forecasting (TD2) | Provided origin-generator explanation and model-fitting checkpoints | Compare seasonal naive, ETS, and bounded SARIMA on identical origins, horizons, and metrics | Test one predeclared alternative specification under the same origin and compute budget |
| MDP, reward, and comparator policies (TD3) | State/action worksheet, one-step cost reconstruction, and policy skeletons | Verify the environment contract and reward; compare random and transparent reorder policies on common seeds | Add one adversarial environment invariant or predeclared reward sensitivity check |
| Tabular Q-learning (TD4) | Guided update trace, training-loop checkpoints, and Q-table validation | Implement Q-learning explicitly and compare a frozen policy with both baselines on separate development seeds | Add a bounded stability/parameter sensitivity study or Double Q-learning after Core validity |
| Forecasting release (TDo1) | Release checklist, interval helper explanation, and evidence-row checkpoints | Freeze the TD2 decision; score the protected horizon once and issue a bounded operational release | Add one predeclared uncertainty or decision-loss diagnostic without reopening selection |
| RL safety release (TDo2) | Controlled-evaluation checklist and safety-case scaffold | Submit the frozen Q-table; compare it on injected evaluation seeds and issue release/rollback conditions | Add one predeclared stress case after the protected Core receipt is frozen |

## 3. Core validity gates

All routes must satisfy these gates before an optional extension is attempted.
Valid Core work can earn full marks; extensions add no rubric points:

- data and temporal boundaries are explicit and respected;
- selection never uses untouched final test evidence;
- comparator and label/compute/evaluation budgets are fair;
- stochastic claims expose repeated results rather than a favourite seed;
- code/configuration/evidence paths resolve;
- limitations and failed cases are visible;
- AI-assisted work is understood, tested, and disclosed as required.

## 4. Session rhythm

A 3h applied session should normally use:

1. **0:00–0:15 — preflight and retrieval:** environment, checkpoint, and one
   concept question;
2. **0:15–0:35 — instructor micro-demonstration:** one decisive pattern or
   failure, not the complete solution;
3. **0:35–1:30 — Core build A:** protocol and baseline;
4. **1:30–1:40 — break and checkpoint:** choose recovery/support if needed;
5. **1:40–2:30 — Core build B:** comparator and repeated evaluation;
6. **2:30–2:50 — evidence review:** claim row, artifact trace, and peer check;
7. **2:50–3:00 — exit check:** limitation, next action, and recovery need.

Extensions begin only when Core build B and the evidence review pass. Instructors
may adjust minutes to the lab, but must preserve time for evidence and recovery.
TDo2 is the declared exception: its final 25 minutes hold the standardized
individual practical checkpoint unless ESILV allocates separate controlled
time, so the RL Core path must fit the preceding 155 minutes.

## 5. Recovery checkpoints

Each applied session should provide:

- a clean preflight state;
- one checkpoint after protocol/baseline setup;
- a result schema with no assessed conclusion filled in;
- common failure modes and a reset procedure;
- a short recovery task confirming the student understands what the checkpoint
  contains.

A recovery checkpoint is not permission to claim work the student did not
perform. Its purpose is to protect the next learning outcome from an earlier
technical failure.

## 6. Team roles

Students work in stable pairs and rotate:

- **experiment lead:** states the question and controls the protocol;
- **evidence/reproducibility steward:** tracks provenance, versions, seeds, and
  runtime, reruns decisive evidence, and challenges the claim.

Both students remain jointly responsible for data/environment provenance. Roles
switch in the next session. Every student keeps an individual checkpoint and
remains responsible for explaining sampled pair artifacts.

## 7. How to use extensions well

An extension should answer a sharper question, not merely import a larger model.
Strong extensions include:

- a fair ablation;
- a robustness or sensitivity check;
- a measured compute/label trade-off;
- a failure-recovery experiment;
- a better uncertainty analysis;
- an automated invariant that prevents an invalid experiment.

Weak extensions include adding models without a question, increasing compute
until a score improves, or presenting a complex library call that the team
cannot explain.

## 8. Peer support boundaries

Students may explain concepts, review protocols, and debug environment problems
together. Teams must not exchange completed assessed notebooks, result files,
claim rows, or individual-verification answers. When reusing an instructor
checkpoint, identify it as course-provided and regenerate the assessed evidence.
