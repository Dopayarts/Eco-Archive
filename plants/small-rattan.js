EA.addSpecies('small-rattan', {
  name: "SMALL RATTAN", short: "SM RATTAN", latin: "Eremospatha macrocarpa", family: "Arecaceae (palm family)",
  origin: "West and Central Africa from Senegal to DR Congo; used and traded in Nigeria",
  added: '2026-11-21',
  kind: 'perennial',
  summary: "A clumping climbing palm whose slender reddish-brown stems reach 50-75 m. Leaves up to 3.5 m end in a whip of hooked spines. Paired, very fragrant buff-yellow flowers give pale orange to brown fruits 2-3 cm long.",
  facts: ["CLIMBING PALM", "STEMS TO 75 M", "HOOKED LEAF WHIPS", "FRAGRANT FLOWERS", "BEST SMALL CANE"],
  uses: [
    ["CANE", "Whole stems make cane bridges, furniture, baskets and mats, and are exported from Nigeria."],
    ["MEDICINE", "In Nigeria and Ghana the powdered root is taken for syphilis."],
    ["CAUTION", "The leaf thorns can injure collectors."],
  ],
  history: "Also called large-fruit rattan palm. Its young form is said to be the best small-diameter cane in Africa.",
  leaf: { shape: 'lance', len: 1, wid: 0.15, compound: 'pinnate', note: 'LEAFLETS 22-35 CM' },
  form: { type: 'vine', height: 1.3, branches: 3, nodes: 7, arrange: 'alternate', leafSize: 0.9, droop: 0.3, flower: { type: 'spike', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Canes climb." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Fragrant yellow flowers." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 330, g: [1, 1], desc: "Orange-brown fruits." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -2500 }],
});
