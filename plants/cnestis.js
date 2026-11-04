EA.addSpecies('cnestis', {
  name: "CNESTIS", latin: "Cnestis ferruginea", family: "Connaraceae (zebrawood family)",
  origin: "Western tropical Africa to South Sudan and northern Angola, including Nigeria",
  local: "AKARA OJE (YORUBA)",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "A shrub, scrambling tree or climber, 2-4.5 m high, densely covered in fine brown hairs. Small, fragrant white flowers give eye-catching red fruits, tart and astringent to taste. It is often common in forest regrowth.",
  facts: ["SHRUB OR CLIMBER 2-4.5 M", "FINE BROWN HAIRS", "FLOWERS SMALL, WHITE, SCENTED", "FRUITS BRIGHT RED", "COMMON IN REGROWTH"],
  uses: [
    ["MEDICINE", "In Nigeria the leaves are used as a laxative, and fruit extract is put on snakebites."],
    ["MOUTH CARE", "The fruit is chewed to clean the mouth; fruit extracts act against some bacteria in lab tests."],
  ],
  history: "Cnestis is one of the plants in Aju Mbaise, a well-known Igbo herbal mixture from Imo State.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 9, note: 'HAIRY LEAFLETS IN PAIRS' },
  form: { type: 'shrub', height: 0.85, trunk: 0.1, branches: 8, nodes: 6, spread: 0.34, stemW: 0.03, leafSize: 1.6, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Scented white flowers." },
    { id: 'fruiting', label: "RED FRUITS", from: 90, to: 210, g: [1, 1], desc: "Bright red fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "Hairy leaves." },
  ],
  beds: [{ plantedDay: -1800 }],
});
