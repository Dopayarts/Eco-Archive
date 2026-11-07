EA.addSpecies('okoho', {
  name: "OKOHO", latin: "Cissus populnea", family: "Vitaceae (grape family)",
  origin: "West African savanna; used across Nigeria",
  local: "OKOHO (IDOMA)",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A woody climbing shrub that keeps going through all seasons. Its stems and leaves turn slimy and jelly-like when crushed or cooked, which makes it a soup thickener.",
  facts: ["WOODY CLIMBER", "STEMS VERY SLIMY", "A SOUP THICKENER", "LASTS ALL SEASONS", "GRAPE FAMILY"],
  uses: [
    ["FOOD", "The Idoma of Benue State make okoho soup from the stems, cooked without oil and served with pounded yam."],
    ["MEDICINE", "The soup is valued for digestion, and stem extracts are used for male fertility."],
  ],
  history: "Okoho soup is the most honoured dish at Idoma weddings, burials and festivals.",
  leaf: { shape: 'oval', len: 1, wid: 0.7, serr: 0.15, note: 'SIMPLE BROAD LEAF' },
  form: { type: 'vine', height: 1.05, nodes: 12, leafSize: 1.6, droop: 0.35, flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.7, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 120, g: [0.9, 0.9], desc: "Woody stems hold on." },
    { id: 'regrowth', label: "REGROWTH", from: 120, to: 200, g: [0.9, 1], desc: "New shoots with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 200, to: 270, g: [1, 1], desc: "Small flower clusters." },
    { id: 'fruiting', label: "BERRIES", from: 270, to: 360, g: [1, 0.9], desc: "Small berries." },
  ],
  beds: [{ plantedDay: -2160 }],
});
