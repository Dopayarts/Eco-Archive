EA.addSpecies('tamarind', {
  name: 'TAMARIND', latin: 'Tamarindus indica', family: 'Fabaceae (bean family)',
  origin: 'Tropical Africa; common in the savanna of northern Nigeria',
  local: 'TSAMIYA (HAUSA)',
  added: '2026-10-13',
  kind: 'perennial',
  summary: 'A large, long-lived shade tree with a dense, rounded crown of feathery leaves made of many small paired leaflets. Small yellow flowers streaked with red give way to brown, curved pods filled with sticky, sweet-sour pulp.',
  facts: ['TREE UP TO 25 M, DENSE CROWN', 'LEAVES PINNATE, 10-20 PAIRS OF SMALL LEAFLETS', 'FLOWERS YELLOW WITH RED STREAKS', 'PODS BROWN, CURVED, BRITTLE SHELL', 'LIVES FOR CENTURIES'],
  uses: [
    ['CULINARY', 'The sour pulp flavours kunu, drinks and sauces; young leaves are eaten and used to sour dishes.'],
    ['SHADE', 'A favourite village meeting tree in the north.'],
    ['TRADITIONAL', 'The pulp is a mild laxative and is used for fever; leaves are used for wounds.'],
  ],
  history: 'Tamarind is probably native to tropical Africa but became so important in India that its name comes from Arabic tamr hindi, "Indian date". In northern Nigeria old tsamiya trees mark markets and village squares.',
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 12, note: 'PINNATE LEAF, 10-20 PAIRS OF SMALL OBLONG LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.45, branches: 8, nodes: 3, spread: 0.32, stemW: 0.055, leafSize: 1.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 1 } },
  seasons: [
    { id: 'harvest', label: 'POD HARVEST', from: 0, to: 90, g: [1, 0.9], desc: 'Ripe brown pods are gathered in the dry season.' },
    { id: 'regrowth', label: 'NEW LEAVES', from: 90, to: 140, g: [0.9, 1], desc: 'Fresh pale leaves flush before the rains.' },
    { id: 'bloom', label: 'IN BLOOM', from: 140, to: 200, g: [1, 1], desc: 'Small yellow and red flowers hang in loose sprays.' },
    { id: 'fruiting', label: 'PODS GROWING', from: 200, to: 360, g: [1, 1], desc: 'Green velvety pods lengthen and slowly ripen to brown.' },
  ],
  beds: [{ plantedDay: -2880 }],
});
