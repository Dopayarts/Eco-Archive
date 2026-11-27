EA.addSpecies('forest-burr', {
  name: "FOREST BURR", short: "FORESTBURR", latin: "Pupalia lappacea", family: "Amaranthaceae (amaranth family)",
  origin: "Tropical Africa and Asia; native in Nigeria and widely used around Nsukka, Enugu State",
  added: '2026-11-27',
  kind: 'perennial',
  summary: "A perennial herb 0.6-0.9 m, or sprawling and scrambling to 2 m, with branched stems swollen at the joints. Leaves are oval to round, 2-12 cm. Flowers sit in clusters of three on spikes; each cluster falls as a spiny burr up to 2.5 cm.",
  facts: ["HERB TO 2 M", "SWOLLEN JOINTS", "SPINY BURRS", "WEED OF WASTE GROUND", "NSUKKA MEDICINE"],
  uses: [
    ["MEDICINE", "In Nigeria it is used for urinary pain, cystitis and womb problems; Nsukka healers use the leaves for fractures, boils, cough and fever."],
    ["FOOD", "In Ghana the leaves go into soup."],
    ["CAUTION", "Unwashed leaves have caused colic, and high doses affected sperm in rat tests."],
  ],
  history: "Also called creeping cock's comb. Its fluffy fruits are balled up to strain milk.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'OPPOSITE LEAF' },
  form: { type: 'herb', height: 0.8, branches: 5, nodes: 6, arrange: 'opposite', leafSize: 0.7, droop: 0.3, flower: { type: 'spike', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.25, color: 2 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.6, 1], desc: "New shoots." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Flower spikes." },
    { id: 'fruiting', label: "BURRS", from: 300, to: 360, g: [1, 1], desc: "Spiny burrs." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.6], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -400 }],
});
