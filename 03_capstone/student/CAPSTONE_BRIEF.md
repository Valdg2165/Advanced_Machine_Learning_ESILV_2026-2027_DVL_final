# Capstone Brief — Operations & Decisions Portfolio

> **Module:** Advanced Machine Learning — ESILV  
> **Team:** stable pair  
> **Deadline rule:** course-owner working rule of at least seven calendar days
> after TDo2 and return of both controlled receipts; the LMS date supersedes
> this rule when published  
> **Status:** accepted by the course owner for the internal teaching release;
> an official LMS rule, if different, triggers a rebuild

## 1. Purpose and hard boundary

This capstone curates the forecasting path built in **TD1, TD2 and TDo1** and
the reinforcement-learning path built in **TD3, TD4 and TDo2**. It asks whether
that frozen six-session evidence can support a bounded operational decision. It
does not ask for a new model, a joined forecast-to-policy system, or a seventh
practical session.

Initialize the repository during TD1 and update its evidence index,
provenance, contributions and AI-use record before leaving each of the six
scheduled sessions. The capstone is a release review of those results, not a
second grade for every implementation.

## 2. Signature evidence rule

Every performance claim must identify:

> data or environment version + evaluation protocol + baseline + metric +
> repeated evidence + reproducible code and configuration + limitation

Every row in `claims_evidence.csv` must resolve to exact artifacts at the
immutable submitted tag. “The model is better” and “the policy learned” are not
claims; they omit the population, comparator and decision boundary.

## 3. Required claim set

Submit **3–6 claims**. Exactly these three roles are mandatory; up to three
`supporting` claims may add a narrow failure, interval or safety result. Every
empirical claim must originate in the appropriate forecasting or RL session.

| Required role | Source | Required evidence |
|---|---|---|
| `forecasting_release` | TD1 + TD2 + TDo1 | Trace the temporal/seasonal-naive foundation through rolling-origin model evidence to the frozen release, one failure period and the instructor-issued protected 28-day receipt. |
| `rl_policy_release` | TD3 + TD4 + TDo2 | Trace the MDP/reward and random/reorder baselines through frozen Q-learning to independent public evaluation, cost dispersion, fill rate and the instructor-issued controlled-batch receipt. |
| `operational_safety_synthesis` | TS and RL release claims | Conditional go/hold/no-go decision, named fallback, refusal boundary, and next evidence need. |

The synthesis must cite the two source claim IDs. Forecast origins and RL
episodes are different evaluation populations. The course has not shown that a
TDo1 forecast feeds the TDo2 environment, so do not claim end-to-end controller
performance, causal operational benefit, or production safety. A defensible
release may recommend a limited trial, a hold, or no-go.

If prior evidence or a replay is invalid, keep the evidence and mark the claim
`partial`, `failed`, or `withdrawn`. A negative result can be excellent work.
Silent repair, post-hoc seed selection or replacement training cannot earn
capstone credit.

## 4. Progressive use and workload

Use the same repository across the existing six practical sessions:

| Session | Capstone action |
|---|---|
| TD1 | Copy skeleton; freeze time boundary, data hash and seasonal-naive evidence; start `TS-01`. |
| TD2 | Add rolling-origin model comparison, failure period and configuration paths. |
| TD3 | Add MDP/reward contract plus random and reorder baseline evidence; start `RL-01`. |
| TD4 | Add frozen Q-table, learning configuration and independent development evaluation. |
| TDo1 | Freeze forecasting release, final 28-day CSV and controlled handoff. |
| TDo2 | Freeze RL safety release and handoff; complete the operational/safety synthesis. |

Final curation is **6–8 out-of-class hours per pair**, not an additional
contact session: claim selection and audit (1.5h), two clean replays (2h),
traceability and declarations (1h), brief (1.5–2h), pair review/tag (0.5–1.5h).

## 5. Required repository

Use `templates/model_repository/` and keep these mandatory files:

```text
README.md
submission.yaml
claims_evidence.csv
AI_USE_LOG.md
CONTRIBUTIONS.csv
configs/replay.yaml
data/README.md
artifacts/final_forecast.csv
artifacts/q_table.npy
evidence/controlled/
evidence/replay/forecasting/
evidence/replay/reinforcement_learning/
report/release_brief.md
scripts/quick_replay.py
```

Code, lock files and original evidence may remain under frozen TDo paths when
the manifest resolves them. Do not copy hidden targets/seeds, private episode
rows, restricted data, environments, caches or irrelevant notebook output.

