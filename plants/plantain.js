EA.addSpecies('plantain', {
  name: 'PLANTAIN', latin: 'Musa × paradisiaca (AAB plantain)', family: 'Musaceae (banana family)',
  origin: 'South-east Asia; a staple crop of southern Nigeria',
  local: 'OGEDE AGBAGBA (YORUBA), AYABA (HAUSA)',
  added: '2026-10-15',
  kind: 'perennial',
  summary: 'A cooking banana: a tall giant herb with a stout pseudostem and huge torn leaves, bearing fewer, much longer, angular fruits that stay starchy and are cooked green or ripe.',
  facts: ['HEIGHT 3-6 M', 'PSEUDOSTEM STOUT, OFTEN BLOTCHED', 'FRUITS LONG, ANGULAR, STARCHY', 'EATEN COOKED, GREEN OR RIPE', 'WEST AND CENTRAL AFRICA: A PLANTAIN DIVERSITY CENTRE'],
  uses: [
    ['FOOD', 'Fried ripe as dodo, roasted as boli, boiled, or dried and milled into plantain flour.'],
    ['TRADE', 'A major crop in the south, from Ondo and Edo to Rivers and Cross River.'],
  ],
  history: 'Plantains arrived in Africa from Asia long ago, and West and Central Africa developed more plantain varieties than anywhere else. Boli roasted by the roadside is a Port Harcourt classic.',
  leaf: { shape: 'paddle', len: 1, wid: 0.3, note: 'HUGE OBLONG PADDLE LEAF, STRONG MIDRIB, OFTEN TORN' },
  form: { type: 'broadleaf', height: 1.45, trunk: 0.55, count: 7, leafSize: 2.3, droop: 0.4, stemW: 0.08, flower: { type: 'single', size: 1.2, color: 1 }, fruit: { type: 'big', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 0, to: 110, g: [0.9, 1], desc: 'Growth slows in the dry season; leaves fray.' },
    { id: 'bud', label: 'SHOOTING', from: 110, to: 150, g: [1, 1], desc: 'The flower stalk emerges from the top.' },
    { id: 'bloom', label: 'IN BLOOM', from: 150, to: 190, g: [1, 1], desc: 'A large purple bud hangs below the fruit hands.' },
    { id: 'fruiting', label: 'BUNCH FILLING', from: 190, to: 300, g: [1, 1], desc: 'Long angular fingers fill out.' },
    { id: 'harvest', label: 'HARVEST', from: 300, to: 360, g: [1, 0.85], desc: 'Bunches are cut and the mother stem felled for its sucker.' },
  ],
  beds: [{ plantedDay: -540 }],
});
