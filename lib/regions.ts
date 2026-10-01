import { EATON_RAPIDS_LEAVES, GRAND_RAPIDS_LEAVES, Leaf } from "@/lib/leaves";
import { EATON_RAPIDS_SPOTS, GRAND_RAPIDS_SPOTS, Spot } from "@/lib/spots";

export type RegionId = "grand-rapids" | "eaton-rapids";

export interface Region {
  id: RegionId;
  name: string;
  eyebrow: string;
  tagline: string;
  footer: string;
  leaves: Leaf[];
  spots: Spot[];
}

export const REGIONS: Region[] = [
  {
    id: "grand-rapids",
    name: "Grand Rapids",
    eyebrow: "West Michigan · Fall 2026 field card",
    tagline:
      "Nineteen trees that grow around Grand Rapids, from the everywhere-maples to a few genuine trophies.",
    footer:
      "Peak-color timing from regional fall forecasts for southwest Lower Michigan. Check park hours before you go; Meijer Gardens charges admission.",
    leaves: GRAND_RAPIDS_LEAVES,
    spots: GRAND_RAPIDS_SPOTS,
  },
  {
    id: "eaton-rapids",
    name: "Eaton Rapids",
    eyebrow: "South-Central Michigan · Fall 2026 field card",
    tagline:
      "Seventeen trees that grow around Eaton Rapids, Michigan's Island City, from fencerow maples to a couple of real trophies.",
    footer:
      "Peak-color timing from regional fall forecasts for south-central Lower Michigan. Most woodlots here are privately owned, so stick to road edges and public access points unless you have permission.",
    leaves: EATON_RAPIDS_LEAVES,
    spots: EATON_RAPIDS_SPOTS,
  },
];

export function maxPoints(leaves: Leaf[]): number {
  return leaves.reduce((sum, leaf) => sum + leaf.pts, 0);
}
