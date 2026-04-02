# SEO Implementation Checklist - Step-by-Step

**Start Date:** ___________  
**Completion Date:** ___________  
**Total Time:** ~75 minutes  

---

## Phase 1: Critical Infrastructure (15 minutes)

### Step 1.1: Create Sitemap File
- [ ] Create new file: `D:\gymsnacks-custom\gymsnacks-v2\src\app\sitemap.ts`
- [ ] Copy content from `SEO_CHANGES_QUICK_REFERENCE.md` section "1. sitemap.ts"
- [ ] Verify file appears in project
- [ ] Time: 3 minutes

### Step 1.2: Create Robots File (API Route)
- [ ] Create new file: `D:\gymsnacks-custom\gymsnacks-v2\src\app\robots.ts`
- [ ] Copy content from `SEO_CHANGES_QUICK_REFERENCE.md` section "2. robots.ts"
- [ ] Verify file appears in project
- [ ] Time: 2 minutes

### Step 1.3: Create Static Robots File
- [ ] Create new file: `D:\gymsnacks-custom\gymsnacks-v2\public\robots.txt`
- [ ] Copy content from `SEO_CHANGES_QUICK_REFERENCE.md` section "3. robots.txt"
- [ ] Verify file appears in public folder
- [ ] Time: 2 minutes

### Step 1.4: Verify Infrastructure
- [ ] Run `npm run build`
- [ ] Check for build errors
- [ ] Start dev server: `npm run dev`
- [ ] Visit `http://localhost:3000/sitemap.xml` - Should show XML
- [ ] Visit `http://localhost:3000/robots.txt` - Should show robots rules
- [ ] Time: 5 minutes

**Phase 1 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Phase 2: Root Layout & Organization Schema (10 minutes)

### Step 2.1: Create Organization Schema Component
- [ ] Create directory: `D:\gymsnacks-custom\gymsnacks-v2\src\components\seo\`
- [ ] Create file: `D:\gymsnacks-custom\gymsnacks-v2\src\components\seo\OrganizationSchema.tsx`
- [ ] Copy content from `SEO_CHANGES_QUICK_REFERENCE.md` section "4. OrganizationSchema.tsx"
- [ ] Verify file structure
- [ ] Time: 3 minutes

### Step 2.2: Update Root Layout Metadata
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\app\layout.tsx`
- [ ] Find and replace metadata export (lines 22-32)
- [ ] Replace with new content from `SEO_CHANGES_QUICK_REFERENCE.md` section "FILE 1: layout.tsx - CHANGE 1"
- [ ] Verify changes saved
- [ ] Time: 3 minutes

### Step 2.3: Update Layout HTML with Schema
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\app\layout.tsx`
- [ ] Add import at top: `import { OrganizationSchema } from "@/components/seo/OrganizationSchema";`
- [ ] Update return statement (lines 39-50) to include `<OrganizationSchema />` inside `<head>`
- [ ] Reference exact code in `SEO_IMPLEMENTATION_PLAN.md` section "4.2"
- [ ] Verify changes
- [ ] Time: 3 minutes

### Step 2.4: Test Layout Changes
- [ ] Run `npm run build` - Check for TypeScript errors
- [ ] Restart dev server
- [ ] Visit homepage
- [ ] Inspect page source: Check for title/description meta tags
- [ ] Inspect page source: Check for JSON-LD schema
- [ ] Time: 2 minutes

**Phase 2 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Phase 3: Page Metadata Updates (10 minutes)

### Step 3.1: Update About Page
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\app\about\page.tsx`
- [ ] Add import: `import { Metadata } from "next";`
- [ ] Find and replace metadata export (lines 10-13)
- [ ] Replace with content from `SEO_CHANGES_QUICK_REFERENCE.md` section "FILE 2: about/page.tsx"
- [ ] Verify changes
- [ ] Time: 3 minutes

### Step 3.2: Update Product Page with Dynamic Metadata
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\app\products\[handle]\page.tsx`
- [ ] Delete entire file content
- [ ] Paste new complete content from `SEO_CHANGES_QUICK_REFERENCE.md` section "FILE 3: products/[handle]/page.tsx"
- [ ] Verify file structure looks correct
- [ ] Time: 5 minutes

### Step 3.3: Test Page Metadata
- [ ] Run `npm run build` - Check for errors
- [ ] Restart dev server
- [ ] Visit `/about` page
- [ ] Inspect title, meta description
- [ ] Visit any product page (e.g., `/products/sample`)
- [ ] Verify dynamic title includes product name + "pre-workout gummies"
- [ ] Time: 2 minutes

**Phase 3 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Phase 4: Hero & Component Optimization (15 minutes)

### Step 4.1: Update Hero Component H1 & Alt Text
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\Hero.tsx`
- [ ] Find H1 (lines 26-35) with "GYM SNACKS"
- [ ] Replace with new H1 from `SEO_CHANGES_QUICK_REFERENCE.md` FILE 4
- [ ] Find Image alt text (line 117): "GymSnacks Variety Pack"
- [ ] Replace with new alt text from `SEO_CHANGES_QUICK_REFERENCE.md` FILE 4
- [ ] Verify changes
- [ ] Time: 3 minutes