### Claims schema

One row per claim uses these fields:

| Field | Meaning |
|---|---|
| `claim_id`, `claim_role`, `source_session`, `strand` | Stable identity, one allowed role, exact source session(s), and `forecasting`, `reinforcement_learning`, or `operational_safety`. |
| `source_claim_ids` | Required for synthesis; `not_applicable` for empirical releases. |
| `claim_text`, `dataset_or_environment`, `protocol`, `comparator`, `metric`, `estimate` | Bounded claim and scientific contract. |
| `uncertainty_or_repetitions` | Origins/intervals or independent episodes/seeds and dispersion. |
| `code_path`, `config_path`, `prior_evidence_path`, `replay_evidence_path` | Exact frozen paths; synthesis uses `not_applicable` for code/replay. |
| `controlled_evidence_id`, `controlled_evidence_path` | Forecast receipt `submission_id` or RL receipt `evidence_id`, plus exact path; synthesis cites source claims. |
| `decision_bound`, `safety_or_fallback_rule`, `limitation`, `status` | What is justified, the fallback or refusal rule, transfer boundary, and `supported`/`partial`/`failed`/`withdrawn`. |

## 6. Two-strand replay contract

Run exactly once for the release candidate from repository root:

```bash
python scripts/quick_replay.py --config configs/replay.yaml
```

The configuration contains exactly two frozen commands in order: forecasting,
then reinforcement learning. They refresh one decisive public output per
strand in at most ten minutes total. No command may fit, retrain, tune, sweep,
change a protocol or select a seed. The runner hashes all declared scripts,
configurations and data inputs, confines paths to the repository, rejects stale
outputs and emits a success receipt only after both commands pass.

On genuine failure, preserve `evidence/quick_replay_status.json`, emit no
success receipt, update affected claims, and set
`submission.quick_replay_receipt` to
`not_applicable_after_failed_status`. Do not repair the model during capstone.

## 7. Controlled evaluation

At TDo1, freeze `artifacts/final_forecast.csv` with exactly the public 28 dates
and the course submission columns. The instructor scores it once against the
protected horizon and returns a target-free receipt bound to the CSV hash.

At TDo2, freeze the non-pickle `(9, 2, 3)` `artifacts/q_table.npy`, configuration,
evaluator and tag. The instructor evaluates it once on the common hidden batch
and returns an aggregate, receipt and detached hashes. Hidden seeds and episode
rows remain instructor-only.

The public replays exercise development contracts; they cannot recreate either
protected evaluation. If an instructor receipt is late, the deadline remains
blocked. Students are not penalized for an institutional handoff delay.

## 8. Release brief and declarations

The release brief is at most **four equivalent pages**, excluding references.
It must include:

1. decision context and release bounds;
2. forecasting result, failure period and protected receipt;
3. RL result, safety measure and protected receipt;
4. conditional operational decision and transparent fallback;
5. explicit non-integration statement, risks, refused claims and next evidence.

Use only `CONTRIBUTIONS.csv` for pair contributions and `AI_USE_LOG.md` for AI
use. Log tool, purpose, retained material and human verification. Both students
must be able to explain and reproduce every credited result.

## 9. Support, Core and Extension

All students are graded on the same **Core** evidence standard and can earn full
marks without extensions.

- **Support:** provided schemas, field examples, replay guardrails, checklist,
  office-hour diagnostics and guided checkpoints. Support does not reveal
  results or repair invalid evidence.
- **Core:** the three required roles, two frozen replays, controlled receipts,
  traceability, synthesis and declarations.
- **Extension:** optional sensitivity or ablation evidence already frozen in
  the relevant one of the six sessions. It cannot replace a missing Core result
  or raise the maximum grade.

## 10. Submission gate

Before immutable tagging, both students verify:

- 3–6 claims and all three required roles;
- every empirical claim traces only to the appropriate forecasting or RL
  sessions in the six-session sequence;
- exactly two replay commands and a current success receipt, or an honest failed
  status with no success receipt;
- protected receipts match the frozen artifact hashes;
- every path exists and every placeholder is resolved;
- the synthesis does not claim tested integration;
- no hidden target, hidden seed, secret, personal data or instructor key is present;
- AI and contribution declarations are complete.

Submit the immutable Git tag URL through the ESILV LMS. Formal late, absence,
resit and integrity rules are those approved by ESILV, not invented here.
