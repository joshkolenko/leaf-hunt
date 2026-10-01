import { redirect } from "next/navigation";
import { REGIONS } from "@/lib/regions";

export default function Home() {
  redirect(`/${REGIONS[0].id}`);
}
