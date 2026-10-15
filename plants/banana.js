EA.addSpecies('banana', {
  name: 'BANANA', latin: 'Musa acuminata (dessert cultivars)', family: 'Musaceae (banana family)',
  origin: 'South-east Asia; grown in compounds and farms across southern and central Nigeria',
  local: 'OGEDE WEWE (YORUBA), AYABA (HAUSA)',
  added: '2026-10-15',
  kind: 'perennial',
  summary: 'A giant herb, not a tree: its "trunk" is a pseudostem of tightly rolled leaf sheaths, topped by huge paddle-shaped leaves that tear in the wind. A drooping stalk ends in a purple bud and carries hands of fruit that ripen sweet and yellow.',
  facts: ['HEIGHT 2-6 M', 'PSEUDOSTEM OF ROLLED LEAF BASES', 'LEAVES HUGE, PADDLE-SHAPED, TORN', 'FRUIT IN HANDS ON A DROOPING BUNCH', 'EACH STEM FRUITS ONCE, THEN SUCKERS REPLACE IT'],
  uses: [
    ['FOOD', 'Ripe bananas are eaten fresh, with groundnuts or as a snack sold everywhere.'],
    ['HOUSEHOLD', 'Leaves wrap moin moin, eko and other foods for steaming.'],
  ],
  history: 'Bananas reached Africa from Asia probably more than 2,000 years ago. In Nigeria sweet bananas are mostly grown in small backyard clumps.',
  leaf: { shape: 'paddle', len: 1, wid: 0.32, note: 'HUGE OBLONG PADDLE LEAF, STRONG MIDRIB, OFTEN TORN' },
  form: { type: 'broadleaf', height: 1.35, trunk: 0.5, count: 7, leafSize: 2.2, droop: 0.35, stemW: 0.07, flower: { type: 'single', size: 1.2, color: 1 }, fruit: { type: 'big', size: 1.2, hang: true, color: 3 } },
  seasons: [
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 0, to: 120, g: [0.9, 1], desc: 'New leaves unroll from the centre; harmattan winds shred them.' },
    { id: 'bud', label: 'SHOOTING', from: 120, to: 160, g: [1, 1], desc: 'The flower stalk pushes up through the pseudostem and bends over.' },
    { id: 'bloom', label: 'IN BLOOM', from: 160, to: 200, g: [1, 1], desc: 'Purple bracts lift to show rows of small flowers.' },
    { id: 'fruiting', label: 'BUNCH FILLING', from: 200, to: 300, g: [1, 1], desc: 'Green fingers fatten on the hanging bunch.' },
    { id: 'harvest', label: 'HARVEST', from: 300, to: 360, g: [1, 0.85], desc: 'The bunch is cut green; a sucker takes over the stool.' },
  ],
  beds: [{ plantedDay: -540 }],
});
