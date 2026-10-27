"""Gather open-licence training photos for SCAN from the iNaturalist Open Dataset.

    python3 tools/plant_id/fetch_photos.py <cache-folder> [--per-plant 120]

Needs only the public S3 bucket inaturalist-open-data (no API key, no account).
Steps, each skipped if its output is already in the cache:
  1. names.json   plant id -> iNaturalist taxon, from the latin names in plants/*.js,
                  js/species.js and specimens/*/species.js. Renamed taxa are fixed by
                  hand in tools/plant_id/inat_names.json.
  2. obs.tsv      observations of those taxa (streams ~13 GB, ~10 min). Confirmed
                  (research-grade) ones are used first; unconfirmed ("needs ID") ones
                  only fill in for plants with few confirmed photos.
  3. photos.tsv   the photos of a sample of them (streams ~20 GB, ~10 min)
  4. img/<plant id>/<photo id>.jpg   the photos themselves, 500 px ("medium")
Photos are CC0, CC-BY or CC-BY-NC; every one used is credited in identify/CREDITS.csv
by train.cjs. Observations from Africa are preferred, then the rest of the world.
Delete names.json and obs.tsv (and photos.tsv) to pick up newly added plants.
"""
import csv, gzip, json, os, random, re, subprocess, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor

BUCKET = 'https://inaturalist-open-data.s3.amazonaws.com/'
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
HERE = os.path.dirname(os.path.abspath(__file__))
cache = os.path.abspath(sys.argv[1])
PER = int(sys.argv[sys.argv.index('--per-plant') + 1]) if '--per-plant' in sys.argv else 120
os.makedirs(cache, exist_ok=True)
path = lambda f: os.path.join(cache, f)
csv.field_size_limit(1 << 24)


def latin_names():
    """plant id -> latin name, read with node so the plant files stay the only source."""
    js = r"""
    global.EA = { species: {}, addSpecies: (id, s) => console.log(id + '\t' + s.latin), loadPlants() {}, addModels() {}, addPhotos() {},
      archive: {}, specimens: [], config: {} };
    const fs = require('fs'), R = process.argv[1];
    for (const f of fs.readdirSync(R + '/plants')) if (/^[a-z0-9-]+\.js$/.test(f) && f !== 'index.js') require(R + '/plants/' + f);
    for (const d of fs.readdirSync(R + '/specimens')) if (fs.existsSync(`${R}/specimens/${d}/species.js`)) require(`${R}/specimens/${d}/species.js`);
    const src = fs.readFileSync(R + '/js/species.js', 'utf8');
    for (const m of src.matchAll(/^  ([a-z]+): \{\n\s+name: '[^']*', latin: '([^']*)'/gm)) console.log(m[1] + '\t' + m[2]);
    """
    out = subprocess.run(['node', '-e', js, ROOT], capture_output=True, text=True, check=True).stdout
    return dict(l.split('\t', 1) for l in out.strip().split('\n'))


def step_names():
    if os.path.exists(path('names.json')): return json.load(open(path('names.json')))
    fixed = json.load(open(os.path.join(HERE, 'inat_names.json')))
    print('downloading taxa.csv.gz (40 MB)')
    urllib.request.urlretrieve(BUCKET + 'taxa.csv.gz', path('taxa.csv.gz'))
    taxa = {}
    for r in csv.DictReader(gzip.open(path('taxa.csv.gz'), 'rt'), delimiter='\t'):
        if r['active'] == 'true' and r['rank'] in ('species', 'hybrid', 'subspecies', 'variety', 'complex'):
            taxa.setdefault(r['name'].lower(), r)
    names = {}
    for pid, lat in sorted(latin_names().items()):
        cands = fixed.get(pid, [re.sub(r'\s*\(.*\)', '', lat)] + [re.sub(r'^syn\.\s*', '', x) for x in re.findall(r'\(([^)]*)\)', lat)])
        if cands is None: cands = []
        hit = None
        for c in ([cands] if isinstance(cands, str) else cands):
            c = c.replace(' x ', ' × ').strip()
            for k in (c, c.replace(' × ', ' ')):
                if k.lower() in taxa: hit = taxa[k.lower()]; break
            if hit: break
        names[pid] = hit and {'taxon': int(hit['taxon_id']), 'name': hit['name']}
        if not hit and pid not in fixed: print(f'  no iNaturalist taxon for {pid} ({lat}); add it to inat_names.json')
    json.dump(names, open(path('names.json'), 'w'), indent=1, ensure_ascii=False)
    return names


