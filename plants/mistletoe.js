EA.addSpecies('mistletoe', {
  name: 'MISTLETOE', short: 'AFOMO', latin: 'Tapinanthus bangwensis', family: 'Loranthaceae (mistletoe family)',
  origin: 'West and Central Africa; grows on kola, cocoa, citrus, locust bean and other trees in Nigeria',
  local: 'AFOMO (YORUBA)',
  added: '2026-10-13',
  kind: 'perennial',
  summary: 'A bushy parasitic shrub that grows on the branches of other trees, tapping their water. It has thick, leathery leaves and clusters of long, tube-shaped red and orange flowers that birds open. Sticky berries are spread by birds wiping their beaks on branches.',
  facts: ['SHRUB ON TREE BRANCHES, UP TO 1 M', 'HALF-PARASITE: MAKES ITS OWN SUGAR', 'LEAVES THICK, LEATHERY', 'FLOWERS LONG RED TUBES, BIRD-POLLINATED', 'BERRIES STICKY, BIRD-SPREAD'],
  uses: [
    ['TRADITIONAL', 'Leaves are boiled for high blood pressure and diabetes; which host tree it grew on is thought to matter. Evidence is weak.'],
    ['ECOLOGY', 'Flowers and berries feed sunbirds and other birds, especially in the dry season.'],
    ['FARMING', 'A serious pest on cocoa, kola and citrus, which it weakens.'],
  ],
  history: 'Afomo is well known in Yoruba herbal medicine. Studies in Plateau State found mistletoes on most locust bean trees, visited by over fifty bird species.',
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE OVAL LEAF, THICK AND LEATHERY, SMOOTH EDGE' },
  form: { type: 'shrub', height: 0.75, branches: 7, nodes: 4, trunk: 0.35, spread: 0.35, arrange: 'opposite', leafSize: 0.9, flower: { type: 'cluster', size: 1, color: 2 }, fruit: { type: 'berry', size: 0.6, color: 3 } },
  seasons: [
    { id: 'bloom', label: 'IN BLOOM', from: 0, to: 70, g: [1, 1], desc: 'Red tubular flowers open; sunbirds split them to reach the nectar.' },
    { id: 'fruiting', label: 'BERRIES', from: 70, to: 140, g: [1, 1], desc: 'Sticky berries ripen and birds carry the seeds to new branches.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 140, to: 300, g: [1, 1], desc: 'Grows steadily on its host through the rains.' },
    { id: 'bud', label: 'BUDDING', from: 300, to: 360, g: [1, 1], desc: 'Flower buds gather at the joints.' },
  ],
  beds: [{ plantedDay: -1080 }],
});
