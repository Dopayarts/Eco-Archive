EA.addSpecies('oil-bean', {
  name: "AFRICAN OIL BEAN", short: "UGBA", latin: "Pentaclethra macrophylla", family: "Fabaceae (pea family)",
  origin: "West and Central Africa; southern and especially south-eastern Nigeria",
  local: "UGBA, UKPAKA (IGBO), UKANA (EFIK), APARA (YORUBA)",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A big tree with feathery, twice-divided leaves of many small leaflets and spikes of creamy flowers. Its huge, woody pods split open with a loud crack, flinging out large, flat, glossy brown seeds.",
  facts: ["TREE UP TO 20-25 M", "LEAVES BIPINNATE, FEATHERY", "POD WOODY, UP TO 50 CM", "POD BURSTS WITH A CRACK", "SEEDS LARGE, FLAT, BROWN"],
  uses: [
    ["FOOD", "Seeds are boiled, sliced and fermented in leaves into ugba (ukpaka), eaten with abacha or in soups."],
  ],
  history: "Ugba is a central part of Igbo meals. Making it takes days of boiling, soaking and fermentation that turns the bitter seeds soft and rich in protein.",
  leaf: { shape: 'oval', len: 0.9, wid: 0.45, compound: 'bipinnate', note: 'TWICE-PINNATE LEAF, MANY SMALL LEAFLETS' },
  form: { type: 'tree', height: 1.45, trunk: 0.45, branches: 9, nodes: 4, spread: 0.36, stemW: 0.07, leafSize: 1.7, arrange: 'alternate', flower: { type: 'spike', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 2.0, hang: true, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 60, g: [1, 1], desc: "Creamy flower spikes in the dry season." },
    { id: 'fruiting', label: "PODS GROWING", from: 60, to: 200, g: [1, 1], desc: "Huge pods grow through the rains." },
    { id: 'harvest', label: "PODS BURST", from: 200, to: 300, g: [1, 1], desc: "Dry pods crack open and fling their seeds." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Feathery crown." },
  ],
  beds: [{ plantedDay: -7200 }],
});
