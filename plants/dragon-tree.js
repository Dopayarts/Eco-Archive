EA.addSpecies('dragon-tree', {
  name: "DRAGON TREE", short: "DRAGONTREE", latin: "Dracaena mannii", family: "Asparagaceae (asparagus family)",
  origin: "West Africa from Senegal to Angola, and east Africa; found in Nigeria",
  added: '2026-11-21',
  kind: 'perennial',
  summary: "An evergreen tree up to 35 m with white, papery, smooth bark marked by crescent leaf scars. Narrow leaves up to 40 cm long sit in clusters at the branch tips. Cream-white flowers smell sweet when they open at night, and the 3 cm berries turn from brown to bright red.",
  facts: ["EVERGREEN TO 35 M", "WHITE PAPERY BARK", "LEAVES IN TUFTS", "NIGHT-SCENTED FLOWERS", "BRIGHT RED BERRIES"],
  uses: [
    ["FOOD", "Young leaves and shoots are cooked as a vegetable, or with rice and beans."],
    ["MEDICINE", "Roots are soaked in cold water for stomach-ache and chest pains; leaf extracts are used for pain."],
    ["SOAP", "Leaf ash is used to make soap."],
    ["CAUTION", "The bark is used as an arrow poison and the ripe fruit as a fish poison."],
  ],
  history: "Its English name is small-leaved dragon tree. It was first collected in Senegambia in 1829.",
  leaf: { shape: 'blade', len: 1, wid: 0.14, note: 'NARROW LEAF TO 40 CM' },
  form: { type: 'tree', height: 1.5, trunk: 0.55, branches: 7, nodes: 5, spread: 0.22, stemW: 0.08, leafSize: 2.0, arrange: 'spiral', droop: 0.3, flower: { type: 'plume', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Tufts of narrow leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Night-scented flowers." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 330, g: [1, 1], desc: "Berries turn red." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -8000 }],
});
