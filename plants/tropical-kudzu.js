EA.addSpecies('tropical-kudzu', {
  name: "TROPICAL KUDZU", short: "KUDZU", latin: "Pueraria phaseoloides", family: "Fabaceae (pea family)",
  origin: "South-east Asia; planted as a cover crop in Nigeria",
  added: '2026-10-26',
  kind: 'perennial',
  summary: "A vigorous, hairy, twining vine with leaves of three broad leaflets. Small mauve pea flowers grow in long clusters, followed by thin, hairy pods. It quickly smothers the ground in a thick mat.",
  facts: ["TWINING VINE, HAIRY", "LEAVES OF 3 LEAFLETS", "FLOWERS SMALL, MAUVE", "PODS THIN, HAIRY", "FIXES NITROGEN"],
  uses: [
    ["FARMING", "At IITA, Ibadan, a kudzu fallow added much more nitrogen than a bush fallow and raised maize yields."],
    ["PLANTATIONS", "Grown under oil palm and rubber to cover soil."],
  ],
  history: "Tropical kudzu was spread through the tropics as a cover crop for plantations; it feeds the soil with nitrogen from its root nodules.",
  leaf: { shape: 'oval', len: 1, wid: 0.75, compound: 'trifoliate', note: 'LEAF OF 3 BROAD, SHALLOWLY LOBED LEAFLETS, HAIRY' },
  form: { type: 'vine', height: 1.1, nodes: 16, leafSize: 1.5, droop: 0.35, flower: { type: 'spike', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "DRY SEASON", from: 0, to: 90, g: [0.75, 0.75], desc: "Leaves wilt and drop in the harmattan." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.75, 1], desc: "Runners spread across the ground." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 270, g: [1, 1], desc: "A thick green mat." },
    { id: 'bloom', label: "IN BLOOM", from: 270, to: 330, g: [1, 1], desc: "Mauve flower clusters." },
    { id: 'fruiting', label: "PODS", from: 330, to: 360, g: [1, 0.9], desc: "Thin hairy pods ripen." },
  ],
  beds: [{ plantedDay: -720 }],
});
