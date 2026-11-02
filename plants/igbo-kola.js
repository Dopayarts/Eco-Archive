EA.addSpecies('igbo-kola', {
  name: "IGBO KOLA", latin: "Cola acuminata", family: "Malvaceae (mallow family)",
  origin: "West African forest; grown in southern Nigeria",
  local: "OJI (IGBO)",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A forest tree usually 13-20 m tall with low branches and dark green leaves. Rough, mottled pods up to 20 cm long hold large red or pink kola nuts, which can split into up to six lobes.",
  facts: ["TREE 13-20 M", "PODS ROUGH, MOTTLED", "NUTS RED OR PINK", "UP TO 6 LOBES", "RICH IN CAFFEINE"],
  uses: [
    ["CUSTOM", "Among the Igbo the nut opens gatherings, welcomes guests and seals covenants; the number of lobes carries meaning."],
    ["STIMULANT", "The nuts hold caffeine and are chewed for alertness."],
    ["FLAVOUR", "Kola flavours cola drinks."],
  ],
  history: "A Nigerian saying has it that the Yoruba plant kola, the Hausa eat it and the Igbo revere it. A four-lobed nut stands for peace and blessing.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'GLOSSY DARK GREEN OVAL LEAF' },
  form: { type: 'tree', height: 1.3, trunk: 0.35, branches: 9, nodes: 5, spread: 0.38, stemW: 0.07, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'big', size: 1.0, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "White flowers." },
    { id: 'fruiting', label: "PODS", from: 180, to: 330, g: [1, 1], desc: "Rough pods fill with nuts." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Evergreen." },
  ],
  beds: [{ plantedDay: -7200 }],
});
