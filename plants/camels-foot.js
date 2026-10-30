EA.addSpecies('camels-foot', {
  name: "CAMEL'S FOOT", short: "CAMELSFOOT", latin: "Piliostigma thonningii", family: "Fabaceae (legume family)",
  origin: "Tropical African savanna, including the guinea savanna of Nigeria",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A small, spreading savanna tree with leaves split at the tip into two rounded lobes, like a hoof print. Fragrant white to pink flowers are followed by long, woody, brown pods.",
  facts: ["TREE ABOUT 10 M", "LEAVES TWO-LOBED", "LEAF LIKE A HOOF PRINT", "FLOWERS WHITE TO PINK", "PODS LONG, WOODY"],
  uses: [
    ["FIBRE", "Bark gives string and rope, and a red-brown dye."],
    ["FOOD", "The pods are a snack and famine food; cattle eat them."],
    ["MEDICINE", "Widely used in remedies for wounds, coughs and diarrhoea."],
  ],
  history: "Camel's foot is named for its notched leaves. It grows across African savanna from Senegal to South Africa.",
  leaf: { shape: 'heart', len: 1, wid: 1.0, note: 'ROUND LEAF CLEFT AT THE TIP INTO TWO LOBES' },
  form: { type: 'tree', height: 1.15, trunk: 0.35, branches: 9, nodes: 5, spread: 0.4, stemW: 0.06, leafSize: 1.8, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.4, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 60, g: [0.7, 0.6], desc: "Pods hang on thinning branches." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 150, g: [0.6, 1], desc: "Flowers come with the new leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [1, 1], desc: "Full leaf through the rains." },
    { id: 'fruiting', label: "PODS", from: 300, to: 360, g: [1, 0.7], desc: "Woody pods ripen." },
  ],
  beds: [{ plantedDay: -3600 }],
});
