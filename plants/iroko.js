EA.addSpecies('iroko', {
  name: "IROKO", latin: "Milicia excelsa", family: "Moraceae (fig family)",
  origin: "Tropical Africa; rainforests of southern Nigeria",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A forest giant up to about 50 m tall with a straight trunk, often bare of branches for the first 20 m, and a spreading crown of large oval leaves. Male and female flowers grow on separate trees in long catkin-like spikes.",
  facts: ["TREE UP TO 50 M", "TRUNK UP TO 10 M ROUND", "LEAVES LARGE, OVAL", "MALE AND FEMALE TREES", "NEAR THREATENED"],
  uses: [
    ["WOOD", "Prized, durable timber for furniture, doors and boats."],
    ["CUSTOM", "Big iroko trees were left standing as sacred when forest was cleared."],
  ],
  history: "Among the Yoruba, solitary iroko trees were held sacred, and in parts of Nigeria it is said to be the first tree God showed to people. Heavy logging has made it rare.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'LARGE OVAL LEAF, WAVY EDGE, NETTED VEINS' },
  form: { type: 'tree', height: 1.55, trunk: 0.65, branches: 8, nodes: 3, spread: 0.32, stemW: 0.09, leafSize: 1.7, arrange: 'alternate', flower: { type: 'spike', size: 0.9, color: 2 }, fruit: { type: 'berry', size: 1.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 30, g: [1, 1], desc: "Evergreen growth." },
    { id: 'bloom', label: "IN BLOOM", from: 30, to: 90, g: [1, 1], desc: "Catkin-like flower spikes hang from the branches." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 180, g: [1, 1], desc: "Small fleshy fruits ripen and feed bats and birds." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 1], desc: "Evergreen growth." },
  ],
  beds: [{ plantedDay: -14400 }],
});
