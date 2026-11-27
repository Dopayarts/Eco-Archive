EA.addSpecies('calopo', {
  name: "CALOPO", latin: "Calopogonium mucunoides", family: "Fabaceae (pea family)",
  origin: "Tropical America; now a common wild forage legume of Nigeria, studied at Umudike",
  local: "APALOFA, AGBIRI",
  added: '2026-11-27',
  kind: 'perennial',
  summary: "A vigorous creeping and twining legume, short-lived or annual, whose stems are covered in long rusty hairs and pile up 30-50 cm deep. Leaves have three oval leaflets 4-10 cm. Small blue to purple pea flowers give hairy pods 2-4 cm with 3-8 seeds.",
  facts: ["CREEPING LEGUME", "RUSTY HAIRS", "THREE LEAFLETS", "BLUE-PURPLE FLOWERS", "COVER CROP"],
  uses: [
    ["FARM", "A cover crop and green manure under plantation trees that also smothers weeds."],
    ["FODDER", "Cattle graze it late in the dry season, though they do not like it much."],
    ["MEDICINE", "Used for diarrhoea and skin infections."],
  ],
  history: "Also called wild groundnut. In dry areas it behaves like an annual.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, compound: 'trifoliate', note: 'HAIRY LEAFLETS' },
  form: { type: 'vine', height: 0.4, branches: 5, nodes: 8, arrange: 'alternate', leafSize: 0.8, droop: 0.5, flower: { type: 'spike', size: 0.4, color: 2 }, fruit: { type: 'pod', size: 0.4, color: 1 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 270, g: [0.5, 1], desc: "Hairy vines pile up." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 330, g: [1, 1], desc: "Blue-purple flowers." },
    { id: 'fruiting', label: "PODDING", from: 330, to: 360, g: [1, 1], desc: "Hairy pods." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.5], desc: "Vines thin out." },
  ],
  beds: [{ plantedDay: -400 }],
});
