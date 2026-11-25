EA.addSpecies('desmodium', {
  name: "DESMODIUM", latin: "Desmodium velutinum", family: "Fabaceae (pea family)",
  origin: "Africa and Asia; native in Nigeria, used by herbalists in Lokoja, Kogi State",
  added: '2026-11-25',
  kind: 'perennial',
  summary: "An upright shrub or sub-shrub up to 3 m with velvety, often dark red branches. Leaves are mostly single, oval, 4-20 cm, velvety below. Purple to pink pea flowers crowd spikes up to 20 cm, followed by small hairy pods of 5-7 joints that stick to fur.",
  facts: ["SHRUB TO 3 M", "VELVET LEAVES", "PINK-PURPLE FLOWERS", "STICKY PODS", "FIXES NITROGEN"],
  uses: [
    ["MEDICINE", "In Lokoja, Kogi State, herbalists use it for pain."],
    ["FODDER", "Fed to cattle; in northern Nigeria it gave up to 10 t of dry fodder per hectare in 6 months."],
    ["CAUTION", "Its pods stick to animals and spread it, so it can become a weed."],
  ],
  history: "Also called velvet-leaf desmodium. It flowers on and off over a long season.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'VELVETY SINGLE LEAF' },
  form: { type: 'shrub', height: 1.0, branches: 6, nodes: 6, arrange: 'alternate', leafSize: 0.8, droop: 0.2, flower: { type: 'spike', size: 0.6, color: 2 }, fruit: { type: 'pod', size: 0.4, color: 3 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.6, 1], desc: "Velvety new leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 330, g: [1, 1], desc: "Pink flower spikes." },
    { id: 'fruiting', label: "PODDING", from: 330, to: 360, g: [1, 1], desc: "Sticky jointed pods." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.7], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -700 }],
});
