EA.addSpecies('crabwood', {
  name: "CRABWOOD", latin: "Carapa procera", family: "Meliaceae (mahogany family)",
  origin: "West African tropics and the Amazon; grows in lowland rainforest at Benin City, Nigeria",
  local: "AGOGO (YORUBA), IRERE (BENIN), NKWO (IGBO)",
  added: '2026-11-20',
  kind: 'perennial',
  summary: "A deciduous or semi-evergreen tree up to 35 m with a straight trunk clear for 20 m and grey-brown bark. Pinnate leaves carry 6-9 pairs of leaflets. Small whitish flowers give fruits that split into five parts, releasing 12-20 shiny dark brown seeds about 3 cm long.",
  facts: ["TREE TO 35 M", "STRAIGHT TRUNK", "PINNATE LEAVES", "SMALL WHITE FLOWERS", "OILY BROWN SEEDS"],
  uses: [
    ["OIL", "Seed oil is one of the best-selling medicinal oils; it repels mosquitoes and is rubbed on the skin."],
    ["TIMBER", "The wood makes fine furniture, cabinets, stairs, floors and veneer."],
    ["CONSERVE", "It is increasingly threatened by overharvesting."],
  ],
  history: "Also called bastard mahogany, for its mahogany-like wood.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', note: 'PINNATE LEAF, 6-9 PAIRS' },
  form: { type: 'tree', height: 1.5, trunk: 0.55, branches: 9, nodes: 5, spread: 0.22, stemW: 0.09, leafSize: 1.5, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'big', size: 1.0, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Tall crown." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 200, g: [1, 1], desc: "Small whitish flowers." },
    { id: 'fruiting', label: "FRUITING", from: 200, to: 330, g: [1, 1], desc: "Fruits split to drop seeds." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -6000 }],
});
