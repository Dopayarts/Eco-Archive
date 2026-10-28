EA.addSpecies('sweet-detar', {
  name: "SWEET DETAR", short: "OFO", latin: "Detarium microcarpum", family: "Fabaceae (pea family)",
  origin: "West African savanna; across Nigeria",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A small, crooked savanna tree with leathery leaves of a few rounded leaflets. Its round, flattened fruits have a hard stone wrapped in sweet, fibrous, mealy green pulp.",
  facts: ["SMALL SAVANNA TREE", "LEAFLETS ROUNDED, LEATHERY", "FRUIT ROUND, FLATTENED", "PULP SWEET, FIBROUS", "SEEDS THICKEN SOUP"],
  uses: [
    ["FOOD", "Ground seeds (ofo) thicken soups in Bayelsa and nearby areas."],
    ["FOOD", "The sweet pulp around the stone is eaten fresh."],
  ],
  history: "Ofo seeds are rich in carbohydrates and minerals. A study in Otuoke, Bayelsa State, measured their high magnesium and potassium.",
  leaf: { shape: 'oval', len: 0.9, wid: 0.6, compound: 'pinnate', leaflets: 8, note: 'PINNATE LEAF, ROUNDED LEATHERY LEAFLETS' },
  form: { type: 'tree', height: 1.0, trunk: 0.35, branches: 9, nodes: 4, spread: 0.36, stemW: 0.07, leafSize: 1.7, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 0.9, hang: true, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "FRUITS RIPE", from: 0, to: 60, g: [0.85, 0.85], desc: "Round fruits drop in the dry season." },
    { id: 'regrowth', label: "NEW LEAVES", from: 60, to: 120, g: [0.85, 1], desc: "Fresh leaves flush." },
    { id: 'bloom', label: "IN BLOOM", from: 120, to: 180, g: [1, 1], desc: "Small white flowers." },
    { id: 'fruiting', label: "FRUIT SWELLING", from: 180, to: 360, g: [1, 0.9], desc: "Fruits swell and harden." },
  ],
  beds: [{ plantedDay: -5400 }],
});
