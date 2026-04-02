# GymSnacks V2 — Premium E-Commerce Storefront

## What This Is

A premium Next.js 14 e-commerce storefront for GymSnacks, a pre-workout gummy supplement brand. The site integrates with Shopify Storefront API for products, cart, and checkout. The design matches the new brand packaging — bold yellow/pink/black with cartoon fruit characters, high-energy animations via Framer Motion and GSAP, and a fun, cartoony aesthetic that differentiates from typical supplement sites.

## Core Value

Users can discover, learn about, and purchase GymSnacks pre-workout gummies through a seamless, brand-cohesive experience that converts browsers into buyers.

## Requirements

### Validated

- ✓ Next.js 14 App Router with TypeScript + Tailwind v4 — Phase 1
- ✓ Shopify Storefront API integration (products, variants, images) — Phase 1
- ✓ Zustand cart with localStorage persistence — Phase 1
- ✓ Checkout redirect to Shopify — Phase 1
- ✓ Homepage: hero, featured product, product grid, why section, CTA — Phase 1
- ✓ Product detail page with gallery, variants, quantity, add-to-cart — Phase 1
- ✓ About page with 7 story sections — Phase 1
- ✓ Yellow/pink/black design system matching packaging — Phase 1
- ✓ Framer Motion animations (scroll reveals, hover effects, page elements) — Phase 1
- ✓ Lenis smooth scroll — Phase 1
- ✓ Mobile hamburger menu with Framer Motion — Phase 1
- ✓ Cart drawer with slide-in animation — Phase 1
- ✓ SEO: sitemap.xml, robots.txt, JSON-LD schemas, meta tags — Phase 1
- ✓ 404 page + loading states — Phase 1
- ✓ Railway deployment — Phase 1

### Active

- [ ] Shopify purchase flow end-to-end testing (add to cart → checkout → payment works)
- [ ] Hero section polish (dark bg, bag mockup image, contrast fix)
- [ ] Animation polish (GSAP ScrollTrigger parallax, page transitions, confetti on add-to-cart)
- [ ] Mobile responsive QA across devices
- [ ] Performance optimization (Lighthouse 90+, image optimization)
- [ ] Accessibility audit (WCAG, reduced motion, focus states, aria labels)
- [ ] SEO content optimization (keyword density, heading hierarchy for "pre workout gummies")
- [ ] Social proof / reviews section
- [ ] Email capture / newsletter signup
- [ ] Analytics integration (GA4)
- [ ] Custom domain SSL verification (gymsnackinc.com)

### Out of Scope

- User accounts / login — Shopify handles auth at checkout
- Inventory management — managed in Shopify admin
- Blog — defer to v2, focus on product pages first
- Real-time chat — unnecessary for supplement brand
- Multi-currency — US market only for now

## Context

- **Shopify store**: gymsnacksinc.myshopify.com (Storefront API 2024-10)
- **Deployment**: Railway (welcoming-smile project, Gym-Snacks_Custom service)
- **Live URLs**: gymsnackinc.com, gym-snackscustom-production.up.railway.app
- **Products**: ~16 products including pre-workout gummies, multivitamins, apparel
- **Key product**: Variety Pack Pre-Workout Gummies (250mg caffeine, 3g beta-alanine, 1100mg glycerol)
- **Brand identity**: Fun, cartoony, punk/street-art meets candy packaging. Cartoon fruits with XX dead eyes. Yellow primary, hot pink accents, black outlines.
- **Previous site**: Vanilla HTML/CSS/JS Express.js app (replaced by this rewrite)

## Constraints

- **Tech stack**: Next.js 14 + TypeScript + Tailwind v4 + Framer Motion + GSAP (already committed)
- **Checkout**: Must redirect to Shopify checkout (no custom checkout)
- **Hosting**: Railway (already deployed, keep existing service)
- **Images**: Shopify CDN for products, local assets for brand imagery
- **Budget**: Minimize external service costs (no paid analytics, use free tiers)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js rewrite over vanilla enhancement | Unlock Framer Motion, component architecture, server-side rendering, image optimization | ✓ Good |
| Zustand over Redux/Context | Lightweight, simple API, built-in persist middleware for cart | ✓ Good |
| Dark hero background | Yellow bag on yellow bg had no contrast; dark bg makes product pop | — Pending |
| GSAP + Framer Motion dual approach | FM for component animations, GSAP for scroll-linked/parallax | — Pending |
| Railway over Vercel | User already has Railway infrastructure, keep consolidated | ✓ Good |

---
*Last updated: 2026-04-02 after initialization*
