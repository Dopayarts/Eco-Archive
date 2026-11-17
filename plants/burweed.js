EA.addSpecies('burweed', {
  name: "BURWEED", latin: "Triumfetta cordifolia", family: "Malvaceae (mallow family)",
  origin: "Moister parts of tropical Africa, on forest edges, roadsides and disturbed land; identified at FRIN, Ibadan",
  added: '2026-11-17',
  kind: 'perennial',
  summary: "A shrub up to about 2.5 m with red-brown bark. Leaves have a heart-shaped base and double-toothed edges, sometimes with 3 lobes. Flowers have five white, yellow or orange petals, and the round glossy dark brown fruit is covered in bristles.",
  facts: ["SHRUB TO 2.5 M", "HEART-BASED LEAVES", "YELLOW FLOWERS", "BRISTLY BUR FRUIT", "STRONG BARK FIBRE"],
  uses: [
    ["FIBRE", "Bark fibre makes strong rope, bowstrings, fishing lines, brooms, baskets and mats."],
    ["FOOD", "Bark slime thickens soups; young leaves are cooked as a vegetable."],
    ["MEDICINE", "Leaf brews are used for dysentery, diarrhoea, ulcers and indigestion."],
  ],
  history: "Also called cordleaf burbark. Bees visit it for nectar and pollen.",
  leaf: { shape: 'heart', len: 1, wid: 0.75, note: 'DOUBLE-TOOTHED LEAF' },
  form: { type: 'shrub', height: 0.8, branches: 6, nodes: 6, trunk: 0.25, spread: 0.35, arrange: 'alternate', leafSize: 0.7, droop: 0.2, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 80, g: [0.8, 0.7], desc: "Growth slows." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 80, to: 200, g: [0.8, 1], desc: "Leafy shoots." },
    { id: 'bloom', label: "IN FLOWER", from: 200, to: 270, g: [1, 1], desc: "Yellow flowers." },
    { id: 'fruiting', label: "BURS", from: 270, to: 360, g: [1, 1], desc: "Bristly fruits." },
  ],
  beds: [{ plantedDay: -800 }],
});
