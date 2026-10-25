EA.addSpecies('scented-thorn', {
  name: "SCENTED THORN", short: "BAGARUWA", latin: "Vachellia nilotica", family: "Fabaceae (pea family)",
  origin: "Africa and the Middle East; dry savanna of northern Nigeria",
  local: "BAGARUWA (HAUSA)",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A thorny savanna tree with a flat crown, paired white spines and feathery, twice-divided leaves. Sweet-smelling, golden-yellow ball flowers are followed by grey pods pinched between the seeds like a string of beads.",
  facts: ["TREE 5-20 M, FLAT CROWN", "PAIRED WHITE SPINES", "LEAVES FEATHERY, BIPINNATE", "FLOWERS GOLDEN BALLS, SCENTED", "PODS BEADED, GREY"],
  uses: [
    ["LEATHER", "Pods are used to tan leather in Kano, giving a reddish tinge."],
    ["FODDER", "Pods and leaves feed goats and camels in the dry season."],
    ["MEDICINE", "Bark and pods are used in remedies for coughs and stomach ailments."],
  ],
  history: "Bagaruwa pods are the traditional tanning agent behind the famous red-brown leather of Kano and Sokoto.",
  leaf: { shape: 'oval', len: 0.8, wid: 0.45, compound: 'bipinnate', note: 'FEATHERY TWICE-PINNATE LEAF, PAIRED SPINES' },
  form: { type: 'tree', height: 1.15, trunk: 0.4, branches: 9, nodes: 4, spread: 0.42, stemW: 0.06, leafSize: 1.4, arrange: 'alternate', flower: { type: 'head', size: 1.3, color: 3 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "PODS", from: 0, to: 60, g: [0.85, 0.85], desc: "Beaded pods ripen in the dry season." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 60, to: 180, g: [0.85, 1], desc: "Feathery leaves fill out." },
    { id: 'bloom', label: "IN BLOOM", from: 180, to: 270, g: [1, 1], desc: "Golden, scented ball flowers." },
    { id: 'fruiting', label: "PODS GROWING", from: 270, to: 360, g: [1, 0.9], desc: "Green pods form and turn grey." },
  ],
  beds: [{ plantedDay: -7200 }],
});
