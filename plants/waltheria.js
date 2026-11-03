EA.addSpecies('waltheria', {
  name: "WALTHERIA", latin: "Waltheria indica", family: "Malvaceae (mallow family)",
  origin: "Pantropical; a common weed of northern Nigeria",
  local: "HANKUFA (HAUSA)",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "A short-lived, spreading subshrub up to 2 m with soft, grey-green, toothed leaves. Clusters of small fragrant yellow flowers sit in the leaf joints for much of the year.",
  facts: ["SUBSHRUB UP TO 2 M", "LEAVES GREY-GREEN, SOFT", "EDGES TOOTHED", "FLOWERS SMALL, YELLOW", "FLOWERS MOST OF THE YEAR"],
  uses: [
    ["MEDICINE", "The Hausa give the flowers to teething babies; the Fulani use the root for aches and bleeding."],
    ["CAUTION", "High doses damaged the liver in animal tests; use with care, especially in pregnancy."],
  ],
  history: "Waltheria grows on dry, disturbed ground across the tropics and probably came from the Americas.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, serr: 0.25, note: 'SOFT GREY-GREEN LEAF, TOOTHED EDGE' },
  form: { type: 'shrub', height: 0.7, trunk: 0.05, branches: 10, nodes: 6, spread: 0.32, stemW: 0.025, leafSize: 1.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Grey leaves hold on." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 330, g: [0.8, 1], desc: "Yellow flower clusters." },
    { id: 'seeding', label: "SEEDING", from: 330, to: 360, g: [1, 0.8], desc: "Tiny black seeds." },
  ],
  beds: [{ plantedDay: -720 }],
});
