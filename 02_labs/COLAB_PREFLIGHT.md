# Optional Colab route — not live-tested for this release

The verified route is local Python 3.12. **COLAB = NOT RUN** for this exact ZIP. Earlier runtime receipts do not apply to it.

If you choose Colab, upload and extract the complete course ZIP in a fresh runtime. Keep the `shared/` folder, data and requirements together. Change the notebook working directory to the extracted folder containing `uv.lock`, then install:

```python
%pip install -r requirements-colab.txt
```

Restart the runtime if requested, return to the extracted course folder, and run `scripts/check_setup.py`. Open the selected starter and run its setup cell before any scientific cells. The starter locates the course root; it does **not** install dependencies automatically. Colab notebooks do not carry the other course files automatically.

If the runtime's Python version or preinstalled packages conflict with these pins, use the verified [local setup](../00_start/SETUP.html). Never upload private evaluation or instructor files.
