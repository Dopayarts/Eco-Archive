EA.addSpecies('dry-zone-cedar', {
  name: "DRY-ZONE CEDAR", short: "CEDAR", latin: "Pseudocedrela kotschyi", family: "Meliaceae (mahogany family)",
  origin: "Savanna from Senegal east to western Ethiopia and Uganda, including Nigeria",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "A small savanna tree up to 12-20 m. Its grey bark has long cracks, and the inner bark has red veins. Leaves have 8-18 leaflets. Small whitish flowers give upright club-shaped capsules 7-14 cm long that split into 5 woody parts.",
  facts: ["TREE UP TO 12-20 M", "FISSURED GREY BARK", "8-18 LEAFLETS", "WHITISH FLOWERS", "5-PART WOODY CAPSULE"],
  uses: [
    ["MEDICINE", "In Nigeria the bark treats sleeping sickness in livestock and the leaves are given against worms."],
    ["FARMING", "In Nigeria the leaves are used as green manure."],
    ["TIMBER", "Valued for fine joinery and furniture; twigs are chewing sticks and the bark gives a brown dye."],
    ["CAUTION", "In Nigeria its bark is an ingredient of arrow poison."],
  ],
  history: "Also called hard cedar-mahogany. It is the only species in its genus.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, compound: 'pinnate', leaflets: 10, note: 'PINNATE LEAF, 8-18 LEAFLETS' },
  form: { type: 'tree', height: 1.0, trunk: 0.45, branches: 8, nodes: 5, spread: 0.32, stemW: 0.07, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'pod', size: 0.9, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 90, g: [0.7, 0.6], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 140, g: [0.6, 1], desc: "Whitish flowers." },
    { id: 'fruiting', label: "CAPSULES", from: 140, to: 230, g: [1, 1], desc: "Woody capsules split." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 230, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -3000 }],
});
