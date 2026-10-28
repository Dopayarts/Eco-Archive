EA.addSpecies('idigbo', {
  name: "BLACK AFARA", short: "IDIGBO", latin: "Terminalia ivorensis", family: "Combretaceae (combretum family)",
  origin: "West African rainforest from Guinea to Cameroon, including Nigeria",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A tall forest tree with a flat-topped crown and a trunk bare for up to 30 m. Its bark turns blackish and deeply grooved with age. Blunt, oval leaves crowd at the shoot tips, and the fruit is a long, two-winged nut that ripens reddish-brown.",
  facts: ["TREE 15-46 M", "CROWN FLAT-TOPPED", "BARK BLACKISH, FISSURED", "LEAVES CROWDED AT TIPS", "FRUIT TWO-WINGED"],
  uses: [
    ["WOOD", "Yellow-brown, oak-like timber (idigbo) for joinery, flooring and plywood."],
    ["FARMING", "Planted as shade over cocoa, coffee and bananas."],
    ["FUEL", "Firewood and charcoal."],
  ],
  history: "Idigbo grows fast and is planted in lines in forest plantations. It is killed by fire and drought, so it needs a wet forest climate.",
  leaf: { shape: 'paddle', len: 0.9, wid: 0.45, note: 'BLUNT OVAL LEAF, CROWDED AT SHOOT TIPS' },
  form: { type: 'tree', height: 1.6, trunk: 0.65, branches: 9, nodes: 3, spread: 0.38, stemW: 0.08, leafSize: 1.7, arrange: 'whorl', droop: 0.05, flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 0.6, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.8, 0.8], desc: "The crown thins in the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [0.8, 1], desc: "Small flower spikes with the new leaves." },
    { id: 'fruiting', label: "WINGED FRUITS", from: 120, to: 210, g: [1, 1], desc: "Winged nuts ripen reddish-brown." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 0.9], desc: "Flat-topped crown in full leaf." },
  ],
  beds: [{ plantedDay: -9000 }],
});
