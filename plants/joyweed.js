EA.addSpecies('joyweed', {
  name: "JOYWEED", latin: "Alternanthera sessilis", family: "Amaranthaceae (amaranth family)",
  origin: "Tropics worldwide; eaten in soup in Nigeria",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A creeping or upright herb up to 1 m, often rooting at the joints and sometimes floating. Opposite leaves are 1-15 cm long. Tiny white to pinkish flowers sit in small round heads in the leaf joints.",
  facts: ["CREEPING HERB", "ROOTS AT JOINTS", "OPPOSITE LEAVES", "TINY WHITE HEADS", "SOUP GREEN"],
  uses: [
    ["FOOD", "Leaves and young shoots are cooked in soup in Nigeria."],
    ["MEDICINE", "In Nigeria the pounded plant is used for headache and dizziness; leaf sap is sniffed for nerve pain."],
    ["CAUTION", "It contains oxalates, so cook it before eating much."],
  ],
  history: "Also called sessile joyweed, dwarf copperleaf and Brazilian spinach. It flowers and fruits all year.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'OPPOSITE LEAF' },
  form: { type: 'herb', height: 0.4, branches: 5, nodes: 6, arrange: 'opposite', leafSize: 0.7, droop: 0.2, flower: { type: 'head', size: 0.3, color: 3 }, fruit: { type: 'berry', size: 0.2, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Creeping stems." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 240, g: [1, 1], desc: "Tiny white heads." },
    { id: 'fruiting', label: "SEEDING", from: 240, to: 360, g: [1, 1], desc: "Tiny corky fruits." },
  ],
  beds: [{ plantedDay: -300 }],
});
