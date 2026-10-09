# Adding plants (instructions for the daily routine)

Each run adds **10 plants found in Nigeria** to Eco-Archive and publishes them.
Work in a fresh clone of github.com/Dopayarts/eco-archive on `main`. Netlify rebuilds
the website on every push (netlify.toml runs `tools/build_site.py`).

## 1. Choose the plants
1. Photo folders in `inbox/` come first (Peace's own photos and research). Skip `inbox/README.md`.
2. Fill the rest of the 10 from the first unticked lines of `plants/CANDIDATES.md`.
   Skip anything already archived (check `EA.species` ids and names in `plants/`, `js/species.js`
   and `specimens/`), and skip a candidate you cannot confirm grows in Nigeria.

## 2. Research each plant
- Check facts against at least two reliable sources (botanical databases such as POWO/Kew,
  PROTA, FAO, peer-reviewed or university sources). Do not invent facts.
- Local names (Yoruba, Igbo, Hausa, Efik and others) only when a source confirms them.
- Uses: culinary, craft and traditional uses as reported; say when evidence is weak; add a
  CAUTION entry for any known toxicity or interaction. Never present folk use as medical advice.
- Seasons must follow Nigeria: rains roughly April-October, dry season November-March,
  harmattan December-February. Note when a plant is mainly grown in one region (e.g. Jos Plateau).

## 3. Write the record
Create `plants/<id>.js` (id: lowercase-with-dashes). Copy the structure of `plants/okra.js`
(annual) or `plants/bitter-leaf.js` (perennial):
- `name` (caps, 14 characters or fewer reads best; add `short`, 10 characters or fewer, for the garden label when the name is longer than 10), `latin`, `family`, `origin`, `local`,
  `added` (today, YYYY-MM-DD), `kind` ('annual' or 'perennial'), `summary`, `facts` (caps),
  `uses`, `history`, `leaf`, `form`, then `stages` (annuals) or `seasons` (perennials), `beds`.
- `leaf`: `shape` one of oval, lance, tri, round, heart, blade, paddle, needle, feather, thread;
  `wid` = full width / length; `serr` 0-0.35 for toothed edges; `compound` = pinnate, bipinnate,
  palmate (also for deeply lobed leaves like okra or pawpaw) or trifoliate, with `leaflets`.
- `form.type`: herb, shrub, tree, rosette, grass, vine (add `trailing: true` for ground runners),
  palm, fern, broadleaf (`trunk` > 0 for a banana/plantain pseudostem). Other keys: `height`
  (1 = tallest herb; trees and palms 1.3-1.5), `stems`, `nodes`, `branches`, `count`, `arrange`
  (opposite, alternate, whorl), `leafSize`, `droop`, `spread`, `trunk`, `leafPitch`,
  `flower: { type: spike|head|single|cluster|umbel|plume|none, size, color: 2 or 3 }`,
  `fruit: { type: pod|big|berry, size, hang, color }`.
- Stage ids the renderer understands: seed, sprout, seedling, vegetative, bud, bloom, seeding,
  fruiting, senescence, dieback, dormant; other ids draw as leafy growth.
- Perennial `seasons` use the archive calendar: day 0 = 1 January, 30-day months, ranges must
  cover 0-360 with no gaps.
- `beds`: perennials `[{ plantedDay: -720 }]`; annuals `[{ sowDay: <today's archive day - 25> }]`
  so they arrive in leafy growth. Today's archive day:
  `node -e "console.log(Math.floor((Date.now() - Date.UTC(2026, 9, 8, 17)) / 3.6e6))"`
- Add the id to the list in `plants/index.js` (and to `photos: [...]` if it has photos).
- Tick its line in `plants/CANDIDATES.md` (`- [x]`), or add a ticked line for an inbox plant.

## 4. Photos (inbox plants)
    python3 tools/from_photos.py inbox/<folder> <id>
This writes `plants/<id>.photos.js` (traced leaf outline + pixel-art photos) and prints leaf
measurements. Look at the photos yourself to set `form` (habit, height, branching, leaf
arrangement, flower type). Then `git mv inbox/<folder> photos/<id>`.

## 5. Check how they look
    node tools/render_check.cjs /tmp/check.png <id> <id> ...
Open the image and compare each plant with what it really looks like. Adjust `form` and
`leaf` until each one reads clearly as that plant (silhouette, leaf shape, flowers, fruit).
The command fails on any page error; fix it before going on.

## 6. Build and publish
    python3 tools/build_site.py /tmp/dist     # must finish without errors
    git add -A && git commit -m "Add 10 plants: <names>" && git push origin main
Then report in the project thread: the 10 plants added (with one line each), anything
skipped and why, and inbox folders processed.
