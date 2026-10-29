EA.addSpecies('boundary-tree', {
  name: "BOUNDARY TREE", short: "AKOKO", latin: "Newbouldia laevis", family: "Bignoniaceae (trumpet vine family)",
  origin: "West and Central Africa; planted across southern Nigeria",
  local: "AKOKO (YORUBA), OGILISI (IGBO)",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A slim, upright tree with leaves of several pairs of glossy, toothed leaflets. Clusters of large, tubular, purple-pink flowers crown the bare branch tips, followed by long, thin pods of winged seeds.",
  facts: ["SLIM UPRIGHT TREE", "LEAVES PINNATE, GLOSSY", "FLOWERS PURPLE TUBES", "PODS LONG, THIN", "PLANTED AS A MARKER"],
  uses: [
    ["BOUNDARY", "Often planted to mark farm and compound boundaries."],
    ["MEDICINE", "Leaves and bark are widely used in traditional remedies."],
  ],
  history: "Newbouldia is the only species in its genus. It is named after the botanist William Williamson Newbould.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 9, serr: 0.1, note: 'PINNATE LEAF, GLOSSY TOOTHED LEAFLETS' },
  form: { type: 'tree', height: 1.25, trunk: 0.5, branches: 6, nodes: 4, spread: 0.24, stemW: 0.06, leafSize: 1.7, arrange: 'opposite', flower: { type: 'cluster', size: 1.5, color: 2 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 90, g: [0.9, 0.9], desc: "Purple tubular flowers in the dry season." },
    { id: 'fruiting', label: "PODS", from: 90, to: 180, g: [0.9, 1], desc: "Thin pods ripen and split." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 0.9], desc: "Upright leafy crown." },
  ],
  beds: [{ plantedDay: -3600 }],
});
