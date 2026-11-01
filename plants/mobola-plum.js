EA.addSpecies('mobola-plum', {
  name: "MOBOLA PLUM", short: "MOBOLA", latin: "Parinari curatellifolia", family: "Chrysobalanaceae (coco plum family)",
  origin: "Savanna and woodland across tropical Africa, from Senegal to Chad and south",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "An evergreen tree up to 20 m, often with a dense, mushroom-shaped crown. Stiff, leathery leaves are grey-hairy beneath. Small scented white flowers give plum-like fruits that ripen orange-yellow.",
  facts: ["TREE UP TO 20 M", "CROWN MUSHROOM-SHAPED", "LEAVES GREY BENEATH", "FLOWERS WHITE, SCENTED", "FRUIT PLUM-LIKE"],
  uses: [
    ["FOOD", "The fruit is a prized snack and is made into drinks; seeds go into soup."],
    ["WOOD", "Very hard wood full of silica; good charcoal."],
    ["MEDICINE", "Leaves and bark are used for fever and wounds."],
  ],
  history: "Farmers often spare mobola plum when clearing land because its fruit is so valued.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'STIFF LEATHERY LEAF, GREY HAIRS BENEATH' },
  form: { type: 'tree', height: 1.25, trunk: 0.4, branches: 11, nodes: 5, spread: 0.46, stemW: 0.07, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 0.8, color: 3 } },
  seasons: [
    { id: 'fruiting', label: "FRUIT RIPENS", from: 0, to: 90, g: [1, 1], desc: "Fruit ripens in the dry season." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 210, g: [1, 1], desc: "Dense evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 210, to: 300, g: [1, 1], desc: "Small white flowers." },
    { id: 'vegetative', label: "FRUIT SWELLS", from: 300, to: 360, g: [1, 1], desc: "Fruit takes 9-10 months to ripen." },
  ],
  beds: [{ plantedDay: -7200 }],
});
