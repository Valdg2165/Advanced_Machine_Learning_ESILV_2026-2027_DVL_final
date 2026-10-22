# TD1 failure modes and recovery

| Symptom/anti-pattern | Why the evidence fails | Recovery check |
|---|---|---|
| Random split | future observations enter apparent training | restore one chronological origin and later validation block |
| Seasonal baseline reads validation values | the comparator has target leakage | build every lag from history available at the origin |
| Dates sorted after forecasting | predictions can be paired to the wrong target | sort and assert the temporal index before splitting |
| Stockout flag treated as latent demand | recorded sales are misinterpreted | state the censoring limitation and avoid a latent-demand claim |
| One metric or one favourable interval | baseline behaviour is incompletely described | report MAE, sMAPE, the full 28-day trace, and a failure period |

If recovery changes a data boundary, origin, seed set, reward, model order, or
frozen artifact, invalidate affected metrics and rerun the declared comparison.
