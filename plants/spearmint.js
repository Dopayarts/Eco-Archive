EA.addSpecies('spearmint', {
  name: 'SPEARMINT', latin: 'Mentha spicata', family: 'Lamiaceae (mint family)',
  origin: 'Europe and western Asia; the common garden mint of Nigeria, grown in pots and gardens',
  added: '2026-10-12',
  kind: 'perennial',
  summary: 'A spreading herb with square stems and bright green, toothed leaves in opposite pairs, sweeter and milder than peppermint. Slim spikes of pale lilac flowers appear at the tips. Runners let it fill a bed quickly.',
  facts: ['HEIGHT 30-80 CM', 'STEMS SQUARE', 'LEAVES OPPOSITE, TOOTHED, WRINKLED', 'FLOWERS PALE LILAC SPIKES', 'SPREADS BY RUNNERS'],
  uses: [
    ['CULINARY', 'Leaves flavour tea, drinks, salads and some stews; popular in northern Nigerian green tea.'],
    ['TRADITIONAL', 'Taken for indigestion and wind; evidence is modest.'],
  ],
  history: 'Spearmint is an old garden plant, spread around the world by traders. In northern Nigeria it is a favourite flavouring for sweet green tea, as across the Sahel.',
  leaf: { shape: 'lance', len: 1, wid: 0.45, serr: 0.2, note: 'SIMPLE LANCE LEAF, TOOTHED, WRINKLED, STALKLESS' },
  form: { type: 'herb', height: 0.7, stems: 4, nodes: 7, branches: 1, arrange: 'opposite', leafSize: 0.75, flower: { type: 'spike', size: 0.9, color: 3 } },
  seasons: [
    { id: 'vegetative', label: 'DRY SEASON', from: 0, to: 90, g: [0.7, 0.65], desc: 'Growth slows and shoots thin out unless watered.' },
    { id: 'regrowth', label: 'FIRST RAINS', from: 90, to: 140, g: [0.65, 1], desc: 'Runners send up a crowd of new shoots.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 140, to: 220, g: [1, 1], desc: 'The best season for picking leaves.' },
    { id: 'bud', label: 'BUDDING', from: 220, to: 240, g: [1, 1], desc: 'Slim green spikes form at the tips.' },
    { id: 'bloom', label: 'IN BLOOM', from: 240, to: 290, g: [1, 1], desc: 'Pale lilac flowers open around the spikes; bees visit.' },
    { id: 'seeding', label: 'SETTING SEED', from: 290, to: 360, g: [1, 0.75], desc: 'Spikes dry and shoots get leggy as the rains end.' },
  ],
  beds: [{ plantedDay: -360 }],
});
