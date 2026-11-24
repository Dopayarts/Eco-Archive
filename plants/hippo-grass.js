EA.addSpecies('hippo-grass', {
  name: "HIPPO GRASS", short: "HIPPOGRASS", latin: "Vossia cuspidata", family: "Poaceae (grass family)",
  origin: "African rivers and floodplains; grows in the mud zone of Nigerian wetlands",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A thick-stemmed, hairy, perennial water grass that forms dense stands in water up to 5.5 m deep. As the dry season goes on, its stems pile into a spongy floating mat.",
  facts: ["WATER GRASS", "THICK HAIRY STEMS", "DEEP WATER STANDS", "SPONGY MATS", "FLOODPLAIN FODDER"],
  uses: [
    ["FODDER", "It is grazed by livestock on Nigerian floodplains."],
    ["FIBRE", "It has potential for pulp, paper and fibre."],
  ],
  history: "In Zambia it flowers from January to May.",
  leaf: { shape: 'blade', len: 1, wid: 0.1, note: 'GRASS BLADE' },
  form: { type: 'grass', height: 1.0, count: 20, stems: 5, droop: 0.4, flower: { type: 'plume', size: 0.6, color: 2 }, fruit: { type: 'berry', size: 0.2, color: 2 } },
  seasons: [
    { id: 'regrowth', label: "FLOOD GROWTH", from: 180, to: 330, g: [1, 1], desc: "Rises with the floods." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 180, g: [1, 1], desc: "Flower spikes." },
    { id: 'rest', label: "SPONGY MAT", from: 330, to: 360, g: [1, 1], desc: "Stems pile into mats." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Dense stands." },
  ],
  beds: [{ plantedDay: -600 }],
});
