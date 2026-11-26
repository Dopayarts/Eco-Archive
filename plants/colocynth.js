EA.addSpecies('colocynth', {
  name: "COLOCYNTH", latin: "Citrullus colocynthis", family: "Cucurbitaceae (gourd family)",
  origin: "North Africa and the Sahara east to India; grown with cassava in Nigeria",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "A trailing desert vine 2.4-3 m from a large, fleshy, long-lived root. Leaves are angular with 3-7 lobes. Single yellow flowers give smooth round fruits 5-10 cm, green marbled with yellow stripes, full of dry, spongy, very bitter white pulp and grey seeds.",
  facts: ["TRAILING VINE", "FLESHY ROOT", "LOBED LEAVES", "YELLOW FLOWERS", "BITTER GOURD"],
  uses: [
    ["FOOD", "In the Sahara and Sahel the seeds are eaten, but only after they are taken out and well cooked."],
    ["OIL", "Seed oil is used for soap."],
    ["MEDICINE", "Its leaves are used as medicine."],
    ["CAUTION", "The fruit is extremely bitter and poisonous; its cucurbitacins make it unsafe as a home remedy."],
  ],
  history: "Also called bitter apple, bitter cucumber and wild gourd. It is a wild cousin of the egusi melon and the watermelon.",
  leaf: { shape: 'round', len: 1, wid: 0.9, compound: 'palmate', note: '3-7 LOBED LEAF' },
  form: { type: 'vine', height: 0.4, branches: 4, nodes: 8, arrange: 'alternate', leafSize: 0.7, droop: 0.5, flower: { type: 'single', size: 0.5, color: 'yellow' }, fruit: { type: 'big', size: 0.8, color: 3 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.4, 1], desc: "Vines trail out." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 290, g: [1, 1], desc: "Yellow flowers." },
    { id: 'fruiting', label: "FRUITING", from: 290, to: 360, g: [1, 1], desc: "Striped bitter gourds." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.4], desc: "Fleshy root rests." },
  ],
  beds: [{ plantedDay: -500 }],
});
