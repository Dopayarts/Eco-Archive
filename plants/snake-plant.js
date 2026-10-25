EA.addSpecies('snake-plant', {
  name: "SNAKE PLANT", short: "SNAKE PLNT", latin: "Dracaena trifasciata (Sansevieria trifasciata)", family: "Asparagaceae (asparagus family)",
  origin: "Tropical West Africa; native to Nigeria",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "Stiff, upright, sword-like leaves rise straight from creeping underground stems, banded in dark and light green like a snakeskin. Spikes of small, greenish-white, scented flowers open at night.",
  facts: ["LEAVES 0.5-1 M, STIFF", "BANDED LIKE A SNAKE", "SPREADS BY RHIZOMES", "FLOWERS GREENISH, NIGHT-SCENTED", "VERY DROUGHT HARDY"],
  uses: [
    ["GARDEN", "Grown in pots and garden beds across Nigeria; it survives neglect."],
    ["FIBRE", "Leaves give a strong fibre once used for bowstrings and rope."],
  ],
  history: "The snake plant is a West African native that became one of the world's most common houseplants. It is listed in a 2021 survey of ornamental plants at the University of Benin.",
  leaf: { shape: 'blade', len: 1, wid: 0.3, note: 'STIFF SWORD LEAF, DARK AND PALE BANDS' },
  form: { type: 'rosette', height: 0.9, count: 14, leafSize: 2.6, pitch: [1.25, 1.5], droop: 0.02, flower: { type: 'spike', size: 0.8, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Slow, steady growth." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 210, g: [1, 1], desc: "Night-scented flower spikes." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "New leaves spear up from the rhizomes." },
  ],
  beds: [{ plantedDay: -1800 }],
});
