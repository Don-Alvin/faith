# Hero Vertical-Marquee Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage hero's split/horizontal-marquee layout with centered content over a full-bleed background of portrait property photos in vertical columns that alternate up/down.

**Architecture:** One client component (`src/components/Home/Header.tsx`) renders three stacked layers — a background of vertical image-marquee columns, a balanced dark overlay, and a centered content stack — inside one full-bleed `<section>`. CSS keyframes for the vertical scroll live in `globals.css`. Photos come from the `listings` prop the component already receives.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS. Plain `<img>` (no `next/image`). No test runner in this repo — verification is `npm run build` plus visual/overflow checks in the browser.

## Global Constraints

- Scope is `src/components/Home/Header.tsx` and `src/app/globals.css` **only**. No other file's behavior changes; `src/app/page.tsx` already passes `listings={listings}`.
- Stay in the existing brand: deep green `#101a15`, gold accent `#e5a41b`, Montserrat (`font-display`). Do **not** change the type system or palette.
- The hero is always dark regardless of light/dark theme — use the theme-independent `gradient-primary` base and hardcoded `#101a15` overlay values, never `bg-primary` (which flips to gold in dark mode).
- Plain `<img>` only; background photos are decorative → `alt=""`.
- Respect `prefers-reduced-motion: reduce` (animation off).
- Badge copy is exactly **"Best properties in Kenya"**. Headline is exactly **"Homes chosen with the same care you'll live in them."** on two lines (desktop). CTAs: **"Book a site visit"** (opens `BookModal`) and **"Browse all homes"** (`next/link` → `/listings`). No em dashes in copy.

---

### Task 1: Vertical-marquee CSS

**Files:**
- Modify: `src/app/globals.css` (append near the existing keyframes)

**Interfaces:**
- Produces: CSS classes `.marquee-col-down` and `.marquee-col-up`, each consuming a `--marquee-duration` custom property; keyframes `marquee-down` / `marquee-up`.

- [ ] **Step 1: Add the keyframes, classes, and reduced-motion rule**

Append to `src/app/globals.css`:

```css
/* Vertical hero marquee (columns scroll up/down; content is duplicated so the loop is seamless) */
@keyframes marquee-down {
  from { transform: translateY(-50%); }
  to   { transform: translateY(0); }
}
@keyframes marquee-up {
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
}
.marquee-col-down {
  animation: marquee-down var(--marquee-duration, 28s) linear infinite;
}
.marquee-col-up {
  animation: marquee-up var(--marquee-duration, 28s) linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .marquee-col-down,
  .marquee-col-up { animation: none; }
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: build succeeds (exit 0). (The classes aren't referenced yet; this only confirms the CSS is valid.)

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(hero): add vertical marquee keyframes and reduced-motion rule"
```

---

### Task 2: Rewrite the hero component

**Files:**
- Modify: `src/components/Home/Header.tsx` (full rewrite of the file's body; keep the file path, `"use client"`, and the `HeaderProps { listings: Listing[] }` signature)

**Interfaces:**
- Consumes: `.marquee-col-down` / `.marquee-col-up` + `--marquee-duration` from Task 1; `BookModal` from `@/Modal/BookModal`; `Listing` from `@/types` (fields used: `imageUrl: string`, `moreImages?: { imageUrl: string }[]`).
- Produces: default-exported `Header` component (unchanged prop contract, so `src/app/page.tsx` needs no edit).

- [ ] **Step 1: Replace the entire file contents**

Write `src/components/Home/Header.tsx`:

```tsx
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
```

- [ ] **Step 2: Type-check / build**

Run: `npm run build`
Expected: build succeeds (exit 0), no TypeScript errors. If it fails with a stale-cache `MODULE_NOT_FOUND` for `pages/_document`, run `rm -rf .next` first, then rebuild.

- [ ] **Step 3: Visual verification (desktop + mobile)**

Start the dev server (`npm run dev`) and load `http://localhost:3000/`. Confirm:
- Desktop (~1280px): **4** columns of portrait photos drifting, **alternating** up/down; centered content; headline on **two lines**; gold "Book a site visit" + outline "Browse all homes".
- Mobile (~390px, devtools device mode): **2** columns; headline wraps naturally (no awkward break); **no horizontal scroll** (`document.documentElement.scrollWidth === document.documentElement.clientWidth`).
- The page background/photos read clearly behind the text (overlay balanced, text legible).

Fix and rebuild until all hold. (If the desktop headline wraps to three lines, lower the `64px` clamp cap slightly; if it looks cramped, nudge it up — the mockup target is ~64–72px on two lines.)

- [ ] **Step 4: Reduced-motion check**

In devtools, emulate `prefers-reduced-motion: reduce` (Rendering panel) and reload. Expected: columns are static (no scrolling), content still legible.

- [ ] **Step 5: Booking + browse actions**

Click "Book a site visit" → the `BookModal` opens. Click "Browse all homes" → routes to `/listings`.

- [ ] **Step 6: Commit**

```bash
git add src/components/Home/Header.tsx
git commit -m "feat(hero): centered content over vertical image marquee"
```

---

### Task 3: Remove the now-unused horizontal marquee CSS

**Files:**
- Modify: `src/app/globals.css` (delete the old horizontal `marquee-left` keyframes/class if nothing else references them)

**Interfaces:**
- Consumes: nothing. Purely a cleanup task, safe to reject independently.

- [ ] **Step 1: Confirm nothing else uses the old class**

Run: `grep -rn "marquee-left" src/`
Expected: **zero** matches (Task 2 removed the only usage). If any match remains outside `globals.css`, stop and leave the CSS in place.

- [ ] **Step 2: Delete the old rule**

If Step 1 returned only the `globals.css` definition (or nothing), remove the old block from `src/app/globals.css`:

```css
/* DELETE these if present — replaced by the vertical marquee */
@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee-left { animation: marquee-left var(--marquee-duration, 32s) linear infinite; }
/* (and its reduced-motion entry for .marquee-left) */
```

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: build succeeds. Reload `/` and confirm the hero is unchanged (the old class was unused).

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "chore(hero): remove unused horizontal marquee CSS"
```

---

## Self-Review

**1. Spec coverage:**
- Centered content over vertical columns → Task 2 (Layer 1 + Layer 3). ✓
- 4 desktop / 2 mobile columns → Task 2 (`hidden md:block` on columns 3–4). ✓
- Alternating up/down, varied durations, seamless loop → Task 2 (`COLUMNS`, `doubled`) + Task 1 keyframes. ✓
- Balanced overlay → Task 2 (Layer 2). ✓
- Badge "Best properties in Kenya", two-line headline, subcopy, CTAs → Task 2 (Layer 3). ✓
- Real Firestore photos (`imageUrl` + `moreImages`), cycled, local fallback → Task 2 (`collectPhotos` / `buildColumns` / `FALLBACK_IMAGES`). ✓
- Reduced motion → Task 1 media query + Task 2 Step 4 check. ✓
- globals.css keyframes + cleanup of old marquee → Tasks 1 and 3. ✓
- Brand/theme-independent hero, plain `<img>`, no other files → Global Constraints, honored in Task 2. ✓

**2. Placeholder scan:** No TBD/TODO; every code step has full content. ✓

**3. Type consistency:** `collectPhotos(listings): string[]` → feeds `buildColumns(pool, count, perCol): string[][]`; `COLUMNS.length` (4) and `HEIGHTS.length` (6) are the `count`/`perCol` args; `--marquee-duration` set in Task 2 matches the class in Task 1. ✓

No gaps found.
