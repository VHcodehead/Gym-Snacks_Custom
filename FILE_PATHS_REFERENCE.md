# SEO Implementation - Complete File Paths Reference

## Documentation Files Created

All these files are in the root directory:

- `D:\gymsnacks-custom\gymsnacks-v2\SEO_AUDIT_REPORT.md`
- `D:\gymsnacks-custom\gymsnacks-v2\SEO_IMPLEMENTATION_PLAN.md`
- `D:\gymsnacks-custom\gymsnacks-v2\SEO_CHANGES_QUICK_REFERENCE.md`
- `D:\gymsnacks-custom\gymsnacks-v2\KEYWORD_STRATEGY_ANALYSIS.md`
- `D:\gymsnacks-custom\gymsnacks-v2\README_SEO.md`
- `D:\gymsnacks-custom\gymsnacks-v2\IMPLEMENTATION_CHECKLIST.md`
- `D:\gymsnacks-custom\gymsnacks-v2\FILE_PATHS_REFERENCE.md` (this file)

---

## Files to CREATE (4 new files)

### 1. Sitemap Route
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\sitemap.ts`
**Purpose:** Auto-generates sitemap.xml for all pages and products
**Size:** ~45 lines

### 2. Robots Route
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\robots.ts`
**Purpose:** Controls search engine crawling rules
**Size:** ~15 lines

### 3. Static Robots File
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\public\robots.txt`
**Purpose:** Fallback robots.txt for older systems
**Size:** ~20 lines

### 4. Organization Schema Component
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\seo\OrganizationSchema.tsx`
**Purpose:** Renders JSON-LD organization schema
**Size:** ~35 lines

---

## Files to MODIFY (8 existing files)

### 1. Root Layout
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\layout.tsx`
**Changes:** 
- Update metadata export (lines 22-32)
- Add OrganizationSchema import
- Add `<OrganizationSchema />` in return
**Lines Affected:** 22-32, imports, return statement

### 2. About Page
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\about\page.tsx`
**Changes:**
- Replace metadata object (lines 10-13)
- Add Metadata import
**Lines Affected:** 1-13

### 3. Product Detail Page
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\products\[handle]\page.tsx`
**Changes:**
- Replace entire file with new version including generateMetadata
**Lines Affected:** All (complete replacement)

### 4. Hero Component
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\Hero.tsx`
**Changes:**
- Replace H1 content (lines 26-35)
- Update image alt text (line 117)
**Lines Affected:** 26-35, 117

### 5. Why Section
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\WhySection.tsx`
**Changes:**
- Update SectionTitle accent prop (line 40)
**Lines Affected:** 40

### 6. Product Grid
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\ProductGrid.tsx`
**Changes:**
- Update SectionTitle props (line 58)
**Lines Affected:** 58

### 7. CTA Section
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\CtaSection.tsx`
**Changes:**
- Replace H2 content (line 22)
**Lines Affected:** 22

### 8. Product Detail Component
**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\product\ProductDetail.tsx`
**Changes:**
- Add useEffect import
- Add useProductSchema function
- Add hook call in component
**Lines Affected:** Imports, before component, inside component

---

## Complete File Structure After Implementation

```
D:\gymsnacks-custom\gymsnacks-v2\
├── Documentation (7 files in root)
│   ├── SEO_AUDIT_REPORT.md
│   ├── SEO_IMPLEMENTATION_PLAN.md
│   ├── SEO_CHANGES_QUICK_REFERENCE.md
│   ├── KEYWORD_STRATEGY_ANALYSIS.md
│   ├── README_SEO.md
│   ├── IMPLEMENTATION_CHECKLIST.md
│   └── FILE_PATHS_REFERENCE.md (this file)
│
├── public/
│   └── robots.txt (NEW)
│
└── src/
    ├── app/
    │   ├── layout.tsx (MODIFIED)
    │   ├── page.tsx
    │   ├── about/
    │   │   └── page.tsx (MODIFIED)
    │   ├── products/
    │   │   └── [handle]/
    │   │       └── page.tsx (MODIFIED)
    │   ├── sitemap.ts (NEW)
    │   └── robots.ts (NEW)
    │
    └── components/
        ├── home/
        │   ├── Hero.tsx (MODIFIED)
        │   ├── WhySection.tsx (MODIFIED)
        │   ├── ProductGrid.tsx (MODIFIED)
        │   └── CtaSection.tsx (MODIFIED)
        │
        ├── product/
        │   └── ProductDetail.tsx (MODIFIED)
        │
        └── seo/
            └── OrganizationSchema.tsx (NEW)
```

---

## Implementation Order (Recommended)

1. Create `D:\gymsnacks-custom\gymsnacks-v2\src\app\sitemap.ts`
2. Create `D:\gymsnacks-custom\gymsnacks-v2\src\app\robots.ts`
3. Create `D:\gymsnacks-custom\gymsnacks-v2\public\robots.txt`
4. Create `D:\gymsnacks-custom\gymsnacks-v2\src\components\seo\OrganizationSchema.tsx`
5. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\app\layout.tsx`
6. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\app\about\page.tsx`
7. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\app\products\[handle]\page.tsx`
8. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\Hero.tsx`
9. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\WhySection.tsx`
10. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\ProductGrid.tsx`
11. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\CtaSection.tsx`
12. Modify `D:\gymsnacks-custom\gymsnacks-v2\src\components\product\ProductDetail.tsx`

---

## Quick Copy-Paste Guide

For exact code to copy, reference:
**`SEO_CHANGES_QUICK_REFERENCE.md`** - Contains all code organized by file

For detailed explanation of each change:
**`SEO_IMPLEMENTATION_PLAN.md`** - Contains "OLD" and "NEW" sections for each file

---

## Testing URLs (After Implementation)

Test these after deploying:
- `http://localhost:3000/` - Homepage
- `http://localhost:3000/sitemap.xml` - Dynamic sitemap
- `http://localhost:3000/robots.txt` - Robots file
- `http://localhost:3000/about` - About page
- `http://localhost:3000/products/[any-handle]` - Product page

Production:
- `https://gymsnacks.com/sitemap.xml`
- `https://gymsnacks.com/robots.txt`

---

## Verification Checklist (After Implementation)

- [ ] All 4 new files created and visible in project
- [ ] All 8 files modified successfully
- [ ] `npm run build` completes without errors
- [ ] Dev server starts with `npm run dev`
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots accessible at `/robots.txt`
- [ ] Meta tags appear in page source
- [ ] JSON-LD schema appears in page source
- [ ] No console errors in browser
- [ ] No styling/layout issues

---

## Key Statistics

**New Files:** 4
**Modified Files:** 8
**Total Files Affected:** 12
**Total Code Lines Added:** ~250
**Total Code Lines Modified:** ~50
**Estimated Time:** 75 minutes

---

## Keywords Being Optimized

**Primary:** "pre workout gummies", "pre-workout gummies"
**Secondary:** 
- "gummy pre-workout"
- "best pre-workout gummies"
- "caffeine gummies"
- "gym snacks"

---

## Support References

**For Code Changes:** `SEO_CHANGES_QUICK_REFERENCE.md`
**For Explanation:** `SEO_IMPLEMENTATION_PLAN.md`
**For Strategy:** `KEYWORD_STRATEGY_ANALYSIS.md`
**For Checklist:** `IMPLEMENTATION_CHECKLIST.md`
**For Audit:** `SEO_AUDIT_REPORT.md`

---

**Last Updated:** 2026-04-02
**Implementation Status:** Ready to begin
**Estimated Completion:** 75 minutes
