EA.addSpecies('nut-grass', {
  name: "NUT GRASS", short: "NUTGRASS", latin: "Cyperus rotundus", family: "Cyperaceae (sedge family)",
  origin: "Africa, southern Europe and Asia; spreads across farms in every farming zone of Nigeria",
  added: '2026-11-27',
  kind: 'perennial',
  summary: "A perennial sedge 10-50 cm, sometimes taller, with three-sided flower stems. Leaves 5-20 cm rise in ranks of three from the base. Reddish-brown flower spikes give three-angled seeds. White fleshy runners end in dark reddish-brown tubers underground.",
  facts: ["SEDGE", "THREE-SIDED STEMS", "RED-BROWN SPIKES", "UNDERGROUND TUBERS", "STUBBORN WEED"],
  uses: [
    ["MEDICINE", "In Ayurveda and across Africa and Asia the tubers are used for fever, digestion, urinary troubles and malaria."],
    ["FOOD", "The bitter tubers are edible and were eaten in famine in Rajasthan."],
    ["CRAFT", "Used for baskets, mats and perfume oil."],
    ["CAUTION", "One of the hardest farm weeds to clear because its tubers regrow."],
  ],
  history: "Also called purple nutsedge and coco-grass. Ancient Egyptians and Greeks used it as a perfume.",
  leaf: { shape: 'blade', len: 1, wid: 0.08, note: 'SEDGE LEAF' },
  form: { type: 'grass', height: 0.4, count: 14, stems: 4, droop: 0.3, flower: { type: 'umbel', size: 0.4, color: 1 }, fruit: { type: 'berry', size: 0.15, color: 1 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.4, 1], desc: "Shoots from tubers." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Red-brown spikes." },
    { id: 'fruiting', label: "SEEDING", from: 300, to: 360, g: [1, 1], desc: "Tiny seeds." },
    { id: 'dormant', label: "DRY REST", from: 0, to: 150, g: [1, 0.4], desc: "Tubers wait underground." },
  ],
  beds: [{ plantedDay: -300 }],
});