def step_obs(names):
    if os.path.exists(path('obs.tsv')): return
    ids = sorted({v['taxon'] for v in names.values() if v})
    open(path('taxa_ids.txt'), 'w').write('\n'.join(map(str, ids)) + '\n')
    print('streaming observations.csv.gz (~13 GB, ~10 min)')
    subprocess.run(f"curl -sS --retry 5 {BUCKET}observations.csv.gz | gzip -dc | "
                   f"awk -F'\\t' 'NR==FNR{{ok[$1]=1;next}} FNR==1 || (($6 in ok) && ($7==\"research\" || $7==\"needs_id\"))' "
                   f"'{path('taxa_ids.txt')}' - > '{path('obs.tsv.part')}'", shell=True, check=True)
    os.rename(path('obs.tsv.part'), path('obs.tsv'))


def africa(r):
    try: lat, lon = float(r['latitude']), float(r['longitude'])
    except ValueError: return False
    return -35 < lat < 38 and -20 < lon < 52


def step_photos(names):
    if os.path.exists(path('photos.tsv')): return
    by = {}
    for r in csv.DictReader(open(path('obs.tsv')), delimiter='\t'):
        by.setdefault(r['taxon_id'], []).append(r)
    rnd = random.Random(7)
    keep = {}
    for tid, rows in by.items():
        rnd.shuffle(rows)
        # stable sort: confirmed (research grade) first, then Africa first, random within
        rows.sort(key=lambda r: (r['quality_grade'] != 'research', not africa(r)))
        per_obs = 1 if len(rows) >= PER else 2  # rare plants: two photos per observation
        for r in rows[:PER]: keep[r['observation_uuid']] = (tid, per_obs)
    open(path('keep.txt'), 'w').write(''.join(f'{u}\t{t}\t{n}\n' for u, (t, n) in keep.items()))
    print(f'streaming photos.csv.gz (~20 GB, ~10 min) for {len(keep)} observations')
    subprocess.run(f"curl -sS --retry 5 {BUCKET}photos.csv.gz | gzip -dc | "
                   f"awk -F'\\t' 'NR==FNR{{ok[$1]=$3;next}} FNR==1 || (($3 in ok) && $9 < ok[$3])' "
                   f"'{path('keep.txt')}' - > '{path('photos.tsv.part')}'", shell=True, check=True)
    os.rename(path('photos.tsv.part'), path('photos.tsv'))


def step_images(names):
    tax2plants = {}
    for pid, v in names.items():
        if v: tax2plants.setdefault(str(v['taxon']), []).append(pid)
    keep = dict((l.split('\t')[0], l.split('\t')[1]) for l in open(path('keep.txt')).read().split('\n') if l)
    jobs = []
    for r in csv.DictReader(open(path('photos.tsv')), delimiter='\t'):
        tid = keep.get(r['observation_uuid'])
        for pid in tax2plants.get(tid, []):
            f = path(f"img/{pid}/{r['photo_id']}.jpg")
            if not os.path.exists(f): jobs.append((f, f"{BUCKET}photos/{r['photo_id']}/medium.{r['extension']}"))
    print(f'downloading {len(jobs)} photos')

    def get(job):
        f, url = job
        os.makedirs(os.path.dirname(f), exist_ok=True)
        try:
            with urllib.request.urlopen(url, timeout=60) as res: data = res.read()
            open(f + '.part', 'wb').write(data); os.rename(f + '.part', f)
        except Exception as e:
            return f'{url}: {e}'
    errs = [e for e in ThreadPoolExecutor(32).map(get, jobs) if e]
    print(f'done, {len(errs)} failed', *errs[:5], sep='\n  ')
    if not os.path.exists(path('observers.csv.gz')):
        urllib.request.urlretrieve(BUCKET + 'observers.csv.gz', path('observers.csv.gz'))


names = step_names()
step_obs(names)
step_photos(names)
step_images(names)
