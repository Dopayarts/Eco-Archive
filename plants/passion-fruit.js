EA.addSpecies('passion-fruit', {
  name: "PASSION FRUIT", short: "PASSION", latin: "Passiflora edulis", family: "Passifloraceae (passion flower family)",
  origin: "South America; grown in small amounts in Nigeria, e.g. around Abeokuta",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A climbing vine that holds on with curly tendrils, with glossy three-lobed leaves. Its showy white and purple flowers have a crown of wavy threads, and the round fruits ripen purple or yellow, full of seeds in tangy, scented juice.",
  facts: ["VINE, CLIMBS 5-10 M", "LEAVES 3-LOBED, GLOSSY, TOOTHED", "TENDRILS COIL ROUND SUPPORTS", "FLOWERS WHITE WITH PURPLE THREAD CROWN", "FRUIT ROUND, PURPLE OR YELLOW"],
  uses: [
    ["FOOD", "The pulp is eaten from the shell or made into juice."],
    ["NUTRITION", "Rich in vitamins A and C."],
  ],
  history: "Passion fruit spread from South America to the tropics. In Nigeria it is still rare as a farm crop, and much of the juice sold is imported, but researchers at Abeokuta grow it.",
  leaf: { shape: 'lance', len: 1, wid: 0.45, compound: 'palmate', leaflets: 3, serr: 0.1, note: '3-LOBED LEAF, GLOSSY, FINELY TOOTHED' },
  form: { type: 'vine', height: 1.25, nodes: 10, leafSize: 1.2, droop: 0.35, flower: { type: 'single', size: 1.3, color: 3 }, fruit: { type: 'big', size: 1.1, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "VINE GROWTH", from: 0, to: 90, g: [0.8, 0.9], desc: "Slow growth in the dry season; it needs watering." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 180, g: [0.9, 1], desc: "Showy flowers open each morning and last a day." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 180, to: 270, g: [1, 1], desc: "Round fruits swell and colour." },
    { id: 'harvest', label: "FRUIT SEASON", from: 270, to: 360, g: [1, 1], desc: "Ripe fruits drop and wrinkle; the pulp is sweetest then." },
  ],
  beds: [{ plantedDay: -540 }],
});
