# TD3 failure modes and recovery

| Symptom/anti-pattern | Why the evidence fails | Recovery check |
|---|---|---|
| Action quantity used as action index | the wrong order is sent to Gymnasium | map indices through ORDER_QUANTITIES |
| Reward and cost signs mixed | higher reward may be reported as higher cost | assert reward equals negative reconstructed cost |
| Different seeds per baseline | policies face different demand paths | reuse the exact public seed tuple |
| Reward-only conclusion | service and resource risks disappear | report fill, unmet demand, stock, and orders with cost |
| Time limit treated as terminal state | later TD targets are defined incorrectly | record that this environment truncates at horizon |

If recovery changes a data boundary, origin, seed set, reward, model order, or
frozen artifact, invalidate affected metrics and rerun the declared comparison.
