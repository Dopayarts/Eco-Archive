EA.addSpecies('christmas-rose', {
  name: "CHRISTMAS ROSE", short: "XMAS ROSE", latin: "Combretum racemosum", family: "Combretaceae (combretum family)",
  origin: "Tropical Africa; widespread in southeastern Nigeria, collected at Ngwo, Enugu State",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A straggling, scrambling shrub widespread across Africa that bears a mass of crimson flowers.",
  facts: ["STRAGGLING SHRUB", "MASS OF CRIMSON", "SCRAMBLES", "SOUTHEAST NIGERIA", "WORM REMEDY"],
  uses: [
    ["MEDICINE", "Used for ulcers, worms, infections and sleeping sickness; an Enugu study found its leaves active against trypanosomes."],
    ["CAUTION", "It contains cardiac glycosides and saponins; high doses made mice weak for a while."],
  ],
  history: "Called Christmas rose in southern Nigeria.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE LEAF' },
  form: { type: 'shrub', height: 1.0, branches: 7, nodes: 6, arrange: 'opposite', leafSize: 0.7, droop: 0.35, flower: { type: 'cluster', size: 0.8, color: 1 }, fruit: { type: 'pod', size: 0.4, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 330, g: [1, 1], desc: "Scrambling stems." },
    { id: 'bloom', label: "IN FLOWER", from: 330, to: 360, g: [1, 1], desc: "Crimson flowers." },
    { id: 'fruiting', label: "FRUITING", from: 0, to: 90, g: [1, 1], desc: "Winged fruits." },
    { id: 'rest', label: "RESTING", from: 90, to: 180, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -1500 }],
});
