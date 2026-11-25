EA.addSpecies('witchweed', {
  name: "WITCHWEED", latin: "Striga hermonthica", family: "Orobanchaceae (broomrape family)",
  origin: "Sub-Saharan Africa; native in Nigeria, studied on farms around Lafia, Nasarawa State",
  added: '2026-11-25',
  kind: 'annual',
  summary: "An upright herb about 0.5 m that lives as a parasite on cereal roots. It has rough, hairy, yellowish-green stems and pink to white flowers. Each plant can make up to 20,000 tiny seeds.",
  facts: ["PARASITIC HERB", "ABOUT 0.5 M", "PINK FLOWERS", "20,000 SEEDS", "CEREAL PEST"],
  uses: [
    ["CAUTION", "It taps the roots of sorghum, maize, millet, rice and sugar cane, and can cut harvests by 20-80%."],
    ["FARM", "Around Lafia it clearly stunted sorghum; Nigerian losses average about 35%."],
  ],
  history: "Also called purple witchweed. It grows underground on the host root first, then flowers within about two weeks of coming up.",
  leaf: { shape: 'lance', len: 1, wid: 0.15, note: 'NARROW LEAF' },
  form: { type: 'herb', height: 0.5, branches: 5, nodes: 6, arrange: 'opposite', leafSize: 0.5, droop: 0.1, flower: { type: 'spike', size: 0.5, color: 2 }, fruit: { type: 'pod', size: 0.2, color: 1 } },
  stages: [
    { id: 'seed', label: "SEED", days: 20, g: [0, 0], desc: "Seeds wait for a cereal root." },
    { id: 'sprout', label: "UNDERGROUND", days: 15, g: [0, 0.1], desc: "It taps the host root." },
    { id: 'vegetative', label: "SHOOTS UP", days: 10, g: [0.1, 0.8], desc: "Hairy stems come up." },
    { id: 'bloom', label: "IN FLOWER", days: 20, g: [0.8, 1], desc: "Pink flowers." },
    { id: 'fruiting', label: "SEEDING", days: 20, g: [1, 1], desc: "Thousands of tiny seeds." },
    { id: 'senescence', label: "DRYING", days: 10, g: [1, 0.6], desc: "Plant dries out." },
  ],
  beds: [{ sowDay: 1114 }],
});
