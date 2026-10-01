export interface Spot {
  name: string;
  rule: "take" | "look";
  where: string;
  about: string;
  has: string[];
}

export const GRAND_RAPIDS_SPOTS: Spot[] = [
  {
    name: "Johnson Park",
    rule: "take",
    where: "Walker, along the Grand River near Grandville",
    about: "Kent County park with floodplain woods. Best one-stop shop for river trees and a good spot to collect.",
    has: ["Silver maple", "Cottonwood", "Sycamore", "Black walnut", "Black cherry"],
  },
  {
    name: "Millennium Park",
    rule: "take",
    where: "Walker / Grandville, off Maynard Ave",
    about: "Huge county park mixing ponds, fields and woods, so you get edge trees and wetland trees in one loop.",
    has: ["Red maple", "Quaking aspen", "Staghorn sumac", "Sassafras", "Bur oak", "Cottonwood"],
  },
  {
    name: "Blandford Nature Center",
    rule: "look",
    where: "Northwest Grand Rapids",
    about: "Mature beech-maple woods with easy trails. Photo-only, but it's the best place to see the classics side by side.",
    has: ["Sugar maple", "American beech", "Basswood", "Black cherry"],
  },
  {
    name: "Frederik Meijer Gardens",
    rule: "look",
    where: "Northeast Grand Rapids",
    about: "Many trees are labeled, so it's the cheat code for confirming an ID. Admission charged; photos only.",
    has: ["Tulip tree", "Ginkgo", "Paper birch", "Bur oak"],
  },
  {
    name: "Calvin Ecosystem Preserve",
    rule: "look",
    where: "Calvin University, southeast Grand Rapids",
    about: "Free preserve with oak-hickory woods and a native garden. Leave what you find.",
    has: ["White oak", "Northern red oak", "Shagbark hickory"],
  },
  {
    name: "Grand Ravines",
    rule: "look",
    where: "Jenison, close to Grandville",
    about: "Ottawa County park with steep wooded ravines and a suspension bridge. Good fall walk with beech and maple overhead.",
    has: ["Sugar maple", "American beech", "Basswood", "Sassafras"],
  },
  {
    name: "Seidman Park",
    rule: "look",
    where: "Ada, east of the city",
    about: "Quiet trails through oak-hickory upland and ravines. A strong bet for the oaks and hickory.",
    has: ["White oak", "Northern red oak", "Shagbark hickory", "Sassafras"],
  },
  {
    name: "Heritage Hill & downtown",
    rule: "take",
    where: "Central Grand Rapids",
    about: "Old street trees in one of the country's largest urban historic districts. Fallen leaves on the sidewalk are fair game.",
    has: ["Ginkgo", "Tulip tree", "Northern red oak", "Red maple"],
  },
];

export const EATON_RAPIDS_SPOTS: Spot[] = [
  {
    name: "Lincoln Brick Park",
    rule: "take",
    where: "The Grand River at the edge of downtown",
    about: "A former brickyard turned city park along the river, with floodplain woods, a disc golf course, and easy river access. The single best stop for river-loving trees.",
    has: ["Eastern cottonwood", "Silver maple", "Box elder", "Hackberry"],
  },
  {
    name: "Downtown & the Island City riverwalk",
    rule: "take",
    where: "Along the Grand River and old millrace channels through downtown",
    about: "Eaton Rapids' nickname comes from the channels the river and an old millrace cut through downtown. Street trees and riverbank growth both turn here.",
    has: ["Silver maple", "American elm", "Black walnut"],
  },
  {
    name: "Farm fencerows and roadsides",
    rule: "take",
    where: "The farmland surrounding Eaton Rapids",
    about: "Most of Eaton County is active farmland, and the fencerows, windbreaks, and roadside edges between fields are where a lot of the area's trees survive.",
    has: ["Bur oak", "Black walnut", "Staghorn sumac", "Eastern red cedar", "American elm"],
  },
  {
    name: "Woodlots outside town",
    rule: "look",
    where: "Scattered hardwood stands in the countryside around Eaton Rapids",
    about: "Small, privately-held woodlots dot the farmland. Respect property lines and stick to road edges and public access points; a photo is the right way to count these.",
    has: ["White oak", "Shagbark hickory", "Sugar maple", "Basswood", "Black cherry", "Quaking aspen", "White ash"],
  },
];
