# Requirements: GymSnacks V2

**Defined:** 2026-04-02
**Core Value:** Users can discover, learn about, and purchase GymSnacks pre-workout gummies through a seamless, brand-cohesive experience.

## v1 Requirements

### Shopify Purchase Flow

- [ ] **SHOP-01**: User can browse all products on homepage grid
- [ ] **SHOP-02**: User can filter products by category (supplements/apparel)
- [ ] **SHOP-03**: User can view product detail page with images, description, variants
- [ ] **SHOP-04**: User can select product variant and quantity
- [ ] **SHOP-05**: User can add product to cart from product card or detail page
- [ ] **SHOP-06**: User can view cart contents in slide-out drawer
- [ ] **SHOP-07**: User can update quantity or remove items from cart
- [ ] **SHOP-08**: User can proceed to Shopify checkout with correct line items
- [ ] **SHOP-09**: Cart persists across page navigation and browser refresh
- [ ] **SHOP-10**: Checkout creates correct Shopify checkout with all cart items and redirects to Shopify payment

### Visual Design & Brand Cohesion

- [ ] **DESIGN-01**: Hero section uses dark background with bag mockup product image (not yellow-on-yellow)
- [ ] **DESIGN-02**: Color palette matches packaging: yellow (#FFD700), pink (#FF1493), black (#1A1A1A)
- [ ] **DESIGN-03**: Comic-style design tokens applied consistently (borders, shadows, rounded corners)
- [ ] **DESIGN-04**: Burst badges display ingredient callouts matching packaging style
- [ ] **DESIGN-05**: Mascot characters float with physics-based animation
- [ ] **DESIGN-06**: Footer uses dark theme with brand accents

### Animations & Interactions

- [ ] **ANIM-01**: Hero entrance animation (text stagger, product bounce-in)
- [ ] **ANIM-02**: Scroll-triggered section reveals on all content sections
- [ ] **ANIM-03**: Product card hover effects (scale, rotate, shadow shift)
- [ ] **ANIM-04**: Button hover/tap micro-interactions (scale, spring physics)
- [ ] **ANIM-05**: Cart drawer spring animation on open/close
- [ ] **ANIM-06**: Lenis smooth scroll active on all pages
- [ ] **ANIM-07**: Category tab switch with AnimatePresence transitions
- [ ] **ANIM-08**: prefers-reduced-motion disables all animations

### Mobile & Responsive

- [ ] **MOBILE-01**: Hamburger menu with full-screen overlay on mobile
- [ ] **MOBILE-02**: All pages render correctly at 375px (iPhone SE)
- [ ] **MOBILE-03**: Touch-friendly tap targets (44px+ minimum)
- [ ] **MOBILE-04**: Cart drawer goes full-width on mobile
- [ ] **MOBILE-05**: Hero stacks vertically on mobile (text above, image below)

### SEO & Discovery

- [ ] **SEO-01**: Meta titles include "pre-workout gummies" on key pages
- [ ] **SEO-02**: Dynamic sitemap.xml includes all product pages
- [ ] **SEO-03**: robots.txt configured for search engine crawling
- [ ] **SEO-04**: JSON-LD Product schema on product detail pages
- [ ] **SEO-05**: JSON-LD Organization schema on all pages
- [ ] **SEO-06**: Canonical URLs on all pages
- [ ] **SEO-07**: H1 heading contains primary keyword on homepage

### Performance

- [ ] **PERF-01**: Lighthouse performance score 90+
- [ ] **PERF-02**: All images served via next/image with auto WebP
- [ ] **PERF-03**: Fonts loaded via next/font with zero layout shift
- [ ] **PERF-04**: Below-fold content lazy loaded
- [ ] **PERF-05**: Total page weight under 2MB on initial load

### Deployment & Operations

- [ ] **DEPLOY-01**: Builds successfully with zero TypeScript errors
- [ ] **DEPLOY-02**: Deployed to Railway (welcoming-smile project)
- [ ] **DEPLOY-03**: Environment variables configured on Railway
- [ ] **DEPLOY-04**: Custom domain (gymsnackinc.com) resolves correctly

## v2 Requirements

### Content Marketing

- **BLOG-01**: Blog section with SEO-optimized articles
- **BLOG-02**: Article pages with structured data

### Social Proof

- **SOCIAL-01**: Customer reviews section on product pages
- **SOCIAL-02**: Instagram feed integration
- **SOCIAL-03**: Testimonials carousel on homepage

### Analytics

- **ANALYTICS-01**: GA4 integration with e-commerce events
- **ANALYTICS-02**: Conversion tracking on checkout redirect
- **ANALYTICS-03**: Newsletter signup with email capture

## Out of Scope

| Feature | Reason |
|---------|--------|
| Custom checkout | Shopify handles payment processing |
| User accounts | Shopify manages customer auth at checkout |
| Inventory management | Managed in Shopify admin |
| Multi-currency | US market only for v1 |
| Real-time chat | Not needed for supplement brand |
| Mobile app | Web-first approach |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SHOP-01 | Phase 1 | Pending |
| SHOP-02 | Phase 1 | Pending |
| SHOP-03 | Phase 1 | Pending |
| SHOP-04 | Phase 1 | Pending |
| SHOP-05 | Phase 1 | Pending |
| SHOP-06 | Phase 1 | Pending |
| SHOP-07 | Phase 1 | Pending |
| SHOP-08 | Phase 1 | Pending |
| SHOP-09 | Phase 1 | Pending |
| SHOP-10 | Phase 1 | Pending |
| DESIGN-01 | Phase 2 | Pending |
| DESIGN-02 | Phase 2 | Pending |
| DESIGN-03 | Phase 2 | Pending |
| DESIGN-04 | Phase 2 | Pending |
| DESIGN-05 | Phase 2 | Pending |
| DESIGN-06 | Phase 2 | Pending |
| ANIM-01 | Phase 3 | Pending |
| ANIM-02 | Phase 3 | Pending |
| ANIM-03 | Phase 3 | Pending |
| ANIM-04 | Phase 3 | Pending |
| ANIM-05 | Phase 3 | Pending |
| ANIM-06 | Phase 3 | Pending |
| ANIM-07 | Phase 3 | Pending |
| ANIM-08 | Phase 3 | Pending |
| MOBILE-01 | Phase 4 | Pending |
| MOBILE-02 | Phase 4 | Pending |
| MOBILE-03 | Phase 4 | Pending |
| MOBILE-04 | Phase 4 | Pending |
| MOBILE-05 | Phase 4 | Pending |
| SEO-01 | Phase 5 | Pending |
| SEO-02 | Phase 5 | Pending |
| SEO-03 | Phase 5 | Pending |
| SEO-04 | Phase 5 | Pending |
| SEO-05 | Phase 5 | Pending |
| SEO-06 | Phase 5 | Pending |
| SEO-07 | Phase 5 | Pending |
| PERF-01 | Phase 6 | Pending |
| PERF-02 | Phase 6 | Pending |
| PERF-03 | Phase 6 | Pending |
| PERF-04 | Phase 6 | Pending |
| PERF-05 | Phase 6 | Pending |
| DEPLOY-01 | Phase 7 | Pending |
| DEPLOY-02 | Phase 7 | Pending |
| DEPLOY-03 | Phase 7 | Pending |
| DEPLOY-04 | Phase 7 | Pending |

**Coverage:**
- v1 requirements: 38 total
- Mapped to phases: 38
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-02*
*Last updated: 2026-04-02 after initial definition*
