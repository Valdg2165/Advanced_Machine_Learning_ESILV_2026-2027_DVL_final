# TD4 failure modes and recovery

| Symptom/anti-pattern | Why the evidence fails | Recovery check |
|---|---|---|
| Truncation zeros the target | continuing-task value is biased at the time limit | pass only terminated to q_learning_target |
| Evaluation reuses training episodes | generalisation evidence is contaminated | derive and declare a separate public development seed set |
| Epsilon RNG uses environment RNG | policy randomness changes the environment path | use a separate named action generator |
| Training return called final evidence | the same experience shaped the table | reserve policy claims for independent evaluation |
| Q-table saved without config/hash | the controlled artifact cannot be identified | freeze table, parameters, code commit, and SHA-256 together |

If recovery changes a data boundary, origin, seed set, reward, model order, or
frozen artifact, invalidate affected metrics and rerun the declared comparison.
