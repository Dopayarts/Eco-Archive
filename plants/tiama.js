EA.addSpecies('tiama', {
  name: "TIAMA", latin: "Entandrophragma angolense", family: "Meliaceae (mahogany family)",
  origin: "Tropical Africa from Sierra Leone to Uganda, including Nigeria",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A huge tree up to 60 m with buttresses up to 6 m. Grey-brown bark flakes off, leaving hollow scars. Leaves up to 50 cm have 4-11 pairs of leaflets. Greenish-white flowers give hanging capsules up to 22 cm long.",
  facts: ["TREE UP TO 60 M", "BUTTRESSES TO 6 M", "FLAKING BARK", "LEAVES UP TO 50 CM", "HANGING 22 CM CAPSULE"],
  uses: [
    ["TIMBER", "Its wood is traded as tiama, a cousin of sapele."],
    ["MEDICINE", "The bark is used for fever and gut problems."],
    ["GROWTH", "In Nigeria seedlings grew slowly, reaching only about 3 m."],
  ],
  history: "It flowers from November to February. It is rated Near Threatened.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 8, note: 'LONG LEAF, 4-11 PAIRS' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.09, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Flowers November to February." },
    { id: 'fruiting', label: "CAPSULES", from: 120, to: 240, g: [1, 1], desc: "Long capsules hang." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -7000 }],
});
