"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/ui/ProductCard";
import { PatternBackground } from "@/components/ui/PatternBackground";
import type { ShopifyProduct } from "@/lib/types";

interface ProductGridProps {
  products: ShopifyProduct[];
}

const categories = [
  { key: "all", label: "ALL PRODUCTS" },
  { key: "supplements", label: "SUPPLEMENTS" },
  { key: "apparel", label: "APPAREL" },
];

const SUPPLEMENT_TYPES = ["food supplements"];
const SUPPLEMENT_KEYWORDS = ["gummy", "gummies", "pre-workout", "supplement", "protein", "creatine"];

const APPAREL_TYPES = ["hats", "tank top", "t-shirt", "hoodie", "long-sleeve", "all over prints", "kids clothes"];
const APPAREL_KEYWORDS = ["shirt", "hoodie", "tank", "hat", "cap", "apparel", "tee", "pullover", "baby"];

function filterProducts(products: ShopifyProduct[], category: string): ShopifyProduct[] {
  if (category === "all") return products;

  return products.filter((product) => {
    const title = product.title.toLowerCase();
    const productType = (product.productType || "").toLowerCase();

    if (category === "supplements") {
      return (
        SUPPLEMENT_TYPES.includes(productType) ||
        SUPPLEMENT_KEYWORDS.some((k) => title.includes(k))
      );
    }
    if (category === "apparel") {
      return (
        APPAREL_TYPES.includes(productType) ||
        APPAREL_KEYWORDS.some((k) => title.includes(k))
      );
    }
    return true;
  });
}

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = filterProducts(products, activeCategory);

  return (
    <section id="shop" className="py-20 bg-brand-yellow-cream relative overflow-hidden">
      <PatternBackground density="light" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle accent="PRODUCTS" subtitle="Scientifically formulated. Deliciously delivered.">
          PREMIUM
        </SectionTitle>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.key)}
              className={`
                px-8 py-3 font-display text-lg rounded-pill border-[3px] border-brand-black shadow-comic cursor-pointer transition-colors
                ${
                  activeCategory === cat.key
                    ? "bg-brand-pink text-white"
                    : "bg-surface text-muted hover:bg-brand-yellow"
                }
              `}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.length > 0 ? (
              filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="font-display text-2xl text-muted">
                  No products in this category yet.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
