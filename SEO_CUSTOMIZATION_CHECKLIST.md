# GymSnacks SEO - Customization Checklist

## Required Updates Before Going Live

### 1. Organization Contact Information
**File:** `src/app/layout.tsx`

Replace placeholder values:
```
- "+1-XXX-XXX-XXXX" → Your actual business phone number
- "https://www.instagram.com/gymsnacksinc" → Your actual Instagram URL
- "https://www.tiktok.com/@gymsnacksinc" → Your actual TikTok URL
- "https://www.facebook.com/gymsnacksinc" → Your actual Facebook URL
```

### 2. Organization Logo URL
**File:** `src/app/layout.tsx`

Update logo URL:
```
"logo": "https://gymsnackinc.com/logo.png"
```

Make sure:
- Logo is hosted on your domain (or CDN)
- File exists at that URL
- Image is at least 112x112px
- Better if square format (192x192 or 256x256)

### 3. Contact Point Email (Optional)
**File:** `src/app/layout.tsx`

Add to the contactPoint object if needed:
```json
"email": "support@gymsnackinc.com"
```

### 4. Verify Domain in All Files
Check these values match your production domain:
- `src/app/layout.tsx` - metadataBase
- `src/app/sitemap.ts` - baseUrl
- `src/app/robots.ts` - host and sitemap URL
- `src/app/page.tsx` - websiteSchema URLs
- All component schema files

Current domain: **https://gymsnackinc.com**
- If different, search and replace across all files

### 5. Search Functionality (Optional but Recommended)
**File:** `src/app/page.tsx`

If you implement a search feature:
```json
"urlTemplate": "https://gymsnackinc.com/search?q={search_term_string}"
```

Update the `/search` endpoint to match your actual search route.

### 6. Product Rating Data
**Files:** `src/components/product/ProductSchema.tsx` and `src/lib/schema.ts`

Currently hardcoded:
```
"ratingValue": "5",
"reviewCount": "1"
```

Options:
- **Option 1:** Connect to actual review system
- **Option 2:** Leave as-is (won't hurt SEO)
- **Option 3:** Remove the aggregateRating object if you don't want ratings displayed

To remove ratings:
Delete this block from ProductSchema.tsx:
```tsx
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "5",
  reviewCount: "1",
},
```

### 7. Verify Product Images are Accessible
**Consideration:** All product images come from Shopify

Check in Shopify:
- All products have at least one image
- Images are high-quality and relevant
- Alt text is set for accessibility

The alt text from Shopify will be used in OpenGraph and schema markup.

### 8. Monitor After Deployment

#### Google Search Console Setup
1. Add property for https://gymsnackinc.com
2. Submit sitemap.xml URL
3. Monitor:
   - Indexation status
   - Coverage report
   - Rich results report (for Product schema)
   - Search performance

#### Test Rich Results
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test a product page
3. Should show "Product" rich result type
4. Check that price and availability appear

#### Validate Structured Data
1. Go to [Schema.org Validator](https://validator.schema.org/)
2. Test homepage URL
3. Test product page URL
4. Verify all schemas pass validation

### 9. Optional Enhancements

#### Add FAQ Schema (About Page)
**File:** Create `src/components/about/FAQSchema.tsx`

```tsx
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's in GymSnacks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each gummy contains 250mg caffeine, 3g beta-alanine, and 1100mg glycerol..."
        }
      },
      // Add more Q&A items
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
```

Then import in `src/app/about/page.tsx` before other components.

#### Add Review/Rating Schema
When you implement a review system:
1. Create ReviewSchema component
2. Pull actual review data from your database
3. Replace hardcoded ratings in ProductSchema.tsx

#### Add Video Schema
If you create product demo videos:
1. Upload to YouTube or similar
2. Add VideoObject schema to product pages
3. Include video URL, thumbnail, description

### 10. Content Structure Optimization

**For better SEO results, ensure:**

Product Pages:
- Detailed description (200+ words ideally)
- High-quality images (multiple angles)
- Proper heading hierarchy (H1 for product name)
- Link to related/similar products

About Page:
- Clear story and mission
- Company history
- Team information
- Certifications/qualifications

Homepage:
- Clear value proposition
- Feature highlights
- Customer testimonials
- Call-to-action

### Checklist Items

- [ ] Update phone number in layout.tsx
- [ ] Update social media URLs in layout.tsx
- [ ] Update logo URL in layout.tsx
- [ ] Verify domain name in all files
- [ ] Test sitemap.xml is accessible
- [ ] Test robots.txt is accessible
- [ ] Submit sitemap to Google Search Console
- [ ] Test rich results on product pages
- [ ] Verify structured data with validator
- [ ] Check product images are SEO-friendly (optimized file size)
- [ ] Review page titles and meta descriptions
- [ ] Consider implementing FAQ schema
- [ ] Set up Google Analytics 4 (separate from this SEO setup)
- [ ] Create a content strategy for blog/articles (future)

---

## Quick Testing Commands (if you want to check locally)

### Check sitemap.ts loads:
```bash
curl http://localhost:3000/sitemap.xml
```

### Check robots.ts loads:
```bash
curl http://localhost:3000/robots.txt
```

### Check metadata renders:
```bash
curl http://localhost:3000/products/[actual-product-handle] | grep -i "ld+json"
```

---

**Last Updated:** 2024
**Status:** Ready for production deployment after customization
