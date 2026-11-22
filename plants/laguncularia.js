EA.addSpecies('laguncularia', {
  name: "LAGUNCULARIA", short: "LAGUNCULA", latin: "Laguncularia racemosa", family: "Combretaceae (combretum family)",
  origin: "Coasts of the Americas and West Africa; in the Niger Delta mangroves at Yenagoa, Buguma and Okrika",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "A mangrove shrub or tree, stunted in the Niger Delta but up to 18 m elsewhere, with grey-brown bark and breathing roots that poke up from the mud. Leathery, oval leaves grow in opposite pairs. Small white bell flowers give ribbed, reddish-brown fruits about 2 cm long.",
  facts: ["MANGROVE TREE", "BREATHING ROOTS", "LEATHERY LEAVES", "WHITE BELL FLOWERS", "FRUITS ALL YEAR"],
  uses: [
    ["SHORE", "It holds tropical shorelines together."],
    ["WILDLIFE", "It gives shelter to wildlife in the mangrove swamps."],
  ],
  history: "Called black mangrove in Nigerian studies and white mangrove in the Americas. It grows in peaty chikoko soil.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'LEATHERY, OPPOSITE' },
  form: { type: 'tree', height: 1.2, trunk: 0.45, branches: 8, nodes: 4, spread: 0.26, stemW: 0.07, leafSize: 1.3, arrange: 'opposite', droop: 0.1, flower: { type: 'spike', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 180, g: [1, 1], desc: "Flowers all year." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 360, g: [1, 1], desc: "Fruits all year." },
  ],
  beds: [{ plantedDay: -4000 }],
});
