import type { Listing } from "@/types";
import { listingHref } from "@/lib/slug";

const SITE_URL = "https://lamonarealtors.com";

// Pulls a bare KES number out of price strings like "KES 95,000,000" or
// "KES 20.5M". Some listings pack multiple sub-prices into one field (e.g.
// "House A - 20.5M, House B - 20M") — in that case there's no single true
// price, so this returns undefined rather than emitting a mangled number
// (naively stripping non-digits would turn that example into "20520").
function parsePriceKES(price: string): number | undefined {
  const tokens = price.match(/\d[\d,]*(?:\.\d+)?\s*[MmKk]?/g);
  if (!tokens || tokens.length !== 1) return undefined;

  const token = tokens[0].trim();
  const suffix = token.match(/[MmKk]$/)?.[0]?.toLowerCase();
  const numeric = parseFloat(token.replace(/,/g, "").replace(/[MmKk]$/, ""));
  if (isNaN(numeric)) return undefined;

  const multiplier = suffix === "m" ? 1_000_000 : suffix === "k" ? 1_000 : 1;
  return Math.round(numeric * multiplier);
}

export function ListingJsonLd({ listing }: { listing: Listing }) {
  const url = `${SITE_URL}${listingHref(listing)}`;
  const priceAmount = parsePriceKES(listing.price);

  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: listing.name,
    description: listing.description || `${listing.name} in ${listing.location || "Kenya"}, offered by Lamona Realtors.`,
    url,
    image: listing.imageUrl,
    // Omit the Offer entirely when the price field doesn't reduce to a single
    // clean number — bad structured data (a wrong price) is worse than none.
    offers: priceAmount
      ? {
          "@type": "Offer",
          price: priceAmount,
          priceCurrency: "KES",
          availability:
            listing.status === "under construction"
              ? "https://schema.org/PreOrder"
              : "https://schema.org/InStock",
          url,
        }
      : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Listings", item: `${SITE_URL}/listings` },
      { "@type": "ListItem", position: 3, name: listing.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
