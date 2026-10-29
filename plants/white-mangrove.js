EA.addSpecies('white-mangrove', {
  name: "WHITE MANGROVE", short: "WHITE MANG", latin: "Avicennia germinans", family: "Acanthaceae (acanthus family)",
  origin: "Atlantic coasts of West Africa and the Americas; Nigerian mangroves",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A mangrove tree whose roots send up many pencil-like breathing roots through the mud around it. Leathery leaves are powdery white underneath and often crusted with salt crystals they push out. Small white flowers draw bees.",
  facts: ["TREE UP TO 17 M", "BREATHING ROOTS IN THE MUD", "LEAVES WHITE BELOW", "SALT CRYSTALS ON LEAVES", "FLOWERS WHITE, BEE-FRIENDLY"],
  uses: [
    ["WOOD", "Used for boats, wharves, piles and firewood, and to smoke fish."],
    ["DYE", "Bark is rich in tannin and gives a reddish dye."],
    ["BEES", "Flowers are good nectar for honey bees."],
  ],
  history: "In Nigeria white mangrove dominates on the less acid, calcium-rich mud, often beside spreading nipa palm, and suffers from oil pollution.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'LEATHERY LEAF, POWDERY WHITE UNDERSIDE, SALT CRYSTALS' },
  form: { type: 'tree', height: 1.25, trunk: 0.35, branches: 11, nodes: 5, spread: 0.36, stemW: 0.07, leafSize: 2.1, arrange: 'opposite', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'big', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen; salt glints on the leaves." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 180, g: [1, 1], desc: "Clusters of small white flowers buzz with bees." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 270, g: [1, 1], desc: "Flattened fruits drop and float away." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "Evergreen crown over the mud." },
  ],
  beds: [{ plantedDay: -7200 }],
});
