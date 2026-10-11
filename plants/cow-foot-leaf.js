EA.addSpecies('cow-foot-leaf', {
  name: 'COW-FOOT LEAF', short: 'COW-FOOT', latin: 'Piper umbellatum', family: 'Piperaceae (pepper family)',
  origin: 'Pantropical; grows in moist, shady forest edges in southern Nigeria',
  added: '2026-10-11',
  kind: 'perennial',
  summary: 'A soft-wooded shrub with very large, round, heart-shaped leaves shaped like a cow\'s hoofprint. Thin white flower spikes stand together in small umbrella-like bunches in the leaf joints.',
  facts: ['SHRUB 1-3 M', 'LEAVES HUGE, ROUND, HEART-SHAPED', 'FLOWER SPIKES WHITE, IN UMBELS', 'STEMS JOINTED, SWOLLEN AT NODES', 'LIKES SHADE AND DAMP SOIL'],
  uses: [
    ['CULINARY', 'Young leaves are cooked as a vegetable or used to wrap food in parts of West and Central Africa.'],
    ['TRADITIONAL', 'Leaves are warmed and applied to swellings and sores, and taken for stomach pain, across Africa, Asia and the Americas. Evidence is weak.'],
  ],
  history: 'Cow-foot leaf is a relative of black pepper and uziza. Found on every tropical continent, it has a long record in folk medicine from Brazil to the Philippines.',
  leaf: { shape: 'heart', len: 1, wid: 1, note: 'SIMPLE ROUND LEAF, DEEP HEART-SHAPED BASE, SMOOTH EDGE' },
  form: { type: 'shrub', height: 1.05, branches: 4, nodes: 5, trunk: 0.3, spread: 0.3, arrange: 'alternate', leafSize: 1.4, flower: { type: 'umbel', size: 0.9, color: 3 } },
  seasons: [
    { id: 'vegetative', label: 'DRY SEASON', from: 0, to: 90, g: [0.85, 0.8], desc: 'Growth slows and some leaves wilt in dry spells.' },
    { id: 'regrowth', label: 'FIRST RAINS', from: 90, to: 140, g: [0.8, 1], desc: 'Big new leaves unfold from the jointed stems.' },
    { id: 'bud', label: 'BUDDING', from: 140, to: 160, g: [1, 1], desc: 'Bunches of slender spikes form in the leaf joints.' },
    { id: 'bloom', label: 'IN BLOOM', from: 160, to: 220, g: [1, 1], desc: 'Tiny white flowers crowd each spike.' },
    { id: 'fruiting', label: 'FRUITING', from: 220, to: 280, g: [1, 1], desc: 'The spikes thicken with tiny fruits.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 280, to: 360, g: [1, 0.85], desc: 'Leafy growth until the rains end.' },
  ],
  beds: [{ plantedDay: -540 }],
});
