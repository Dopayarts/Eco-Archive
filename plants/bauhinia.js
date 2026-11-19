EA.addSpecies('bauhinia', {
  name: "BAUHINIA", latin: "Bauhinia rufescens", family: "Fabaceae (bean family)",
  origin: "Dry savanna from Mauritania east to Sudan; grows at Samaru, Zaria, Nigeria",
  local: "JIRGA, MATSAGI (HAUSA)",
  added: '2026-11-19',
  kind: 'perennial',
  summary: "A much-branched shrub or tree 4-15 m, often scraggy and many-stemmed in dry savanna. Short sharp side shoots arm the branches. It drops its leaves in dry places and keeps them in moister ones.",
  facts: ["SHRUB OR TREE 4-15 M", "SPINY SIDE SHOOTS", "MANY STEMS", "EDIBLE POD", "BEE FLOWERS"],
  uses: [
    ["MEDICINE", "In northern Nigeria it is used for fever, chest complaints, dysentery, diarrhoea, measles and eye infections."],
    ["CHARM", "Leaves and pods mixed with porridge and butter make a Hausa charm believed to guard against blades and arrows."],
    ["FARM", "It makes a browse-proof hedge, and its inner bark gives rope."],
  ],
  history: "A Zaria study found the plant does calm diarrhoea in lab tests, backing its traditional use.",
  leaf: { shape: 'round', len: 0.8, wid: 0.8, note: 'SMALL LEAF' },
  form: { type: 'shrub', height: 0.9, branches: 9, nodes: 6, trunk: 0.25, spread: 0.35, arrange: 'alternate', leafSize: 0.55, droop: 0.1, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 1], desc: "Bare in dry places." },
    { id: 'regrowth', label: "NEW LEAVES", from: 150, to: 210, g: [1, 1], desc: "Leaves return with rain." },
    { id: 'bloom', label: "IN FLOWER", from: 210, to: 280, g: [1, 1], desc: "Bees visit the flowers." },
    { id: 'fruiting', label: "PODS", from: 280, to: 360, g: [1, 1], desc: "Pods ripen." },
  ],
  beds: [{ plantedDay: -2000 }],
});
