export type Rarity = "common" | "uncommon" | "rare";

export interface LeafTarget {
  id: string;
  commonName: string;
  scientificName: string;
  color: string;
  rarity: Rarity;
  whereToFind: string;
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
    id: "white-oak",
    commonName: "White Oak",
    scientificName: "Quercus alba",
    color: "#8a5a2b",
    rarity: "common",
    whereToFind: "John Ball Park and the hardwood stands at Aman Park",
    hint: "Rounded (not pointy) lobes, pale underside. Look up in mature shade trees.",
    funFact: "A healthy white oak can live for 300+ years, so the one you're looking at may predate the city.",
  },
  {
    id: "sugar-maple",
    commonName: "Sugar Maple",
    scientificName: "Acer saccharum",
    color: "#d9742b",
    rarity: "common",
    whereToFind: "Aman Park and Provin Trails Nature Area, both known for beech-maple forest",
    hint: "Classic five-pointed star with smooth, U-shaped notches between the points.",
    funFact: "West Michigan's maple syrup comes from trees just like this one, tapped every late winter.",
  },
  {
    id: "red-maple",
    commonName: "Red Maple",
    scientificName: "Acer rubrum",
    color: "#b3432b",
    rarity: "common",
    whereToFind: "Wet, low ground at Millennium Park and along the Riverside Park floodplain",
    hint: "Three main points with sharp, V-shaped notches; often has red leaf stalks even in summer.",
    funFact: "Red maple is one of the first trees to color up in fall around Grand Rapids, often by mid-September.",
  },
  {
    id: "american-beech",
    commonName: "American Beech",
    scientificName: "Fagus grandifolia",
    color: "#a6b24a",
    rarity: "uncommon",
    whereToFind: "The old-growth beech-maple woods at Aman Park",
    hint: "Oval with sharp, evenly spaced teeth along the edge and straight parallel veins.",
    funFact: "Young beech trees hold onto their pale, papery dead leaves all winter, a trait called marcescence.",
  },
  {
    id: "shagbark-hickory",
    commonName: "Shagbark Hickory",
    scientificName: "Carya ovata",
    color: "#cf7a1f",
    rarity: "uncommon",
    whereToFind: "Pickerel Lake Nature Preserve and Lamberton Lake Natural Area in Kent County",
    hint: "Compound leaf with 5 large leaflets; the tree's shaggy, peeling bark gives it away even from a distance.",
    funFact: "Its bark looks like it's falling apart, but shagbark hickory wood is actually one of the toughest around.",
  },
  {
    id: "river-birch",
    commonName: "River Birch",
    scientificName: "Betula nigra",
    color: "#c9a227",
    rarity: "uncommon",
    whereToFind: "Along the Grand River at Riverside Park and near the John Ball Zoo riverbank",
    hint: "Small, diamond-shaped leaf with double-toothed edges; find it growing near water with curling, salmon-colored bark.",
    funFact: "Unlike most birches, river birch tolerates wet soil well, which is why it lines so much of the Grand River.",
  },
  {
    id: "eastern-cottonwood",
    commonName: "Eastern Cottonwood",
    scientificName: "Populus deltoides",
    color: "#6b8e3d",
    rarity: "common",
    whereToFind: "The Grand River Greenway and open floodplain areas of Riverside Park",
    hint: "Triangular leaf with coarse, rounded teeth; listen for the rustling, almost papery sound in the wind.",
    funFact: "Cottonwoods grow fast along rivers and can reach well over 100 feet, towering over the Grand River trails.",
  },
  {
    id: "black-walnut",
    commonName: "Black Walnut",
    scientificName: "Juglans nigra",
    color: "#5f4530",
    rarity: "common",
    whereToFind: "John Ball Park and the mature street trees of the Heritage Hill neighborhood",
    hint: "Compound leaf with many narrow leaflets; look (or smell) for round green husks with walnuts inside, littering the ground.",
    funFact: "Black walnut roots release a chemical called juglone that keeps many other plants from growing nearby.",
  },
  {
    id: "american-elm",
    commonName: "American Elm",
    scientificName: "Ulmus americana",
    color: "#6f8f49",
    rarity: "common",
    whereToFind: "Tree-lined streets around East Grand Rapids and Reeds Lake",
    hint: "Lopsided leaf base where it meets the stem, with sharp, double-toothed edges.",
    funFact: "Dutch elm disease wiped out most American elms last century, so surviving street elms are local treasures.",
  },
  {
    id: "sassafras",
    commonName: "Sassafras",
    scientificName: "Sassafras albidum",
    color: "#e0b43c",
    rarity: "uncommon",
    whereToFind: "Woodland edges at Aman Park and Johnson Park",
    hint: "Shapeshifter: the same tree can have oval, mitten, and three-lobed leaves all at once.",
    funFact: "Crushed sassafras leaves smell like root beer, the plant's traditional flavoring source.",
  },
  {
    id: "staghorn-sumac",
    commonName: "Staghorn Sumac",
    scientificName: "Rhus typhina",
    color: "#b3432b",
    rarity: "common",
    whereToFind: "Sunny trail edges along the Paul Henry-Thornapple Trail and Millennium Park",
    hint: "Long compound leaf with many narrow, toothed leaflets; look for fuzzy, antler-like red stems and cone-shaped fruit clusters.",
    funFact: "Staghorn sumac turns some of the most vivid red in the fall of any plant in West Michigan.",
  },
  {
    id: "quaking-aspen",
    commonName: "Quaking Aspen",
    scientificName: "Populus tremuloides",
    color: "#d4c13a",
    rarity: "rare",
    whereToFind: "Open, sandy clearings at Pickerel Lake Nature Preserve",
    hint: "Small, round leaf that flutters constantly, even in the lightest breeze, thanks to its flattened stalk.",
    funFact: "An aspen grove is often a single organism, with every tree sharing one underground root system.",
  },
  {
    id: "ginkgo",
    commonName: "Ginkgo",
    scientificName: "Ginkgo biloba",
    color: "#cfa72b",
    rarity: "rare",
    whereToFind: "Planted as a street and park tree in downtown Grand Rapids and Eastown",
    hint: "Fan-shaped with a notch at the tip; no other tree in the city has a leaf shaped quite like it.",
    funFact: "Ginkgo is a 'living fossil,' virtually unchanged for over 200 million years, though every city one here was planted by hand.",
  },
];

export function totalPossiblePoints(): number {
  return LEAVES.reduce((sum, leaf) => sum + RARITY_POINTS[leaf.rarity], 0);
}
