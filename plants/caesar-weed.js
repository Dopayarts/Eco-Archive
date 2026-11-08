EA.addSpecies('caesar-weed', {
  name: "CAESAR WEED", short: "CAESARWEED", latin: "Urena lobata", family: "Malvaceae (mallow family)",
  origin: "Tropics worldwide; native in tropical Africa and grown for fibre in Nigeria",
  added: '2026-11-08',
  kind: 'perennial',
  summary: "A bushy shrub 0.5-2.5 m tall, with stems covered in tiny star-shaped hairs. Leaves vary from oval to 3-7 lobed. Pink hibiscus-like flowers 2-3 cm across, darker in the centre, give bur-like fruits covered in hooked bristles.",
  facts: ["SHRUB 0.5-2.5 M", "LEAVES OFTEN LOBED", "FLOWERS PINK, DARK EYE", "BURS WITH HOOKED BRISTLES", "GIVES JUTE-LIKE FIBRE"],
  uses: [
    ["FIBRE", "The soft, shiny bark fibre is made into string, rope, fishing nets and sacks as a jute substitute."],
    ["MEDICINE", "In Nigeria a root preparation is rubbed on for rheumatism."],
    ["FODDER", "Leaves from southern Nigeria contain about 15% protein."],
  ],
  history: "It is also called Congo jute. A well-known West African fibre selection, ex Mokwa, came from Niger State.",
  leaf: { shape: 'heart', len: 1, wid: 0.9, serr: 0.25, note: 'LOBED LEAF, TOOTHED EDGE' },
  form: { type: 'shrub', height: 0.75, trunk: 0.05, branches: 7, nodes: 6, spread: 0.3, stemW: 0.025, leafSize: 1.2, arrange: 'alternate', flower: { type: 'single', size: 0.9, color: 2 }, fruit: { type: 'berry', size: 0.5, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 120, g: [0.8, 0.8], desc: "Woody stems hold on." },
    { id: 'regrowth', label: "REGROWTH", from: 120, to: 200, g: [0.8, 1], desc: "New shoots with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 200, to: 290, g: [1, 1], desc: "Pink flowers." },
    { id: 'fruiting', label: "HOOKED BURS", from: 290, to: 360, g: [1, 0.9], desc: "Burs catch on clothes." },
  ],
  beds: [{ plantedDay: -1080 }],
});
