# TD2 failure modes and recovery

| Symptom/anti-pattern | Why the evidence fails | Recovery check |
|---|---|---|
| Different origins per model | model and evaluation population are confounded | materialise one origin tuple and reuse it |
| Random cross-validation | future observations train past forecasts | use expanding windows with history strictly before origin |
| Tune SARIMA on final targets | protected evidence becomes development data | freeze order and selection rule before TDo1 release scoring |
| Ljung–Box non-rejection called proof | a finite diagnostic cannot establish independence | state only that the test did not reject at named lags |

If recovery changes a data boundary, origin, seed set, reward, model order, or
frozen artifact, invalidate affected metrics and rerun the declared comparison.
