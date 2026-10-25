EA.addSpecies('desert-rose', {
  name: "DESERT ROSE", short: "DESERT ROS", latin: "Adenium obesum", family: "Apocynaceae (dogbane family)",
  origin: "Africa and Arabia; native to dry savanna of northern Nigeria",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A succulent shrub with a swollen, bottle-shaped trunk that stores water. Fleshy leaves cluster at the branch tips. Trumpet-shaped flowers are pink to red with a paler throat, often on bare branches in the dry season.",
  facts: ["SUCCULENT SHRUB 1-3 M", "TRUNK SWOLLEN, STORES WATER", "LEAVES FLESHY, AT TIPS", "FLOWERS PINK-RED TRUMPETS", "SAP IS POISONOUS"],
  uses: [
    ["GARDEN", "Grown in pots and as a bonsai for its fat trunk and flowers."],
    ["WARNING", "Its sap has been used as an arrow and fish poison in Africa."],
  ],
  history: "The desert rose grows wild in the dry savanna of Africa. In places its toxic sap was used to make poison arrows for hunting.",
  leaf: { shape: 'paddle', len: 0.9, wid: 0.4, note: 'FLESHY GLOSSY LEAF, AT BRANCH TIPS' },
  form: { type: 'shrub', height: 0.75, trunk: 0.4, branches: 6, nodes: 3, spread: 0.3, stemW: 0.07, leafSize: 1.2, arrange: 'whorl', flower: { type: 'single', size: 1.6, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 90, g: [0.85, 0.85], desc: "Pink trumpets on bare stems." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 270, g: [0.85, 1], desc: "Fleshy leaves with the rains." },
    { id: 'fruiting', label: "PODS", from: 270, to: 330, g: [1, 1], desc: "Paired horn-like pods release tufted seeds." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.85], desc: "Leaves drop at the start of the dry season." },
  ],
  beds: [{ plantedDay: -2700 }],
});
