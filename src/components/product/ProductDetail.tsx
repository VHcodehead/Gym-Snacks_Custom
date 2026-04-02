"use client";

import { motion } from "framer-motion";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductFeatures } from "./ProductFeatures";
import { PatternBackground } from "@/components/ui/PatternBackground";
import type { ShopifyProduct } from "@/lib/types";

interface ProductDetailProps {
  product: ShopifyProduct;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <>
      <section className="py-12 md:py-20 bg-brand-yellow-cream relative overflow-hidden">
        <PatternBackground density="light" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:sticky md:top-28"
            >
              <ProductGallery product={product} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductInfo product={product} />
            </motion.div>
          </div>
        </div>
      </section>

      <ProductFeatures />
    </>
  );
}
