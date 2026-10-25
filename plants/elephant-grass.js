EA.addSpecies('elephant-grass', {
  name: "ELEPHANT GRASS", short: "ELEPHANT G", latin: "Cenchrus purpureus (Pennisetum purpureum)", family: "Poaceae (grass family)",
  origin: "Tropical Africa; native to Nigeria",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A giant clumping grass with thick, cane-like stems and long, broad leaf blades with a white midrib. Yellow-brown, bottlebrush-like flower heads top the stems late in the rains.",
  facts: ["GRASS 2-6 M", "STEMS CANE-LIKE", "LEAVES LONG, WHITE MIDRIB", "HEADS BOTTLEBRUSH-LIKE", "GROWS FROM STEM CUTTINGS"],
  uses: [
    ["FODDER", "Cut and carried to cattle, sheep and goats; studied as fodder in Nigeria."],
    ["FARMING", "Planted as a windbreak and to hold soil."],
  ],
  history: "Elephant grass is also called Napier grass after Colonel Napier, who promoted it as fodder in Africa.",
  leaf: { shape: 'blade', len: 1, wid: 0.3, note: 'LONG BROAD BLADE, WHITE MIDRIB, ROUGH EDGES' },
  form: { type: 'grass', height: 1.4, count: 30, droop: 0.55, stems: 3, flower: { type: 'plume', size: 1.1, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.85, 0.85], desc: "Leaves brown in the harmattan." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.85, 1], desc: "New shoots spring up with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 270, g: [1, 1], desc: "Tall dense clumps." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 360, g: [1, 1], desc: "Bottlebrush heads appear." },
  ],
  beds: [{ plantedDay: -1800 }],
});
