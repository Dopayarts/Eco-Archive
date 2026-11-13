EA.addSpecies('lagos-mahogany', {
  name: "LAGOS MAHOGANY", short: "LAGOS MAH", latin: "Khaya ivorensis", family: "Meliaceae (mahogany family)",
  origin: "West Africa, mostly southern Nigeria, Ghana and Ivory Coast, east to Cameroon and Gabon",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A giant tree up to 60 m with buttresses. Leaves have 4-7 pairs of leaflets. Small whitish flowers are sweet-scented. The fruit is a round woody capsule 5-7 cm that splits into 5 parts.",
  facts: ["TREE UP TO 60 M", "BUTTRESSED", "4-7 PAIRS OF LEAFLETS", "SWEET WHITE FLOWERS", "WOODY 5-PART CAPSULE"],
  uses: [
    ["TIMBER", "Its red wood is traded worldwide as African mahogany."],
    ["SHADE", "In Nigeria it is planted to shade cocoa."],
    ["MEDICINE", "The bark, rich in tannin, is used for cough and fever."],
  ],
  history: "Also called red mahogany and Nigerian mahogany. The first plantation was set up in Ivory Coast in 1927. It is rated Vulnerable.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 6, note: 'PINNATE LEAF, 4-7 PAIRS' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.09, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'big', size: 0.8, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Dry season crown." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [1, 1], desc: "Sweet white flowers." },
    { id: 'fruiting', label: "CAPSULES", from: 120, to: 240, g: [1, 1], desc: "Woody capsules ripen." },
    { id: 'regrowth', label: "NEW LEAVES", from: 240, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -7000 }],
});
