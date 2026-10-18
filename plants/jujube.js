EA.addSpecies('jujube', {
  name: "JUJUBE", latin: "Ziziphus mauritiana", family: "Rhamnaceae (buckthorn family)",
  origin: "South Asia; long grown and wild in the dry north of Nigeria",
  local: "MAGARYA (HAUSA)",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A spiny, spreading shrub or small tree with drooping branches and small oval leaves, glossy above and pale and furry below. Tiny greenish flowers become round fruits that ripen from green to yellow and reddish-brown, crisp and sweet-sour.",
  facts: ["SHRUB OR TREE 3-10 M", "LEAVES SMALL, OVAL, 3 VEINS, FURRY BELOW", "PAIRED SPINES, ONE HOOKED", "FRUIT ROUND, CRISP, ONE STONE", "THRIVES IN HEAT AND DROUGHT"],
  uses: [
    ["FOOD", "Fruits are eaten fresh or dried; the pulp is made into cakes (tuwon magarya) and a drink."],
    ["FODDER", "Leaves feed goats and camels."],
    ["FENCING", "Thorny branches make livestock fences."],
  ],
  history: "Brought to Africa from South Asia long ago, it has naturalised across the Sahel, and in northern Nigeria its fruits are dried and sold in markets.",
  leaf: { shape: 'oval', len: 0.8, wid: 0.65, note: 'SMALL OVAL LEAF, 3 MAIN VEINS, FURRY UNDERSIDE' },
  form: { type: 'tree', height: 1.05, trunk: 0.35, branches: 9, nodes: 5, spread: 0.32, stemW: 0.04, leafSize: 1.3, arrange: 'alternate', droop: 0.5, flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'big', size: 0.6, hang: true, color: 2 } },
  seasons: [
    { id: 'harvest', label: "FRUIT SEASON", from: 0, to: 90, g: [1, 1], desc: "Ripe fruits are picked and dried in the sun." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 180, g: [0.9, 1], desc: "New growth with the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 180, to: 270, g: [1, 1], desc: "Tiny greenish flowers buzz with bees." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 270, to: 360, g: [1, 1], desc: "Green fruits swell as the rains end." },
  ],
  beds: [{ plantedDay: -2880 }],
});
