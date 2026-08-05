"use client"

import { useState } from 'react'
import Link from 'next/link'
import BookModal from '@/Modal/BookModal'
import type { Listing } from '@/types'

interface HeaderProps {
  listings: Listing[]
}

const FALLBACK_IMAGES = ['/images/hero.jpg', '/images/hero2.jpg']

// One entry per column. Directions alternate; durations vary so columns never
// move in lockstep. Desktop shows all 4; mobile shows the first 2 (see JSX).
const COLUMNS = [
  { dir: 'down' as const, duration: '27s' },
  { dir: 'up' as const, duration: '34s' },
  { dir: 'down' as const, duration: '23s' },
  { dir: 'up' as const, duration: '30s' },
]

// Varied portrait heights (px) cycled down each column for a masonry wall.
const HEIGHTS = [230, 300, 190, 260, 210, 280]

// Flatten every listing's imageUrl + moreImages into a de-duplicated pool.
function collectPhotos(listings: Listing[]): string[] {
  const pool: string[] = []
  for (const listing of listings) {
    if (listing.imageUrl) pool.push(listing.imageUrl)
    for (const more of listing.moreImages ?? []) {
      if (more.imageUrl) pool.push(more.imageUrl)
    }
  }
  const deduped = Array.from(new Set(pool))
  return deduped.length ? deduped : FALLBACK_IMAGES
}

// Round-robin the pool into `count` columns of `perCol` photos each,
// cycling the pool when it is smaller than the number of slots.
function buildColumns(pool: string[], count: number, perCol: number): string[][] {
  const cols: string[][] = Array.from({ length: count }, () => [])
  let i = 0
  for (let c = 0; c < count; c++) {
    for (let r = 0; r < perCol; r++) {
      cols[c].push(pool[i % pool.length])
      i++
    }
  }
  return cols
}

const Header = ({ listings }: HeaderProps) => {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false)

  const pool = collectPhotos(listings)
  const columns = buildColumns(pool, COLUMNS.length, HEIGHTS.length)

  return (
    <section className="relative overflow-hidden gradient-primary text-white min-h-[88vh] flex items-center">
      {/* Layer 1: vertical marquee columns */}
      <div className="absolute inset-0 flex gap-2.5 px-2.5" aria-hidden="true">
        {columns.map((col, c) => {
          const { dir, duration } = COLUMNS[c]
          const doubled = [...col, ...col] // duplicate for a seamless translateY loop
          return (
            <div
              key={c}
              className={`flex-1 overflow-hidden ${c >= 2 ? 'hidden md:block' : ''}`}
            >
              <div
                className={`flex flex-col gap-2.5 ${dir === 'down' ? 'marquee-col-down' : 'marquee-col-up'}`}
                style={{ '--marquee-duration': duration } as React.CSSProperties}
              >
                {doubled.map((src, i) => (
                  <div
                    key={i}
                    className="w-full rounded-xl overflow-hidden flex-shrink-0"
                    style={{ height: HEIGHTS[i % HEIGHTS.length] }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Layer 2: balanced overlay (dark top/bottom, lighter middle, soft radial scrim) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,26,21,.80), rgba(16,26,21,.34) 34%, rgba(16,26,21,.34) 66%, rgba(16,26,21,.90)), radial-gradient(74% 58% at 50% 50%, rgba(16,26,21,.60), rgba(16,26,21,0) 80%)',
        }}
      />

      {/* Layer 3: centered content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-10 py-20 flex flex-col items-center text-center gap-[clamp(22px,4vh,52px)]">
        <span className="inline-flex items-center gap-2 border border-white/25 rounded-full px-5 py-2 text-xs sm:text-sm uppercase tracking-[0.08em] text-white/90 bg-[#101a15]/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Best properties in Kenya
        </span>

        <h1 className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-[clamp(30px,6vw,64px)] [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]">
          Homes chosen with the same<br className="hidden md:block" /> care you&apos;ll live in them.
        </h1>

        <p className="text-white/80 max-w-[58ch] leading-relaxed text-[clamp(14px,1.5vw,20px)] [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
          Vetted homes in Runda, Karen, Westlands, Lavington and Kilimani. Honest guidance, no pressure, and a site visit booked in minutes.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setIsBookFormOpen(true)}
            className="gradient-gold text-accent-foreground rounded-xl px-7 py-4 text-base font-bold transition-all duration-300 hover:scale-105"
          >
            Book a site visit
          </button>
          <Link
            href="/listings"
            className="border border-white/30 text-white rounded-xl px-7 py-4 text-base font-medium bg-[#101a15]/20 hover:bg-white/10 transition-all duration-300"
          >
            Browse all homes
          </Link>
        </div>
      </div>

      {isBookFormOpen && (
        <BookModal handleBookMenu={() => setIsBookFormOpen(false)} />
      )}
    </section>
  )
}

export default Header
