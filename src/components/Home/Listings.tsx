"use client"

import { useState } from "react";
import Link from "next/link";
import BookModal from "@/Modal/BookModal";
import { MapPin } from "lucide-react";
import { listingHref } from "@/lib/slug";
import type { Listing } from "@/types";

interface ListingsProps {
  listings: Listing[];
}

const Listings = ({ listings }: ListingsProps) => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false)
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null)

  const handleBookMenu = (listing: Listing | null = null) => {
    setSelectedListing(listing)
    setIsBookFormOpen(!isBookFormOpen)
  }

  const limit = 6;
  const content = (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listings.slice(0, limit)?.map((listing) => (
          <div key={listing.id} className="group bg-card rounded-2xl overflow-hidden border border-border">
            <Link href={listingHref(listing)} className="block">
              <div className="relative h-[210px] overflow-hidden">
                {listing.status && (
                  <span className={`absolute top-3.5 left-3.5 z-10 px-3 py-1.5 rounded-md text-xs font-semibold text-white ${
                    listing.status === 'under construction' ? 'bg-orange-500/90' : 'bg-primary'
                  }`}>
                    {listing.status}
                  </span>
                )}
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={listing.imageUrl}
                  alt={listing.name}
                  title={listing?.name}
                />
              </div>
            </Link>

            <div className="p-5">
              <div className="font-display text-xl font-bold text-foreground mb-0.5">{listing.price}</div>
              <Link href={listingHref(listing)} className="block text-[15px] font-medium text-foreground mb-1 hover:text-accent-foreground transition-colors">
                {listing.name}
              </Link>
              <div className="text-sm text-muted-foreground mb-4">{listing.bedrooms} bd{listing.location ? ` · ${listing.location}` : ''}</div>

              <div className="space-y-3">
                <span className="text-xs text-muted-foreground flex items-start gap-1">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                  <span className="min-w-0">{listing.location || listing.name}</span>
                </span>
                <button
                  onClick={() => handleBookMenu(listing)}
                  className="text-sm font-semibold text-[#b07d10] dark:text-accent hover:text-accent transition-colors whitespace-nowrap"
                >
                  Book a visit →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  );

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
            Standout homes right now
          </h2>
          <Link href='/listings' className="text-sm text-[#b07d10] dark:text-accent font-semibold hover:text-accent transition-colors whitespace-nowrap">
            View all listings →
          </Link>
        </div>

        {/* Content */}
        <div>
          {content}
        </div>
      </div>

      {/* Book Modal */}
      {isBookFormOpen && (
        <BookModal
          handleBookMenu={handleBookMenu}
          site={selectedListing?.name}
        />
      )}
    </section>
  )
}

export default Listings
