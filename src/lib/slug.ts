export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface SluggableListing {
  id: number;
  name: string;
  location?: string;
}

// Builds a readable /listings URL segment like "22-rongai" or
// "1-imara-daima-3" instead of a bare numeric id. The leading number stays
// the source of truth for lookup (see parseListingId), so any descriptive
// text after it is cosmetic — nothing breaks if it's stale or missing.
export function listingSlug(listing: SluggableListing): string {
  const nameSlug = slugify(listing.name);
  const locationSlug = listing.location ? slugify(listing.location) : "";
  const includeLocation =
    locationSlug && locationSlug !== nameSlug && !nameSlug.includes(locationSlug);

  const parts = includeLocation ? [nameSlug, locationSlug] : [nameSlug];
  return [listing.id, ...parts].filter(Boolean).join("-");
}

export function listingHref(listing: SluggableListing): string {
  return `/listings/${listingSlug(listing)}`;
}

// Pulls the numeric id back out of a "22-rongai" style slug (or a bare "22").
export function parseListingId(slug: string): number {
  const match = slug.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : NaN;
}
