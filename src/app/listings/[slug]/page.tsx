import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getListingById } from "@/api/listingsApi";
import { listingHref, parseListingId } from "@/lib/slug";
import ListingDetail from "@/components/Listing/ListingDetail";
import { ListingJsonLd } from "@/components/SEO/ListingJsonLd";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const id = parseListingId(params.slug);
  const listing = await getListingById(id);

  if (!listing) {
    return buildMetadata({
      title: "Property Not Found",
      description: "This property listing could not be found.",
      url: `/listings/${params.slug}`,
    });
  }

  const priceSuffix = listing.price ? ` - ${listing.price}` : "";

  return buildMetadata({
    title: `${listing.name}${priceSuffix}`,
    description:
      listing.description ||
      `${listing.name} in ${listing.location || "Kenya"}. ${listing.bedrooms} bedrooms${listing.price ? `, ${listing.price}` : ""}. Book a site visit with Lamona Realtors.`,
    keywords: `${listing.name}, property for sale, real estate Kenya, ${listing.location || ""}`,
    // Always canonicalize to the descriptive slug, even if this request came
    // in via a bare numeric URL — no redirect needed, just a preferred link.
    url: listingHref(listing),
    image: listing.imageUrl,
  });
}

export default async function ListingPage({ params }: { params: { slug: string } }) {
  const id = parseListingId(params.slug);
  const listing = await getListingById(id);

  return (
    <>
      {listing && <ListingJsonLd listing={listing} />}
      <ListingDetail listing={listing} />
    </>
  );
}
