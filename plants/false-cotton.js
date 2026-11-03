EA.addSpecies('false-cotton', {
  name: "FALSE COTTON", short: "FALSECOTTN", latin: "Cochlospermum planchonii", family: "Bixaceae (annatto family)",
  origin: "West African savanna from Senegal to Chad; northern and eastern Nigeria",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "A savanna shrub that dies back to a woody rootstock in the dry season and sends up leafy shoots up to 2.5 m with the rains. Big golden-yellow flowers open at the end of the rains, followed by capsules of seeds wrapped in white floss.",
  facts: ["SHRUB UP TO 2.5 M", "WOODY ROOTSTOCK", "SURVIVES BUSH FIRES", "FLOWERS GOLDEN YELLOW", "SEEDS IN WHITE FLOSS"],
  uses: [
    ["DYE", "The rootstock gives a yellow dye; Hausa dyers add indigo to make green."],
    ["MEDICINE", "The Hausa use the rootstock for pain, and it is used for jaundice and malaria; rat tests supported its pain relief."],
  ],
  history: "False cotton's underground rootstock lets it survive savanna fires and regrow each year.",
  leaf: { shape: 'heart', len: 1, wid: 0.9, compound: 'palmate', leaflets: 5, note: 'HAND-LOBED LEAF' },
  form: { type: 'shrub', height: 0.8, trunk: 0.05, branches: 6, nodes: 5, spread: 0.3, stemW: 0.03, leafSize: 1.6, arrange: 'alternate', flower: { type: 'single', size: 1.6, color: 3 }, fruit: { type: 'big', size: 0.6, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "FLOSSY PODS", from: 0, to: 30, g: [0.6, 0.4], desc: "Capsules release floss." },
    { id: 'dormant', label: "ROOTSTOCK ONLY", from: 30, to: 120, g: [0.3, 0.3], desc: "Only the rootstock survives the dry season." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 120, to: 210, g: [0.3, 1], desc: "Shoots rise with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 270, g: [1, 1], desc: "Leafy shoots." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 330, g: [1, 1], desc: "Golden flowers as the rains end." },
    { id: 'fruiting', label: "CAPSULES", from: 330, to: 360, g: [1, 0.6], desc: "Capsules form." },
  ],
  beds: [{ plantedDay: -1440 }],
});
