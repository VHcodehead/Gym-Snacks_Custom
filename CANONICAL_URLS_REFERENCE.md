# Canonical URL Implementation Reference

## How Canonical URLs Work in This Setup

Canonical URLs are automatically handled in Next.js 14 App Router. Here's exactly how they're configured:

## Implementation Method

In Next.js 14, canonical URLs are set via the `alternates.canonical` property in the Metadata object.

### 1. Automatic via metadataBase (Homepage)
**File:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  // ... other metadata
  metadataBase: new URL("https://gymsnackinc.com"),
};
```

**Effect:** Adds this to `<head>` on the homepage:
```html
<link rel="canonical" href="https://gymsnackinc.com/" />
```

---

### 2. Homepage (Explicit)
**File:** `src/app/page.tsx`

Home page already has metadataBase from layout.tsx. No additional canonical needed because Next.js infers it automatically.

**Results in:**
```html
<link rel="canonical" href="https://gymsnackinc.com" />
```

---

### 3. Product Pages (Dynamic)
**File:** `src/app/products/[handle]/page.tsx`

```typescript
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;

  try {
    const product = await getProductByHandle(handle);

    if (!product) {
      return { /* ... */ };
    }

    return {
      title: `${product.title} | GymSnacks`,
      description: product.description || "...",
      openGraph: { /* ... */ },
      alternates: {
        canonical: `https://gymsnackinc.com/products/${handle}`,
      },
    };
  } catch (error) {
    // ...
  }
}
```

**Results in:**
```html
<link rel="canonical" href="https://gymsnackinc.com/products/pre-workout-gummies" />
```

**Dynamic:** The canonical URL is generated based on the actual product handle from Shopify.

---

### 4. About Page
**File:** `src/app/about/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "About Us | GymSnacks",
  description: "Learn about GymSnacks...",
  alternates: {
    canonical: "https://gymsnackinc.com/about",
  },
};
```

**Results in:**
```html
<link rel="canonical" href="https://gymsnackinc.com/about" />
```

---

## How to Verify Canonical URLs Are Working

### Method 1: View Page Source
1. Go to any page on your site
2. Right-click → View Page Source (or press Ctrl+U)
3. Search for "rel="canonical""
4. You should see:
```html
<link rel="canonical" href="https://gymsnackinc.com/..." />
```

### Method 2: Using curl (Command Line)
```bash
# Homepage
curl https://gymsnackinc.com | grep canonical

# Product page
curl https://gymsnackinc.com/products/pre-workout-gummies | grep canonical

# About page
curl https://gymsnackinc.com/about | grep canonical
```

### Method 3: Chrome DevTools
1. Open page in Chrome
2. Open DevTools (F12)
3. Go to Elements/Inspector
4. Find the `<link rel="canonical">` tag
5. Verify href value

### Method 4: Google Search Console
1. Go to Google Search Console
2. Select your property
3. Go to Settings → Coverage
4. Google will show detected canonical URLs

---

## Canonical URL Best Practices (All Implemented)

| Practice | How We Handle It | Where |
|---|---|---|
| One canonical per page | Metadata.alternates.canonical | layout.tsx + all pages |
| Full absolute URLs | Using full domain | All canonical definitions |
| Matches browser URL | Based on params/route | Dynamic pages |
| Points to self | Not to different versions | All pages |
| Consistent protocol (HTTPS) | All URLs use https:// | Entire setup |
| Matches rel="alternate" hreflang | No multi-language versions | N/A |

---

## Common Scenarios & How They're Handled

### Scenario 1: Product with Query Parameters
If someone visits:
```
https://gymsnackinc.com/products/pre-workout-gummies?color=grape&size=30ct
```

Canonical still points to:
```
https://gymsnackinc.com/products/pre-workout-gummies
```

**Why:** This prevents duplicate content issues when you have variants/filters.

---

### Scenario 2: Direct Traffic vs SEO Traffic
**Direct traffic:** Someone bookmarks `https://gymsnackinc.com/about`
**SEO traffic:** Google bot crawls and follows canonical to `https://gymsnackinc.com/about`

**Result:** Same canonical, no conflicts.

---

### Scenario 3: Shopify Handle Changes
If a product handle changes in Shopify:
1. Old URL becomes 404
2. New URL has new handle
3. Each has its own canonical
4. Add 301 redirect from old to new (optional, in next.config.ts if needed)

---

## If You Need to Add New Pages

### Pattern for New Static Pages:
```typescript
// Example: src/app/contact/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GymSnacks",
  description: "Get in touch with our team.",
  alternates: {
    canonical: "https://gymsnackinc.com/contact",
  },
};

export default function ContactPage() {
  return (
    // ... your content
  );
}
```

### Pattern for New Dynamic Pages:
```typescript
// Example: src/app/blog/[slug]/page.tsx

import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug); // Your function

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://gymsnackinc.com/blog/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  // ... your content
}
```

---

## HTML Output Reference

### Homepage
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="canonical" href="https://gymsnackinc.com/" />
  <!-- ... other meta tags -->
</head>
<body>
  <!-- content -->
</body>
</html>
```

### Product Page (Example: pre-workout-gummies)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Pre-Workout Gummies | GymSnacks</title>
  <meta name="description" content="..." />
  <link rel="canonical" href="https://gymsnackinc.com/products/pre-workout-gummies" />
  <!-- ... other meta tags -->
</head>
<body>
  <!-- content -->
</body>
</html>
```

### About Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="canonical" href="https://gymsnackinc.com/about" />
  <!-- ... other meta tags -->
</head>
<body>
  <!-- content -->
</body>
</html>
```

---

## Related to Canonical URLs

### sitemaps.xml (Auto-Generated)
Points to canonical URLs - located at:
```
https://gymsnackinc.com/sitemap.xml
```

### robots.txt (Auto-Generated)
References sitemap:
```
Sitemap: https://gymsnackinc.com/sitemap.xml
```

### OpenGraph Tags
Already configured alongside canonical URLs in metadata for social sharing.

---

## Troubleshooting

### Problem: Canonical URL Not Appearing
**Solution:**
1. Check you're using Metadata type from "next"
2. Verify alternates.canonical is set
3. Build and check in production (`npm run build && npm start`)
4. Try incognito mode (clear cache)

### Problem: Wrong Canonical URL
**Solution:**
1. Check the URL value in metadata definition
2. Ensure it matches the actual page route
3. For dynamic pages, check params are correct
4. Rebuild after changes

### Problem: Canonical Conflicts with hreflang
**Solution:**
Only relevant if you have multi-language versions. This site doesn't, so no issue.

---

## Summary Table: All Canonical URLs

| Page | Canonical URL | How Set | File |
|---|---|---|---|
| Home | https://gymsnackinc.com | metadataBase | layout.tsx |
| About | https://gymsnackinc.com/about | alternates.canonical | about/page.tsx |
| Products (dynamic) | https://gymsnackinc.com/products/{handle} | alternates.canonical | products/[handle]/page.tsx |

---

**Status:** Fully implemented and ready
**Testing:** Use methods above to verify
**Maintenance:** Automatically handles new products from Shopify
