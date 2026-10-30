EA.addSpecies('achi', {
  name: "ACHI", latin: "Brachystegia eurycoma", family: "Fabaceae (legume family)",
  origin: "Southern Nigeria and western Cameroon; riverine forest",
  local: "ACHI (THE SEED FLOUR)",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A large tree up to 35 m with flaking grey-brown bark and leaves of 4-6 pairs of lopsided leaflets. Flat pods burst open to throw out shiny brown, disc-shaped seeds.",
  facts: ["TREE UP TO 35 M", "BARK FLAKES IN PATCHES", "LEAVES PINNATE", "PODS BURST OPEN", "SEEDS SHINY, DISC-SHAPED"],
  uses: [
    ["FOOD", "The seeds are ground into achi, a flour that thickens soups."],
    ["WOOD", "Used locally for building, furniture and flooring."],
    ["MEDICINE", "Igbo people use the plant against worms."],
  ],
  history: "Achi is found almost only in Nigeria and western Cameroon, mostly along forest rivers. Its seeds are sold for soup.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 10, note: 'PINNATE LEAF, LOPSIDED LEATHERY LEAFLETS' },
  form: { type: 'tree', height: 1.45, trunk: 0.45, branches: 10, nodes: 5, spread: 0.42, stemW: 0.08, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 1.2, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Broad crown over the river." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Hairy flower clusters in April-May." },
    { id: 'vegetative', label: "PODS FORM", from: 150, to: 240, g: [1, 1], desc: "Flat pods grow." },
    { id: 'fruiting', label: "PODS BURST", from: 240, to: 360, g: [1, 1], desc: "Pods burst and throw seeds, September-January." },
  ],
  beds: [{ plantedDay: -7200 }],
});
