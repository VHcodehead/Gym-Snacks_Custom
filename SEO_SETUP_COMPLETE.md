# GymSnacks SEO Implementation - Complete Setup Guide

## Overview
This document outlines all the SEO infrastructure implemented for the GymSnacks Next.js 14 App Router site.

## Files Created/Modified

### 1. Sitemap (Dynamic)
**File:** `src/app/sitemap.ts`
- Automatically generates sitemap.xml with all product pages
- Updates dynamically from Shopify API
- Includes home page and about page with proper priorities
- Accessible at: https://gymsnackinc.com/sitemap.xml

### 2. Robots Configuration
**File:** `src/app/robots.ts`
- Configures crawl rules for search engines
- Blocks API and admin routes
- Excludes sorting/filter parameters to prevent duplicate content
- References sitemap.xml
- Allows AdsBot-Google for enhanced ad targeting

### 3. JSON-LD Schema Markup

#### Organization Schema
**Location:** `src/app/layout.tsx` (Root Layout)
- Added to `<head>` via script tag
- Includes:
  - Company name and URL
  - Logo reference
  - Description
  - Social media links (Instagram, TikTok, Facebook)
  - Contact point for customer support
- Renders on every page

#### WebSite Schema with SearchAction
**Location:** `src/app/page.tsx` (Homepage)
- Enables Google sitelinks search box in SERPs
- Configures search parameter structure
- Improves visibility in search results

#### Product Schema
**Location:** `src/components/product/ProductSchema.tsx` (Component)
**Usage:** Imported in `src/app/products/[handle]/page.tsx`
- Generates rich snippets for products
- Includes:
  - Product name, description, URL
  - All product images
  - Brand information
  - Price and availability (AggregateOffer)
  - Rating information
  - Dynamically pulls from Shopify product data

#### BreadcrumbList Schema
**Location:** `src/components/product/BreadcrumbSchema.tsx` (Component)
**Usage:** Imported in `src/app/products/[handle]/page.tsx`
- Improves SERP appearance with breadcrumb trail
- 3-level hierarchy: Home → Products → Product Name
- Helps search engine understand site structure

### 4. Canonical URLs
Implemented in metadata across all pages:

- **Homepage:** Automatic via metadataBase in layout
- **Product Pages:** `src/app/products/[handle]/page.tsx`
- **About Page:** `src/app/about/page.tsx`

### 5. Page Titles & Meta Descriptions
Updated in page.tsx files with:
- Unique titles for each product
- Descriptive meta descriptions
- OpenGraph tags for social sharing
- Product images in OG tags

### 6. Utility Functions
**File:** `src/lib/schema.ts`
- Reusable schema generation functions:
  - `generateProductSchema()`
  - `generateBreadcrumbSchema()`
  - `generateOrganizationSchema()`
  - `generateWebsiteSchema()`

## Configuration Details

### Base URL
All schemas reference: `https://gymsnackinc.com`
- Update in layout.tsx metadataBase if domain changes
- Update in robots.ts host if domain changes
- Update in sitemap.ts baseUrl if domain changes

### Shopify Integration
- Fetches all products from Shopify Storefront API
- Dynamically generates routes via generateStaticParams()
- Product data used for:
  - Sitemap generation
  - Product schema markup
  - Page titles and descriptions
  - Image URLs in OpenGraph

## SEO Best Practices Implemented

1. **Structured Data:**
   - JSON-LD format (preferred by Google)
   - Schema.org vocabularies
   - Multiple schema types for maximum coverage

2. **Site Architecture:**
   - Clear hierarchy: Home → Products → Product Detail
   - Logical URL structure: /products/[handle]
   - Breadcrumb navigation in markup

3. **Search Engine Guidance:**
   - robots.txt with proper rules
   - Dynamic sitemap.xml
   - Canonical URLs on all pages
   - Mobile-responsive site (Next.js default)

4. **Content Structure:**
   - Unique titles and descriptions
   - Rich snippets for products
   - Enhanced search appearance

## Testing & Validation

### Check Structured Data
1. Use [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Paste your product page URL
3. Should show Product rich result with price and availability

### Check Sitemap
- Visit: https://gymsnackinc.com/sitemap.xml
- Should list all products with lastModified timestamps

### Check Robots.txt
- Visit: https://gymsnackinc.com/robots.txt
- Verify rules and sitemap reference

### Check Metadata
1. View page source (Ctrl+U)
2. Look for `<script type="application/ld+json">`
3. Should contain properly formatted schemas

## Important Notes

1. **Update Contact Phone Number**
   - In `src/app/layout.tsx`, change "+1-XXX-XXX-XXXX" to actual phone
   - Update in Organization schema

2. **Update Social Media URLs**
   - In `src/app/layout.tsx`, update sameAs array
   - Add actual social profile URLs

3. **Logo URL**
   - In `src/app/layout.tsx`, update logo URL
   - Should be publicly accessible image

4. **Product Image URL Handling**
   - Images already come from Shopify CDN
   - Already configured in next.config.ts with remotePatterns

5. **Dynamic vs. Static Generation**
   - Product pages are statically generated with generateStaticParams()
   - Sitemap is dynamically generated at request time
   - No ISR (Incremental Static Regeneration) needed unless products change frequently

## Future Enhancements

1. **FAQ Schema:** Add to about page for common questions
2. **Review Schema:** If you implement customer reviews
3. **LocalBusiness Schema:** If you have physical locations
4. **Video Schema:** If you add product demo videos
5. **SearchAction Enhancement:** Implement actual search functionality

## File Structure
```
src/
├── app/
│   ├── layout.tsx (MODIFIED - added Organization schema, metadataBase)
│   ├── page.tsx (MODIFIED - added WebSite schema)
│   ├── sitemap.ts (NEW - dynamic sitemap generation)
│   ├── robots.ts (NEW - search engine rules)
│   ├── about/
│   │   └── page.tsx (MODIFIED - added canonical URL)
│   └── products/
│       └── [handle]/
│           └── page.tsx (MODIFIED - added Product & Breadcrumb schemas)
├── components/
│   └── product/
│       ├── ProductSchema.tsx (NEW)
│       └── BreadcrumbSchema.tsx (NEW)
└── lib/
    └── schema.ts (NEW - utility functions)
```

## Quick Reference: What Goes Where

| Schema Type | Location | Component | Usage |
|---|---|---|---|
| Organization | layout.tsx | Script tag in head | Every page |
| WebSite | page.tsx | Script tag in body | Homepage only |
| Product | ProductSchema.tsx | Imported in [handle]/page.tsx | Each product page |
| BreadcrumbList | BreadcrumbSchema.tsx | Imported in [handle]/page.tsx | Each product page |
| Canonical URL | page.tsx metadata | alternates.canonical | All pages |

## Deployment Notes

1. Sitemap and Robots files are automatic in Next.js 14 App Router
2. No build configuration changes needed
3. Metadata is server-side rendered
4. All schemas validate with schema.org validators

## Monitoring

Track in Google Search Console:
- Sitemap submission status
- Coverage and indexation
- Rich results appearance rate
- Click-through rate from search results
