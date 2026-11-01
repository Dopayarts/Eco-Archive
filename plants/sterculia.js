EA.addSpecies('sterculia', {
  name: "STERCULIA", latin: "Sterculia setigera", family: "Malvaceae (mallow family)",
  origin: "Sahel and savanna of tropical Africa, including northern Nigeria",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A savanna tree up to 12 m with grey-purple bark that flakes off in patches. Big lobed leaves are thick with star-shaped hairs. Bell-shaped flowers, green outside and red inside, open on bare twigs, followed by woody pods lined with itchy hairs.",
  facts: ["TREE UP TO 12 M", "BARK FLAKES IN PATCHES", "LEAVES LOBED, HAIRY", "FLOWERS RED INSIDE", "POD HAIRS ITCH"],
  uses: [
    ["GUM", "The trunk gives karaya gum, an export crop in Senegal."],
    ["FOOD", "Nomadic groups in northern Nigeria eat the seeds."],
    ["CAUTION", "The yellow hairs inside the pods irritate the skin."],
  ],
  history: "Sterculia flowers on bare branches at the end of the dry season.",
  leaf: { shape: 'heart', len: 1, wid: 1.0, compound: 'palmate', leaflets: 5, note: 'BROAD 3-5 LOBED LEAF, STAR HAIRS BENEATH' },
  form: { type: 'tree', height: 1.2, trunk: 0.45, branches: 7, nodes: 4, spread: 0.38, stemW: 0.08, leafSize: 2.0, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 2 }, fruit: { type: 'pod', size: 1.1, color: 1 } },
  seasons: [
    { id: 'dormant', label: "BARE", from: 0, to: 30, g: [0.4, 0.4], desc: "Leafless in the harmattan." },
    { id: 'bloom', label: "IN FLOWER", from: 30, to: 120, g: [0.4, 0.5], desc: "Red-throated bells on bare twigs." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 270, g: [0.6, 1], desc: "Big leaves with the rains." },
    { id: 'fruiting', label: "PODS", from: 270, to: 360, g: [1, 0.5], desc: "Woody pods split; leaves fall." },
  ],
  beds: [{ plantedDay: -5400 }],
});
