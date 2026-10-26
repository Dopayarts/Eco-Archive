EA.addSpecies('sword-fern', {
  name: "GIANT SWORD FERN", short: "SWORD FERN", latin: "Nephrolepis biserrata", family: "Nephrolepidaceae (sword fern family)",
  origin: "Pantropical; native to Nigeria",
  added: '2026-10-26',
  kind: 'perennial',
  summary: "A large ground fern with long, arching fronds up to 2.5 m, made of many widely spaced, narrow leaflets with wavy edges. Rows of brown spore dots line the underside of fertile leaflets. It spreads by thin runners.",
  facts: ["FRONDS UP TO 2.5 M", "LEAFLETS NARROW, WAVY EDGES", "SPORE DOTS UNDER LEAFLETS", "SPREADS BY RUNNERS", "NO FLOWERS OR SEEDS"],
  uses: [
    ["GARDEN", "Grown in shady gardens, pots and hanging baskets."],
  ],
  history: "Ferns are among the oldest land plants. They reproduce by spores, and this one also spreads by runners along forest edges and stream banks.",
  leaf: { shape: 'lance', len: 1, wid: 0.2, compound: 'pinnate', leaflets: 18, serr: 0.06, note: 'LONG FROND, MANY NARROW LEAFLETS, SPORE DOTS BELOW' },
  form: { type: 'fern', height: 1.0, count: 12, leafSize: 2.2, droop: 0.55 },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.85, 0.85], desc: "Older fronds brown in dry air." },
    { id: 'regrowth', label: "NEW FRONDS", from: 90, to: 180, g: [0.85, 1], desc: "Coiled fiddleheads unroll in the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 1], desc: "Lush arching fronds." },
  ],
  beds: [{ plantedDay: -1800 }],
});
