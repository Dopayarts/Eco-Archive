EA.addSpecies('thatching-grass', {
  name: "THATCHING GRASS", short: "THATCH GRS", latin: "Hyparrhenia rufa", family: "Poaceae (grass family)",
  origin: "Tropical Africa from Mauritania to South Africa; Nigerian savanna",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A tall, tufted savanna grass up to 2.5 m or more. Long, loose flowering heads carry reddish clusters of red-haired spikelets, giving the grass a rusty look when in seed.",
  facts: ["GRASS UP TO 2.5 M", "GROWS IN DENSE TUFTS", "FLOWER HEADS REDDISH", "STEMS USED FOR THATCH", "DROUGHT TOUGH"],
  uses: [
    ["THATCH", "Mature stems thatch roofs and are woven into mats."],
    ["BUILDING", "In north-west Nigeria tall forms are grown as grass fences."],
    ["FODDER", "Grazed or cut for hay when young."],
  ],
  history: "Thatching grass is a native savanna grass in Africa but a fire-prone weed where it has been planted elsewhere.",
  leaf: { shape: 'blade', len: 1, wid: 0.15, note: 'LONG NARROW GRASS BLADE' },
  form: { type: 'grass', height: 1.25, count: 30, droop: 0.45, stems: 4, flower: { type: 'plume', size: 1.1, color: 2 } },
  seasons: [
    { id: 'dormant', label: "DRY STRAW", from: 0, to: 90, g: [0.6, 0.6], desc: "Dry straw is cut for thatch." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.6, 1], desc: "Green shoots with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 270, g: [1, 1], desc: "Tall green tufts." },
    { id: 'bloom', label: "FLOWERING", from: 270, to: 330, g: [1, 1], desc: "Reddish flower heads." },
    { id: 'seeding', label: "SEEDING", from: 330, to: 360, g: [1, 0.6], desc: "Seed falls; stems dry." },
  ],
  beds: [{ plantedDay: -720 }],
});
