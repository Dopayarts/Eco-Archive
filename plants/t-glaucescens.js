EA.addSpecies('t-glaucescens', {
  name: "T. GLAUCESCENS", short: "T.GLAUCESC", latin: "Terminalia glaucescens", family: "Combretaceae (bushwillow family)",
  origin: "Tropical Africa from Guinea to Uganda and Ethiopia; collected at Lokoja, Nigeria",
  added: '2026-11-19',
  kind: 'perennial',
  summary: "A small tree 7-14 m with leaves 9-15 cm long, green above and pale beneath. Tiny pale flowers grow in spikes, and each fruit is a single-winged samara 6-9 cm long that turns brown.",
  facts: ["TREE 7-14 M", "PALE LEAF UNDERSIDE", "FLOWER SPIKES", "WINGED FRUIT 6-9 CM", "CHEWING STICK"],
  uses: [
    ["MEDICINE", "In West Africa the bark goes on wounds and is used for dysentery and infections."],
    ["TEETH", "The twigs are chewed to clean the teeth."],
    ["RESEARCH", "Stem bark from Lokoja was tested at the University of Ibadan for germ-killing power."],
  ],
  history: "Its one-winged fruits spin to the ground like a helicopter seed.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'PALE BELOW, 9-15 CM' },
  form: { type: 'tree', height: 1.0, trunk: 0.5, branches: 8, nodes: 5, spread: 0.28, stemW: 0.07, leafSize: 0.85, arrange: 'alternate', droop: 0.15, flower: { type: 'spike', size: 0.5, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'rest', label: "DRY REST", from: 0, to: 120, g: [1, 1], desc: "Growth slows in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 200, g: [1, 1], desc: "Pale flower spikes." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 200, to: 300, g: [1, 1], desc: "Winged fruits brown." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Leafy crown." },
  ],
  beds: [{ plantedDay: -3000 }],
});
