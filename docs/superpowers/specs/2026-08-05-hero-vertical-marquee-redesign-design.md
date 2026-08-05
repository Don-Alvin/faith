# Hero redesign — centered content over vertical image marquee

**Date:** 2026-08-05
**Branch:** `redesign`
**Scope:** The homepage hero only (`src/components/Home/Header.tsx`). Nothing else on the site changes.

## Context

Today's hero is a two-column split: dark-green left side with a badge, headline, subcopy and two CTAs; right side is three rows of listing photos scrolling horizontally (a left-drifting marquee). It works, but the client wants a fresher, more immersive treatment.

## Goal

Replace the split layout with a **centered content block over a full-bleed background of portrait property photos arranged in vertical columns that drift up and down** (a "curtain" / masonry marquee). The home photos become the atmosphere; the message sits confidently in the middle. Stays entirely within the existing brand (deep green `#101a15`, gold `#e5a41b`, Montserrat) — this is a layout change to one component, not a design-system change.

Approved visually through four iterations in the brainstorming visual companion (v4 is the agreed look).

## Design

### Structure

A single full-bleed `<section>` (relative, `overflow-hidden`, `min-height` ~`88vh` on desktop, comfortable tall value on mobile) with three stacked layers:

1. **Background** — the vertical image-marquee columns (absolute, fills the section).
2. **Overlay** — a balanced dark wash so the content reads (absolute, above background).
3. **Content** — the centered stack (absolute, above overlay, vertically + horizontally centered).

### Background: vertical marquee columns

- **4 columns** on desktop, **2 columns** on mobile. Columns sit side by side with a small gutter and fill the section height; each column clips its overflow.
- Each column holds a stack of **portrait-cropped** photos (`object-cover`) at **varied heights** so the wall looks masonry, not gridded.
- Each column's photo list is **duplicated back-to-back** so a `translateY` loop is seamless.
- **Alternating direction:** columns go down / up / down / up. Each column gets a slightly different duration (≈ 23–34s) so they never move in lockstep.
- Animation via CSS `transform: translateY` (GPU-friendly), added as keyframes in `globals.css`:
  - down: `translateY(-50%)` → `translateY(0)`
  - up: `translateY(0)` → `translateY(-50%)`
- **Reduced motion:** under `prefers-reduced-motion: reduce`, animation is disabled (columns render static) — matching the pattern already used for the existing marquee.

### Overlay

Balanced for legibility without hiding the photos (the agreed v4 treatment):
- A vertical gradient darker at the very top and bottom, lighter through the middle band.
- Plus a soft radial scrim centered behind the content.
- Content also carries subtle text-shadows as a second safety net.

### Content (centered)

Vertical stack, centered, with viewport-scaled spacing so it spreads out on large screens instead of clustering:

1. **Badge** — pill with a gold dot: **"Best properties in Kenya"** (was "Nairobi's prime neighborhoods · verified listings"). Uppercase, subtle border, faint translucent background.
2. **Headline (h1, bold, ~72px max):** two balanced lines —
   "Homes chosen with the same" / "care you'll live in them."
   Forced break on desktop; the break relaxes on mobile so it never looks awkward.
3. **Subcopy:** "Vetted homes in Runda, Karen, Westlands, Lavington and Kilimani. Honest guidance, no pressure, and a site visit booked in minutes." (unchanged copy, ~58ch measure)
4. **CTAs:** gold **"Book a site visit"** (opens the existing `BookModal`) + outline **"Browse all homes"** (`next/link` to `/listings`).

Spacing, padding and type all use `clamp()` so the stack breathes on wide screens and stays compact on phones.

### Data — real photos from Firestore

`Header` already receives `listings: Listing[]` as a prop (server-fetched in `page.tsx`). `Listing` has `imageUrl: string` and optional `moreImages?: { imageUrl: string }[]`.

- Build the photo pool: for each listing, take `imageUrl` plus every `moreImages[].imageUrl`; filter falsy; de-duplicate.
- Distribute the pool round-robin across the columns (4 desktop / 2 mobile). If the pool is smaller than the slots needed, **cycle** it so every column is full.
- If the pool is empty (fetch failed / no listings), fall back to the existing local `/images/hero.jpg` and `/images/hero2.jpg`.
- Photos are decorative background → `alt=""`. Keep plain `<img>` (project convention; no `next/image` for dynamic Firebase URLs).

## Files touched

- `src/components/Home/Header.tsx` — rewrite the hero markup/logic (still `"use client"`, still takes `listings`, still opens `BookModal`).
- `src/app/globals.css` — add vertical-marquee keyframes (down/up) + reduced-motion rule; the old horizontal `marquee-left` can be removed if nothing else uses it (verify first).
- No prop/signature changes to `page.tsx` (it already passes `listings`).

## Error handling / edge cases

- **No/failed listings:** fall back to the two local hero images, cycled.
- **Few photos:** cycle the pool so columns stay full and the loop still reads.
- **Very short viewport (landscape phones):** `min-height` uses a sensible floor; content stays centered and scrolls with the page if needed.
- **Reduced motion:** static columns, everything still legible.
- **Slow image loads:** dark section background shows first; images fade in as they load (no layout shift — column heights are fixed).

## Testing / verification

- `npm run build` clean.
- Headless screenshots at 390px (mobile, 2 columns) and ~1280px (desktop, 4 columns) via the Chrome-CDP harness already used this session — confirm: content centered and legible, headline on two lines (desktop), no horizontal overflow (`scrollWidth === clientWidth`), columns visibly alternating.
- Verify `prefers-reduced-motion` disables the animation.
- Confirm "Book a site visit" opens the modal and "Browse all homes" routes to `/listings`.

## Out of scope

- Any other page or component.
- Changing the type system / palette (Montserrat and the gold-on-dark tokens stay).
- Adding `next/image`, image CDN, or new data fetching.
