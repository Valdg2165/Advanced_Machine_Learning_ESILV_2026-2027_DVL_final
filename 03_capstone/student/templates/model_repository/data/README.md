# Data and environment provenance

Complete both rows. Each declared replay input must match a `data_inputs` path
in `configs/replay.yaml`; the success receipt binds its SHA256.

| Strand | Dataset/environment ID | Version or SHA256 | Declared replay input(s) | Access/licence | Unit and target/reward | Evaluation boundary | Known limitation |
|---|---|---|---|---|---|---|---|
| forecasting | `daily_demand:REPLACE_ME` | `REPLACE_ME` | `REPLACE_ME` | synthetic course data | daily demand | frozen rolling origins and public replay window | synthetic series; one protected 28-day horizon |
| reinforcement_learning | `InventoryControlEnv:REPLACE_ME` | `REPLACE_ME` | `REPLACE_ME` | synthetic course environment | inventory cost and fill rate | frozen policy on independent public seeds | discrete simplified dynamics |

Do not copy protected demand targets, controlled RL seeds, private episode rows,
personal data or restricted datasets. If approved data remains external, commit
and hash the course-issued manifest used by the replay.
