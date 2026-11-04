EA.addSpecies('rosary-pea', {
  name: "ROSARY PEA", short: "ROSARY PEA", latin: "Abrus precatorius", family: "Fabaceae (legume family)",
  origin: "Tropics; grows wild in Nigeria",
  local: "OJU OLOGBO (YORUBA)",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "A slender climbing vine that twines through shrubs and hedges, with feathery leaves of many small leaflets. Pea-like pink flowers give short pods that curl open to show hard, glossy seeds, mostly scarlet with a black eye.",
  facts: ["CLIMBING VINE", "FEATHERY LEAVES", "FLOWERS PINK, PEA-LIKE", "SEEDS RED WITH BLACK EYE", "SEEDS DEADLY IF CHEWED"],
  uses: [
    ["BEADS", "The seeds are strung as beads and were once used as weights."],
    ["MEDICINE", "Roots and leaves are used in herbal remedies, such as for coughs and colds."],
    ["CAUTION", "The seeds hold abrin, one of the strongest plant poisons; one well-chewed seed can kill."],
  ],
  history: "The Yoruba name, oju ologbo, means cat's eye. The hard seeds keep the same weight when wet or dry, which made them useful for weighing gold in India.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 16, note: 'MANY SMALL LEAFLETS' },
  form: { type: 'vine', height: 1.05, nodes: 12, leafSize: 1.5, droop: 0.3, flower: { type: 'cluster', size: 0.9, color: 2 }, fruit: { type: 'pod', size: 0.8, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 120, g: [0.8, 0.8], desc: "Pods hang open." },
    { id: 'regrowth', label: "REGROWTH", from: 120, to: 210, g: [0.8, 1], desc: "New shoots with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 210, to: 280, g: [1, 1], desc: "Pink flower clusters." },
    { id: 'fruiting', label: "RED SEEDS", from: 280, to: 360, g: [1, 0.8], desc: "Pods split to show red seeds." },
  ],
  beds: [{ plantedDay: -1080 }],
});
