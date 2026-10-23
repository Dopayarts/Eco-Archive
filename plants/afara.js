EA.addSpecies('afara', {
  name: "WHITE AFARA", short: "AFARA", latin: "Terminalia superba", family: "Combretaceae (combretum family)",
  origin: "West and Central Africa; forests and plantations of southern Nigeria",
  local: "AFARA (YORUBA)",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A tall forest tree up to 50 m with big flat buttresses and tiered branches. Its leaves cluster at the branch tips and drop in the dry season. Small golden-brown nuts carry broad side wings.",
  facts: ["TREE UP TO 50 M", "BUTTRESSES UP TO 6 M HIGH", "LEAVES CLUSTERED, DECIDUOUS", "FRUIT A WINGED NUT", "LIGHT, EASY-TO-WORK WOOD"],
  uses: [
    ["WOOD", "Plywood, furniture, joinery, mouldings and door faces."],
    ["PULP", "Used for paper and particleboard."],
  ],
  history: "Afara is grown in Nigerian forest plantations; at Shasha Forest Reserve in Osun State it has been studied alongside gmelina and obeche.",
  leaf: { shape: 'paddle', len: 0.9, wid: 0.5, note: 'OBOVATE LEAF, CLUSTERED AT TWIG TIPS' },
  form: { type: 'tree', height: 1.55, trunk: 0.6, branches: 8, nodes: 3, spread: 0.36, stemW: 0.08, leafSize: 1.5, arrange: 'whorl', droop: 0.1, flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 0.6, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 50, g: [0.75, 0.75], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 50, to: 100, g: [0.75, 1], desc: "Small flower spikes with the new leaves." },
    { id: 'fruiting', label: "WINGED FRUITS", from: 100, to: 180, g: [1, 1], desc: "Winged nuts ripen and drift down." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 330, g: [1, 1], desc: "Tiered crown in full leaf." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.75], desc: "Leaves fall." },
  ],
  beds: [{ plantedDay: -9000 }],
});
