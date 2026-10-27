# SCAN: offline plant ID

SCAN names a plant from a photo. It runs entirely on the device: in the desktop app, in a
desktop browser, or on a phone. The photo is never uploaded and no AI service is called.

Use it with the `[SCAN]` button under the terminal, the `scan` command, or by dropping a
photo on the window. `scan info` says how many plants it knows.

## How it works

1. **Image model** (`identify/backbone.js`, 4.8 MB): MobileNet V2, a small, well-known
   ImageNet model (Apache-2.0, Google), stored as 8-bit numbers. It turns a photo into
   1280 numbers that describe its shapes and textures. It is never retrained.
2. **Species head** (`identify/head.js`, ~0.3 MB): one layer trained here that maps those
   numbers to the archive's plants. Retraining it takes minutes on an ordinary computer.
3. The app reads four views of the photo (whole, close crop, and both mirrored),
   averages them into one description, scores it, then shows the top three with a confidence bar and an `[OPEN]` link.
   Under 20% it says it is not sure, and it always warns against eating or using a
   plant as medicine on a scan alone.

Both files load only the first time someone scans (`vendor/tf.min.js`, TensorFlow.js,
Apache-2.0, does the maths). On the website `sw.js` keeps them, so SCAN keeps working
offline after the first use.

## Training photos

Photos come from the [iNaturalist Open Dataset](https://github.com/inaturalist/inaturalist-open-data)
on Amazon's open-data S3 bucket: CC0, CC-BY or CC-BY-NC photos of confirmed
(research-grade) sightings, African sightings first, with unconfirmed ones only for plants
with few confirmed photos. Every photo used is credited in `identify/CREDITS.csv`.
`identify/REPORT.txt` lists how often SCAN was right on photos it never saw in training,
plant by plant.

Your own photos count too: anything in `photos/<plant id>/` or `inbox/<plant id>/` (jpg or
png) is added to training, so the plants with the fewest iNaturalist photos improve fastest from photos
taken in Nigeria.

## Corrections and the scan library

After a scan, anyone can press **[WRONG? SEND THIS PHOTO WITH THE RIGHT NAME]** and type the
plant's name. The photo waits in the admin panel (knock on the greenhouse four times, log in)
under **SCANS TO REVIEW**, where an admin confirms it as an archive plant (with an optional
variety or caption, like LEAF or RED VARIETY), adds it as a new plant, or rejects it.
Logged-in admins can also add their own scans directly with **[ADD THIS PHOTO TO THE SCAN LIBRARY]**.
Storage is Cloudflare KV (binding `EA`) on the live site, or Netlify Blobs on the backup (`api/scans.mjs`); admin
actions need the same `ADMIN_PASSWORD` as the garden layout (a second admin can use `ADMIN_PASSWORD_2` or `ADMIN_PASSWORD2`). Senders say whether the photo shows a leaf, the whole plant, a flower, fruit, stem or root.

Confirmed scans:
- show in the plant's photo gallery (PHOTO mode, scroll with `[<]` `[>]`);
- count at once: a new scan that closely matches a library photo goes to that plant, even
  a new plant with no record yet (this only catches near-identical photos);
- are learned properly at the next retrain: the daily routine runs `pull_scans.cjs` and
  `train.cjs` (see ADDING_PLANTS.md).

## Retraining (after new plants are added)

Needs Python 3, Node 18+ and about 3 GB of disk for the photo cache.

Everyday retrain (minutes; uses the saved `features.bin`, your photos and confirmed scans):
```
node tools/plant_id/pull_scans.cjs
cd tools/plant_id && npm install && node train.cjs
```
Full rebuild from iNaturalist (when plants were added that need iNaturalist photos):
```
python3 tools/plant_id/fetch_photos.py ~/eco-archive-photos      # ~25 min the first time
cd tools/plant_id && npm install && node train.cjs ~/eco-archive-photos
```

For new plants, delete `names.json`, `obs.tsv`, `keep.txt` and `photos.tsv` from the cache
folder first (photos already downloaded are kept). If a plant's latin name is not
iNaturalist's current one, `fetch_photos.py` says so; add the current name to
`tools/plant_id/inat_names.json`. Then commit `identify/head.js`, `REPORT.txt`, `CREDITS.csv` and `tools/plant_id/features.*`.

`node tools/plant_id/pack_backbone.cjs` rebuilds `identify/backbone.js` (only needed if
the image model changes).

## Limits

- SCAN only knows plants in the archive. A plant from outside it gets matched to the
  nearest archive plant, usually with low confidence.
- Plants that look alike to the camera are hard (the yams, the citrus trees, the grasses).
  Orange and grapefruit share one iNaturalist name, so SCAN treats them as one.
- Plants with no photos on iNaturalist are left out until photos are added to `inbox/`.
