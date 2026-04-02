import type { ShopifyProduct } from "./types";

export function generateProductSchema(product: ShopifyProduct) {
  const availableVariant = product.variants.edges.find((v) => v.node.availableForSale);
  const price = availableVariant?.node.price || product.priceRange.minVariantPrice;
  const maxPrice = Math.max(
    ...product.variants.edges.map((v) => parseFloat(v.node.price.amount)),
    parseFloat(product.priceRange.minVariantPrice.amount)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: `https://gymsnackinc.com/products/${product.handle}`,
    image: product.images.edges.map((edge) => edge.node.url),
    brand: {
      "@type": "Brand",
      name: "GymSnacks",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: price.currencyCode,
      lowPrice: product.priceRange.minVariantPrice.amount,
      highPrice: maxPrice.toString(),
      offerCount: product.variants.edges.length,
      availability: availableVariant
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GymSnacks",
    url: "https://gymsnackinc.com",
    logo: "https://gymsnackinc.com/logo.png",
    description: "Premium pre-workout gummies with 250mg caffeine, 3g beta-alanine, and 1100mg glycerol",
    sameAs: [
      "https://www.instagram.com/gymsnacksinc",
      "https://www.tiktok.com/@gymsnacksinc",
      "https://www.facebook.com/gymsnacksinc",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "Customer Support",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GymSnacks",
    url: "https://gymsnackinc.com",
    description: "Premium pre-workout gummies",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://gymsnackinc.com/search?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  };
}
