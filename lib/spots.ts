export interface Spot {
  name: string;
  rule: "take" | "look";
  where: string;
  about: string;
  has: string[];
}

export const SPOTS: Spot[] = [
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
