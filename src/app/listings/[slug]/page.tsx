import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ListingDetail from "@/components/Listing/ListingDetail";

export const metadata: Metadata = buildMetadata({
  title: "Property Details",
  description:
    "Discover this property with Lamona Realtors. Contact us for viewing and more details.",
  keywords: "property for sale, real estate Kenya",
  url: "/listings",
});

export default function ListingPage({ params }: { params: { id: string } }) {
  return <ListingDetail id={params.id} />;
}
