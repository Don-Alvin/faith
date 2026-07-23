"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import BookModal from '@/Modal/BookModal'

const Header = () => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false)

  return (
    <section>
      {/* Dark hero */}
      <div className="gradient-primary text-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 pt-16 sm:pt-20 pb-10 sm:pb-11">
          <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-xs sm:text-sm text-white/70 mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-accent inline-block" />
            Nairobi&apos;s prime neighborhoods · verified listings
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight mb-6 max-w-3xl">
            Homes chosen with the same care you&apos;ll live in them.
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-8">
            Lamona Realtors connects home buyers with vetted properties in Runda, Karen, Westlands, Lavington and Kilimani. Honest guidance, no pressure, and a site visit booked in minutes.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setIsBookFormOpen(true)}
              className="gradient-gold text-accent-foreground rounded-lg px-8 py-4 text-base font-bold transition-all duration-300 hover:scale-105"
            >
              Book a site visit
            </button>
            <Link
              href="/listings"
              className="border border-white/20 text-white rounded-lg px-8 py-4 text-base font-medium hover:bg-white/10 transition-all duration-300"
            >
              Browse all homes
            </Link>
          </div>
        </div>

        {/* Search bar */}
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <Link
            href="/listings"
            className="bg-background rounded-t-2xl p-3 flex flex-col sm:flex-row gap-2 sm:items-stretch hover:brightness-[0.98] transition"
          >
            <div className="flex-1 px-4 py-2">
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Location</div>
              <div className="text-sm text-foreground">Any Nairobi neighborhood</div>
            </div>
            <div className="flex-none sm:w-44 px-4 py-2 sm:border-l border-border">
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Budget</div>
              <div className="text-sm text-foreground">KES 15M – 100M</div>
            </div>
            <div className="flex-none sm:w-32 px-4 py-2 sm:border-l border-border">
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Beds</div>
              <div className="text-sm text-foreground">2+</div>
            </div>
            <div className="gradient-primary text-white rounded-lg px-9 py-3 flex items-center justify-center text-sm font-semibold gap-2">
              <Search className="h-4 w-4" />
              Search
            </div>
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div
        className="h-[260px] sm:h-[360px] lg:h-[420px] w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero2.jpg)' }}
        role="img"
        aria-label="Modern Nairobi home at dusk"
      />

      {/* Stat bar */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-12 sm:py-14 flex flex-col sm:flex-row gap-8 sm:gap-0">
        <div className="flex-1 sm:pr-8">
          <div className="font-display text-4xl sm:text-5xl">120+</div>
          <div className="text-sm text-muted-foreground mt-1">Homes ready to visit right now</div>
        </div>
        <div className="flex-1 sm:px-8 sm:border-l border-border">
          <div className="font-display text-4xl sm:text-5xl">4.9</div>
          <div className="text-sm text-muted-foreground mt-1">Buyer rating across 500+ moves</div>
        </div>
        <div className="flex-1 sm:pl-8 sm:border-l border-border">
          <div className="font-display text-4xl sm:text-5xl">0</div>
          <div className="text-sm text-muted-foreground mt-1">Pushy sales calls, ever</div>
        </div>
      </div>

      {isBookFormOpen && (
        <BookModal handleBookMenu={() => setIsBookFormOpen(false)} />
      )}
    </section>
  )
}

export default Header
