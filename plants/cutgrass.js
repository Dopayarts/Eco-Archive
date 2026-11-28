EA.addSpecies('cutgrass', {
  name: "CUTGRASS", latin: "Leersia hexandra", family: "Poaceae (grass family)",
  origin: "Wet places pantropically; in West Africa from Senegal to Nigeria and Chad",
  added: '2026-11-28',
  kind: 'perennial',
  summary: "A straggling perennial grass 0.3-1.2 m whose stems creep and root at the joints and spread by rhizomes. Narrow leaves 10-25 cm are armed with hooked spines. Light green flower sprays 5-14 cm turn purplish red.",
  facts: ["SWAMP GRASS", "CREEPING STEMS", "SPINY LEAF EDGES", "PURPLISH SPRAYS", "WET FODDER"],
  uses: [
    ["FODDER", "Grazed when young and cut for hay; burned for fresh dry-season grazing."],
    ["WILDLIFE", "Its swamps shelter nesting cranes and shoebills in Tanzania."],
    ["CAUTION", "The spiny leaf edges can cut skin badly, and it is a weed of rice."],
  ],
  history: "Also called southern cutgrass and swamp rice grass. It rarely sets seed.",
  leaf: { shape: 'blade', len: 1, wid: 0.1, note: 'SPINY BLADE' },
  form: { type: 'grass', height: 0.8, count: 20, stems: 5, droop: 0.45, flower: { type: 'plume', size: 0.5, color: 1 }, fruit: { type: 'berry', size: 0.15, color: 2 } },
  seasons: [
    { id: 'regrowth', label: "FLOOD GROWTH", from: 150, to: 240, g: [0.6, 1], desc: "Stems creep through water." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Purplish sprays." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Dense swamp stands." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.6], desc: "Burned or grazed." },
  ],
  beds: [{ plantedDay: -600 }],
});
