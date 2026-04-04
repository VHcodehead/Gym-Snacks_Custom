import type { Metadata } from "next";
import { getProductByHandle, getProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/ProductDetail";
import { ProductSchema } from "@/components/product/ProductSchema";
import { BreadcrumbSchema } from "@/components/product/BreadcrumbSchema";

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

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;

  try {
    const product = await getProductByHandle(handle);

    if (!product) {
      return {
        title: "Product Not Found",
        description: "The product you are looking for does not exist.",
      };
    }

    return {
      title: `${product.title} | GymSnacks`,
      description: product.description || "Premium pre-workout gummy supplement by GymSnacks.",
      openGraph: {
        title: product.title,
        description: product.description,
        type: "website",
        images: product.images.edges.map((edge) => ({
          url: edge.node.url,
          alt: edge.node.altText || product.title,
        })),
      },
      alternates: {
        canonical: `https://www.gymsnacksinc.com/products/${handle}`,
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Product",
      description: "View our premium pre-workout gummies.",
    };
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

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema productTitle={product.title} productHandle={product.handle} />
      <ProductDetail product={product} />
    </>
  );
}
