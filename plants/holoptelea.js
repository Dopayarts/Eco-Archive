EA.addSpecies('holoptelea', {
  name: "HOLOPTELEA", latin: "Holoptelea grandis", family: "Ulmaceae (elm family)",
  origin: "Tropical African forest from Ivory Coast east to Sudan and Uganda and south to DR Congo",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "A deciduous tree up to 50 m, often buttressed. Its grey to pale orange bark cracks lengthwise, and the inner bark smells of iodine. Simple leaves are 5-18 cm. Tiny flowers give flat nuts with papery wings 3.5-4.5 cm long.",
  facts: ["TREE UP TO 50 M", "BUTTRESSED", "IODINE-SMELLING BARK", "LEAVES 5-18 CM", "PAPERY WINGED FRUIT"],
  uses: [
    ["MEDICINE", "In Nigeria root and bark soaks are used for rheumatism, the bark against worms and the seeds as a laxative."],
    ["TIMBER", "Pale wood for furniture, flooring, joinery and crates."],
    ["SHADE", "Planted as an ornamental and roadside tree."],
  ],
  history: "The iodine smell of its bark is said to keep elephants away.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'OVATE LEAF, 5-18 CM' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.09, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 2 }, fruit: { type: 'pod', size: 0.8, color: 3 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 80, g: [0.7, 0.6], desc: "Flowers by fallen leaves." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 80, to: 160, g: [0.7, 0.9], desc: "Papery fruits drift." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 160, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -6000 }],
});
