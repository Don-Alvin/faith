"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BookModal from '@/Modal/BookModal';
import { Bed, HandCoins, MapPin, Calendar } from 'lucide-react';
import { listingHref } from '@/lib/slug';
import type { Listing } from '@/types';

interface ListingsPageContentProps {
  listings: Listing[];
}

const ListingsPageContent = ({ listings }: ListingsPageContentProps) => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const handleBookMenu = (listing: Listing | null = null) => {
    setSelectedListing(listing);
    setIsBookFormOpen(!isBookFormOpen);
  };

  const content = (
      <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <Card
            key={listing.id}
            className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover-lift hover-glow bg-card transition-all duration-300"
          >
            <CardHeader className="relative p-0 overflow-hidden">
              {listing.status && (
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-semibold text-white backdrop-blur-sm ${
                  listing.status === 'under construction'
                    ? 'bg-orange-500/90'
                    : 'bg-green-500/90'
                }`}>
                  {listing.status}
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  src={listing.imageUrl}
                  alt={listing.name}
                  title={listing.name}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium truncate">{listing.location || listing.name}</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {listing.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-1 bg-secondary px-2 sm:px-3 py-1 rounded-full">
                    <Bed className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{listing.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-accent/10 px-2 sm:px-3 py-1 rounded-full">
                    <HandCoins className="h-3 w-3 sm:h-4 sm:w-4 text-[#b07d10] dark:text-accent" />
                    <span className="text-xs sm:text-sm font-semibold text-[#b07d10] dark:text-accent truncate">{listing.price}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <Button
                  onClick={() => handleBookMenu(listing)}
                  className="w-full btn-primary gradient-gold text-accent-foreground py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-accent/25 transition-all duration-300"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Viewing
                </Button>

                <Link
                  href={listingHref(listing)}
                  className="block w-full text-center py-2 text-accent-foreground font-semibold hover:text-[#b07d10] transition-colors duration-300 border border-accent/20 rounded-xl hover:border-accent/30 hover:bg-accent/10 text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
  );

  return (
    <section className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      <header className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-accent/15 text-[#b07d10] dark:text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Featured Properties
        </div>

        <h1 className="heading-responsive font-bold text-foreground mb-4 sm:mb-6">
          Our <span className="text-gradient">Listings</span>
        </h1>

        <p className="text-responsive text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover exceptional properties that redefine luxury living. Each listing is carefully curated to meet your highest expectations.
        </p>
      </header>

      <div className="mb-12 sm:mb-16">
        {content}
      </div>

      {isBookFormOpen && selectedListing && (
        <BookModal
          handleBookMenu={handleBookMenu}
          site={selectedListing.name}
        />
      )}
    </section>
  );
};

export default ListingsPageContent;
