"""Check public runtime/data availability without solving assessed tasks."""
import hashlib, sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
import numpy, pandas, matplotlib, sklearn, statsmodels, gymnasium
import shared.data, shared.evaluation, shared.forecasting, shared.inventory_env, shared.rl
folder=ROOT/'shared/datasets'
for line in (folder/'PUBLIC_RELEASE_SHA256SUMS').read_text().splitlines():
    expected,name=line.split(maxsplit=1)
    assert hashlib.sha256((folder/name).read_bytes()).hexdigest()==expected, name
frame=pandas.read_csv(folder/'daily_demand_development.csv')
assert len(frame)==1433
print('SETUP PASS: public data hashes and imports verified; 1433 daily development rows.')
