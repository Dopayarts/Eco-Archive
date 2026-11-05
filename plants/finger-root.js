EA.addSpecies('finger-root', {
  name: "FINGER ROOT", short: "FINGERROOT", latin: "Uvaria chamae", family: "Annonaceae (custard-apple family)",
  origin: "Wet and dry forest and coastal scrub of West and Central Africa, including Nigeria",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A large climbing shrub or small tree, 3.6-4.6 m tall. Its edible fruits grow in small bunches of finger-like pods, which gives it the names finger root and bush banana.",
  facts: ["CLIMBING SHRUB", "UP TO ABOUT 4.6 M", "FRUITS IN FINGER BUNCHES", "FRUIT EDIBLE", "WIDE MEDICINE USE"],
  uses: [
    ["FOOD", "The fruit is widely eaten."],
    ["MEDICINE", "In Nigeria the stem bark is boiled for diarrhoea, the leaves are put on wounds and swellings, and the root is used as a purge and for piles."],
    ["FEVER", "It is used for fevers across its range; extracts slowed malaria in animal tests."],
  ],
  history: "It is also called bush banana, after its bunches of fruit.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'SIMPLE OBLONG LEAF' },
  form: { type: 'shrub', height: 0.85, trunk: 0.1, branches: 8, nodes: 6, spread: 0.36, stemW: 0.03, leafSize: 1.6, arrange: 'alternate', flower: { type: 'single', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Leafy scrambling stems." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Single flowers." },
    { id: 'fruiting', label: "FINGER FRUITS", from: 180, to: 300, g: [1, 1], desc: "Bunches of finger fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Leafy stems." },
  ],
  beds: [{ plantedDay: -2160 }],
});
