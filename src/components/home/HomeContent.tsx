"use client";

import { FeaturedProduct } from "./FeaturedProduct";
import { ProductGrid } from "./ProductGrid";
import { WhySection } from "./WhySection";
import { CtaSection } from "./CtaSection";
import type { ShopifyProduct } from "@/lib/types";

interface HomeContentProps {
  products: ShopifyProduct[];
  featuredProduct: ShopifyProduct | null;
}

export function HomeContent({ products, featuredProduct }: HomeContentProps) {
  return (
    <>
      {featuredProduct && <FeaturedProduct product={featuredProduct} />}
      <ProductGrid products={products} />
      <WhySection />
      <CtaSection />
    </>
  );
}
