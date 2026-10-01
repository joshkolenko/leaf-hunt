import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RegionView } from "@/components/RegionView";
import { REGIONS } from "@/lib/regions";

export function generateStaticParams() {
  return REGIONS.map((r) => ({ region: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: regionId } = await params;
  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) return {};
  return {
    title: `${region.name} Leaf Hunt`,
    description: `A scavenger hunt for tracking down real leaves at parks and trails around ${region.name}, Michigan.`,
  };
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region: regionId } = await params;
  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) notFound();
  return <RegionView region={region} />;
}
