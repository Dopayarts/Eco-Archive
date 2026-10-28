EA.addSpecies('opepe', {
  name: "OPEPE", latin: "Nauclea diderrichii", family: "Rubiaceae (coffee family)",
  origin: "West and Central African rainforest; native to Nigeria",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A tall forest tree with a straight trunk bare of branches for 20-30 m. Shiny, elliptic leaves come with a pair of leafy stipules at the base. Small green-white flowers pack into round heads that become yellow, fleshy, ball-shaped fruits.",
  facts: ["TREE 30-40 M", "TRUNK STRAIGHT, CLEAN", "LEAVES SHINY, ELLIPTIC", "FLOWERS IN ROUND HEADS", "WOOD YELLOW, VERY DURABLE"],
  uses: [
    ["WOOD", "Hard, durable yellow timber for harbour works, railway sleepers, bridges and flooring."],
    ["SHADE", "A good shade tree."],
    ["MEDICINE", "Bark and leaves are used in traditional remedies, including for anaemia."],
  ],
  history: "Opepe is listed as Near Threatened because of heavy logging and forest loss.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SHINY ELLIPTIC LEAF, LEAFY STIPULES AT THE BASE' },
  form: { type: 'tree', height: 1.6, trunk: 0.65, branches: 8, nodes: 4, spread: 0.32, stemW: 0.09, leafSize: 1.8, arrange: 'opposite', flower: { type: 'head', size: 1.0, color: 3 }, fruit: { type: 'berry', size: 2.2, color: 3 } },
  seasons: [
    { id: 'fruiting', label: "FRUITING", from: 0, to: 60, g: [1, 1], desc: "Yellow fruit balls ripen and fall." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 60, to: 180, g: [1, 1], desc: "New shiny leaves at the shoot tips." },
    { id: 'bloom', label: "IN BLOOM", from: 180, to: 270, g: [1, 1], desc: "Round flower heads at the twig ends." },
    { id: 'fruiting', label: "FRUITING", from: 270, to: 360, g: [1, 1], desc: "Fruit balls swell; most ripen October to February." },
  ],
  beds: [{ plantedDay: -9000 }],
});
