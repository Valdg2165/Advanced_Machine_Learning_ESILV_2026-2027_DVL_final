# Start here — Advanced Machine Learning

Start with the kickoff and syllabus, then set up your local CPU environment. This course's practical work covers **Time Series and Reinforcement Learning**.

## 1. Read in this order

1. [Syllabus](SYLLABUS.html)
2. [Assessment and AI-use policy](ASSESSMENT_AND_AI_USE_POLICY.html)
3. [Support/Core/Extension model](../04_student_support/SUPPORT_CORE_EXTENSION_MODEL.html)
4. [Diagnostic and bridge paths](../04_student_support/DIAGNOSTIC_AND_BRIDGE_PATHS.html)
5. [Lab sequence](../02_labs/README.html)
6. [Capstone brief](../03_capstone/student/CAPSTONE_BRIEF.html)

Administrative fields marked `pending_authoritative_esilv_record` are not
invented locally. Use the LMS for the official academic year, code, ECTS,
timetable, room, and deadline when those records become available.

## 2. Supported environment

Read [Local setup](SETUP.html). Extract the complete ZIP before opening a notebook.
Python 3.12 on a local CPU is the verified route. No GPU is required.
[Colab](../02_labs/COLAB_PREFLIGHT.html) is optional and has not been live-tested for this release.

## 3. Run the ungraded diagnostic

Open:

- 02_labs/00_diagnostic/student_starter.ipynb, or
- 02_labs/00_diagnostic/support_starter.ipynb for added guidance.

Use the result to select bridge units; it does not rank you and is not graded.
Support changes scaffolding, never the scientific validity rule.

## 4. Create one pair repository

At TD1, copy the contents of
03_capstone/student/templates/model_repository/ into a stable pair repository.
Keep that repository through TD1–TD4, TDo1–TDo2, and the capstone.

For each session:

1. switch experiment-lead and evidence-steward roles;
2. record the dataset/environment version and hash;
3. freeze the protocol before comparing results;
4. run the notebook from a fresh kernel;
5. store figures/tables/configuration under stable relative paths;
6. update contributions and AI-use records;
7. label TD1–TD4 claims development_only;
8. add final eligible release claims only from TDo1 and TDo2.

## 5. Six-session map

| Session | Folder | Required checkpoint |
|---|---|---|
| TD1 | 02_labs/TD1_temporal_data_baselines/ | Temporal contract, invariant tests, three forecasting baselines |
| TD2 | 02_labs/TD2_rolling_origin_models/ | Three common origins, seasonal-naive/ETS/SARIMA comparison, frozen selection |
| TD3 | 02_labs/TD3_mdp_reward_baselines/ | MDP/reward verification and random/reorder comparator receipt |
| TD4 | 02_labs/TD4_tabular_q_learning/ | Explicit Q-learning loop, finite Q-table, separate development evaluation |
| TDo1 | 02_labs/TDo1_forecasting_release/ | One protected 28-day scoring and forecasting release receipt |
| TDo2 | 02_labs/TDo2_rl_safety_release/ | Controlled protected-seed evaluation, safety/fallback/rollback receipt |

Use the support notebook when you need more checkpoints. Valid Core work is
sufficient for the maximum mark. Attempt an extension only after every Core
validity gate passes.

## 6. Evidence discipline

Before writing a performance statement, answer:

- which data/environment version?
- which development/protected boundary?
- which exact origins or seeds?
- which baseline?
- which metric and direction?
- where are the repeated raw results?
- which command/notebook/configuration reproduces them?
- what limitation or failure case remains?

If any answer is missing, write an observation or hypothesis—not a performance
claim.

## 7. Protected evaluation

Never search for, reconstruct, or request protected forecasting targets or RL
evaluation seeds. TDo1 and TDo2 use instructor-controlled evaluators. Submit the
frozen artifact, retain the receipt, and do not change the selected model,
Q-table, reward, or policy after seeing protected results.

## 8. Help without losing ownership

Use [the help-request template](../04_student_support/templates/HELP_REQUEST.html).
Report the first failure, expected/observed behaviour, environment, minimal
error, and what you tried. Never paste secrets or protected evaluation data.

AI use and peer help are permitted only within the policy. If you cannot explain
or reproduce a result, it is not yet your evidence.

## 9. Before submission

From a clean clone:

1. install the locked environment;
2. run all student-owned notebooks from fresh kernels;
3. run the quick replay;
4. validate YAML/CSV schemas and relative paths;
5. confirm no protected data, credentials, or another team's work exists;
6. confirm the two controlled receipts are immutable;
7. tag the exact commit;
8. submit the immutable tag/commit reference required by the LMS.
