EA.addSpecies('ekebergia', {
  name: "EKEBERGIA", latin: "Ekebergia senegalensis", family: "Meliaceae (mahogany family)",
  origin: "Senegal to Angola; in northern and southern Nigeria, collected near Zaria",
  local: "IROSUN",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "A deciduous tree up to 25 m with a straight trunk and grey-brown bark that turns rough and fissured. Alternate pinnate leaves carry dark green, toothed, elliptic leaflets. Small fragrant white flowers grow in sprays, followed by oval one-seeded fruits.",
  facts: ["TREE TO 25 M", "FISSURED BARK", "PINNATE LEAVES", "FRAGRANT WHITE", "SAVANNA TREE"],
  uses: [
    ["TIMBER", "Its wood is used as timber."],
    ["MEDICINE", "Bark and leaves are used for fever, malaria and stomach problems; it is also an emetic for dysentery and cough."],
  ],
  history: "Also called Senegal mahogany. Its leaves, bark and roots all held back bacteria in a Zaria study.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', note: 'TOOTHED LEAFLETS' },
  form: { type: 'tree', height: 1.3, trunk: 0.5, branches: 8, nodes: 5, spread: 0.22, stemW: 0.08, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 'white' }, fruit: { type: 'berry', size: 0.4, color: 2 } },
  seasons: [
    { id: 'rest', label: "LEAFLESS", from: 30, to: 120, g: [1, 0.5], desc: "Leaves drop in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 180, g: [0.6, 1], desc: "Fragrant white flowers." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 270, g: [1, 1], desc: "Oval fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "Full crown." },
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 30, g: [1, 0.8], desc: "Leaves start to fall." },
  ],
  beds: [{ plantedDay: -5000 }],
});
