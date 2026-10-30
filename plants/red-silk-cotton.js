EA.addSpecies('red-silk-cotton', {
  name: "RED KAPOK", latin: "Bombax costatum", family: "Malvaceae (mallow family)",
  origin: "West and Central African savanna, including Nigeria",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A savanna tree up to 25 m with thick, corky bark and sharp spines on young trunks. Leaves are hand-shaped with 5-7 leaflets. Deep red or orange, tulip-like flowers open on the bare branches in the dry season, and pods split to show silky kapok.",
  facts: ["TREE UP TO 25 M", "BARK THICK, CORKY", "YOUNG TRUNK SPINY", "RED FLOWERS ON BARE TWIGS", "PODS FULL OF KAPOK"],
  uses: [
    ["FOOD", "The dried flower cups are ground for sauces, and young fruit is dried for meals."],
    ["KAPOK", "Pod fibre stuffs pillows and mattresses."],
    ["WOOD", "The soft wood makes canoes and crates; the flowers feed bees."],
  ],
  history: "Red kapok survives savanna fires thanks to its thick bark, but fires often burn its dry-season flowers.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'palmate', leaflets: 6, note: 'HAND-SHAPED LEAF OF 5-7 LEAFLETS' },
  form: { type: 'tree', height: 1.35, trunk: 0.5, branches: 8, nodes: 4, spread: 0.36, stemW: 0.08, leafSize: 1.7, arrange: 'alternate', flower: { type: 'single', size: 1.5, color: 2 }, fruit: { type: 'pod', size: 1.0, color: 1 } },
  seasons: [
    { id: 'bloom', label: "RED FLOWERS", from: 0, to: 90, g: [0.4, 0.4], desc: "Leafless branches covered in red flowers." },
    { id: 'fruiting', label: "KAPOK PODS", from: 90, to: 150, g: [0.4, 0.8], desc: "Pods split and kapok floats away." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [1, 1], desc: "Full leaf in the rains." },
    { id: 'dormant', label: "LEAVES FALL", from: 300, to: 360, g: [1, 0.4], desc: "Leaves drop as the dry season begins." },
  ],
  beds: [{ plantedDay: -7200 }],
});
