EA.addSpecies('mimosa', {
  name: 'TOUCH-ME-NOT', short: 'MIMOSA', latin: 'Mimosa pudica', family: 'Fabaceae (bean family)',
  origin: 'Tropical America; a common weed of lawns and roadsides in Nigeria',
  added: '2026-10-14',
  kind: 'perennial',
  summary: 'A low, sprawling, prickly herb whose feathery leaves fold up and droop within seconds when touched, then slowly reopen. Fluffy pink pompom flower heads stand on short stalks.',
  facts: ['SPRAWLING, 15-50 CM TALL', 'LEAVES BIPINNATE, FOLD WHEN TOUCHED', 'STEMS PRICKLY', 'FLOWERS PINK POMPOMS', 'LEAVES ALSO CLOSE AT NIGHT'],
  uses: [
    ['SCIENCE', 'A classic plant for studying fast plant movement; touch triggers a loss of water pressure at the leaf joints.'],
    ['TRADITIONAL', 'Used for sleep problems, wounds and stomach complaints; evidence is weak.'],
    ['FARMING', 'Fixes nitrogen, but is a thorny weed of pasture.'],
  ],
  history: 'From the Americas, touch-me-not now grows across the tropics. Children everywhere it grows play at making the leaves close.',
  leaf: { shape: 'oval', len: 1, wid: 0.3, compound: 'bipinnate', leaflets: 8, note: 'BIPINNATE LEAF, MANY TINY LEAFLETS THAT FOLD ON TOUCH' },
  form: { type: 'vine', trailing: true, stems: 5, leafSize: 1.2, flower: { type: 'head', size: 1, color: 3 } },
  seasons: [
    { id: 'vegetative', label: 'DRY SEASON', from: 0, to: 90, g: [0.8, 0.75], desc: 'Stems get woody and sparse.' },
    { id: 'regrowth', label: 'FIRST RAINS', from: 90, to: 140, g: [0.75, 1], desc: 'New sensitive leaves spread over the ground.' },
    { id: 'bloom', label: 'IN BLOOM', from: 140, to: 260, g: [1, 1], desc: 'Pink pompom flowers appear through the rains.' },
    { id: 'seeding', label: 'SETTING SEED', from: 260, to: 360, g: [1, 0.85], desc: 'Bristly pods break into one-seeded pieces.' },
  ],
  beds: [{ plantedDay: -360 }],
});
