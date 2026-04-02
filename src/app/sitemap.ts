import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/shopify";

const baseUrl = "https://gymsnackinc.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  try {
    const products = await getProducts();

    const productRoutes = products.map((product) => ({
      url: `${baseUrl}/products/${product.handle}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    routes.push(...productRoutes);
  } catch (error) {
    console.error("Failed to fetch products for sitemap:", error);
  }

  return routes;
}
