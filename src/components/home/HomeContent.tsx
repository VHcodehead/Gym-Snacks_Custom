"use client";

import { FeaturedProduct } from "./FeaturedProduct";
import { ProductGrid } from "./ProductGrid";
import { TrustBar } from "./TrustBar";
import { FormulaSection } from "./FormulaSection";
import { ComparisonSection } from "./ComparisonSection";
import { ReviewsSection } from "./ReviewsSection";
import { CtaSection } from "./CtaSection";
import type { ShopifyProduct } from "@/lib/types";

interface HomeContentProps {
  products: ShopifyProduct[];
  featuredProduct: ShopifyProduct | null;
}

export function HomeContent({ products, featuredProduct }: HomeContentProps) {
  return (
    <>
      <TrustBar />
      {featuredProduct && <FeaturedProduct product={featuredProduct} />}
      <ProductGrid products={products} />
      <FormulaSection />
      <ComparisonSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
