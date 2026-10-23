EA.addSpecies('umbrella-tree', {
  name: "UMBRELLA TREE", short: "UMBRELLA", latin: "Musanga cecropioides", family: "Urticaceae (nettle family)",
  origin: "West and Central Africa; forest clearings in southern Nigeria",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A fast-growing pioneer tree with stilt roots and an umbrella-shaped crown of huge, hand-like leaves split into 12-15 narrow segments, greyish underneath. It springs up in forest gaps and farm fallow.",
  facts: ["TREE UP TO 18 M", "STILT ROOTS AT THE BASE", "LEAVES HAND-LIKE, 12-15 SEGMENTS", "GROWS UP TO 5 M A YEAR", "LIVES ONLY ABOUT 20 YEARS"],
  uses: [
    ["WOOD", "Very light wood for drums, roofing, canoes and utensils."],
    ["MEDICINE", "Bark is used in remedies for chest ailments and coughs."],
    ["FARMING", "Shades coffee and enriches soil with its leaf litter."],
  ],
  history: "The umbrella tree is the first tree to fill a gap in the rainforest, shading the ground so slower forest trees can grow back beneath it.",
  leaf: { shape: 'lance', len: 1, wid: 0.22, compound: 'palmate', leaflets: 13, note: 'HUGE HAND-LIKE LEAF, 12-15 NARROW SEGMENTS, GREY BELOW' },
  form: { type: 'tree', height: 1.45, trunk: 0.65, branches: 8, nodes: 3, spread: 0.36, stemW: 0.07, leafSize: 2.2, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 0.9, color: 2 }, fruit: { type: 'big', size: 0.9, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Evergreen umbrella crown." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [1, 1], desc: "Small flower heads form." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 210, g: [1, 1], desc: "Soft fruits ripen and feed bats, birds and elephants." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "Fast growth through the rains." },
  ],
  beds: [{ plantedDay: -2880 }],
});
