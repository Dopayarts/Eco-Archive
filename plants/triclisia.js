EA.addSpecies('triclisia', {
  name: "TRICLISIA", latin: "Triclisia subcordata", family: "Menispermaceae (moonseed family)",
  origin: "West Africa; a climber of southwestern Nigeria, collected at Idi Awewe, Oke Ila Orangun, Osun State",
  local: "KANRANJONGBON, ALUGBORAN (YORUBA)",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "A climbing shrub about 1.6 m long. Its glossy, entire leaves are about 9 cm long and 5 cm wide, with a heart-shaped base and a drawn-out tip on a long stalk.",
  facts: ["CLIMBING SHRUB", "GLOSSY LEAVES", "HEART-SHAPED BASE", "LONG LEAF TIP", "BITTER TASTE"],
  uses: [
    ["MEDICINE", "In southwestern Nigeria it goes into remedies for inflammation, gout and internal wounds."],
    ["REMEDY", "Around Abeokuta its leaf is mixed with Xylopia in a recipe used against breast cancer."],
    ["CAUTION", "It contains alkaloids and cardiac glycosides; some of its alkaloids kill cells in lab tests."],
  ],
  history: "The plant tastes bitter and smells aromatic.",
  leaf: { shape: 'heart', len: 1, wid: 0.55, note: 'GLOSSY, LONG TIP' },
  form: { type: 'vine', height: 0.9, branches: 3, nodes: 7, arrange: 'alternate', leafSize: 0.9, droop: 0.2, flower: { type: 'cluster', size: 0.3, color: 2 }, fruit: { type: 'berry', size: 0.3, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Twining stems." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Small flowers." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 330, g: [1, 1], desc: "Round fruits." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -500 }],
});
