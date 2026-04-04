"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BurstBadge } from "@/components/ui/BurstBadge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { useCartStore } from "@/store/cart";
import { useUIStore } from "@/store/ui";
import type { ShopifyProduct } from "@/lib/types";

interface FeaturedProductProps {
  product: ShopifyProduct;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useUIStore((s) => s.openCart);

  const image = product.images.edges[0]?.node.url;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const variantId = product.variants.edges[0]?.node.id;

  const handleAddToCart = () => {
    addItem({
      variantId,
      title: product.title,
      price,
      image: image || "",
    });
    openCart();
  };

  return (
    <section className="py-20 bg-surface border-y-[5px] border-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle accent="PRE-WORKOUT GUMMIES">FEATURED</SectionTitle>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center bg-brand-yellow-cream p-8 md:p-12 rounded-comic-xl border-[5px] border-brand-black shadow-comic-xl">
            {/* Image */}
            <div className="relative">
              {image && (
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={image}
                    alt={product.title}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg"
                  />
                </motion.div>
              )}
              {/* Best Seller Badge */}
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4"
              >
                <BurstBadge size="sm">
                  BEST
                  <br />
                  SELLER
                </BurstBadge>
              </motion.div>
            </div>

            {/* Info */}
            <div>
              <h3 className="font-display text-4xl md:text-5xl text-brand-black mb-4">
                {product.title}
              </h3>
              <p className="text-muted mb-6 text-lg leading-relaxed">
                {product.description?.replace(/<[^>]*>/g, "").slice(0, 200) ||
                  "Premium pre-workout gummies designed to fuel your fitness journey."}
              </p>
              <p className="font-display text-5xl text-brand-pink mb-8">
                ${price.toFixed(2)}
              </p>

              {/* Ingredient Highlights */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "⚡ 250mg Caffeine",
                  "🔥 3.2g Beta-Alanine",
                  "💧 1g+ Glycerol",
                  "🍭 Delicious Flavors",
                ].map((highlight) => (
                  <span
                    key={highlight}
                    className="px-4 py-2 bg-brand-yellow font-bold text-sm rounded-pill border-[3px] border-brand-black shadow-comic"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleAddToCart} variant="primary" size="lg" className="flex-1">
                  ADD TO CART
                </Button>
                <Button href={`/products/${product.handle}`} variant="secondary" size="lg" className="flex-1">
                  VIEW DETAILS
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
