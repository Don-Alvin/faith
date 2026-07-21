import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ListingsPageContent from "@/components/Listings/ListingsPageContent";

export const metadata: Metadata = buildMetadata({
  title: "Property Listings",
  description:
    "Browse our extensive collection of premium properties in Kenya. Find your perfect home, investment property, or rental with Lamona Realtors.",
  keywords:
    "property listings Kenya, houses for sale, real estate properties, buy property Kenya, Nairobi properties",
  url: "/listings",
});

export default function ListingsPage() {
  return <ListingsPageContent />;
}
