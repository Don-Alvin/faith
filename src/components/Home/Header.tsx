"use client"

import { useState } from 'react'
import Link from 'next/link'
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
      </div>

      {/* Hero image */}
      <div
        className="h-[260px] sm:h-[360px] lg:h-[420px] w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero2.jpg)' }}
        role="img"
        aria-label="Modern Nairobi home at dusk"
      />

      {isBookFormOpen && (
        <BookModal handleBookMenu={() => setIsBookFormOpen(false)} />
      )}
    </section>
  )
}

export default Header
