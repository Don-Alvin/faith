import type { MetadataRoute } from "next";
import { getListings } from "@/api/listingsApi";
import { getBlogs } from "@/api/blogsApi";
import { listingHref } from "@/lib/slug";

const SITE_URL = "https://lamonarealtors.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [listings, blogs] = await Promise.all([
    getListings().catch(() => []),
    getBlogs().catch(() => []),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/listings`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blogs`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const listingRoutes: MetadataRoute.Sitemap = listings.map((listing) => ({
    url: `${SITE_URL}${listingHref(listing)}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${encodeURIComponent(blog.title)}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...listingRoutes, ...blogRoutes];
}
