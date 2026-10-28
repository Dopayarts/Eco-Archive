EA.addSpecies('sasswood', {
  name: "SASSWOOD", latin: "Erythrophleum suaveolens", family: "Fabaceae (pea family)",
  origin: "Tropical Africa, including Nigeria's forests and woodlands",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A tree up to about 20 m with rough, blackish bark. Leaves carry two or three pairs of side branches, each with 7-13 oval leaflets. Fluffy, creamy-yellow flower spikes are followed by hard, flat pods.",
  facts: ["TREE UP TO 20 M", "BARK ROUGH, BLACKISH", "LEAVES TWICE PINNATE", "FLOWERS CREAMY SPIKES", "BARK IS VERY POISONOUS"],
  uses: [
    ["WOOD", "Dense, durable timber for furniture and flooring."],
    ["CAUTION", "The bark is highly toxic and was used as an ordeal poison. It has no safe home use."],
  ],
  history: "In parts of West Africa, people accused of wrongdoing were once made to drink a sasswood bark brew; this \"trial by ordeal\" gave the tree its name.",
  leaf: { shape: 'oval', len: 0.9, wid: 0.5, compound: 'bipinnate', note: 'TWICE-PINNATE LEAF, 7-13 OVAL LEAFLETS PER BRANCH' },
  form: { type: 'tree', height: 1.3, trunk: 0.45, branches: 9, nodes: 4, spread: 0.36, stemW: 0.07, leafSize: 1.7, arrange: 'alternate', flower: { type: 'spike', size: 1.3, color: 3 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Glossy crown in the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "Fluffy creamy spikes." },
    { id: 'fruiting', label: "PODS", from: 120, to: 240, g: [1, 1], desc: "Hard flat pods form." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Dense crown in the rains." },
  ],
  beds: [{ plantedDay: -9000 }],
});
