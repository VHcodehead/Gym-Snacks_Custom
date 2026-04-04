import { getProducts, getFeaturedProduct } from "@/lib/shopify";
import { Hero } from "@/components/home/Hero";
import { HomeContent } from "@/components/home/HomeContent";

export default async function HomePage() {
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  let featuredProduct: Awaited<ReturnType<typeof getFeaturedProduct>> = null;

  try {
    [products, featuredProduct] = await Promise.all([
      getProducts(),
      getFeaturedProduct(),
    ]);
  } catch (error) {
    console.error("Failed to load Shopify products:", error);
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GymSnacks",
    url: "https://www.gymsnacksinc.com",
    description: "Premium pre-workout gummies",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.gymsnacksinc.com/search?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        suppressHydrationWarning
      />
      <Hero />
      <HomeContent products={products} featuredProduct={featuredProduct} />
    </>
  );
}
