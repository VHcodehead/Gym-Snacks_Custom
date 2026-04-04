import type { ShopifyProduct } from "@/lib/types";

interface ProductSchemaProps {
  product: ShopifyProduct;
}

export function ProductSchema({ product }: ProductSchemaProps) {
  const mainImage = product.images.edges[0]?.node;
  const availableVariant = product.variants.edges.find((v) => v.node.availableForSale);
  const price = availableVariant?.node.price || product.priceRange.minVariantPrice;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: `https://www.gymsnacksinc.com/products/${product.handle}`,
    image: product.images.edges.map((edge) => edge.node.url),
    brand: {
      "@type": "Brand",
      name: "GymSnacks",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: price.currencyCode,
      lowPrice: product.priceRange.minVariantPrice.amount,
      highPrice: product.variants.edges.length > 0
        ? Math.max(...product.variants.edges.map((v) => parseFloat(v.node.price.amount)))
        : product.priceRange.minVariantPrice.amount,
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
