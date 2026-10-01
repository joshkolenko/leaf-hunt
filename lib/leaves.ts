export type Rarity = "common" | "uncommon" | "rare";

export interface LeafTarget {
  id: string;
  commonName: string;
  scientificName: string;
  color: string;
  rarity: Rarity;
  hint: string;
  funFact: string;
}

export const RARITY_POINTS: Record<Rarity, number> = {
  common: 10,
  uncommon: 20,
  rare: 40,
};

export const LEAVES: LeafTarget[] = [
  {
    id: "oak",
    commonName: "Oak",
    scientificName: "Quercus",
    color: "#8a5a2b",
    rarity: "common",
    hint: "Lobed edges, like rounded fingers. Often found under big shade trees.",
    funFact: "A single mature oak can drop over 10,000 acorns in a good year.",
  },
  {
    id: "maple",
    commonName: "Maple",
    scientificName: "Acer",
    color: "#d9742b",
    rarity: "common",
    hint: "Classic five-pointed star shape, famous for fiery fall color.",
    funFact: "Maple leaves turn red when sugars get trapped as chlorophyll breaks down.",
  },
  {
    id: "birch",
    commonName: "Birch",
    scientificName: "Betula",
    color: "#a6b24a",
    rarity: "common",
    hint: "Small, oval, and finely toothed. Look near pale, papery bark.",
    funFact: "Birch bark was used by Indigenous peoples to build lightweight canoes.",
  },
  {
    id: "elm",
    commonName: "Elm",
    scientificName: "Ulmus",
    color: "#6b8e3d",
    rarity: "common",
    hint: "Lopsided base where the leaf meets the stem, with sharp double-toothed edges.",
    funFact: "Elm wood resists splitting, so it was historically used for wagon wheels.",
  },
  {
    id: "gingko",
    commonName: "Ginkgo",
    scientificName: "Ginkgo biloba",
    color: "#e0b43c",
    rarity: "uncommon",
    hint: "Fan-shaped with a notch at the tip, turns brilliant gold in autumn.",
    funFact: "Ginkgo is a 'living fossil' virtually unchanged for over 200 million years.",
  },
  {
    id: "sweetgum",
    commonName: "Sweetgum",
    scientificName: "Liquidambar styraciflua",
    color: "#b3432b",
    rarity: "uncommon",
    hint: "Star-shaped like a maple but with 5-7 sharper points and glossy skin.",
    funFact: "Its spiky seed pods are nicknamed 'gumballs' and persist long after leaves fall.",
  },
  {
    id: "sassafras",
    commonName: "Sassafras",
    scientificName: "Sassafras albidum",
    color: "#cf7a1f",
    rarity: "uncommon",
    hint: "Shapeshifter: same tree can have oval, mitten, and three-lobed leaves.",
    funFact: "Crushed leaves smell like root beer, the plant's traditional flavoring source.",
  },
  {
    id: "tuliptree",
    commonName: "Tulip Tree",
    scientificName: "Liriodendron tulipifera",
    color: "#c9a227",
    rarity: "uncommon",
    hint: "Four-lobed with a flat or notched tip, almost square in outline.",
    funFact: "One of the tallest hardwoods in eastern North America, often over 100 feet.",
  },
  {
    id: "redwood",
    commonName: "Coast Redwood",
    scientificName: "Sequoia sempervirens",
    color: "#3f6b3a",
    rarity: "rare",
    hint: "Tiny flat needles arranged in two flat rows along a twig.",
    funFact: "Coast redwoods are the tallest trees on Earth, reaching over 350 feet.",
  },
  {
    id: "catalpa",
    commonName: "Catalpa",
    scientificName: "Catalpa speciosa",
    color: "#5f8f5a",
    rarity: "rare",
    hint: "Huge heart-shaped leaf, sometimes bigger than your hand.",
    funFact: "A single catalpa leaf can grow wider than a dinner plate.",
  },
  {
    id: "fig",
    commonName: "Fig",
    scientificName: "Ficus carica",
    color: "#4f7942",
    rarity: "rare",
    hint: "Deeply lobed, almost hand-shaped, with a rough, matte surface.",
    funFact: "Fig trees can live for centuries and some are considered sacred in several cultures.",
  },
  {
    id: "aspen",
    commonName: "Quaking Aspen",
    scientificName: "Populus tremuloides",
    color: "#d4c13a",
    rarity: "uncommon",
    hint: "Small, round, and flutters constantly even in the lightest breeze.",
    funFact: "Aspen groves are often a single organism sharing one underground root system.",
  },
];

export function totalPossiblePoints(): number {
  return LEAVES.reduce((sum, leaf) => sum + RARITY_POINTS[leaf.rarity], 0);
}
