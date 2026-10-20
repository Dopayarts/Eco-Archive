EA.addSpecies('pigeon-pea', {
  name: "PIGEON PEA", short: "FIO FIO", latin: "Cajanus cajan", family: "Fabaceae (pea family)",
  origin: "India; grown in south-eastern and other parts of Nigeria",
  local: "FIO FIO (IGBO)",
  added: '2026-10-20',
  kind: 'perennial',
  summary: "A woody, upright shrub with leaves of three narrow, soft, silvery-backed leaflets. Yellow pea flowers, often streaked with red, are followed by flat, pointed pods with constrictions between the seeds.",
  facts: ["SHRUB 1-3 M", "LEAVES OF 3 NARROW LEAFLETS, SILVERY BELOW", "FLOWERS YELLOW, RED STREAKS", "PODS FLAT, POINTED, 3-6 SEEDS", "LIVES SEVERAL YEARS"],
  uses: [
    ["FOOD", "The peas are cooked into fio fio (agbugbu), an Igbo dish often made with corn."],
    ["FARMING", "It is grown as a hedge and its leaves enrich the soil."],
  ],
  history: "Pigeon pea was domesticated in India and spread to Africa thousands of years ago. In Igboland it is a traditional protein crop.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, compound: 'trifoliate', note: 'LEAF OF 3 NARROW SOFT LEAFLETS, SILVERY BELOW' },
  form: { type: 'shrub', height: 1.1, trunk: 0.2, branches: 7, nodes: 5, spread: 0.25, stemW: 0.03, leafSize: 1.2, arrange: 'alternate', flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'pod', size: 1, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [0.85, 1], desc: "Slow growth in the dry season, then fresh leaves with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 240, g: [1, 1], desc: "Bushy growth through the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 240, to: 300, g: [1, 1], desc: "Yellow flowers open as the rains end." },
    { id: 'fruiting', label: "PODS FILLING", from: 300, to: 360, g: [1, 1], desc: "Flat pods fill and dry; the peas are picked." },
  ],
  beds: [{ plantedDay: -360 }],
});
