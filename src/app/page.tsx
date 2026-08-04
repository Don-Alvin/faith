import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getListings } from "@/api/listingsApi";
import { getBlogs } from "@/api/blogsApi";
import Header from "@/components/Home/Header";
import Listings from "@/components/Home/Listings";
import WhyLamona from "@/components/Home/WhyLamona";
import Blogs from "@/components/Home/Blogs";
import Contact from "@/components/Home/Contact";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Homes chosen with the same care you'll live in them",
  description:
    "Lamona Realtors connects home buyers with vetted properties in Runda, Karen, Westlands, Lavington and Kilimani. Honest guidance, no pressure, and a site visit booked in minutes.",
  keywords:
    "real estate Kenya, property Nairobi, buy house Kenya, sell property, real estate agent, dream home, property investment",
  url: "/",
});

export default async function Home() {
  const [listings, blogs] = await Promise.all([
    getListings().catch(() => []),
    getBlogs().catch(() => []),
  ]);

  return (
    <div>
      <Header listings={listings} />
      <Listings listings={listings} />
      <WhyLamona />
      <Blogs blogs={blogs} />
      <Testimonials />
      <Contact />
    </div>
  );
}
