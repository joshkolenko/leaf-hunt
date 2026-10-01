export type LeafShape =
  | "maple"
  | "redmaple"
  | "silver"
  | "oakb"
  | "oakr"
  | "bur"
  | "oval"
  | "hick"
  | "walnut"
  | "mitten"
  | "tulip"
  | "round"
  | "lance"
  | "heart"
  | "tri"
  | "syc"
  | "fan"
  | "sumac"
  | "birch";

export interface Leaf {
  id: string;
  name: string;
  latin: string;
  shape: LeafShape;
  pts: 1 | 2 | 3;
  colors: [string, string, string];
  spot: string;
  where: string;
}

export const LEAVES: Leaf[] = [
  {
    id: "sugar",
    name: "Sugar maple",
    latin: "Acer saccharum",
    shape: "maple",
    pts: 1,
    colors: ["#E8A317", "#E2591B", "#C0262D"],
    spot: "Five lobes with smooth, U-shaped notches between them and few teeth. The Michigan postcard tree.",
    where: "Everywhere in the beech-maple woods: Blandford, Aman Park, Grand Ravines.",
  },
  {
    id: "red",
    name: "Red maple",
    latin: "Acer rubrum",
    shape: "redmaple",
    pts: 1,
    colors: ["#D4231E", "#9E1B32", "#E8A317"],
    spot: "Three main lobes with sharp V-shaped notches and toothy edges. Red stems. One of the first trees to turn.",
    where: "Wet edges and city streets. Millennium Park ponds, neighborhood boulevards.",
  },
  {
    id: "silver",
    name: "Silver maple",
    latin: "Acer saccharinum",
    shape: "silver",
    pts: 1,
    colors: ["#D9C25A", "#B9A55A", "#C9CCC0"],
    spot: "Five very deep, skinny lobes cut nearly to the middle. Flip it over: the underside is silvery white.",
    where: "River floodplains. Johnson Park and the Grand River banks are full of them.",
  },
  {
    id: "redoak",
    name: "Northern red oak",
    latin: "Quercus rubra",
    shape: "oakb",
    pts: 1,
    colors: ["#8E2A1E", "#A0522D", "#6B3E26"],
    spot: "Pointed lobes, each ending in a tiny bristle tip. Turns russet late and holds on.",
    where: "Upland woods and older parks. Calvin Ecosystem Preserve, Seidman Park, Heritage Hill streets.",
  },
  {
    id: "whiteoak",
    name: "White oak",
    latin: "Quercus alba",
    shape: "oakr",
    pts: 2,
    colors: ["#8B3A4A", "#7A4B3A", "#B0754A"],
    spot: "Rounded, finger-like lobes with no bristles. Turns a burgundy-purple you won't mistake.",
    where: "Dry oak-hickory ground. Calvin Ecosystem Preserve, Seidman Park, Millennium Park uplands.",
  },
  {
    id: "bur",
    name: "Bur oak",
    latin: "Quercus macrocarpa",
    shape: "bur",
    pts: 2,
    colors: ["#B58A3C", "#8A6A3A", "#6E5A3A"],
    spot: "Wide at the top, pinched in the middle like a fiddle, with a deep 'waist'. Acorns have fringed, shaggy caps.",
    where: "Open parkland and savanna remnants. Riverside Park, Millennium Park, older cemeteries.",
  },
  {
    id: "beech",
    name: "American beech",
    latin: "Fagus grandifolia",
    shape: "oval",
    pts: 1,
    colors: ["#D9A441", "#C38E3A", "#E7D3A3"],
    spot: "Oval with neat parallel veins, each ending in a small tooth. Smooth grey bark. Young trees keep papery tan leaves all winter.",
    where: "Shady ravines. Aman Park, Grand Ravines and Blandford are classic beech-maple forest.",
  },
  {
    id: "hickory",
    name: "Shagbark hickory",
    latin: "Carya ovata",
    shape: "hick",
    pts: 2,
    colors: ["#E0B21E", "#C9A227", "#9C7A2E"],
    spot: "Compound leaf, usually five leaflets with the top three biggest. Check the bark: long strips peeling away like shaggy plates.",
    where: "Oak-hickory woods. Calvin Ecosystem Preserve, Seidman Park, Pigeon Creek Park.",
  },
  {
    id: "walnut",
    name: "Black walnut",
    latin: "Juglans nigra",
    shape: "walnut",
    pts: 1,
    colors: ["#D7C44A", "#B9A64A", "#8A8A3A"],
    spot: "Long compound leaf with 15-23 narrow leaflets, often missing the end one. Green tennis-ball nuts on the ground. One of the first to drop.",
    where: "River bottoms and fence lines. Johnson Park, Kent Trails along the river.",
  },
  {
    id: "sassafras",
    name: "Sassafras",
    latin: "Sassafras albidum",
    shape: "mitten",
    pts: 2,
    colors: ["#E35A1E", "#D97A1E", "#C0262D"],
    spot: "Three leaf shapes on one tree: plain oval, a mitten, and a three-fingered glove. Crush a leaf; it smells like root beer.",
    where: "Sunny forest edges and sandy soil. Seidman Park, Millennium Park trails, Grand Ravines edges.",
  },
  {
    id: "tulip",
    name: "Tulip tree",
    latin: "Liriodendron tulipifera",
    shape: "tulip",
    pts: 3,
    colors: ["#F2C94C", "#E5B437", "#C9A227"],
    spot: "Four lobes with a squared-off, notched top, like a tulip or a cat's face. Turns clear butter-yellow.",
    where: "Native just south of here, so mostly planted. Meijer Gardens and older neighborhoods like Heritage Hill and East Grand Rapids.",
  },
  {
    id: "aspen",
    name: "Quaking aspen",
    latin: "Populus tremuloides",
    shape: "round",
    pts: 2,
    colors: ["#F2C94C", "#E5B437", "#D9A441"],
    spot: "Nearly round with a sharp tip and fine teeth. The stem is flat, so leaves flutter in the slightest breeze.",
    where: "Young, sunny woods and old fields. Millennium Park, Pigeon Creek Park.",
  },
  {
    id: "cherry",
    name: "Black cherry",
    latin: "Prunus serotina",
    shape: "lance",
    pts: 1,
    colors: ["#E0A030", "#D45A2A", "#B8402A"],
    spot: "Long, narrow, glossy leaf with tiny inward-curving teeth. Look for a fuzzy rusty line along the midrib underneath. Dark 'burnt potato chip' bark.",
    where: "Woods edges everywhere. Blandford, Kent Trails, Johnson Park.",
  },
  {
    id: "basswood",
    name: "Basswood",
    latin: "Tilia americana",
    shape: "heart",
    pts: 1,
    colors: ["#D9C25A", "#C9A75A", "#A88A4A"],
    spot: "Big lopsided heart, wider on one side at the base, with saw teeth. Often bigger than your hand.",
    where: "Rich, moist woods. Blandford, Aman Park, Grand Ravines.",
  },
  {
    id: "cottonwood",
    name: "Eastern cottonwood",
    latin: "Populus deltoides",
    shape: "tri",
    pts: 1,
    colors: ["#F0D04A", "#D9B83A", "#B9A04A"],
    spot: "Triangular, like the Greek letter delta, with coarse curved teeth and a flat stem. Huge trees by water.",
    where: "Riverbanks and pond edges. Johnson Park, Millennium Park, Kent Trails along the Grand.",
  },
  {
    id: "sycamore",
    name: "American sycamore",
    latin: "Platanus occidentalis",
    shape: "syc",
    pts: 2,
    colors: ["#C9A75A", "#A88A4A", "#8A6A3A"],
    spot: "Big maple-like leaf, but the stem's base is hollow and caps a bud. Bark peels off in camo patches over white.",
    where: "Right along the Grand River. Johnson Park, Riverside Park, downtown riverwalk.",
  },
  {
    id: "ginkgo",
    name: "Ginkgo",
    latin: "Ginkgo biloba",
    shape: "fan",
    pts: 3,
    colors: ["#F5D33A", "#F2C94C", "#E5B437"],
    spot: "Fan-shaped with a split down the middle and veins that fan out instead of branching. Drops nearly all its leaves in a single day.",
    where: "A street and campus tree from Asia. Downtown, Heritage Hill, GVSU's Pew campus, Meijer Gardens.",
  },
  {
    id: "sumac",
    name: "Staghorn sumac",
    latin: "Rhus typhina",
    shape: "sumac",
    pts: 1,
    colors: ["#D4231E", "#E35A1E", "#9E1B32"],
    spot: "Long compound leaf of many toothed leaflets. Fuzzy twigs like deer antler velvet and red cone-shaped fruit clusters. Turns scarlet early.",
    where: "Roadsides and sunny clearings. Millennium Park, Kent Trails, highway edges.",
  },
  {
    id: "birch",
    name: "Paper birch",
    latin: "Betula papyrifera",
    shape: "birch",
    pts: 2,
    colors: ["#F2C94C", "#E5B437", "#D9C25A"],
    spot: "Small, egg-shaped, double-toothed leaf. The giveaway is chalk-white bark that peels in thin sheets.",
    where: "More of a northern tree, so mostly planted here. Yards, Meijer Gardens, Millennium Park.",
  },
];

export const MAX_POINTS = LEAVES.reduce((sum, leaf) => sum + leaf.pts, 0);
