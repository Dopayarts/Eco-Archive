// Record for ROSELLE (sample species imported from samples/hibiscus/*.glb).
// Edit freely; tools/add_species.py never overwrites this file.
EA.addSpecies('hibiscus', {
  name: 'ROSELLE',
  latin: 'Hibiscus sabdariffa',
  family: 'Malvaceae (mallow family)',
  origin: 'West Africa; now grown across the tropics',
  height: 1.1,
  kind: 'annual',
  summary: 'A bushy annual hibiscus with reddish stems and lobed leaves. Its pale flowers last a single day; after them the red fleshy calyx swells around the seed pod. Those calyces are what people harvest.',
  facts: ['HEIGHT 1-2.5 M', 'LEAVES LOBED, ALTERNATE', 'FLOWERS PALE YELLOW TO PINK, ONE DAY EACH', 'RED CALYX SWELLS AFTER FLOWERING', 'SHORT-DAY PLANT: FLOWERS AS NIGHTS LENGTHEN'],
  uses: [
    ['DRINK', 'Dried calyces make a tart red drink: zobo in Nigeria, bissap in Senegal, agua de jamaica in Mexico, karkade in Egypt and Sudan.'],
    ['CULINARY', 'Calyces go into jams and sauces; the young leaves are cooked as a sour green vegetable.'],
    ['TRADITIONAL', 'The tea is drunk to cool the body and for blood pressure. Several small trials report a modest lowering effect.'],
    ['CAUTION', 'It may add to the effect of blood-pressure medicines.'],
  ],
  history: 'Roselle was likely domesticated in West Africa, where it has long been grown for its leaves and calyces. The Atlantic trade carried it to the Caribbean and the Americas by the 1600s, and it later spread to Asia. Its stems also give a jute-like fibre.',
  leaf: { shape: 'oval', len: 0.9, wid: 0.5, serr: 0.15, note: 'PALMATELY LOBED LEAF, TOOTHED EDGE' },
  stages: [
    { id: 'seed', label: 'SEED', days: 6, g: [0, 0], desc: 'Seeds swell in warm, moist soil.' },
    { id: 'sprout', label: 'SPROUT', days: 8, g: [0.04, 0.12], desc: 'Two rounded seed leaves open.' },
    { id: 'seedling', label: 'SEEDLING', days: 20, g: [0.12, 0.4], desc: 'The first lobed leaves appear on a reddish stem.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', days: 50, g: [0.4, 0.95], desc: 'The plant bushes out. Young leaves can be picked to cook.' },
    { id: 'bud', label: 'BUDDING', days: 10, g: [0.95, 1], desc: 'Buds form in the leaf joints as the days shorten.' },
    { id: 'bloom', label: 'IN BLOOM', days: 25, g: [1, 1], desc: 'Each flower opens for one day; the red calyx then swells.' },
    { id: 'seeding', label: 'CALYX HARVEST', days: 20, g: [1, 1], desc: 'Fleshy red calyces are picked about three weeks after flowering.' },
    { id: 'senescence', label: 'DYING BACK', days: 10, g: [1, 0.7], desc: 'The pods dry and split; the plant dies after setting seed.' },
  ],
  beds: [{ sowDay: 0 }],
});
