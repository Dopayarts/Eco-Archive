EA.addSpecies('red-hibiscus', {
  name: "RED HIBISCUS", short: "HIBISCUS", latin: "Hibiscus rosa-sinensis", family: "Malvaceae (mallow family)",
  origin: "Garden hybrid from East Asia; planted in hedges across Nigeria",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A bushy evergreen shrub with glossy, toothed leaves. Big, funnel-shaped red flowers have a long column of stamens sticking out of the middle. Each flower lasts about a day, but new ones open all year.",
  facts: ["SHRUB 2-5 M", "LEAVES GLOSSY, TOOTHED", "FLOWERS RED, 10-15 CM", "LONG STAMEN COLUMN", "EACH FLOWER LASTS A DAY"],
  uses: [
    ["GARDEN", "Clipped into flowering hedges around homes and schools."],
    ["CARE", "Leaves and flowers are used in hair rinses."],
  ],
  history: "The red hibiscus is the national flower of Malaysia. Nigerian researchers have studied extracts of its leaves and flowers.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, serr: 0.12, note: 'GLOSSY OVAL LEAF, TOOTHED EDGE' },
  form: { type: 'shrub', height: 1.0, trunk: 0.2, branches: 9, nodes: 6, spread: 0.32, stemW: 0.035, leafSize: 1.3, arrange: 'alternate', flower: { type: 'single', size: 1.8, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 120, g: [1, 1], desc: "Big red flowers open each morning." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 180, g: [1, 1], desc: "Fast green growth with the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 180, to: 360, g: [1, 1], desc: "Flowers keep coming." },
  ],
  beds: [{ plantedDay: -1800 }],
});
