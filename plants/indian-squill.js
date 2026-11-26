EA.addSpecies('indian-squill', {
  name: "INDIAN SQUILL", short: "SQUILL", latin: "Drimia indica", family: "Asparagaceae (asparagus family)",
  origin: "Drier tropical Africa, including northern Nigeria, and the Indian subcontinent",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "A bulb plant 45-60 cm from a white bulb 3-6 cm wide. Narrow pointed leaves 15-30 cm grow in a rosette. Small pale green to white flowers sit far apart on a slender stalk, followed by round fruits 1.5-2 cm with flat seeds.",
  facts: ["BULB PLANT", "WHITE BULB", "STRAP LEAVES", "PALE FLOWER STALK", "VERY POISONOUS"],
  uses: [
    ["MEDICINE", "Its bulb is an Ayurvedic medicine in India for chest and heart problems."],
    ["CAUTION", "A very poisonous plant: too much bulb causes nausea and vomiting. Use only under expert care."],
  ],
  history: "Also called true squill and sea onion. It grows on rocky savanna.",
  leaf: { shape: 'blade', len: 1, wid: 0.1, note: 'NARROW LEAF' },
  form: { type: 'rosette', height: 0.5, count: 8, leafSize: 1.4, pitch: [0.9, 1.4], droop: 0.25, flower: { type: 'spike', size: 1.0, color: 3 } },
  seasons: [
    { id: 'dormant', label: "DORMANT", from: 0, to: 150, g: [0, 0], desc: "Bulb rests underground." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 200, g: [0.2, 0.5], desc: "Flower stalk rises." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 200, to: 300, g: [0.5, 1], desc: "Leaf rosette." },
    { id: 'fruiting', label: "FRUITING", from: 300, to: 360, g: [1, 0.3], desc: "Round fruits; leaves wither." },
  ],
  beds: [{ plantedDay: -400 }],
});
