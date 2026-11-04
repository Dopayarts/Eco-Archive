EA.addSpecies('sausage-tree', {
  name: "SAUSAGE TREE", short: "SAUSAGE", latin: "Kigelia africana", family: "Bignoniaceae (trumpet-creeper family)",
  origin: "Tropical Africa; savanna, riverbanks and open woodland in Nigeria",
  local: "PANDORO (YORUBA)",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "A tree up to about 25 m with a dense, rounded crown and leaves of 7-11 leathery leaflets. Large dark maroon flowers hang on rope-like stalks up to 90 cm long. They give grey-brown, sausage-shaped fruits up to 1 m long and up to 12 kg.",
  facts: ["TREE UP TO 25 M", "FLOWERS DARK MAROON", "FLOWERS SMELL AT NIGHT", "POLLINATED BY BATS", "FRUIT UP TO 1 M LONG"],
  uses: [
    ["MEDICINE", "The fruit and bark are used in traditional remedies across Africa."],
    ["WOOD", "Wood is used for canoes, fence posts, tool handles and fuel."],
    ["CAUTION", "Raw fruit is poisonous and strongly purgative, and can blister the skin."],
  ],
  history: "The flowers give off a strong smell at night that draws bats, which pollinate them. In Nigeria the fruits ripen from January to March and drop when ready.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, compound: 'pinnate', leaflets: 7, note: 'LEATHERY LEAFLETS, ONE AT THE TIP' },
  form: { type: 'tree', height: 1.25, trunk: 0.55, branches: 11, nodes: 6, spread: 0.32, stemW: 0.08, leafSize: 2.0, arrange: 'opposite', flower: { type: 'single', size: 1.3, color: 2 }, fruit: { type: 'big', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "SAUSAGE FRUITS", from: 0, to: 150, g: [1, 1], desc: "Fruits ripen January to March and fall." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 270, g: [1, 1], desc: "Dense crown in the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 360, g: [1, 1], desc: "Maroon flowers on long ropes." },
  ],
  beds: [{ plantedDay: -9000 }],
});
