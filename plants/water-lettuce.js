EA.addSpecies('water-lettuce', {
  name: "WATER LETTUCE", short: "WATER LETT", latin: "Pistia stratiotes", family: "Araceae (arum family)",
  origin: "Pantropical; ponds, lakes and slow rivers of Nigeria",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A floating plant that forms a rosette of thick, pale green, ribbed leaves covered in fine hairs, like a small open lettuce. Feathery roots hang in the water, and tiny flowers hide among the leaves. It spreads by runners into dense mats.",
  facts: ["FLOATING ROSETTE", "LEAVES THICK, HAIRY, RIBBED", "ROOTS FEATHERY, HANGING", "SPREADS BY RUNNERS", "FORMS DENSE MATS"],
  uses: [
    ["SALT", "The Hausa burned it to make ash used as a salt substitute."],
    ["MEDICINE", "Dried leaf powder is put on wounds and leaf infusions used as an eyewash."],
    ["CAUTION", "Not safe to eat: rich in oxalate and can hold heavy metals."],
  ],
  history: "Water lettuce was first described from the Nile. Its mats block boats, starve water of oxygen and shelter mosquito larvae.",
  leaf: { shape: 'paddle', len: 1, wid: 0.7, note: 'THICK SPONGY LEAF, PARALLEL RIBS, VELVET HAIRS' },
  form: { type: 'rosette', height: 0.45, count: 14, leafSize: 1.8, pitch: [0.5, 1.0], droop: 0.05 },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Mats shrink as water drops." },
    { id: 'regrowth', label: "SPREADING", from: 90, to: 210, g: [0.8, 1], desc: "Runners spread fast in warm water." },
    { id: 'vegetative', label: "LEAFY MATS", from: 210, to: 360, g: [1, 1], desc: "Dense floating mats." },
  ],
  beds: [{ plantedDay: -720 }],
});
