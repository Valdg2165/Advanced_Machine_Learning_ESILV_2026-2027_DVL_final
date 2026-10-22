# TDo1 failure modes and recovery

| Symptom/anti-pattern | Why the evidence fails | Recovery check |
|---|---|---|
| Interval coverage reported without bounds | the uncertainty claim has no artifact | retain lower/upper values for every evaluated case |
| Narrowest interval called best | sharp but miscalibrated intervals are rewarded | interpret coverage and width jointly |
| Protected targets opened before freeze | final horizon becomes tuning data | withdraw the score and restore a genuinely untouched handoff |
| Future descriptors silently ignored | promotion/holiday limitations disappear | state which known descriptors the released model does not use |
| Negative or non-nested release bounds | artifact is operationally incoherent | validate lower95 <= lower80 <= point <= upper80 <= upper95 |

If recovery changes a data boundary, origin, seed set, reward, model order, or
frozen artifact, invalidate affected metrics and rerun the declared comparison.
