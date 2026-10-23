EA.addSpecies('teak', {
  name: "TEAK", latin: "Tectona grandis", family: "Lamiaceae (mint family)",
  origin: "South and South-east Asia; planted in Nigeria since 1889",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A tall, straight tree with huge, rough, paper-like leaves up to 60 cm long in opposite pairs. Big sprays of tiny white flowers top the crown in the rains, followed by small hairy fruits wrapped in a papery husk. It drops its leaves in the dry season.",
  facts: ["TREE UP TO 40 M", "LEAVES HUGE, ROUGH, OPPOSITE", "FLOWERS TINY, WHITE, IN BIG SPRAYS", "FRUIT HAIRY, IN A PAPERY HUSK", "LEAFLESS IN THE DRY SEASON"],
  uses: [
    ["WOOD", "Strong, durable timber for furniture, doors, boats and electric poles."],
    ["CRAFT", "Leaves were once used to wrap food and to give a red dye."],
  ],
  history: "Teak was brought to tropical Africa mainly by Germans and reached Nigeria in 1889. It is now planted in forest reserves across southern Nigeria.",
  leaf: { shape: 'oval', len: 1, wid: 0.65, note: 'HUGE OVAL LEAF, ROUGH LIKE SANDPAPER, OPPOSITE PAIRS' },
  form: { type: 'tree', height: 1.5, trunk: 0.55, branches: 8, nodes: 3, spread: 0.3, stemW: 0.07, leafSize: 2.0, arrange: 'opposite', flower: { type: 'plume', size: 1.2, color: 3 }, fruit: { type: 'berry', size: 1.6, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 60, g: [0.75, 0.75], desc: "Bare branches through the harmattan." },
    { id: 'regrowth', label: "NEW LEAVES", from: 60, to: 120, g: [0.75, 1], desc: "Big new leaves unfold with the first rains." },
    { id: 'bloom', label: "IN BLOOM", from: 120, to: 210, g: [1, 1], desc: "Sprays of tiny white flowers crown the tree." },
    { id: 'fruiting', label: "FRUITING", from: 210, to: 300, g: [1, 1], desc: "Hairy fruits form inside papery husks." },
    { id: 'dormant', label: "LEAF FALL", from: 300, to: 360, g: [1, 0.75], desc: "Leaves turn brown and fall." },
  ],
  beds: [{ plantedDay: -7200 }],
});
