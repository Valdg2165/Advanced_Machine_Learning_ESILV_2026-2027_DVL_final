# Operations & Decisions Portfolio — pair repository

Copy this directory's **contents** to the stable-pair repository root during
TD1. Maintain the same repository through the six scheduled practical sessions.
The final curation is out-of-class work; it is not a seventh TD/TDo and must not
contain new fitting, tuning, model selection or policy training.

```text
advanced-ml-portfolio/
├── README.md
├── submission.yaml
├── claims_evidence.csv
├── AI_USE_LOG.md
├── CONTRIBUTIONS.csv
├── configs/replay.yaml
├── data/README.md
├── artifacts/
│   ├── final_forecast.csv
│   └── q_table.npy
├── evidence/
│   ├── controlled/
│   └── replay/
│       ├── forecasting/
│       └── reinforcement_learning/
├── report/release_brief.md
└── scripts/quick_replay.py
```

## Progressive reuse without a seventh session

| Existing session | Repository action before leaving |
|---|---|
| TD1 | Initialize the skeleton; freeze data hash, time boundary, seasonal-naive baseline and first `TS-01` pointers. |
| TD2 | Add rolling-origin model comparison, information-boundary audit, failure period and configuration paths. |
| TD3 | Freeze MDP/reward contract and random/reorder baselines; start `RL-01`. |
| TD4 | Add frozen Q-table, learning configuration and independent development evaluation. |
| TDo1 | Freeze the forecasting release, final 28-day forecast CSV and controlled handoff. |
| TDo2 | Freeze the RL safety release and handoff; complete `OPS-01`. |

These are evidence-capture actions inside the scheduled work, not extra tasks.
The final quick replay still samples exactly one frozen release command per
strand; it does not rerun all six notebooks.

## Required release

- **Forecasting release:** TD1 time/baseline evidence, TD2 rolling-origin model
  evidence, TDo1 release evidence and the protected-horizon receipt.
- **RL policy release:** TD3 environment/baseline evidence, TD4 frozen policy
  evidence, TDo2 safety evidence and the controlled-batch aggregate/receipt.
- **Operational/safety synthesis:** a conditional go/hold/no-go decision, named
  fallback and refusal boundary, derived from the two releases.

The synthesis is not an integration experiment. Unless separate end-to-end
evidence exists outside this module, state explicitly that the forecast was not
used as an RL observation and that joint controller performance was not tested.

## Pair release metadata

- **Team and rotating roles:** `REPLACE_ME`
- **Tested OS / Python / dependency lock:** `REPLACE_ME`
- **Reference CPU / RAM:** `REPLACE_ME`
- **Expected two-strand replay time:** `REPLACE_ME_MINUTES_AT_MOST_10`
- **Replay outputs:** `evidence/replay/forecasting/result.json` and
  `evidence/replay/reinforcement_learning/result.json`
- **Known failure or deviation:** `REPLACE_ME_OR_NONE`
- **Immutable release tag and commit:** `REPLACE_ME`

`CONTRIBUTIONS.csv` is the only contribution format. `AI_USE_LOG.md` is the only
generative-AI log. Each retained result must remain explainable by both students.

## Quick replay

Run from the repository root:

```bash
python scripts/quick_replay.py --config configs/replay.yaml
```

The runner accepts exactly two commands, forecasting then
reinforcement-learning. It confines paths to the repository, rejects obvious
training/tuning tokens, hashes scripts/configuration/data, snapshots outputs,
requires newly created or refreshed regular files, and checks that declared
inputs did not change. It deletes any older success receipt at attempt start. A
success receipt is emitted only after both commands pass; otherwise the failed
status is authoritative.

The public replay never recreates protected targets or hidden RL seeds. Cite the
two instructor-issued receipts separately in `submission.yaml` and
`claims_evidence.csv`.
