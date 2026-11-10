EA.addSpecies('voacanga', {
  name: "VOACANGA", latin: "Voacanga africana", family: "Apocynaceae (dogbane family)",
  origin: "Tropical Africa, including Nigeria, Ghana, Cameroon and Ivory Coast",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A small tree up to 6 m with a spreading crown. Leaves come in opposite pairs, dark glossy green above and paler below. Small bunches of white or yellow flowers give round fruits, usually in pairs, with seeds set in yellow pulp.",
  facts: ["TREE UP TO 6 M", "LEAVES IN PAIRS", "GLOSSY DARK LEAVES", "FLOWERS WHITE OR YELLOW", "FRUITS IN PAIRS"],
  uses: [
    ["TRADE", "Nigeria, Ghana, Cameroon and Ivory Coast export it as a forest product."],
    ["MEDICINE", "Its alkaloid voacangine is a starting material for drugs; extracts are used to make vinpocetine and vinblastine."],
    ["CAUTION", "It contains alkaloids that depress the nervous system and lower blood pressure. Not for home use."],
  ],
  history: "Otto Stapf named it in 1894 from a specimen collected on the Sierra Leone boundary. Once thought useful only to adulterate rubber, it drew interest after French chemists extracted its alkaloids in 1955.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'GLOSSY LEAF IN OPPOSITE PAIRS' },
  form: { type: 'tree', height: 0.85, trunk: 0.35, branches: 8, nodes: 5, spread: 0.4, stemW: 0.05, leafSize: 1.3, arrange: 'opposite', droop: 0.2, flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 1.0, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 80, g: [1, 1], desc: "Small bunches of pale flowers." },
    { id: 'fruiting', label: "FRUITING", from: 80, to: 220, g: [1, 1], desc: "Paired round fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 220, to: 360, g: [1, 1], desc: "Glossy leaves through the rains." },
  ],
  beds: [{ plantedDay: -1800 }],
});
