EA.addSpecies('kasfiya', {
  name: "KASFIYA", latin: "Crossopteryx febrifuga", family: "Rubiaceae (coffee family)",
  origin: "Savanna of tropical Africa from Senegal to Sudan and Ethiopia, south to South Africa; found in Kebbi State, Nigeria",
  local: "KASFIYA, KASHIN AWAKI (HAUSA)",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "A deciduous savanna tree 2-15 m tall with a rounded crown and drooping twigs. Its very hard, fine wood has a pale pink tinge. It stands up well to bush fires.",
  facts: ["SAVANNA TREE", "2-15 M TALL", "DROOPING TWIGS", "HARD PINK WOOD", "SURVIVES FIRE"],
  uses: [
    ["MEDICINE", "Widely used for malaria, fever and pain; root bark is boiled for coughs and gut complaints."],
    ["SEEDS", "Seeds are burned to perfume clothes and ground into a body pomade."],
    ["WOOD", "Used for building, utensils, tool handles and carvings."],
  ],
  history: "Its name febrifuga means fever chaser. It is the only species in its genus.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'LEAVES IN OPPOSITE PAIRS' },
  form: { type: 'tree', height: 0.9, trunk: 0.35, branches: 8, nodes: 5, spread: 0.35, stemW: 0.07, leafSize: 0.85, arrange: 'opposite', droop: 0.4, flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 90, g: [0.7, 0.6], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.6, 1], desc: "Flower sprays." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 230, g: [1, 1], desc: "Small capsules." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 230, to: 360, g: [1, 1], desc: "Full rounded crown." },
  ],
  beds: [{ plantedDay: -2500 }],
});
