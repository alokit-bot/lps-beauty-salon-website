# LPS Beauty Salon & Nail Art Studio — PRD

## Problem Statement
Build a marketing website for **LPS Beauty Salon & Nail Art Studio** — a 4.8★ local salon in BTM Layout, Bengaluru. Frontend-only, no backend, no booking system. CTA is "Call to Book" via `tel:` link.

## Business
- Name: LPS Beauty Salon & Nail Art Studio
- Phone: +91 99009 14999
- Address: 22, 21st Main, 3rd Cross Rd, BTM Layout 2nd Stage, Bengaluru 560076
- Hours: Mon–Sun, 10 AM – 9 PM
- Rating: 4.8★ (316 reviews)

## User Personas
1. **Local walk-in customer** — needs quick phone/address/hours.
2. **Bride-to-be / event prep** — needs confidence via reviews & gallery before calling.
3. **Price-sensitive shopper** — needs transparent service pricing.

## Tech Stack
- React (CRA/craco) + Tailwind + shadcn ui primitives
- lucide-react for icons
- Frontend only — no backend, no DB, no auth
- Hosted at REACT_APP_BACKEND_URL preview domain

## Brand
- Rose-gold #B76E79, Blush #F9D6D2, Warm white #FFFAF8, Charcoal #2D2D2D
- Fonts: Cormorant Garamond (serif headings) + Manrope (sans body) + Caveat (script accents)

## Implemented (2025-12)
- Sticky translucent navbar with smooth-scroll nav, mobile hamburger, desktop Call-to-Book CTA
- Hero section: tagline "Your beauty, our passion.", pulsing call CTA, rating pill, collage imagery
- About section: brand story with drop cap, BTM / hours / women-loved chips
- Services section: 5 categories with tabs (Hair / Skin / Nails / Waxing / Bridal), sticky image pane + priced item list
- Why Us: dark charcoal section with 4 pillars + stats row
- Testimonials: 3 neighbourhood reviews with 5★ ratings
- Gallery: asymmetric Unsplash grid with labelled overlays
- Contact: clickable phone / address / WhatsApp blocks + full weekly hours table (today highlighted) + embedded Google Maps
- Footer: tagline, address, phone, WhatsApp, Instagram
- Floating WhatsApp button with pulse ring

## Verified
- All Unsplash image URLs return 200
- Phone numbers use `tel:+919900914999`
- WhatsApp links use `wa.me/919900914999`
- SEO meta + OG + Twitter cards set in index.html
- Smooth scroll via `scroll-behavior: smooth`
- Responsive tested at 375 / 768 / 1440 / 1920

## Backlog / Next Steps
- P1: Instagram feed integration (replace static gallery with latest posts)
- P1: Service booking form (name/phone/service/time → WhatsApp deep link or form endpoint)
- P2: Google Reviews live embed via Places API
- P2: Offer/coupon banner strip
- P2: Hindi/Kannada language toggle
- P2: Blog for SEO (e.g., "Best hair spa in BTM Layout")
