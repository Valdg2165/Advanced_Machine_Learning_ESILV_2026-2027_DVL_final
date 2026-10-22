# Assessment, evidence, collaboration, and AI-use policy

**Status:** accepted by the course owner for the internal teaching release  
**Replacement rule:** an official LMS rule, if different, supersedes this
working rule and triggers a complete rebuild and re-audit.

## 1. Assessment structure

| Component | Weight | Evidence |
|---|---:|---|
| TD1–TD2 forecasting foundations | 10% | Mean of the two normalized 20-point local rubrics |
| TD3–TD4 RL foundations | 10% | Mean of the two normalized 20-point local rubrics |
| TDo1 forecasting release | 10% | Normalized 20-point controlled-release rubric |
| TDo2 RL safety release | 10% | Normalized 20-point controlled-release rubric |
| Reproducible two-strand capstone | 40% | Scientific validity 15%; replay and claims-to-evidence 15%; operational/safety synthesis 10% |
| Individual verification | 20% | Standardized practical checkpoint 12%; distributed targeted questions 8% |

Total: **100%**. There is no opaque bonus, extension bonus, file-size score,
post-hoc curve, or automatic grade inflation.

## 2. Common scientific standard

Each performance claim must identify:

1. data or environment version and hash;
2. permitted development/protected boundary;
3. evaluation protocol and cases/seeds;
4. baseline or comparator;
5. metric and direction;
6. repeated evidence or explicit reason repetition is impossible;
7. reproducible code, configuration, and artifact path;
8. one known limitation and a condition that could reverse the conclusion.

Support and Extension routes do not change this standard. Valid Core evidence can
earn full marks.

## 3. Scientific invalidation conditions

The relevant scientific criterion receives no credit when its evidence depends
on any of the following:

- future or target leakage;
- selection or tuning on the protected forecasting horizon;
- RL selection on protected final evaluation seeds;
- missing or unserious baseline;
- different origins, episodes, metrics, or budgets used to favour one method;
- removed failed folds/episodes or favourite-seed reporting;
- RL conclusions based only on training reward;
- an unreadable, missing, or irreproducible configuration/result artifact;
- a claim broader than the data, environment, metrics, or evaluation support.

An honest failed result with a correct protocol may still earn substantial
credit. An attractive number from an invalid protocol may not.

## 4. Progressive portfolio

TD1–TD4 produce development evidence, method decisions, configurations,
provenance, and contribution records. Their claims must be explicitly labelled
development_only; they are not controlled capstone release claims.

TDo1 and TDo2 each produce one controlled release receipt and at least one
eligible capstone claim row. Protected evidence is inspected once under the
declared frozen decision. Reopening model or policy selection after that receipt
invalidates the release claim.

## 5. Capstone

The capstone is a consolidation, not a new modelling competition. It contains:

- one TDo1 forecasting release;
- one TDo2 RL policy release;
- one cross-strand operational and safety synthesis;
- reproducible replay, limitations, fallback, monitoring, and rollback.

No supervised-classification or evolutionary-ML empirical strand is required or
accepted in place of these two release strands.

## 6. Pair work and individual accountability

Students work in stable pairs with alternating roles:

- experiment lead;
- evidence and reproducibility steward.

Each session updates CONTRIBUTIONS.csv. Both partners are responsible for the
entire submission. During individual verification, each student may be asked to
reproduce a result, interpret an artifact written by the partner, repair one
protocol defect, or explain the operational limitation.

Inability to explain or reproduce pair work affects the individual component and
may trigger an authorship review.

## 7. Generative AI

Generative AI is permitted as a disclosed assistant for explanation, debugging,
test suggestions, structure, or language review. For every material use, record:

- tool/model label and date;
- purpose and prompt summary;
- code, text, or decision reused;
- verification performed;
- defects found and corrected;
- accountable student.

Students remain responsible for licensing, confidentiality, correctness, and
authorship. Never provide protected labels, hidden seeds, credentials, or another
team's assessed work to an external system. Undisclosed generated content,
fabricated citations/results, or code that cannot be explained receives no
credit and may be referred under ESILV integrity procedures.

## 8. Collaboration boundaries

Allowed: concept discussion, documentation links, protocol review, environment
debugging, and peer critique.

Not allowed: exchanging completed assessed notebooks, result files, Q-tables,
claim rows, protected receipts, individual-checkpoint answers, or contributions
that are not accurately attributed.

## 9. Submission

The submitted LMS item is an immutable Git tag/commit reference plus the
required archive. submission.yaml records students, commit/tag, environment,
data/environment hashes, and AI declaration. All paths in claims_evidence.csv
must resolve inside the submitted repository.

