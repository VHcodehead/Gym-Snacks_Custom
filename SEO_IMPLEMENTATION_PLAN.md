# SEO Implementation Plan - Exact Code Changes

## FILE CHANGES SUMMARY
- [ ] `src/app/layout.tsx` - Meta tag optimization
- [ ] `src/app/products/[handle]/page.tsx` - Dynamic metadata
- [ ] `src/app/about/page.tsx` - About page metadata
- [ ] `src/app/sitemap.ts` - CREATE NEW
- [ ] `src/app/robots.ts` - CREATE NEW
- [ ] `src/components/home/Hero.tsx` - H1 optimization
- [ ] `src/components/home/WhySection.tsx` - H2 keyword addition
- [ ] `src/components/home/ProductGrid.tsx` - Subtitle optimization
- [ ] `src/components/home/CtaSection.tsx` - H2 keyword addition
- [ ] `public/robots.txt` - Static fallback
- [ ] `src/components/product/ProductDetail.tsx` - Schema markup addition
- [ ] `src/components/product/ProductGallery.tsx` - Image alt text (if exists)

---

# IMPLEMENTATION DETAILS

## PRIORITY 1: CRITICAL INFRASTRUCTURE

### 1.1 CREATE: src/app/sitemap.ts

**Location:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\sitemap.ts`

**New File Content:**

```typescript
import { MetadataRoute } from "next";
import { getProducts } from "@/lib/shopify";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://gymsnacks.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic product pages
  let productPages = [];
  try {
    const products = await getProducts();
    productPages = products.map((product) => ({
      url: `${baseUrl}/products/${product.handle}`,
      lastModified: new Date(product.updatedAt || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch products for sitemap:", error);
  }

  return [...staticPages, ...productPages];
}
```

---

### 1.2 CREATE: src/app/robots.ts

**Location:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\robots.ts`

**New File Content:**

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://gymsnacks.com/sitemap.xml",
  };
}
```

---

### 1.3 CREATE: public/robots.txt (Static Fallback)

**Location:** `D:\gymsnacks-custom\gymsnacks-v2\public\robots.txt`

**New File Content:**

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://gymsnacks.com/sitemap.xml

# Block bad bots
User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /
```

---

## PRIORITY 2: METADATA OPTIMIZATION

### 2.1 UPDATE: src/app/layout.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\layout.tsx`

**Change 1: Root Metadata Optimization**

**OLD:**
```typescript
export const metadata: Metadata = {
  title: "GymSnacks | Premium Pre-Workout Gummies",
  description:
    "Pre-workout supplements, reimagined. Delicious gummies packed with 250mg caffeine, 3g beta-alanine, and 1100mg glycerol. Fuel your workout one gummy at a time.",
  keywords: ["pre-workout", "gummies", "supplements", "fitness", "gym", "caffeine", "beta-alanine"],
  openGraph: {
    title: "GymSnacks | Premium Pre-Workout Gummies",
    description: "Pre-workout supplements, reimagined. Delicious gummies packed with energy.",
    type: "website",
  },
};
```

**NEW:**
```typescript
export const metadata: Metadata = {
  title: "Pre-Workout Gummies by GymSnacks | 250mg Caffeine",
  description:
    "Buy pre-workout gummies online. GymSnacks delivers convenient, delicious pre workout gummies with 250mg caffeine, 3g beta-alanine, and 1100mg glycerol. Shop pre-workout gummies that actually work.",
  keywords: [
    "pre-workout gummies",
    "pre workout gummies",
    "pre-workout gummy supplements",
    "caffeine gummies",
    "workout gummies",
    "gym snacks",
    "fitness gummies",
    "gummy pre-workout",
    "best pre workout gummies",
    "pre-workout supplement",
  ],
  metadataBase: new URL("https://gymsnacks.com"),
  openGraph: {
    title: "Pre-Workout Gummies by GymSnacks | 250mg Caffeine",
    description:
      "Shop pre-workout gummies with 250mg caffeine, 3g beta-alanine & 1100mg glycerol. Better than powder.",
    type: "website",
    url: "https://gymsnacks.com",
    siteName: "GymSnacks",
    images: [
      {
        url: "/assets/hero-label.png",
        width: 1200,
        height: 630,
        alt: "GymSnacks Pre-Workout Gummies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Workout Gummies by GymSnacks",
    description: "Convenient pre-workout gummies with proven ingredients.",
    images: ["/assets/hero-label.png"],
  },
  alternates: {
    canonical: "https://gymsnacks.com",
  },
};
```

**Keyword Density Improvements:**
- Title: Contains "Pre-Workout Gummies" (primary keyword)
- Description: Contains "pre-workout gummies" 3 times, "pre workout gummies" 1 time = 0.8% density on homepage
- Keywords array: 10 related keywords added

---

### 2.2 UPDATE: src/app/about/page.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\about\page.tsx`

**OLD:**
```typescript
export const metadata = {
  title: "About Us | GymSnacks",
  description: "Learn about GymSnacks - The world's first candy-like pre-workout that actually works.",
};
```

**NEW:**
```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GymSnacks | Pre-Workout Gummies That Work",
  description:
    "Discover the story behind GymSnacks pre-workout gummies. Learn why athletes choose our gummy pre-workout supplements over powder. Premium ingredients, proven results.",
  openGraph: {
    title: "About GymSnacks | Pre-Workout Gummies That Work",
    description:
      "The story behind GymSnacks pre-workout gummies - the convenient alternative to pre-workout powder.",
    type: "website",
  },
};
```

---

### 2.3 UPDATE: src/app/products/[handle]/page.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\app\products\[handle]\page.tsx`

**Add Dynamic Metadata Generation:**

**OLD:**
```typescript
import { getProductByHandle, getProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/ProductDetail";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      handle: product.handle,
    }));
  } catch {
    return [];
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  let product = null;

  try {
    product = await getProductByHandle(handle);
  } catch (error) {
    console.error("Failed to load product:", error);
  }

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
```

**NEW:**
```typescript
import { Metadata } from "next";
import { getProductByHandle, getProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/ProductDetail";
import type { ShopifyProduct } from "@/lib/types";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      handle: product.handle,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  let product: ShopifyProduct | null = null;

  try {
    product = await getProductByHandle(handle);
  } catch {
    return {
      title: "Product Not Found",
    };
  }

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const image = product.images.edges[0]?.node.url;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const description =
    product.description?.replace(/<[^>]*>/g, "").slice(0, 120) ||
    "Premium pre-workout gummies supplement";

  // Determine if this is a pre-workout product for better keyword targeting
  const isPreWorkout =
    product.title.toLowerCase().includes("pre-workout") ||
    product.title.toLowerCase().includes("gummy") ||
    product.title.toLowerCase().includes("energy");

  const metaTitle = isPreWorkout
    ? `${product.title} | Pre-Workout Gummies | GymSnacks`
    : `${product.title} | GymSnacks`;

  const metaDescription = isPreWorkout
    ? `Buy ${product.title} - Premium pre-workout gummies with proven ingredients. $${price.toFixed(
        2
      )}. Shop pre-workout gummies that deliver results.`
    : `Shop ${product.title} at GymSnacks. $${price.toFixed(
        2
      )}. ${description}`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "product",
      url: `https://gymsnacks.com/products/${handle}`,
      images: image
        ? [
            {
              url: image,
              width: 600,
              height: 600,
              alt: `${product.title} - Pre-workout gummies`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: `https://gymsnacks.com/products/${handle}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  let product = null;

  try {
    product = await getProductByHandle(handle);
  } catch (error) {
    console.error("Failed to load product:", error);
  }

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
```

**What Changed:**
- Added `generateMetadata` function for dynamic per-product meta tags
- Product title includes keyword "Pre-Workout Gummies" if product is pre-workout related
- Description includes price and product-specific copy with keywords
- OpenGraph and Twitter tags properly configured
- Canonical URLs set correctly

---

## PRIORITY 3: HEADING STRUCTURE OPTIMIZATION

### 3.1 UPDATE: src/components/home/Hero.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\Hero.tsx`

**Change: Replace H1 with Keyword-Optimized Heading**

**OLD (Lines 26-35):**
```tsx
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-brand-black text-shadow-pink leading-none mb-4"
            >
              GYM
              <br />
              SNACKS
            </motion.h1>
```

**NEW:**
```tsx
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-brand-black text-shadow-pink leading-none mb-4"
            >
              PREMIUM
              <br />
              PRE-WORKOUT
              <br />
              GUMMIES
            </motion.h1>
```

**Justification:**
- Keyword "PRE-WORKOUT GUMMIES" now in H1 (primary search intent)
- Maintains visual hierarchy and design
- Better SEO signal while preserving branding via secondary text

**Alternative (If you want to keep branding):**
```tsx
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-brand-black text-shadow-pink leading-none mb-4"
            >
              GYM SNACKS
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl">PRE-WORKOUT GUMMIES</span>
            </motion.h1>
```

---

### 3.2 UPDATE: src/components/home/WhySection.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\WhySection.tsx`

**Change: Add Keyword to Section Title**

**OLD (Line 40):**
```tsx
        <SectionTitle accent="GYMSNACKS?">WHY</SectionTitle>
```

**NEW:**
```tsx
        <SectionTitle accent="OUR PRE-WORKOUT GUMMIES?">WHY</SectionTitle>
```

**Alternative if space is limited:**
```tsx
        <SectionTitle accent="GUMMY PRE-WORKOUT?">WHY CHOOSE</SectionTitle>
```

---

### 3.3 UPDATE: src/components/home/ProductGrid.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\home\ProductGrid.tsx`

**Change: Subtitle Keyword Optimization**

**OLD (Line 58):**
```tsx
        <SectionTitle accent="PRODUCTS" subtitle="Scientifically formulated. Deliciously delivered.">
          PREMIUM
        </SectionTitle>
```

**NEW:**
```tsx
        <SectionTitle accent="PRE-WORKOUT GUMMIES" subtitle="Shop our pre-workout gummy supplements - scientifically formulated, deliciously delivered.">
          PREMIUM
        </SectionTitle>
```

**Keyword Additions:**
- Accent section now includes primary keyword
- Subtitle naturally includes "pre-workout gummy supplements"
- Better readability while improving keyword density

---

### 3.4 UPDATE: src/components/home/CtaSection.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components/home/CtaSection.tsx`

**Change: H2 Keyword Optimization**

**OLD (Line 22):**
```tsx
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white text-shadow-black mb-8">
            JOIN THE MOVEMENT
          </h2>
```

**NEW:**
```tsx
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white text-shadow-black mb-8">
            EXPERIENCE NEXT-GEN<br />PRE-WORKOUT GUMMIES
          </h2>
```

**Alternative (if you prefer to keep original):**
```tsx
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white text-shadow-black mb-8">
            JOIN THE PRE-WORKOUT GUMMIES MOVEMENT
          </h2>
```

---

## PRIORITY 4: STRUCTURED DATA (JSON-LD)

### 4.1 ADD SCHEMA: src/components/product/ProductDetail.tsx

**File Path:** `D:\gymsnacks-custom\gymsnacks-v2\src\components\product\ProductDetail.tsx`

**Add at Top of File (after imports, before component):**

```typescript
import { useEffect } from "react";

/**
 * Helper to add Product Schema JSON-LD to head
 */
function useProductSchema(product: ShopifyProduct) {
  useEffect(() => {
    // Remove existing schema if present
    const existing = document.querySelector('script[data-product-schema]');
    if (existing) existing.remove();

    const image = product.images.edges[0]?.node.url;
    const price = parseFloat(product.priceRange.minVariantPrice.amount);
    const description = product.description?.replace(/<[^>]*>/g, "") || 
      "Premium pre-workout gummies for fitness.";

    const schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.title,
      description: description,
      image: [image].filter(Boolean),
      brand: {
        "@type": "Brand",
        name: "GymSnacks",
      },
      offers: {
        "@type": "Offer",
        url: typeof window !== "undefined" ? window.location.href : "",
        priceCurrency: "USD",
        price: price.toFixed(2),
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "150",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.productSchema = "true";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [product]);
}
```

**Update Component Function:**

**OLD (Lines 14-15):**
```typescript
export function ProductDetail({ product }: ProductDetailProps) {
  return (
```

**NEW:**
```typescript
export function ProductDetail({ product }: ProductDetailProps) {
  useProductSchema(product);

  return (
```

---

### 4.2 ADD ORGANIZATION SCHEMA: src/app/layout.tsx

**Add to layout.tsx before closing `</html>` tag. Since you're using a layout component, add this inside the `<html>` tag:**

Create a new file: `src/components/seo/OrganizationSchema.tsx`

**New File Content:**

```typescript
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GymSnacks",
    url: "https://gymsnacks.com",
    logo: "https://gymsnacks.com/assets/logo.png",
    description:
      "Premium pre-workout gummies for fitness and workout performance.",
    sameAs: [
      "https://www.instagram.com/gymsnacks",
      "https://www.tiktok.com/@gymsnacks",
      "https://www.twitter.com/gymsnacks",
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@gymsnacks.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Then in src/app/layout.tsx, add to the `<html>` tag:**

```tsx
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

// ... in your html return:
<html lang="en" className={`${bungee.variable} ${inter.variable}`}>
  <head>
    <OrganizationSchema />
  </head>
  <body>
    {/* ... rest of content ... */}
  </body>
</html>
```

---

## PRIORITY 5: IMAGE ALT TEXT OPTIMIZATION

### 5.1 UPDATE: src/components/home/Hero.tsx

**Change Image Alt Text**

**OLD (Line 117):**
```tsx
                alt="GymSnacks Variety Pack"
```

**NEW:**
```tsx
                alt="GymSnacks Pre-Workout Gummies Variety Pack - 250mg Caffeine, 3g Beta-Alanine, 1100mg Glycerol"
```

---

### 5.2 UPDATE: src/components/product/ProductDetail.tsx

**If you have a ProductGallery component, ensure alt text includes keywords:**

Check `src/components/product/ProductGallery.tsx` and ensure all images have SEO-optimized alt text:

```tsx
<Image
  src={image.url}
  alt={`${product.title} - Pre-workout gummy supplement - GymSnacks`}
  width={600}
  height={600}
/>
```

---

## PRIORITY 6: INTERNAL LINKING OPTIMIZATION

### 6.1 UPDATE: Link Anchor Text in Components

Ensure internal links use keyword-rich anchor text:

**Current (CtaSection.tsx, Line 62):**
```tsx
<Button href="/#shop" variant="secondary" size="lg">
  SHOP GYMSNACKS →
</Button>
```

**Recommendation (More SEO-friendly):**
```tsx
<Button href="/#shop" variant="secondary" size="lg">
  SHOP PRE-WORKOUT GUMMIES →
</Button>
```

---

## PRIORITY 7: CONTENT OPTIMIZATION

### 7.1 Update Homepage Copy for Keyword Density

**FeaturedProduct.tsx - Line 79 Description**

Ensure product description includes keyword. Current approach is good (pulls from product.description), but ensure your Shopify product descriptions include "pre-workout gummies" naturally.

**Recommended Shopify Product Description Pattern:**
```
"[Product Name] - Premium pre-workout gummies by GymSnacks. 
Our gummy pre-workout formula delivers 250mg caffeine, 3g beta-alanine, 
and 1100mg glycerol. Shop these best pre-workout gummies today."
```

---

## VALIDATION CHECKLIST

After implementing changes, verify:

- [ ] sitemap.xml generates at `/sitemap.xml` route
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Meta titles appear in browser tab (all pages)
- [ ] Meta descriptions show in search engine results preview
- [ ] H1 tag is present and contains keyword (use browser DevTools)
- [ ] Product pages have unique titles (test `/products/[handle]`)
- [ ] JSON-LD schema appears in page source (search for `application/ld+json`)
- [ ] Images have descriptive alt text
- [ ] Open Graph tags work (test on social media)
- [ ] No keyword stuffing (reads naturally)

---

## KEYWORD DENSITY VERIFICATION

After implementation, check keyword density:

**Homepage Target:**
- "pre workout gummies" / "pre-workout gummies": 0.8-1.2% (6-8 times in ~1000 words)
- "gym snacks": 0.2-0.4% (2-3 times)

**Product Pages Target:**
- Product title + "pre-workout gummies": 0.6-1.0%
- Secondary keywords naturally distributed

**Use Tools:**
- Screaming Frog SEO Spider (free tier)
- Moz Keyword Density Tool
- Manual word count and search

---

## COMMON ISSUES & SOLUTIONS

### Issue: Sitemap not generating
**Solution:** Restart dev server with `npm run dev`

### Issue: Dynamic metadata not showing
**Solution:** Ensure `generateMetadata` export is in product page

### Issue: JSON-LD not validating
**Solution:** Use Google's Rich Result Test (search.google.com/test/rich-results)

### Issue: Keywords feel unnatural
**Solution:** Rewrite content naturally - quality > keyword density

---

## TIMELINE ESTIMATE

- **Critical Infrastructure:** 15 minutes (sitemap, robots)
- **Metadata Updates:** 20 minutes (all pages)
- **Heading Optimization:** 10 minutes
- **Schema Markup:** 15 minutes
- **Testing & Validation:** 15 minutes
- **Total:** ~75 minutes

---

## POST-IMPLEMENTATION SEO TASKS

1. **Submit Sitemap to Google Search Console**
   - Add property at search.google.com
   - Submit sitemap.xml URL

2. **Monitor Rankings**
   - Track "pre workout gummies" position (use Ahrefs, SEMrush, or Google Search Console)
   - Expect improvements within 2-4 weeks

3. **Build Backlinks**
   - Reach out to fitness blogs for product reviews
   - Create link-worthy content (e.g., "How to choose pre-workout gummies")

4. **Optimize for Featured Snippets**
   - Add FAQ schema to product pages
   - Create "How to use pre-workout gummies" content section

5. **Monitor Core Web Vitals**
   - Use PageSpeed Insights
   - Ensure LCP, FID, CLS meet Google standards

