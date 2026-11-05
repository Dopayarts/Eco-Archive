EA.addSpecies('soft-cane', {
  name: "SOFT CANE", latin: "Megaphrynium macrostachyum", family: "Marantaceae (arrowroot family)",
  origin: "Tropical Africa from Guinea to Uganda; found in Nigerian cocoa farms",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A large, fast-growing herb up to 4 m from a long creeping rhizome. Each stem holds one huge oval leaf up to 60 cm long on a long stalk. Spikes of small white flowers give bright red, three-lobed fruits with dark seeds in white pulp.",
  facts: ["HERB UP TO 4 M", "ONE HUGE LEAF PER STEM", "CREEPING RHIZOME", "FLOWERS SMALL, WHITE", "FRUITS BRIGHT RED"],
  uses: [
    ["WRAPPING", "The big leaves are used to wrap and cook food, pack goods and thatch."],
    ["CRAFT", "Split leaf stalks are woven into baskets and mats; old leaves make plates and fans."],
    ["MEDICINE", "Leaves are used as a sedative and for snakebite and stings."],
  ],
  history: "Its English name is Yoruba soft cane. Gorillas and chimpanzees eat its rhizomes.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'HUGE OVAL LEAF ON LONG STALK' },
  form: { type: 'broadleaf', height: 0.9, count: 6, leafSize: 2.0, droop: 0.2, flower: { type: 'spike', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 0.8, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Leaves tatter in the dry season." },
    { id: 'regrowth', label: "NEW LEAVES", from: 90, to: 180, g: [0.8, 1], desc: "New leaves unroll with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "White flower spikes." },
    { id: 'fruiting', label: "RED FRUITS", from: 270, to: 360, g: [1, 0.9], desc: "Bright red fruits." },
  ],
  beds: [{ plantedDay: -1440 }],
});
