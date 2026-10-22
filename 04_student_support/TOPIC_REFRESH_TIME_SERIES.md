# Just-in-Time Refresh — Time-Series Reasoning

> **Use:** optional before TD1; revisit before TD2/TDo1 if needed  
> **Timebox:** 20 minutes  
> **Status:** ungraded support; no assessed data or conclusions appear here

## 1. Retrieve the contract — 4 minutes

For a forecast issued at origin `t` with horizon `h`:

- training history ends at or before `t`;
- the forecast covers `t+1` through `t+h`;
- a feature is legal only if its value is available when the forecast is issued;
- the protected final horizon is not a model-selection set.

Write, without looking back: the observation unit, frequency, origin, horizon,
target, and latest legal information time for one seven-day demand forecast.

## 2. Baseline and metric — 5 minutes

For seasonal period `s`, seasonal naive repeats the last `s` observed values:
`y_hat[t+k | t] = y[t+k-s*ceil(k/s)]`, for `k >= 1`.
For daily demand with weekly seasonality, `s = 7`: horizons 1, 7, and 8 copy
`y[t-6]`, `y[t]`, and `y[t-6]`, respectively. Every copied value is already
observed at origin `t`. The simpler index `t+k-s` is safe only for `1 <= k <= s`.
It is a serious comparator: a candidate that cannot beat it under a fair protocol
has not justified extra complexity.

Mean absolute error is
`MAE = mean(abs(y - y_hat))`. It preserves target units but weights every absolute
error equally and does not alone describe bias, peak-day failure, or inventory
cost.

Checkpoint: for actual `[10, 14]` and forecast `[12, 13]`, compute MAE and signed
mean error. State what each reveals.

<details>
<summary>Checkpoint answer</summary>

Absolute errors are `[2, 1]`, so MAE is `1.5`. Signed errors using
`forecast - actual` are `[2, -1]`, so mean error is `0.5`: slight average
over-forecasting in this tiny example. Two observations are insufficient for a
general claim.

</details>

## 3. Rolling-origin logic — 6 minutes

A valid development comparison repeats this sequence:

1. choose an origin from the predeclared development block;
2. fit each method using only history permitted at that origin;
3. forecast the same horizon;
4. score all methods on the same observed target days;
5. retain per-origin evidence before aggregation.

Keep the course's three distinct windows visible: TD1 uses the last 28 **public
development** days for baseline practice; TD2 uses three 14-day development
windows for model comparison; TDo1 uses a different, protected 28-day final
window after the selection rule is frozen. Equal lengths do not make the TD1
and TDo1 windows the same evidence.

Audit this proposal: “Fit once on the full series, then report scores for three
earlier origins.” Identify the invalid information flow and repair it.

<details>
<summary>Checkpoint answer</summary>

The fitted model has observed data that are future information for the earlier
origins. Refit at every origin using only the permitted history, or use an
explicit expanding/rolling implementation that produces the same boundary.

</details>

## 4. Ready-for-TD checkpoint — 5 minutes

You are ready for the Core starter when you can answer all four:

- Can I state the origin and horizon as dates or indices?
- Can I prove every feature was available at the origin?
- Can I implement and explain seasonal naive?
- Can I retain paired per-origin evidence before computing a mean?

If one answer is no, enter the Support starter and identify the earliest missing
item in [`templates/LEARNING_CHECKPOINT.md`](templates/LEARNING_CHECKPOINT.html).
The route does not cap your mark.
