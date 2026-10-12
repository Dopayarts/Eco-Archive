EA.addSpecies('bush-tea', {
  name: 'BUSH TEA', latin: 'Lippia multiflora', family: 'Verbenaceae (verbena family)',
  origin: 'West and Central African savanna; Nigeria and neighbouring countries',
  added: '2026-10-12',
  kind: 'perennial',
  summary: 'An aromatic savanna shrub with stiff upright stems, rough, toothed leaves in whorls of three, and many small, cone-like heads of tiny white flowers. The leaves smell of lemon and are brewed into tea.',
  facts: ['SHRUB 1-4 M', 'LEAVES IN WHORLS OF 3, ROUGH, TOOTHED', 'FLOWER HEADS SMALL, WHITE, CONE-LIKE', 'LEMONY SMELL FROM ESSENTIAL OILS', 'RESPROUTS AFTER BUSH FIRES'],
  uses: [
    ['DRINK', 'Leaves are brewed as a tea, known as Gambian tea or Ghana tea, sometimes sold commercially.'],
    ['TRADITIONAL', 'Taken for fever, colds and high blood pressure; a small trial suggested a mild blood-pressure effect.'],
    ['HOUSEHOLD', 'Dried leaves are burnt or laid in rooms to keep insects away.'],
  ],
  history: 'Bush tea grows wild in the savanna from Senegal to Cameroon. Several West African countries have tried to develop it as a commercial herbal tea.',
  leaf: { shape: 'lance', len: 1, wid: 0.35, serr: 0.15, note: 'SIMPLE LANCE LEAF, ROUGH, FINELY TOOTHED, IN WHORLS OF THREE' },
  form: { type: 'shrub', height: 1.1, branches: 6, nodes: 6, trunk: 0.2, spread: 0.2, arrange: 'whorl', leafSize: 0.8, flower: { type: 'head', size: 0.7, color: 3 } },
  seasons: [
    { id: 'dormant', label: 'DRY SEASON', from: 0, to: 90, g: [0.6, 0.55], desc: 'Stems dry back; bush fires may burn it to the ground.' },
    { id: 'regrowth', label: 'FIRST RAINS', from: 90, to: 150, g: [0.55, 1], desc: 'New shoots sprout from the rootstock.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 150, to: 220, g: [1, 1], desc: 'Leaves are gathered for tea.' },
    { id: 'bloom', label: 'IN BLOOM', from: 220, to: 280, g: [1, 1], desc: 'Many small white flower heads cover the tips.' },
    { id: 'seeding', label: 'SETTING SEED', from: 280, to: 360, g: [1, 0.65], desc: 'Tiny fruits ripen and the shrub dries off.' },
  ],
  beds: [{ plantedDay: -720 }],
});
