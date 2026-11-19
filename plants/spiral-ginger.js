EA.addSpecies('spiral-ginger', {
  name: "SPIRAL GINGER", short: "SPIRALGING", latin: "Costus lucanusianus", family: "Costaceae (spiral ginger family)",
  origin: "Forest belt of tropical Africa from Guinea to Ethiopia and DR Congo; in southern Nigeria it crosses with Costus afer",
  added: '2026-11-19',
  kind: 'perennial',
  summary: "A perennial herb up to 3 m that grows from a rhizome. Its leaves wind in a spiral up the stem, with green sheaths blotched purple. White flowers have a lip edged dark red with a yellow centre line. Capsules hold black seeds with white arils.",
  facts: ["HERB TO 3 M", "SPIRAL LEAVES", "PURPLE-BLOTCHED SHEATHS", "WHITE AND RED FLOWER", "FLOWERS ALL YEAR"],
  uses: [
    ["MEDICINE", "Widely used in tropical Africa for cough, rheumatism and stomach complaints."],
    ["CUSTOM", "It is used in ceremonies and religious rites, and grown as an ornamental."],
    ["OTHER", "Stem sap is used to set rubber latex."],
  ],
  history: "In southern Nigeria it forms hybrids with its cousin Costus afer, the ginger lily. Its rhizome is rich in diosgenin.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'SIMPLE LEAF IN A SPIRAL' },
  form: { type: 'herb', height: 1.1, branches: 2, nodes: 9, arrange: 'spiral', leafSize: 0.9, droop: 0.15, flower: { type: 'head', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Spiral stems stand in shade." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 270, g: [1, 1], desc: "Flowers whenever the soil is moist." },
    { id: 'fruiting', label: "CAPSULES", from: 270, to: 360, g: [1, 1], desc: "Capsules of black seeds." },
  ],
  beds: [{ plantedDay: -700 }],
});
