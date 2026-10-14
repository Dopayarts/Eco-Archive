EA.addSpecies('life-plant', {
  name: 'LIFE PLANT', short: 'ABAMODA', latin: 'Kalanchoe pinnata', family: 'Crassulaceae (stonecrop family)',
  origin: 'Madagascar; grown in gardens and naturalised across Nigeria',
  local: 'ABAMODA (YORUBA)',
  added: '2026-10-14',
  kind: 'perennial',
  summary: 'A succulent with thick, fleshy, round-toothed leaves on an upright stem. Tiny new plants sprout from the notches along a leaf\'s edge, even from a leaf lying on the ground. Hanging, lantern-shaped flowers are pale green and red.',
  facts: ['HEIGHT 0.5-1.5 M', 'LEAVES FLESHY, SCALLOPED EDGES', 'PLANTLETS GROW FROM LEAF NOTCHES', 'FLOWERS HANGING LANTERNS, GREEN-RED', 'ALSO CALLED MIRACLE LEAF'],
  uses: [
    ['TRADITIONAL', 'Warmed leaves are applied to boils, wounds and swellings; the juice is dropped in ears and eyes. Some lab evidence for wound healing.'],
    ['CAUTION', 'Contains bufadienolides, which affect the heart; not for drinking in quantity, and toxic to livestock.'],
  ],
  history: 'Native to Madagascar, life plant has spread around the tropics thanks to its leaf plantlets.',
  leaf: { shape: 'oval', len: 1, wid: 0.6, serr: 0.15, note: 'THICK FLESHY OVAL LEAF, SCALLOPED EDGE, OFTEN RED-RIMMED' },
  form: { type: 'herb', height: 0.85, stems: 1, nodes: 6, branches: 0, arrange: 'opposite', leafSize: 1.1, flower: { type: 'cluster', size: 1, color: 2 } },
  seasons: [
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 0, to: 30, g: [1, 1], desc: 'Succulent leaves store water through the dry months.' },
    { id: 'bud', label: 'BUDDING', from: 30, to: 50, g: [1, 1], desc: 'A tall flower stalk rises from the top.' },
    { id: 'bloom', label: 'IN BLOOM', from: 50, to: 110, g: [1, 1], desc: 'Lantern flowers hang in loose sprays.' },
    { id: 'seeding', label: 'PLANTLETS', from: 110, to: 170, g: [1, 0.9], desc: 'Fallen leaves sprout rows of baby plants.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 170, to: 360, g: [0.9, 1], desc: 'Steady leafy growth through the rains.' },
  ],
  beds: [{ plantedDay: -360 }],
});
