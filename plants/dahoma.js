EA.addSpecies('dahoma', {
  name: "DAHOMA", latin: "Piptadeniastrum africanum", family: "Fabaceae (legume family)",
  origin: "Humid forest of West and Central Africa from Senegal to Sudan and northern Angola, including Nigeria",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A huge deciduous forest tree up to 50 m, often in swamp forest, with wide-spreading branches and thin buttresses that can reach 5 m up the trunk. Feathery leaves hold hundreds of tiny leaflets. Small yellowish-white flowers give brown, woody pods.",
  facts: ["TREE UP TO 50 M", "THIN BUTTRESSES", "FEATHERY LEAVES", "FLOWERS YELLOWISH-WHITE", "PODS BROWN, WOODY"],
  uses: [
    ["TIMBER", "The wood is valued for canoes, bridges and building in water."],
    ["MEDICINE", "The Baka people of Cameroon use the bark for stomach pains; in Congo and Ghana it is used for back pain."],
    ["TONIC", "Some healers give leaf extracts as a tonic."],
  ],
  history: "It is the only species in its genus. A tree measured in Ghana stood 60.7 m tall.",
  leaf: { shape: 'blade', len: 1, wid: 0.25, compound: 'bipinnate', leaflets: 21, note: 'BIPINNATE LEAF, MANY TINY LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.6, branches: 11, nodes: 6, spread: 0.32, stemW: 0.08, leafSize: 1.0, arrange: 'alternate', droop: 0.1, flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 1.1, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 90, g: [0.8, 0.6], desc: "Some leaves drop in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 160, g: [0.7, 1], desc: "Small yellowish-white flowers." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 160, to: 300, g: [1, 1], desc: "Full feathery crown." },
    { id: 'fruiting', label: "PODS", from: 300, to: 360, g: [1, 0.8], desc: "Woody pods ripen." },
  ],
  beds: [{ plantedDay: -9000 }],
});
