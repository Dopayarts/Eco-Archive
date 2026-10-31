EA.addSpecies('african-tulip-tree', {
  name: "AFRICAN TULIP", short: "TULIP TREE", latin: "Spathodea campanulata", family: "Bignoniaceae (trumpet vine family)",
  origin: "West and Central African forest edges; first described from Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A tree up to 25 m with leaves of 7-19 leaflets. Big, cup-shaped, scarlet-orange flowers with a yellow rim crown the branches. Their buds hold water, and long woody pods split to release papery winged seeds.",
  facts: ["TREE UP TO 25 M", "LEAVES PINNATE", "FLOWERS SCARLET-ORANGE", "BUDS HOLD WATER", "SEEDS PAPER-WINGED"],
  uses: [
    ["GARDEN", "Planted across the tropics for shade and its flowers."],
    ["PLAY", "Children squirt water from the flower buds."],
    ["MEDICINE", "Bark, leaf and flower extracts are used in traditional remedies."],
  ],
  history: "The African tulip tree was described from a specimen collected in Nigeria. It is now planted, and has run wild in places, around the tropics.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 11, note: 'PINNATE LEAF, GLOSSY OVAL LEAFLETS' },
  form: { type: 'tree', height: 1.35, trunk: 0.45, branches: 9, nodes: 5, spread: 0.36, stemW: 0.07, leafSize: 1.9, arrange: 'opposite', flower: { type: 'cluster', size: 1.6, color: 2 }, fruit: { type: 'pod', size: 1.2, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 120, g: [1, 1], desc: "Peak flowering in the dry season." },
    { id: 'fruiting', label: "PODS", from: 120, to: 210, g: [1, 1], desc: "Boat-shaped pods split." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 300, g: [1, 1], desc: "Glossy leaves in the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 300, to: 360, g: [1, 1], desc: "Flowers return." },
  ],
  beds: [{ plantedDay: -3600 }],
});
