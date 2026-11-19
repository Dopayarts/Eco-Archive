EA.addSpecies('chasmanthera', {
  name: "CHASMANTHERA", short: "CHASMANTH", latin: "Chasmanthera dependens", family: "Menispermaceae (moonseed family)",
  origin: "Sierra Leone east to Eritrea and south to Zimbabwe; used in Nigeria and grown in West African home gardens",
  added: '2026-11-19',
  kind: 'perennial',
  summary: "A climbing liana with stems 5 m or more and papery, peeling bark. Long-stalked leaves are broad and heart-shaped. Male and female flowers are on separate plants: small greenish-yellow flowers hang in strings. Each fruit is three one-seeded drupelets.",
  facts: ["LIANA 5 M PLUS", "PEELING BARK", "HEART-SHAPED LEAVES", "HANGING FLOWERS", "SEXES ON SEPARATE PLANTS"],
  uses: [
    ["MEDICINE", "In Nigeria a stem soak, mixed with other plants, is drunk against convulsions."],
    ["SPONGE", "In Nigeria the fibrous stem is beaten and used as a bath sponge."],
    ["MARKET", "It is often planted in home gardens and sold in local markets."],
  ],
  history: "Its name dependens means hanging, after its dangling flower strings.",
  leaf: { shape: 'heart', len: 1, wid: 0.9, note: 'BROAD HEART-SHAPED LEAF' },
  form: { type: 'vine', height: 1.1, branches: 4, nodes: 9, arrange: 'alternate', leafSize: 0.9, droop: 0.25, flower: { type: 'spike', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Climbs over fences and trees." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Greenish-yellow strings hang." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 360, g: [1, 1], desc: "Drupelets ripen." },
  ],
  beds: [{ plantedDay: -800 }],
});
