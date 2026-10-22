# Advanced Machine Learning practical sequence

The six assessed practical sessions cover only Time Series and Reinforcement
Learning and form one progressive evidence chain.

| Session | Hours | Focus | Non-negotiable control |
|---|---:|---|---|
| TD1 | 3 | temporal data contract and baselines | chronological target-safe boundary |
| TD2 | 3 | rolling-origin ETS/SARIMA | identical origins and horizon |
| TD3 | 3 | inventory MDP, reward, baselines | verified reward and common episodes |
| TD4 | 3 | tabular Q-learning | explicit loop and separate development evaluation |
| TDo1 | 3 | forecast uncertainty and release | protected 28-day targets remain hidden |
| TDo2 | 3 | controlled RL safety release | frozen Q-table and injected hidden seeds |

**Total:** 12 hours TD + 6 hours TDo = 18 practical hours. The diagnostic is
ungraded preparation and adds no contact hour. There is no seventh implicit
session; the portfolio progressively curates evidence from these six.

TD1–TD4 contribute provisional development evidence and claim candidates.
TDo1/TDo2 add the protected or controlled release evidence that confirms,
revises, or rejects those candidates; all six sessions therefore contribute
to the capstone without creating an extra practical session.

## Verified student commands

```bash
uv sync --frozen
uv run python scripts/check_setup.py
```

The locked local CPU environment is the primary path. Colab is optional and its
acceptance applies only when the staff record names the exact archive hash.
Protected target generation, worked
references, and final scoring remain outside the student bundle.
