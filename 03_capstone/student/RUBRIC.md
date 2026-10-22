# Capstone Rubric — Operations & Decisions Portfolio

> **Stable-pair portfolio:** 100 points  
> **Module weight for this internal release:** 40%, accepted by the course owner  
> **Individual verification:** separate 20% protocol; never inferred from pair marks

The mapping is exact:

- scientific validity and comparisons: **37.5 portfolio = 15 module points**;
- reproducibility and claims-to-evidence: **37.5 portfolio = 15 module points**;
- operational recommendation, risks and limits: **25 portfolio points = 10 module points**.

## Scoring rules

- Score release validity, evidence traceability and decision discipline, not
  fashionable methods or a leaderboard rank.
- New fitting, policy training, tuning, sweeping or seed selection is outside
  scope. A faithful failed replay may earn full method credit when the failed
  state is preserved and the claim is bounded.
- Instructor-issued forecast and RL receipts are institutional dependencies.
  Late return blocks the deadline and is not a student omission.
- Support and Core routes share this rubric. Optional extensions are unnecessary
  for full marks and never compensate for invalid Core evidence.

## Rubric

| Category | Points | Excellent evidence | Material weakness |
|---|---:|---|---|
| **A. Scientific validity and comparisons** | **37.5** | Both releases answer bounded questions with fair baselines, valid information boundaries and repeated evidence. | Leakage, test tuning, weak/missing baseline, unequal access, selected seeds, or training reward presented as evaluation. |
| A1. Required claims and scope | 7.5 | 3–6 claims; exactly the three required roles; forecasting traces TD1/TD2/TDo1, RL traces TD3/TD4/TDo2, and synthesis cites both releases. | Missing role, wrong-strand evidence, decorative claim, omitted foundation-to-release trace, or fabricated integration claim. |
| A2. Forecast and policy comparison validity | 15 | Forecasting preserves origins/horizon and seasonal-naive baseline; RL preserves a frozen policy, random/reorder comparators and independent evaluation seeds. | Changed origin/baseline, future leakage, comparator budget mismatch, training/evaluation seed reuse or post-hoc selection. |
| A3. Repetition, protected evidence and interpretation | 15 | Per-origin/failure-period forecast evidence and RL episode dispersion/safety metric align with hash-bound controlled receipts; interpretation distinguishes the two populations. | Aggregate-only cherry-pick, missing failure/safety evidence, receipt mismatch, or protected result used for reselection. |
| **B. Reproducibility and claims-to-evidence** | **37.5** | Every empirical claim resolves to immutable prior, replay and controlled evidence; two public replays are decisive and fresh. | Broken/mutable paths, screenshots, stale outputs, hidden notebook state, unbound artifacts or a new experiment disguised as replay. |
| B1. Claims index and provenance | 12.5 | Rows resolve to versioned data/environment, code, configuration, original per-run evidence, artifact hashes and precise limits. | Missing versions/hashes, copied evidence without origin, conflated prior/replay/controlled roles or untraceable claim. |
| B2. Fresh fail-closed two-strand replay | 15 | Exactly forecasting then RL; frozen commands; fresh outputs; script/config/data/output hashes; success only after both pass, or an honest failed status with no success receipt. | Missing/third strand, repository escape, stale output, mutated input, training/tuning token, misleading receipt or concealed failure. |
| B3. Manifest and release hygiene | 10 | Environment/lock/runtime, two controlled handoffs, deviations, AI/contribution declarations and immutable tag are complete; no hidden/private bulk data. | Placeholders, reviewer edits needed, missing receipt, duplicate contribution format, secret/hidden evidence leak or unexplained deviation. |
| **C. Operational recommendation, risks and limits** | **25** | The brief converts two separately tested releases into a conditional decision without pretending to have tested their integration. | Disconnected model summaries, “deploy the best” language, or recommendation detached from cost, uncertainty and safety. |
| C1. Cross-strand operational decision | 10 | A specific go/hold/no-go rule cites both source claims, horizon, cost/service trade-off, uncertainty and accountable owner. | Generic deployment advice or false equivalence between origins and episodes. |
| C2. Safety, fallback and refusal boundary | 10 | Names thresholds/conditions, transparent fallback or human review, failure consequence, refused industrial claim and next minimum evidence. | No fallback, generic “more data,” unsupported autonomy/safety claim or transfer from synthetic assets to production. |
| C3. Concision and accountable authorship | 5 | At most four equivalent pages; claim IDs/artifacts are cross-referenced; both contributors and material AI verification are explicit. | Page-limit evasion, unsupported prose, generic contribution or retained work a student cannot explain. |
| **Total** | **100** | — | — |

## Validity gates

1. **Scope:** 3–6 claims, three required roles, and only evidence from the
   corresponding strand in the six-session sequence.
2. **Prior work:** capstone training, tuning, model selection or policy repair earns
   no credit for the affected result.
3. **Replay:** exactly two frozen commands; no third empirical replay.
4. **Controlled evidence:** receipts bind the submitted forecast/Q-table; hidden
   targets/seeds are not present in the repository.
5. **Synthesis:** separate component evidence is not end-to-end evidence.
6. **Integrity:** fabrication/contribution concerns follow ESILV procedure, not
   an improvised mark penalty.

Name affected claim IDs and the earliest broken link. Do not apply an arbitrary
whole-submission penalty.

## Minimum artifact map

| Area | Evidence |
|---|---|
| A1–A3 | `claims_evidence.csv`, frozen evidence across the six practicals and two controlled receipts |
| B1 | `submission.yaml`, immutable tag, data/environment provenance and original per-run paths |
| B2 | `configs/replay.yaml`, two replay outputs, current status, and matching success receipt or honest failed state |
| B3 | dependency manifest/lock, forecast/Q-table artifacts, receipts, `CONTRIBUTIONS.csv`, `AI_USE_LOG.md` |
| C1–C3 | `report/release_brief.md` with source claim IDs, decision, fallback and non-integration statement |

For each category, the assessor records points, sampled claim IDs, inspected
paths, one strength and the earliest material correction.
