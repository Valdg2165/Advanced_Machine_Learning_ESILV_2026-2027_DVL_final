# TDo2 failure modes and recovery

| Symptom/anti-pattern | Why the evidence fails | Recovery check |
|---|---|---|
| Final seeds hard-coded or logged | controlled evaluation confidentiality is broken | withdraw the run and use injected seeds only |
| Q-table changed after handoff | returned evidence refers to another policy | compare table/config/source hashes and immutable tag |
| Training reward used as release evidence | no independent evaluation supports the policy | use the controlled aggregate |
| Cost improves but service fails | reward gain hides operational harm | apply the service floor before cost comparison |
| Overlapping intervals called proof of equality | descriptive intervals are overinterpreted | report uncertainty and bounded decision without a significance claim |

If recovery changes a data boundary, origin, seed set, reward, model order, or
frozen artifact, invalidate affected metrics and rerun the declared comparison.
