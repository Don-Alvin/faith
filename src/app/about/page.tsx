import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Lamona Realtors - Kenya's trusted real estate partner. Our mission, values, and commitment to helping you find your dream property.",
  keywords:
    "about Lamona Realtors, real estate company Kenya, property experts, real estate services",
  url: "/about",
});

const stats = [
  { value: "500+", label: "Families moved home" },
  { value: "4.9★", label: "Average buyer rating" },
  { value: "6", label: "Prime areas covered" },
  { value: "100%", label: "Listings verified" },
];

export default function About() {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      {/* Dark hero */}
      <div className="gradient-primary text-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-5 max-w-2xl">
            A local market expert on your side.
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Lamona Realtors is a Nairobi-based agency built on a simple promise: verified homes, honest pricing, and buyers who feel informed, never pushed.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-14 sm:py-16 grid md:grid-cols-2 gap-10 sm:gap-14 items-center">
        <div className="h-72 sm:h-80 rounded-2xl gradient-secondary" />
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Why we started</h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground mb-4">
            House-hunting in Nairobi is too often slow, opaque and stressful: unanswered calls, mispriced listings, and pressure to decide fast. We built Lamona to do the opposite.
          </p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            We vet every property, share the real numbers, and let the home speak for itself on a site visit. That&apos;s why buyers trust us with one of the biggest decisions of their lives.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-secondary">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-12 sm:py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
}
