EA.addSpecies('tridax', {
  name: 'COAT BUTTONS', short: 'TRIDAX', latin: 'Tridax procumbens', family: 'Asteraceae (daisy family)',
  origin: 'Tropical America; a weed of roadsides, lawns and farms across Nigeria',
  local: 'MUWONLA (YORUBA)',
  added: '2026-10-15',
  kind: 'perennial',
  summary: 'A low, hairy, creeping herb with coarsely toothed leaves in opposite pairs. Small daisy flowers with a few creamy-white ray petals and a yellow centre stand on long, bare stalks, then become fluffy seed heads.',
  facts: ['CREEPING, STALKS UP TO 40 CM', 'LEAVES OPPOSITE, COARSELY TOOTHED, HAIRY', 'FLOWERS SMALL DAISIES, CREAM AND YELLOW', 'FLOWER STALKS LONG AND BARE', 'SEEDS FEATHERY, WIND-BLOWN'],
  uses: [
    ['TRADITIONAL', 'Leaf juice is pressed onto cuts to stop bleeding and help healing; lab studies support wound-healing activity.'],
    ['ANIMALS', 'Grazed by livestock and rabbits.'],
  ],
  history: 'Coat buttons spread from Central America to every warm country. In India and Africa it is one of the best-known wound herbs.',
  leaf: { shape: 'lance', len: 1, wid: 0.45, serr: 0.3, note: 'SIMPLE LANCE LEAF, COARSELY TOOTHED, HAIRY' },
  form: { type: 'vine', trailing: true, stems: 5, leafSize: 0.85, flower: { type: 'head', size: 0.9, color: 3 } },
  seasons: [
    { id: 'vegetative', label: 'DRY SEASON', from: 0, to: 90, g: [0.75, 0.7], desc: 'Hardy creeping stems hang on in dry soil.' },
    { id: 'regrowth', label: 'FIRST RAINS', from: 90, to: 130, g: [0.7, 1], desc: 'Runners root at the joints and spread.' },
    { id: 'bloom', label: 'IN BLOOM', from: 130, to: 300, g: [1, 1], desc: 'Little daisies nod on long stalks all through the rains.' },
    { id: 'seeding', label: 'SETTING SEED', from: 300, to: 360, g: [1, 0.8], desc: 'Fluffy seed heads blow away.' },
  ],
  beds: [{ plantedDay: -360 }],
});