### Step 4.2: Update Why Section Title
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\WhySection.tsx`
- [ ] Find SectionTitle (line 40): `accent="GYMSNACKS?"` 
- [ ] Replace with: `accent="OUR PRE-WORKOUT GUMMIES?"`
- [ ] Verify changes
- [ ] Time: 1 minute

### Step 4.3: Update Product Grid Subtitle
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\ProductGrid.tsx`
- [ ] Find SectionTitle (line 58)
- [ ] Replace with new content from `SEO_CHANGES_QUICK_REFERENCE.md` FILE 6
- [ ] Verify changes
- [ ] Time: 2 minutes

### Step 4.4: Update CTA Section H2
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\CtaSection.tsx`
- [ ] Find H2 (line 22): "JOIN THE MOVEMENT"
- [ ] Replace with: "EXPERIENCE NEXT-GEN<br />PRE-WORKOUT GUMMIES"
- [ ] Verify changes (note: preserve HTML structure)
- [ ] Time: 2 minutes

### Step 4.5: Test Component Changes
- [ ] Run `npm run build`
- [ ] Restart dev server
- [ ] Visit homepage
- [ ] Visually verify all changes look good
- [ ] Check browser DevTools: Inspect H1, H2, image alt text
- [ ] No broken layouts
- [ ] Time: 3 minutes

**Phase 4 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Phase 5: Product Schema & Final Component (10 minutes)

### Step 5.1: Update Product Detail Component with Schema
- [ ] Open `D:\gymsnacks-custom\gymsnacks-v2\src\components\product\ProductDetail.tsx`
- [ ] Add import at top: `import { useEffect } from "react";`
- [ ] Add `useProductSchema` function from `SEO_CHANGES_QUICK_REFERENCE.md` FILE 8
- [ ] Find component function: `export function ProductDetail({ product }...`
- [ ] Add `useProductSchema(product);` as first line in function
- [ ] Verify all changes
- [ ] Time: 5 minutes

### Step 5.2: Test Product Schema
- [ ] Run `npm run build`
- [ ] Restart dev server
- [ ] Visit any product page
- [ ] Inspect page source: Search for "application/ld+json"
- [ ] Verify Product schema appears
- [ ] Visit Google Rich Result Test: https://search.google.com/test/rich-results
- [ ] Paste product page URL
- [ ] Should show "Product" in valid schema types
- [ ] Time: 3 minutes

### Step 5.3: Final Build & Verification
- [ ] Run `npm run build` final check
- [ ] No errors should appear
- [ ] Check terminal output - note any warnings
- [ ] If errors, refer to `SEO_IMPLEMENTATION_PLAN.md` "Common Issues"
- [ ] Time: 2 minutes

**Phase 5 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Phase 6: Testing & Validation (15 minutes)

### Step 6.1: Browser Testing
- [ ] Open `http://localhost:3000/` 
- [ ] Check meta title appears correctly in browser tab
- [ ] Right-click → View Page Source
- [ ] Search for `<meta name="description">`
- [ ] Verify description contains "pre-workout gummies"
- [ ] Time: 3 minutes

### Step 6.2: Check All Pages
- [ ] Visit `/` (homepage) - Check title, description
- [ ] Visit `/about` - Check title contains keyword
- [ ] Visit `/products/[any-product-handle]` - Check dynamic title
- [ ] Verify no 404 errors
- [ ] Verify no CSS/styling issues
- [ ] Time: 5 minutes

### Step 6.3: Structured Data Validation
- [ ] Visit Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Enter `http://localhost:3000/products/[product-handle]`
- [ ] Should show "Product" as valid schema
- [ ] Should show rating, price, availability
- [ ] No errors in validation
- [ ] Time: 3 minutes

### Step 6.4: Sitemap & Robots Validation
- [ ] Visit `http://localhost:3000/sitemap.xml`
- [ ] Should show XML with `<url>` entries
- [ ] Count entries: Should include /, /about, + all products
- [ ] Visit `http://localhost:3000/robots.txt`
- [ ] Should show Allow/Disallow rules
- [ ] Time: 2 minutes

### Step 6.5: SEO Tool Checks (Optional)
- [ ] Install Lighthouse extension in Chrome
- [ ] Run Lighthouse on homepage
- [ ] Check SEO score (should be 80+)
- [ ] Note any issues
- [ ] Install Wappalyzer to see detected tech
- [ ] Time: 2 minutes (optional)

**Phase 6 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Phase 7: Production Deployment (10 minutes)

### Step 7.1: Final Local Build
- [ ] Run `npm run build`
- [ ] Verify: "Next.js build successful"
- [ ] No errors in console
- [ ] Time: 3 minutes

### Step 7.2: Deploy to Production
- [ ] Push changes to git (if using)
- [ ] Deploy to production server/Vercel
- [ ] Verify deployment successful
- [ ] Allow 5-10 minutes for DNS/caching
- [ ] Time: 5 minutes

### Step 7.3: Production Verification
- [ ] Visit your production site
- [ ] Visit `/sitemap.xml` - Should work
- [ ] Visit `/robots.txt` - Should work
- [ ] Check Google Chrome DevTools
- [ ] Verify meta tags in production
- [ ] Check mobile responsiveness
- [ ] Time: 2 minutes

**Phase 7 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Phase 8: Google Search Console Setup (5 minutes)

### Step 8.1: Submit Sitemap
- [ ] Go to https://search.google.com/search-console
- [ ] Select your property
- [ ] Click "Sitemaps" in left menu
- [ ] Click "Add new sitemap"
- [ ] Enter: `https://your-domain.com/sitemap.xml`
- [ ] Click "Submit"
- [ ] Wait for "Submitted" status
- [ ] Time: 2 minutes

### Step 8.2: Verify Indexation
- [ ] In Google Search Console
- [ ] Click "Coverage" in left menu
- [ ] Should show "Valid" pages
- [ ] Should include /, /about, products
- [ ] If 0 pages indexed, wait 24 hours and recheck
- [ ] Time: 2 minutes

### Step 8.3: Start Monitoring
- [ ] Go to "Performance" in Search Console
- [ ] Click "Date" range selector
- [ ] Set date to last 28 days
- [ ] Note impressions for "pre-workout gummies"
- [ ] Take screenshot as baseline
- [ ] Time: 1 minute

**Phase 8 Complete:** ___________  
**Issues Encountered:** _______________________________________________

---

## Validation Checklist - Before Calling Complete

### Meta Tags
- [ ] Homepage title: "Pre-Workout Gummies by GymSnacks | 250mg Caffeine"
- [ ] Homepage description: Contains "pre-workout gummies" 3+ times
- [ ] About page title: Contains "Pre-Workout Gummies"
- [ ] Product page titles: Dynamic, contain product name + "Pre-Workout Gummies"
- [ ] All meta descriptions: Under 160 characters, descriptive

### Headings
- [ ] H1 on homepage: "PREMIUM PRE-WORKOUT GUMMIES"
- [ ] H2 in CtaSection: Contains "PRE-WORKOUT GUMMIES"
- [ ] H3/section titles: Include keyword variations
- [ ] No multiple H1s per page
- [ ] Heading hierarchy is correct (no H3 before H2)

### Structured Data
- [ ] Organization schema present in page source
- [ ] Product schema present on product pages
- [ ] No schema validation errors
- [ ] Google Rich Results shows valid schema

### Technical
- [ ] Sitemap generates at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] No 404 errors
- [ ] Build completes without errors
- [ ] Mobile responsive

