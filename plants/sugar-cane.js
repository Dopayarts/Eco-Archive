EA.addSpecies('sugar-cane', {
  name: "SUGAR CANE", short: "IREKE", latin: "Saccharum officinarum", family: "Poaceae (grass family)",
  origin: "New Guinea; grown across Nigeria, with big estates at Bacita and Numan",
  local: "IREKE (YORUBA)",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A giant clumping grass with thick, jointed, juicy canes and long arching leaf blades. Mature canes may send up a feathery silver flower plume called an arrow.",
  facts: ["GRASS 2-5 M", "CANES THICK, JOINTED, SWEET JUICE", "LEAVES LONG BLADES, SHARP EDGES", "FLOWER A FEATHERY PLUME (ARROW)", "REGROWS FROM CUT STUMPS"],
  uses: [
    ["FOOD", "Canes are peeled and chewed as a snack all over Nigeria."],
    ["INDUSTRY", "Crushed for sugar, molasses and ethanol."],
    ["FODDER", "Tops and leaves feed livestock; the crushed fibre is burned as fuel."],
  ],
  history: "Sugar cane spread from New Guinea across Asia and Africa. In Yoruba history ireke was grown and chewed long before sugar was refined from it.",
  leaf: { shape: 'blade', len: 1, wid: 0.3, note: 'LONG ARCHING BLADE, WHITE MIDRIB, SHARP EDGES' },
  form: { type: 'grass', height: 1.35, count: 34, droop: 0.6, stems: 3, flower: { type: 'plume', size: 1.2, color: 3 } },
  seasons: [
    { id: 'harvest', label: "CANE HARVEST", from: 0, to: 90, g: [1, 0.5], desc: "Ripe canes are cut in the dry season." },
    { id: 'regrowth', label: "RATOON GROWTH", from: 90, to: 240, g: [0.5, 0.9], desc: "New shoots grow from the stumps with the rains." },
    { id: 'vegetative', label: "CANES THICKEN", from: 240, to: 300, g: [0.9, 1], desc: "Canes fill with sugar." },
    { id: 'bloom', label: "IN ARROW", from: 300, to: 360, g: [1, 1], desc: "Some canes send up silvery plumes." },
  ],
  beds: [{ plantedDay: -720 }],
});
