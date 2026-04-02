# Roadmap: GymSnacks V2

**Created:** 2026-04-02
**Phases:** 7
**Requirements:** 38

## Milestone 1: Launch-Ready Storefront

### Phase 1: Shopify Purchase Flow Verification
**Goal:** Verify the complete purchase flow works end-to-end — from browsing products to completing checkout on Shopify.

**Requirements:** SHOP-01 through SHOP-10
**Plans:** 3 plans

**Success Criteria:**
1. Products load from Shopify API and display correctly in grid and detail pages
2. User can add items to cart, update quantities, and remove items
3. Cart persists across page navigation and browser refresh (localStorage)
4. Clicking "Checkout" creates a Shopify checkout with correct line items and redirects to Shopify payment page
5. Complete a test purchase through Shopify checkout (use test mode if available)

Plans:
- [ ] 01-01-PLAN.md — Verify product loading and display (API, grid, detail pages, category filtering)
- [ ] 01-02-PLAN.md — Verify cart operations (add, update qty, remove, localStorage persistence)
- [ ] 01-03-PLAN.md — Fix checkout security and verify checkout flow (cart checkout + buy now)

---

### Phase 2: Visual Design & Brand Polish
**Goal:** Ensure every visual element matches the new packaging aesthetic — dark hero, yellow/pink/black palette, comic borders, burst badges.

**Requirements:** DESIGN-01 through DESIGN-06

**Success Criteria:**
1. Hero section displays bag mockup on dark background with pink glow effects
2. All components use design token colors consistently (no hardcoded hex)
3. Comic-style borders, shadows, and rounded corners applied to all cards/buttons
4. Burst badges render with starburst clip-path in pink with white text
5. Mascot characters float with spring physics animation
6. Footer is dark with yellow logo and pink accents

**Plans:**
- Plan 2A: Hero section finalization (dark bg, bag mockup, gradients, text contrast)
- Plan 2B: Design token audit (verify all components use CSS variables)
- Plan 2C: Component polish (burst badges, mascots, footer styling)

---

### Phase 3: Animations & Micro-Interactions
**Goal:** Layer premium animations that create a high-energy, $10k-site feel without sacrificing performance.

**Requirements:** ANIM-01 through ANIM-08

**Success Criteria:**
1. Hero has a sequenced entrance animation (text → badges → product → mascots)
2. All content sections fade/slide in on scroll with Framer Motion
3. Product cards respond to hover with scale + rotate + shadow shift
4. Buttons have spring-physics hover and tap animations
5. Cart drawer slides in with spring physics
6. Smooth scroll is active on all pages
7. Category tabs animate with AnimatePresence on switch
8. All animations disabled when prefers-reduced-motion is set

**Plans:**
- Plan 3A: Hero entrance timeline and scroll-linked effects
- Plan 3B: Section reveals and product card interactions
- Plan 3C: Reduced motion support and animation performance audit

---

### Phase 4: Mobile Responsive QA
**Goal:** Premium experience on every screen size — phones, tablets, desktop.

**Requirements:** MOBILE-01 through MOBILE-05

**Success Criteria:**
1. Mobile hamburger menu opens as full-screen overlay with animation
2. Homepage, product page, and about page render correctly at 375px
3. All interactive elements have 44px+ touch targets
4. Cart drawer takes full width on mobile
5. Hero stacks text above product image on mobile

**Plans:**
- Plan 4A: Test and fix all pages at 375px, 768px, 1024px breakpoints
- Plan 4B: Touch target audit and mobile nav verification

---

### Phase 5: SEO & Keyword Optimization
**Goal:** Rank #1 for "pre workout gummies" — proper metadata, structured data, keyword-optimized headings.

**Requirements:** SEO-01 through SEO-07

**Success Criteria:**
1. Homepage title tag contains "Pre-Workout Gummies"
2. sitemap.xml accessible at /sitemap.xml with all product URLs
3. robots.txt accessible at /robots.txt with proper crawl rules
4. Product pages have JSON-LD Product schema with price, availability, images
5. All pages have Organization schema
6. Canonical URLs set on all pages
7. H1 on homepage includes "pre-workout gummies" keyword

**Plans:**
- Plan 5A: Verify and optimize meta tags, headings, keyword density
- Plan 5B: Validate structured data with Google Rich Results Test
- Plan 5C: Verify sitemap and robots.txt accessibility

---

### Phase 6: Performance Optimization
**Goal:** Lighthouse 90+ performance score with fast load times.

**Requirements:** PERF-01 through PERF-05

**Success Criteria:**
1. Lighthouse performance score 90+ on homepage
2. All product images served as WebP via next/image
3. Fonts self-hosted via next/font with no layout shift
4. Below-fold sections lazy loaded
5. Initial page weight under 2MB

**Plans:**
- Plan 6A: Run Lighthouse audit and fix bottlenecks
- Plan 6B: Image optimization audit (sizes, formats, lazy loading)

---

### Phase 7: Final Deploy & Go-Live
**Goal:** Ship to production with confidence — build passes, Railway deploys, domain works.

**Requirements:** DEPLOY-01 through DEPLOY-04

**Success Criteria:**
1. `pnpm build` completes with zero TypeScript errors
2. Railway deployment succeeds and site is accessible
3. Environment variables (Shopify credentials) set on Railway
4. gymsnackinc.com resolves to the new Next.js site with valid SSL

**Plans:**
- Plan 7A: Production build verification and Railway deployment
- Plan 7B: Custom domain and SSL verification
- Plan 7C: Smoke test all pages and purchase flow on production URL

---

## Phase Dependencies

```
Phase 1 (Shopify Flow) ──┐
Phase 2 (Design)     ────┤
Phase 3 (Animations) ────┼── Phase 6 (Performance) ── Phase 7 (Deploy)
Phase 4 (Mobile)     ────┤
Phase 5 (SEO)        ────┘
```

Phases 1-5 can run in parallel. Phase 6 depends on all visual work being complete. Phase 7 is the final gate.

---
*Roadmap created: 2026-04-02*
