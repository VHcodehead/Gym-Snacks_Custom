# GymSnacks SEO - Quick Start Guide

## What Was Implemented

You now have complete SEO infrastructure for your Next.js site:

1. **Dynamic Sitemap** - Auto-updates with Shopify products
2. **Robots.txt** - Search engine crawl rules
3. **JSON-LD Schemas** - Rich snippets for products
4. **Canonical URLs** - Prevent duplicate content issues
5. **Meta Tags** - Dynamic titles and descriptions

All files are created and ready to use. No additional setup needed.

---

## Deploy Right Now

### Quick Deploy Steps

```bash
# Option 1: If on Vercel
git add .
git commit -m "Add SEO infrastructure (sitemap, robots, schemas)"
git push origin main
# Done! Vercel deploys automatically

# Option 2: If using other hosting
npm run build
# Upload 'dist' or '.next' folder to your host
# Follow your host's deployment instructions
```

### Verify It Works
1. Go to: `https://yoursite.com/sitemap.xml`
   - Should see XML with all products
2. Go to: `https://yoursite.com/robots.txt`
   - Should see crawl rules
3. View any product page source code (Ctrl+U)
   - Should see `<script type="application/ld+json">` tags

---

## Before Going Live - Complete This

**Time needed: 5 minutes**

Open `src/app/layout.tsx` and update these THREE values:

### 1. Phone Number (Line ~38)
```typescript
// CHANGE THIS:
"telephone": "+1-XXX-XXX-XXXX",

// TO YOUR ACTUAL PHONE:
"telephone": "+1-555-123-4567",
```

### 2. Logo URL (Line ~36)
```typescript
// CHANGE THIS:
"logo": "https://gymsnackinc.com/logo.png",

// TO YOUR ACTUAL LOGO URL:
"logo": "https://gymsnackinc.com/images/logo.png",
```
(Make sure the image exists at that URL)

### 3. Social Media URLs (Lines ~40-43)
```typescript
// UPDATE THESE:
"sameAs": [
  "https://www.instagram.com/gymsnacksinc",
  "https://www.tiktok.com/@gymsnacksinc",
  "https://www.facebook.com/gymsnacksinc",
],

// TO YOUR ACTUAL ACCOUNTS:
"sameAs": [
  "https://www.instagram.com/your-actual-handle",
  "https://www.tiktok.com/@your-actual-handle",
  "https://www.facebook.com/your-actual-page",
],
```

**Done!** Now deploy.

---

## Verify After Deployment

### Step 1: Check Files Are Accessible
```
https://yoursite.com/sitemap.xml     <- Should load
https://yoursite.com/robots.txt      <- Should load
```

### Step 2: Test a Product Page
1. Go to a product page: `https://yoursite.com/products/your-product-name`
2. Right-click → View Page Source
3. Search for `"@type": "Product"`
4. You should find the full Product schema

### Step 3: Test with Google
1. Go to: [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your product URL
3. Click "Test URL"
4. Should show green checkmark with "Product" rich result

### Step 4: Submit to Google Search Console
1. Go to: [Google Search Console](https://search.google.com/search-console)
2. Select your site
3. Go to Sitemaps (left menu)
4. Click "Add/test sitemap"
5. Enter: `https://yoursite.com/sitemap.xml`
6. Click Submit

**Wait 1-2 weeks** for Google to crawl and index your products.

---

## What Each File Does

| File | Purpose | Location |
|------|---------|----------|
| sitemap.ts | Auto-generates sitemap.xml | `src/app/sitemap.ts` |
| robots.ts | Controls crawler behavior | `src/app/robots.ts` |
| ProductSchema | Product rich snippets | `src/components/product/ProductSchema.tsx` |
| BreadcrumbSchema | Breadcrumb navigation | `src/components/product/BreadcrumbSchema.tsx` |
| schema.ts | Reusable utilities | `src/lib/schema.ts` |

---

## Troubleshooting

### Sitemap shows 404
- Wait 5-10 seconds after deploy
- Try incognito/private mode
- Check browser cache isn't blocking

### Products not in sitemap
- Make sure products are visible in Shopify
- Check Shopify API credentials in .env
- Restart dev server: `npm run dev`

### Schemas not appearing
- View page source (Ctrl+U)
- Search for `application/ld+json`
- If not there: check for build errors, clear `.next` folder
- Rebuild: `npm run build`

### Google not indexing
- Submit sitemap in Google Search Console
- Wait 1-2 weeks for crawl
- Don't expect immediate results

---

## You're All Set!

Your GymSnacks site now has:
- Professional SEO infrastructure
- Google-friendly sitemap
- Rich product snippets
- Proper metadata on all pages
- Industry best-practices

**Next steps:**
1. Deploy the code
2. Update phone number and logo (5 min)
3. Submit sitemap to Google Search Console
4. Monitor results in 2-4 weeks

---

## Reference Documents

- **IMPLEMENTATION_SUMMARY.md** - Complete details of all changes
- **SEO_CUSTOMIZATION_CHECKLIST.md** - Before-launch checklist
- **CANONICAL_URLS_REFERENCE.md** - Technical details on canonical URLs
- **SEO_SETUP_COMPLETE.md** - In-depth documentation

---

## Questions?

Check the detailed docs:
- How do canonical URLs work? → CANONICAL_URLS_REFERENCE.md
- What do I need to customize? → SEO_CUSTOMIZATION_CHECKLIST.md
- What was implemented? → IMPLEMENTATION_SUMMARY.md
- Full technical details? → SEO_SETUP_COMPLETE.md

---

**Status:** ✅ Ready to deploy
**Setup time:** Completed
**Customization time:** 5 minutes
**Deploy time:** 1-5 minutes (depending on host)

**Total time to live SEO:** 10 minutes
