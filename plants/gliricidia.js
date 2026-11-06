EA.addSpecies('gliricidia', {
  name: "GLIRICIDIA", short: "GLIRICIDIA", latin: "Gliricidia sepium", family: "Fabaceae (legume family)",
  origin: "Native to Mexico and Central America; brought to West Africa in the early 1900s and planted in Nigeria",
  added: '2026-11-06',
  kind: 'perennial',
  summary: "A small tree 2-15 m tall, often with several stems and fissured grey-brown bark. Feather leaves have 7-25 pointed leaflets. Pink to lilac pea flowers crowd the bare branch ends, then pods 10-15 cm long split with a snap to throw 3-10 seeds.",
  facts: ["TREE 2-15 M", "FEATHER LEAVES", "FLOWERS PINK, ON BARE TWIGS", "PODS SPLIT WITH A SNAP", "FIXES NITROGEN"],
  uses: [
    ["FARMING", "Planted as live fences, shade for cocoa, green manure and protein-rich fodder for goats and cattle."],
    ["FUEL", "Good firewood and charcoal."],
    ["CAUTION", "Seeds and bark are poisonous to many animals and have been used to kill rats."],
  ],
  history: "The name Gliricidia means mouse killer. In Spanish it is called madre de cacao, mother of cocoa, from its use as cocoa shade.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 13, note: 'POINTED LEAFLETS IN PAIRS' },
  form: { type: 'tree', height: 1.1, trunk: 0.5, branches: 11, nodes: 6, spread: 0.34, stemW: 0.05, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 2 }, fruit: { type: 'pod', size: 1.0, color: 3 } },
  seasons: [
    { id: 'dormant', label: "LEAF DROP", from: 0, to: 60, g: [1, 0.6], desc: "Most leaves fall in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [0.6, 0.7], desc: "Pink flowers on bare twigs." },
    { id: 'fruiting', label: "PODS", from: 120, to: 180, g: [0.7, 0.9], desc: "Pods snap open." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [0.9, 1], desc: "Full feathery crown." },
  ],
  beds: [{ plantedDay: -2880 }],
});
