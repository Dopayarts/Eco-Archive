EA.addSpecies('silk-cotton', {
  name: "SILK COTTON TREE", short: "ARABA", latin: "Ceiba pentandra", family: "Malvaceae (mallow family)",
  origin: "Tropical America and Africa; across Nigeria from the forest to the savanna",
  local: "ARABA (YORUBA), RIMI (HAUSA)",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A towering tree with a straight, often spiny trunk, huge buttresses and horizontal branches in tiers. Hand-shaped leaves of 5-9 leaflets drop in the dry season, when pale flowers open; then long pods split to release fluffy kapok fibre.",
  facts: ["TREE UP TO 60-70 M", "TRUNK SPINY WHEN YOUNG, BUTTRESSED", "LEAVES PALMATE, 5-9 LEAFLETS", "FLOWERS PALE, OPEN AT NIGHT", "PODS FULL OF KAPOK FLUFF"],
  uses: [
    ["FIBRE", "Kapok fluff stuffs pillows and mattresses."],
    ["CUSTOM", "Revered in Hausa tradition as a home of ancestral spirits; many places are named after the rimi."],
  ],
  history: "Araba trees are landmarks in Yoruba towns, and in the north places such as Ungwan Rimi in Kaduna take the rimi's name.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, compound: 'palmate', leaflets: 7, note: 'HAND-SHAPED LEAF, 5-9 NARROW LEAFLETS' },
  form: { type: 'tree', height: 1.6, trunk: 0.6, branches: 8, nodes: 3, spread: 0.36, stemW: 0.1, leafSize: 1.5, arrange: 'alternate', flower: { type: 'cluster', size: 1.2, color: 3 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 30, g: [0.7, 0.7], desc: "Bare branches in the harmattan." },
    { id: 'bloom', label: "IN BLOOM", from: 30, to: 70, g: [0.7, 0.7], desc: "Pale flowers open on bare branches and feed bats." },
    { id: 'fruiting', label: "PODS SPLIT", from: 70, to: 120, g: [0.7, 0.9], desc: "Pods split and kapok drifts on the wind." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 330, g: [1, 1], desc: "Huge tiered crown through the rains." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.7], desc: "Leaves drop as the dry season begins." },
  ],
  beds: [{ plantedDay: -21600 }],
});
