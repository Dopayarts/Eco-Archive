EA.addSpecies('obi-edun', {
  name: "OBI EDUN", latin: "Cola millenii", family: "Malvaceae (mallow family)",
  origin: "West Africa from Ivory Coast to Nigeria",
  local: "OBI EDUN (YORUBA)",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A deciduous shrub or small tree with glossy leaves. Its bright red fruit is a star of up to seven fingers joined at the centre, each holding seeds coated in thin, sweet-tart pulp.",
  facts: ["SHRUB OR SMALL TREE", "FRUIT A RED STAR", "UP TO 7 FINGERS", "PULP SWEET-TART", "A MONKEY KOLA"],
  uses: [
    ["FOOD", "The pulp around the seeds is sucked or licked off."],
    ["MEDICINE", "Leaves are used for ringworm, scabies and dysentery."],
  ],
  history: "Obi edun means kola joined together. It is one of several Nigerian monkey kolas.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'GLOSSY OVAL LEAF' },
  form: { type: 'tree', height: 1.1, trunk: 0.35, branches: 9, nodes: 5, spread: 0.36, stemW: 0.05, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 2 }, fruit: { type: 'berry', size: 2.2, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 60, g: [0.7, 0.6], desc: "Thin crown in the harmattan." },
    { id: 'fruiting', label: "RED FRUITS", from: 60, to: 150, g: [0.6, 1], desc: "Red star fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 360, g: [1, 0.7], desc: "Glossy leaves in the rains." },
  ],
  beds: [{ plantedDay: -3600 }],
});
