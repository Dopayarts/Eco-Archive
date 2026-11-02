EA.addSpecies('benin-mahogany', {
  name: "BENIN MAHOGANY", short: "BENIN MAH", latin: "Khaya grandifoliola", family: "Meliaceae (mahogany family)",
  origin: "West and Central Africa from Guinea to Uganda, including Nigeria",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A tall tree up to 40 m with buttresses and grey-brown bark that flakes in small round scales. Leaves have 3-5 pairs of big leaflets, red when young. Scented whitish flowers give round woody capsules that split into five, full of winged seeds.",
  facts: ["TREE UP TO 40 M", "BUTTRESSED TRUNK", "YOUNG LEAVES RED", "CAPSULE SPLITS IN FIVE", "VULNERABLE SPECIES"],
  uses: [
    ["TIMBER", "Valued for furniture, joinery and decorative veneer."],
    ["MEDICINE", "The bitter bark is widely used against malaria fever and stomach complaints; extracts acted against the malaria parasite in lab tests."],
  ],
  history: "Benin mahogany is listed as vulnerable because of heavy felling and forest loss. Its bark is a malaria remedy in south-west Nigeria.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 8, note: 'PINNATE LEAF, BIG POINTED LEAFLETS, RED WHEN YOUNG' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 9, nodes: 4, spread: 0.42, stemW: 0.1, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 0.8, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "CAPSULES", from: 0, to: 90, g: [1, 1], desc: "Capsules split, January-March." },
    { id: 'regrowth', label: "RED NEW LEAVES", from: 90, to: 150, g: [1, 1], desc: "Red young leaves with the flowers." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 360, g: [1, 1], desc: "Broad crown." },
  ],
  beds: [{ plantedDay: -10800 }],
});
