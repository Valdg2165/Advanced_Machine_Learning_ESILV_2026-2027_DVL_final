# Local setup — start here before TD1

1. Download and extract the **complete** course ZIP. Keep its folders together.
2. Install Python 3.12 and uv if not already available. uv installation: <https://docs.astral.sh/uv/getting-started/installation/>.
3. Open a terminal in the extracted folder containing `uv.lock` and `shared/`.
4. Run:

```sh
uv sync --frozen --python 3.12
uv run python scripts/check_setup.py
```

The first installation requires Internet access. Once installed, the TD1 data and computations run locally without a connection.

5. In VS Code with the Python and Jupyter extensions, open `02_labs/TD1_temporal_data_baselines/student_starter.ipynb` (Core) or `support_starter.ipynb` (Support). Select the extracted folder's `.venv` Python as notebook kernel. Both routes have the same learning outcomes and marking ceiling.
6. Restart the kernel and run all cells in order. TODOs are intentional: complete them during the practical. A clean scaffold run checks setup; it is not a completed assignment.

The expected setup message is `SETUP PASS: public data hashes and imports verified; 1433 daily development rows.`

Start with the [TD1 brief](../02_labs/TD1_temporal_data_baselines/README.html) for the 180-minute route and checkpoints. The [data card](../shared/datasets/cards/daily_demand.html) defines the synthetic dataset and censored recorded sales.

If setup fails, report the first error and your Python version using the [help template](../04_student_support/templates/HELP_REQUEST.html). Do not install arbitrary replacements or use a different dataset.

For the browser book, open `interactive/index.html` after extraction. Its experiments work offline; external readings need a connection. Notebook execution needs the Python environment above.
