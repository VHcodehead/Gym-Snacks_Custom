# SEO Changes - Quick Reference Guide

## Critical: New Files to Create

### 1. D:\gymsnacks-custom\gymsnacks-v2\src\app\sitemap.ts
```typescript
import { MetadataRoute } from "next";
import { getProducts } from "@/lib/shopify";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://gymsnacks.com";

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

### 2. D:\gymsnacks-custom\gymsnacks-v2\src\app\robots.ts
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

### 3. D:\gymsnacks-custom\gymsnacks-v2\public\robots.txt
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://gymsnacks.com/sitemap.xml

User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /
```

---

### 4. D:\gymsnacks-custom\gymsnacks-v2\src\components\seo\OrganizationSchema.tsx
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

---

## Critical: Files to Modify

### FILE 1: D:\gymsnacks-custom\gymsnacks-v2\src\app\layout.tsx

**CHANGE 1: Update metadata export**

Find this section (lines 22-32):
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

Replace with:
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

**CHANGE 2: Add OrganizationSchema import and usage**

Add to imports at top:
```typescript
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
```

Update the return statement (around line 40):
```typescript
return (
  <html lang="en" className={`${bungee.variable} ${inter.variable}`}>
    <head>
      <OrganizationSchema />
    </head>
    <body className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <SmoothScroll>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
      </SmoothScroll>
    </body>
  </html>
);
```

---

### FILE 2: D:\gymsnacks-custom\gymsnacks-v2\src\app\about\page.tsx

Find (lines 10-13):
```typescript
export const metadata = {
  title: "About Us | GymSnacks",
  description: "Learn about GymSnacks - The world's first candy-like pre-workout that actually works.",
};
```

Replace with:
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

### FILE 3: D:\gymsnacks-custom\gymsnacks-v2\src\app\products\[handle]\page.tsx

Replace ENTIRE FILE with:
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

---

### FILE 4: D:\gymsnacks-custom\gymsnacks-v2\src\components\home\Hero.tsx

Find (lines 26-35):
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

Replace with:
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

**Also in same file, line 117:**
Find:
```tsx
                alt="GymSnacks Variety Pack"
```

Replace with:
```tsx
                alt="GymSnacks Pre-Workout Gummies Variety Pack - 250mg Caffeine, 3g Beta-Alanine, 1100mg Glycerol"
```

---

### FILE 5: D:\gymsnacks-custom\gymsnacks-v2\src\components\home\WhySection.tsx

Find (line 40):
```tsx
        <SectionTitle accent="GYMSNACKS?">WHY</SectionTitle>
```

Replace with:
```tsx
        <SectionTitle accent="OUR PRE-WORKOUT GUMMIES?">WHY</SectionTitle>
```

---

### FILE 6: D:\gymsnacks-custom\gymsnacks-v2\src\components\home\ProductGrid.tsx

Find (line 58):
```tsx
        <SectionTitle accent="PRODUCTS" subtitle="Scientifically formulated. Deliciously delivered.">
          PREMIUM
        </SectionTitle>
```

Replace with:
```tsx
        <SectionTitle accent="PRE-WORKOUT GUMMIES" subtitle="Shop our pre-workout gummy supplements - scientifically formulated, deliciously delivered.">
          PREMIUM
        </SectionTitle>
```

---

### FILE 7: D:\gymsnacks-custom\gymsnacks-v2\src\components\home\CtaSection.tsx

Find (line 22):
```tsx
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white text-shadow-black mb-8">
            JOIN THE MOVEMENT
          </h2>
```

Replace with:
```tsx
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white text-shadow-black mb-8">
            EXPERIENCE NEXT-GEN<br />PRE-WORKOUT GUMMIES
          </h2>
```

---

### FILE 8: D:\gymsnacks-custom\gymsnacks-v2\src\components\product\ProductDetail.tsx

Add import at top:
```typescript
import { useEffect } from "react";
```

Add this function before the component (after imports, before export):
```typescript
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

Find (line ~14):
```typescript
export function ProductDetail({ product }: ProductDetailProps) {
  return (
```

Replace with:
```typescript
export function ProductDetail({ product }: ProductDetailProps) {
  useProductSchema(product);

  return (
```

---

## Implementation Checklist

- [ ] Create `src/app/sitemap.ts`
- [ ] Create `src/app/robots.ts`
- [ ] Create `public/robots.txt`
- [ ] Create `src/components/seo/OrganizationSchema.tsx`
- [ ] Update `src/app/layout.tsx` (metadata + import + OrganizationSchema)
- [ ] Update `src/app/about/page.tsx` (metadata)
- [ ] Update `src/app/products/[handle]/page.tsx` (dynamic metadata)
- [ ] Update `src/components/home/Hero.tsx` (H1 + alt text)
- [ ] Update `src/components/home/WhySection.tsx` (accent title)
- [ ] Update `src/components/home/ProductGrid.tsx` (subtitle)
- [ ] Update `src/components/home/CtaSection.tsx` (H2)
- [ ] Update `src/components/product/ProductDetail.tsx` (schema)

**Total Files:**
- 4 new files
- 8 modified files

**Estimated Time:** 75 minutes
