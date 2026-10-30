EA.addSpecies('ukpo', {
  name: "UKPO", latin: "Mucuna sloanei", family: "Fabaceae (legume family)",
  origin: "Tropical Africa and America; grown in parts of southern Nigeria",
  local: "UKPO (IGBO)",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A climbing vine up to 6 m with leaves of three leaflets, silky beneath. Hanging bunches of large yellow-green flowers give ridged black pods covered in stinging hairs, each holding 2-3 big, round, dark seeds.",
  facts: ["CLIMBER UP TO 6 M", "LEAVES OF 3 LEAFLETS", "FLOWERS YELLOW-GREEN", "PODS RIDGED, STINGING HAIRS", "CALLED HORSE-EYE BEAN"],
  uses: [
    ["FOOD", "The seeds are ground and used to thicken soups in south-eastern Nigeria."],
    ["DYE", "A black dye from the plant colours fibre and leather in Nigeria."],
    ["CAUTION", "Pod hairs sting the skin; raw seeds may hold harmful compounds, so cook them well."],
  ],
  history: "Ukpo is the Igbo name for horse-eye bean seed, sold in markets as a soup thickener alongside achi and ofor.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, compound: 'trifoliate', leaflets: 3, note: 'THREE LEAFLETS, SILKY BENEATH' },
  form: { type: 'vine', height: 1.15, nodes: 12, leafSize: 1.7, droop: 0.3, flower: { type: 'cluster', size: 1.3, color: 3 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Old vines rest." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.8, 1], desc: "Climbs fast with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Hanging flower bunches." },
    { id: 'fruiting', label: "PODS", from: 270, to: 360, g: [1, 0.9], desc: "Hairy pods ripen black." },
  ],
  beds: [{ plantedDay: -720 }],
});
