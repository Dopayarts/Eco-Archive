EA.addSpecies('chaff-flower', {
  name: "PRICKLY CHAFF", short: "CHAFF", latin: "Achyranthes aspera", family: "Amaranthaceae (amaranth family)",
  origin: "Tropics and subtropics worldwide; native in Nigeria",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "A shrubby herb 30-80 cm, sometimes 2 m, that turns woody with age and grows from a taproot. Opposite oval leaves reach 15 cm. Silvery green to pink-red flower spikes carry small flowers that turn back and hook onto fur and clothes.",
  facts: ["HERB TO 2 M", "OPPOSITE LEAVES", "SILVERY SPIKES", "HOOKED BURRS", "WAYSIDE WEED"],
  uses: [
    ["FOOD", "In Tanzania the leaves are cooked like spinach, and in India they are boiled in hard times."],
    ["MEDICINE", "Its seeds, roots and shoots are used in folk medicine in Africa and India."],
    ["FARM", "Buffaloes eat it in Java, and it can improve soil."],
    ["CAUTION", "It holds alkaloids and lowered fertility in rat studies; it is also a weed."],
  ],
  history: "Also called prickly chaff flower, chaff burr and devil's horsewhip.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'OPPOSITE LEAF' },
  form: { type: 'herb', height: 0.7, branches: 5, nodes: 6, arrange: 'opposite', leafSize: 0.7, droop: 0.2, flower: { type: 'spike', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.15, color: 2 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.6, 1], desc: "New shoots." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Silvery flower spikes." },
    { id: 'fruiting', label: "BURRS", from: 300, to: 360, g: [1, 1], desc: "Hooked burrs ripen." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.6], desc: "Stems turn woody." },
  ],
  beds: [{ plantedDay: -400 }],
});