### Performance
- [ ] Pages load in <3 seconds
- [ ] No JavaScript errors in console
- [ ] Images properly optimized
- [ ] No console warnings related to SEO

---

## Final Sign-Off

### Completion Status
- [ ] All 8 phases completed
- [ ] All validation checks passed
- [ ] No outstanding issues
- [ ] Production deployed

### Metrics Baseline (Document for future comparison)
**Date:** ___________
- Current ranking for "pre-workout gummies": ___________
- Current organic traffic: ___________ sessions/month
- Current featured snippets: ___________
- Current indexed pages: ___________ pages

### Next Steps
- [ ] Monitor Search Console daily for 1 week
- [ ] Create blog post targeting "how to use pre-workout gummies"
- [ ] Reach out to fitness bloggers for reviews
- [ ] Monitor rankings weekly
- [ ] Plan content calendar for months 2-6

### Sign-Off
- Completed by: _______________________
- Date completed: _______________________
- Time taken: _______________________

---

## Summary

**Total Files Modified:** 8  
**Total Files Created:** 4  
**Total Time Investment:** ~75 minutes  
**Expected Impact:** 300-500% increase in organic traffic within 6 months  

**You've successfully implemented SEO best practices for GymSnacks!**

Next: Begin content creation strategy (see KEYWORD_STRATEGY_ANALYSIS.md for content calendar)

