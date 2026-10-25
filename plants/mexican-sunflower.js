EA.addSpecies('mexican-sunflower', {
  name: "MEXICAN SUNFLOWER", short: "TITHONIA", latin: "Tithonia diversifolia", family: "Asteraceae (daisy family)",
  origin: "Mexico and Central America; naturalised in south-west Nigeria",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A tall, bushy plant with soft, three- to five-lobed, toothed leaves. Bright yellow, sunflower-like heads on long stalks crowd roadsides and fallow land after the rains.",
  facts: ["SHRUBBY HERB 2-3 M", "LEAVES 3-5 LOBED, TOOTHED", "FLOWER HEADS YELLOW", "LOOKS LIKE A SMALL SUNFLOWER", "SPREADS ALONG ROADS"],
  uses: [
    ["FARMING", "Leaves are used as a green manure to feed the soil."],
    ["FODDER", "Cut as fodder for goats and rabbits."],
  ],
  history: "Mexican sunflower spread across the tropics as an ornamental and hedge plant and now grows wild; a forage database records a Yoruba name for it from Okeigbo, Ondo State.",
  leaf: { shape: 'lance', len: 1, wid: 0.5, compound: 'palmate', leaflets: 3, serr: 0.15, note: '3-5 LOBED LEAF, TOOTHED, SOFT HAIRS' },
  form: { type: 'shrub', height: 1.1, trunk: 0.1, branches: 8, nodes: 6, spread: 0.32, stemW: 0.03, leafSize: 1.3, arrange: 'alternate', flower: { type: 'head', size: 1.7, color: 3 } },
  seasons: [
    { id: 'dormant', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Stems die back in the harmattan." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 210, g: [0.8, 1], desc: "Fast leafy growth in the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 210, to: 330, g: [1, 1], desc: "Yellow heads crowd the roadsides." },
    { id: 'dormant', label: "DYING BACK", from: 330, to: 360, g: [1, 0.85], desc: "Heads dry and drop seed." },
  ],
  beds: [{ plantedDay: -1800 }],
});
