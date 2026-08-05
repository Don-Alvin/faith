"use client"

import { useState } from 'react'
import Link from 'next/link'
import BookModal from '@/Modal/BookModal'
import type { Listing } from '@/types'

interface HeaderProps {
  listings: Listing[]
}

const FALLBACK_IMAGES = ['/images/hero.jpg', '/images/hero2.jpg']
const ROW_DURATIONS = ['40s', '32s', '25s']

function marqueeRow(images: string[], fallback: string[]) {
  const base = images.length ? images : fallback
  // Duplicate so translateX(-50%) loops back to an identical frame.
  return [...base, ...base]
}

const Header = ({ listings }: HeaderProps) => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false)

  const photos = listings.map((listing) => listing.imageUrl).filter(Boolean).slice(0, 12)
  const rows = [0, 1, 2].map((rowIndex) =>
    marqueeRow(photos.filter((_, i) => i % 3 === rowIndex), FALLBACK_IMAGES)
  )

  return (
    <section className="gradient-primary text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 lg:pt-20">
          <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-xs sm:text-sm text-white/70 mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-accent inline-block" />
            Nairobi&apos;s prime neighborhoods · verified listings
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 pb-12 lg:pb-20">
          {/* Left: content, top-aligned with bottom-anchored CTAs to mirror the image column's height */}
          <div className="min-w-0 px-6 sm:px-10 lg:px-12 flex flex-col lg:justify-between">
            <div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-6xl leading-[0.98] tracking-tight mb-6 max-w-xl">
                Homes chosen with the same care you&apos;ll live in them.
              </h1>

              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg mb-8 lg:mb-0">
                Lamona Realtors connects home buyers with vetted properties in Runda, Karen, Westlands, Lavington and Kilimani. Honest guidance, no pressure, and a site visit booked in minutes.
              </p>
            </div>

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

          {/* Right: scrolling house photos, spanning the same top-to-bottom height as the left column */}
          <div className="min-w-0 flex flex-col gap-3 justify-center h-[360px] sm:h-[480px] lg:h-auto lg:gap-0 lg:justify-between py-8 lg:py-0">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div
                  className="flex gap-3 w-max marquee-left"
                  style={{ "--marquee-duration": ROW_DURATIONS[rowIndex] } as React.CSSProperties}
                >
                  {row.map((src, i) => (
                    <div key={i} className="w-36 sm:w-52 h-24 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isBookFormOpen && (
        <BookModal handleBookMenu={() => setIsBookFormOpen(false)} />
      )}
    </section>
  )
}

export default Header
