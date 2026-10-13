EA.addSpecies('cocoa', {
  name: 'COCOA', latin: 'Theobroma cacao', family: 'Malvaceae (mallow family)',
  origin: 'The Amazon basin; grown in south-western Nigeria (Ondo, Osun, Ogun, Oyo) and Cross River',
  local: 'KOKO (YORUBA)',
  added: '2026-10-13',
  kind: 'perennial',
  summary: 'A small understorey tree with large, drooping, glossy leaves that flush pink-red when young. Tiny pink-white flowers grow straight out of the trunk and old branches, and become big ridged pods, yellow or orange, full of beans in white pulp.',
  facts: ['TREE 4-8 M, GROWN IN SHADE', 'LEAVES LARGE, DROOPING, NEW LEAVES RED', 'FLOWERS TINY, ON THE TRUNK', 'PODS RIDGED, YELLOW TO ORANGE', 'BEANS FERMENTED THEN DRIED'],
  uses: [
    ['TRADE', 'Nigeria is one of the world\'s largest cocoa exporters; beans are fermented, sun-dried and shipped for chocolate.'],
    ['CULINARY', 'The sweet white pulp is sucked fresh; cocoa powder makes chocolate drinks.'],
  ],
  history: 'Cocoa came to Nigeria in the late 1800s, reportedly via Fernando Po (Bioko). By the mid-1900s it had made the Western Region rich, funding universities, roads and Cocoa House in Ibadan.',
  leaf: { shape: 'oval', len: 1, wid: 0.38, note: 'LARGE SIMPLE OBLONG LEAF, POINTED, GLOSSY, DROOPING' },
  form: { type: 'tree', height: 1.2, trunk: 0.45, branches: 5, nodes: 4, spread: 0.24, stemW: 0.045, leafSize: 1.5, arrange: 'alternate', droop: 0.6, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'big', size: 1.2, hang: true, color: 2 } },
  seasons: [
    { id: 'harvest', label: 'LIGHT CROP', from: 0, to: 60, g: [1, 0.95], desc: 'A small late harvest; harmattan dries the leaves.' },
    { id: 'regrowth', label: 'RED FLUSH', from: 60, to: 120, g: [0.95, 1], desc: 'New red-pink leaves hang limp, then harden to green.' },
    { id: 'bloom', label: 'IN BLOOM', from: 120, to: 180, g: [1, 1], desc: 'Tiny flowers burst from the trunk; midges pollinate them.' },
    { id: 'fruiting', label: 'PODS GROWING', from: 180, to: 270, g: [1, 1], desc: 'Pods grow on the trunk through the rains.' },
    { id: 'harvest', label: 'MAIN CROP', from: 270, to: 360, g: [1, 1], desc: 'Ripe pods are cut, split, and the beans fermented under leaves.' },
  ],
  beds: [{ plantedDay: -1800 }],
});
