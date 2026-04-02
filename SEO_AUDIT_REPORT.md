# GymSnacks SEO Audit & Optimization Report
**Date:** 2026-04-02  
**Primary Keyword:** "pre workout gummies" / "pre-workout gummies"  
**Target Brand:** GymSnacks  

---

## EXECUTIVE SUMMARY

Your website has a strong foundation but needs targeted optimization for search visibility. Current issues:
1. **Missing Critical SEO Infrastructure** - No sitemap.xml, no robots.txt, no JSON-LD schema
2. **Suboptimal Meta Tags** - Descriptions too short, missing keyword density optimization
3. **Weak Product Page Metadata** - No dynamic meta tags for product pages
4. **Missing Structured Data** - No Product schema for rich snippets
5. **H1 Optimization Opportunities** - Hero section uses brand name, not primary keyword
6. **Missing Alt Text** - Images lack SEO-optimized alt text

---

## KEYWORD ANALYSIS

### Primary Keyword: "pre workout gummies"
- **Current Density:** 0.3% (4 uses in ~1300 words visible)
- **Target Density:** 0.8-1.2%
- **Status:** UNDER-OPTIMIZED

### Keyword Distribution Audit

**Layout/Global:**
- "pre-workout" appears 3 times (metadata + hero)
- "gummies" appears 2 times
- **Issue:** Keyword scattered, not concentrated on homepage

**Home Page:**
- H1: "GYM SNACKS" (brand, not keyword)
- H2/H3: Missing keyword-rich headings
- **Issue:** Hero section should emphasize "pre workout gummies"

**Component Analysis:**
- Hero.tsx: Contains "PRE-WORKOUT GUMMIES" (good placement)
- WhySection: Zero mentions of primary keyword
- CtaSection: No keyword focus
- ProductGrid: Filtering logic has keyword variations (good)

---

## LSI KEYWORDS (Semantic Variations)

**Include in content optimization:**
1. pre-workout gummies
2. pre workout gummy supplements
3. workout gummies
4. caffeine gummies
5. gummy pre-workout
6. best pre workout gummies
7. pre-workout supplement gummies
8. energy gummies
9. gym gummies
10. fitness gummies
11. pre-workout candy
12. gummy pre-workout supplements
13. pre-workout gummy candy
14. workout energy gummies
15. performance gummies
16. caffeine gummy supplements
17. pre-workout gummy snacks
18. gym snack gummies
19. natural pre-workout gummies
20. convenient pre-workout gummies

---

## STRUCTURED DATA AUDIT

### JSON-LD Schemas: MISSING

**Required Additions:**
1. Product Schema (for product pages)
2. Organization Schema (footer/global)
3. BreadcrumbList Schema (product pages)
4. FAQPage Schema (about/product pages)

---

## TECHNICAL SEO AUDIT

### Missing Infrastructure

| Component | Status | Priority |
|-----------|--------|----------|
| sitemap.xml | MISSING | CRITICAL |
| robots.txt | MISSING | HIGH |
| Product Schema | MISSING | HIGH |
| Canonical URLs | PRESENT | Good |
| Open Graph Tags | PARTIAL | MEDIUM |
| Breadcrumbs | MISSING | MEDIUM |
| Mobile-Friendly | GOOD | Pass |

---

## META TAG ANALYSIS

### Root Layout (layout.tsx)

**Current Title:** "GymSnacks | Premium Pre-Workout Gummies"
- Length: 47 characters ✓ (Good)
- Keyword placement: "Pre-Workout Gummies" present ✓
- **Issue:** Could include "buy" or action verb for CTR

**Current Description:** "Pre-workout supplements, reimagined..."
- Length: 145 characters ✓ (Good)
- **Issue:** Keyword "pre-workout" at start (good), but "gummies" appears once, should appear twice for natural density

### About Page (about/page.tsx)

**Current Title:** "About Us | GymSnacks"
- Length: 20 characters (TOO SHORT)
- **Issue:** No keyword presence
- **Recommendation:** Include "pre-workout gummies"

**Current Description:** "Learn about GymSnacks - The world's first candy-like pre-workout..."
- **Issue:** "pre-workout" singular, should be "pre-workout gummies"

### Product Pages

**Current Status:** NO METADATA
- Product pages have no metadata.title or metadata.description
- **CRITICAL ISSUE:** Each product page should have unique meta tags including product name + "pre-workout gummies"

---

## HEADING HIERARCHY AUDIT

### Issue 1: Hero Section (Hero.tsx)
- **H1:** "GYM SNACKS" (brand only, no keyword)
- **Should be:** "Premium Pre-Workout Gummies by GymSnacks"
- **Problem:** Wastes primary H1 opportunity for keyword optimization

### Issue 2: Missing H2 Structure
- FeaturedProduct H3 uses product.title (variable)
- No consistent H2 headings for sections
- **Fix needed:** Add H2 tags with keywords before H3s

### Issue 3: Section Titles
- WhySection: "WHY GYMSNACKS?" (brand-centric)
- Should incorporate keywords

---

## IMAGE ALT TEXT AUDIT

### Missing/Poor Alt Text

| Image | Current Alt | Should Be | File |
|-------|------------|-----------|------|
| hero-label.png | "GymSnacks Variety Pack" | "GymSnacks Pre-Workout Gummies - 250mg Caffeine Per Serving" | Hero.tsx |
| Product images | `{product.title}` (varies) | Include keywords + product name | ProductDetail.tsx |

---

## KEYWORD DENSITY CALCULATION

### Homepage Current State
**Total visible words:** ~1,300  
**Primary keyword ("pre workout gummies"):** 4 occurrences  
**Current density:** 0.31%  
**Target density:** 0.8-1.2%  
**Gap:** Need 5-6 more natural occurrences

### Where to Add Keywords
1. Hero H1: "Pre-Workout Gummies"
2. Hero subheading: Already has "PRE-WORKOUT GUMMIES"
3. WhySection H2: Add keyword
4. ProductGrid subtitle: Add keyword
5. CtaSection H2: Add keyword variant
6. Product card descriptions: Natural inclusions

---

## RECOMMENDATIONS SUMMARY

### CRITICAL (Implement First)
1. Add sitemap.xml configuration
2. Add robots.txt file
3. Add Product JSON-LD schema to product pages
4. Make product page metadata dynamic
5. Fix H1 in Hero section (add keyword)

### HIGH PRIORITY
1. Optimize meta descriptions for keyword density
2. Add H2 tags with keywords to sections
3. Improve image alt text with keywords
4. Add Organization schema
5. Optimize About page title/description

### MEDIUM PRIORITY
1. Add BreadcrumbList schema
2. Add FAQ schema to product pages
3. Optimize for long-tail keywords in descriptions
4. Add internal linking with keyword anchor text

---

## SEO SCORE BREAKDOWN

| Category | Score | Status |
|----------|-------|--------|
| Meta Tags | 65/100 | Needs improvement |
| Headings | 50/100 | Poor H1 usage |
| Structured Data | 0/100 | MISSING |
| Technical SEO | 40/100 | Sitemap/robots missing |
| Keyword Optimization | 40/100 | Under-optimized |
| Content Quality | 85/100 | Good |
| **Overall SEO Score** | **47/100** | **MEDIUM - ACTIONABLE** |

---

## NEXT STEPS

See "IMPLEMENTATION_PLAN.md" for exact code changes organized by:
1. Critical infrastructure (sitemap, robots)
2. Metadata optimization
3. Schema markup additions
4. Content/heading updates
