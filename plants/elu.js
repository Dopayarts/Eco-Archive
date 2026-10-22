EA.addSpecies('elu', {
  name: "WEST AFRICAN INDIGO", short: "ELU", latin: "Philenoptera cyanescens", family: "Fabaceae (pea family)",
  origin: "West Africa; found mostly in north-west and north-central Nigeria",
  local: "ELU (YORUBA)",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A shrub of the pea family with pinnate leaves of a few oval leaflets. Its leaves are pounded, balled and fermented to make the deep blue dye of Yoruba adire cloth.",
  facts: ["SHRUB", "LEAVES PINNATE, OVAL LEAFLETS", "PEA FLOWERS, FLAT PODS", "LEAVES GIVE INDIGO BLUE DYE", "NOT THE SAME PLANT AS TRUE INDIGO"],
  uses: [
    ["DYE", "Leaves (elu aja) are fermented into the indigo dye for adire tie-dye and resist-dyed cloth."],
    ["MEDICINE", "Used in West African traditional remedies."],
  ],
  history: "Adire, blue resist-dyed cloth, is a Yoruba craft centred in places such as Abeokuta. Its blue traditionally comes from elu leaves rather than the Asian true indigo plant.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, compound: 'pinnate', leaflets: 5, note: 'PINNATE LEAF, A FEW OVAL LEAFLETS' },
  form: { type: 'shrub', height: 1.0, trunk: 0.25, branches: 7, nodes: 4, spread: 0.3, stemW: 0.035, leafSize: 1.5, arrange: 'alternate', droop: 0.35, flower: { type: 'cluster', size: 1.1, color: 2 }, fruit: { type: 'pod', size: 1, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.9, 0.9], desc: "Leaves toughen through the dry season." },
    { id: 'regrowth', label: "NEW LEAVES", from: 90, to: 150, g: [0.9, 1], desc: "Fresh leaves come with the rains; dyers pick young leaves." },
    { id: 'bloom', label: "IN BLOOM", from: 150, to: 210, g: [1, 1], desc: "Clusters of pea flowers open." },
    { id: 'fruiting', label: "PODS", from: 210, to: 300, g: [1, 1], desc: "Flat pods form and dry." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.9], desc: "Leafy growth into the dry season." },
  ],
  beds: [{ plantedDay: -1800 }],
});
