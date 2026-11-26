EA.addSpecies('guinea-plum', {
  name: "GUINEA PLUM", short: "GUINEAPLUM", latin: "Parinari excelsa", family: "Chrysobalanaceae (coco plum family)",
  origin: "Africa from Senegal to Sudan; native in Nigeria",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "A large evergreen tree up to 50 m with a round or flat crown and big buttresses. Leathery oval leaves up to 10 cm are felted with brown or grey hairs below. Pinkish flowers grow in hairy sprays, followed by fleshy plums about 6 cm that ripen yellowish or reddish-brown around a hard stone.",
  facts: ["TREE TO 50 M", "BUTTRESSED TRUNK", "FELTED LEAVES", "PINKISH FLOWERS", "PLUMS WITH STONES"],
  uses: [
    ["TIMBER", "It is cut for timber."],
    ["WILDLIFE", "Elephants, chimpanzees and monkeys eat its fruit."],
  ],
  history: "Its grey bark is rough with warty spots or peels in flakes.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'FELTED BELOW' },
  form: { type: 'tree', height: 1.8, trunk: 0.55, branches: 9, nodes: 5, spread: 0.22, stemW: 0.12, leafSize: 1.1, arrange: 'alternate', droop: 0.1, flower: { type: 'cluster', size: 0.4, color: 2 }, fruit: { type: 'berry', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 270, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 330, g: [1, 1], desc: "Pinkish flowers." },
    { id: 'fruiting', label: "FRUITING", from: 0, to: 120, g: [1, 1], desc: "Plums ripen." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -12000 }],
});
