# Eco-Archive (prototype)

A living plant archive in Game Boy pixel style. Plants grow on one shared clock that
started when Eco-Archive went live, so everyone sees the same garden.

## Run it
- **Browser:** open `index.html`. No build step, no server needed.
- **Desktop window:** `cd desktop && npm install && npm start` (Electron).
- **Website later:** upload this folder to any static host as-is.

## Using it
- Click a plant to open its record: a spinning turntable (drag to spin, `[PLANT]`/`[LEAF]`),
  and tabs for INFO, USES, HISTORY and CYCLE.
- Hover near a bird and it, and its neighbours, scatter. They come back later.
- Terminal commands: `help`, `ls`, `open mint`, `cycle`, `leaf`, `time`, `peek 90` (preview
  90 archive days ahead without changing the shared clock), `peek 0`, `close`.

## Time
Set in `js/core.js`:
- `LIVE_AT` 2026-10-08 17:00 UTC, Eco-Archive's birth.
- `DAYS_PER_REAL_HOUR` 1, so one archive day passes each real hour. Basil goes from seed to flower in about 3 real days.
- `YEAR_DAYS` 360, as twelve 30-day months. `CAL_START` 277 makes go-live day read 8 October.
- Seasons follow Nigeria (`js/scene.js`, `EA.clock.season` in `js/core.js`): rainy April-October, dry
  November-March, harmattan December-February. In the rainy season a 3-minute shower (sometimes a thunderstorm)
  starts every 10 real minutes (`RAIN_EVERY`, `RAIN_FOR`), and birds stay away while it rains. The dry season uses dimmer, dustier colours.
- Day and night follow the real time in Nigeria (`UTC_OFFSET_HOURS` 1): night from 19:00 to 06:30.
- Buttons under the garden preview the last rainy or dry season for 5 seconds (day or night at random).
- Perennials (mint, lavender, aloe) follow these seasons;
  annuals (basil, chamomile) run seed to seed, then resow.

## Files
- `js/core.js` config, clock, life-cycle maths
- `js/species.js` plant records and bed layout
- `js/model.js` procedural 3D plants and the pixel renderer
- `js/garden.js` scene, beds, pixel font
- `js/birds.js` birds
- `js/panel.js` terminal panel and turntable

## Adding a new species from 3D models
1. Export your model from Blender (or similar) as **glTF Binary (.glb)**. Keep it light (a few thousand faces); it's drawn tiny.
2. Put the files in a folder named after the plant: `plant.glb` (required), plus optional `leaf.glb`
   for LEAF mode and stage models like `bud.glb`, `bloom.glb`, `seeding.glb`, `dormant.glb`.
   Any stage without its own file uses `plant.glb`, grown in size by the life cycle.
3. Run `python3 tools/add_species.py path/to/folder --name "ROSELLE"`.
4. Fill in `specimens/<id>/species.js` (text, life-cycle stages, how many beds). It gets new beds in the garden automatically.
5. Re-run step 3 whenever you replace a model; your species.js is kept.

Quick look without saving: drag a `.glb` onto the app window and it appears on the turntable.
Seed and sprout stages are drawn by the app for every species. Colours become the 4 Game Boy greens by
brightness, and non-green colours (petals, fruit) are lifted so flowers stand out.
See `samples/hibiscus/` and `specimens/hibiscus/` for a worked example.

## Plants from descriptions and photos
- `plants/<id>.js` describes a plant with a `form` record (habit, leaves, flowers, fruit);
  `js/model.js` turns it into the same 3D model the turntable and garden use. No 3D file needed.
- `tools/from_photos.py <folder> <id>` traces the leaf outline from a leaf photo and turns the
  leaf, plant and flower photos into pixel art ([PHOTO] and [FLOWER] in the viewer).
- `inbox/` is where photos go; `plants/CANDIDATES.md` is the list of plants still to archive.
- A daily routine adds 10 plants: see `ADDING_PLANTS.md`.
- The garden shows 10 beds per plot; `[<]`/`[>]` page between plots, `FIND <NAME>` searches.
- The website serves `plants.csv` and `plants.json`; the desktop app saves them to
  `Documents\Eco-Archive\` (`CSV` in the terminal downloads it).

## Updating the website
Push to github.com/Dopayarts/eco-archive. Netlify runs `python3 tools/build_site.py dist`
(see netlify.toml), which bundles everything into one page plus plants.csv/json.
