EA.addSpecies('fimbry', {
  name: "LESSER FIMBRY", short: "FIMBRY", latin: "Fimbristylis littoralis", family: "Cyperaceae (sedge family)",
  origin: "Africa, Asia and Oceania; a common weed of upland and lowland rice in Nigeria",
  added: '2026-11-28',
  kind: 'annual',
  summary: "A tufted annual sedge 5-70 cm with flattened, four- or five-angled stems. Stiff, thread-like leaves grow from the base. Loose umbels 6-10 cm carry small round, reddish-brown spikelets with yellow anthers.",
  facts: ["ANNUAL SEDGE", "ANGLED STEMS", "THREAD LEAVES", "RED-BROWN SPIKELETS", "RICE WEED"],
  uses: [
    ["CAUTION", "A troublesome weed of rice fields in Nigeria and across the tropics."],
  ],
  history: "Also called lesser fimbristylis. In Australia it flowers from February to August.",
  leaf: { shape: 'thread', len: 1, wid: 0.05, note: 'THREAD LEAF' },
  form: { type: 'grass', height: 0.4, count: 16, stems: 5, droop: 0.3, flower: { type: 'umbel', size: 0.4, color: 1 }, fruit: { type: 'berry', size: 0.1, color: 1 } },
  stages: [
    { id: 'seed', label: "SEED", days: 4, g: [0, 0], desc: "Seeds sprout with the rains." },
    { id: 'sprout', label: "SPROUT", days: 5, g: [0.05, 0.15], desc: "First blade." },
    { id: 'seedling', label: "SEEDLING", days: 10, g: [0.15, 0.4], desc: "Tufts form." },
    { id: 'vegetative', label: "LEAFY GROWTH", days: 20, g: [0.4, 0.9], desc: "Angled stems rise." },
    { id: 'bloom', label: "IN FLOWER", days: 25, g: [0.9, 1], desc: "Red-brown spikelets." },
    { id: 'fruiting', label: "FRUITING", days: 25, g: [1, 1], desc: "Tiny nuts." },
    { id: 'senescence', label: "DRYING", days: 10, g: [1, 0.6], desc: "Plant dries out." },
  ],
  beds: [{ sowDay: 1181 }],
});
