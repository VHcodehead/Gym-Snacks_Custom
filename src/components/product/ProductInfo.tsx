"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BurstBadge } from "@/components/ui/BurstBadge";
import { useCartStore } from "@/store/cart";
import { useUIStore } from "@/store/ui";
import type { ShopifyProduct } from "@/lib/types";

interface ProductInfoProps {
  product: ShopifyProduct;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const variants = product.variants.edges.map((e) => e.node);
  const images = product.images.edges.map((e) => e.node);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((s) => s.addItem);
  const openCart = useUIStore((s) => s.openCart);
  const checkout = useCartStore((s) => s.checkout);

  const price = parseFloat(selectedVariant?.price?.amount || product.priceRange.minVariantPrice.amount);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        variantId: selectedVariant.id,
        title: product.title,
        price,
        image: images[0]?.url || "",
        variantTitle: selectedVariant.title,
      });
    }
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = async () => {
    handleAddToCart();
    await checkout();
  };

  return (
    <div>
      {/* Title */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-black mb-4">
        {product.title}
      </h1>

      {/* Price */}
      <p className="font-display text-3xl sm:text-4xl text-brand-pink mb-6">
        ${price.toFixed(2)}
      </p>

      {/* Badges */}
      <motion.div
        className="flex flex-wrap gap-3 mb-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        }}
      >
        {["⚡ Fast Acting", "🧠 Focus Boost", "💪 Peak Performance"].map((badge) => (
          <motion.span
            key={badge}
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            whileHover={{ scale: 1.1, rotate: -3, y: -2 }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-yellow font-bold text-xs sm:text-sm rounded-pill border-[3px] border-brand-black shadow-comic cursor-default"
          >
            {badge}
          </motion.span>
        ))}
      </motion.div>

      {/* Description */}
      <p className="text-muted leading-relaxed mb-8">
        {product.description?.replace(/<[^>]*>/g, "") ||
          "Premium pre-workout gummies designed to fuel your fitness journey."}
      </p>

      {/* Variant Selector */}
      {variants.length > 1 && (
        <div className="mb-8">
          <p className="font-display text-lg mb-3">SELECT OPTION:</p>
          <div className="flex flex-wrap gap-3">
            {variants.map((variant) => (
              <motion.button
                key={variant.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVariant(variant)}
                className={`
                  px-3 py-2 sm:px-5 sm:py-3 rounded-comic border-[3px] font-bold cursor-pointer transition-all
                  ${
                    selectedVariant?.id === variant.id
                      ? "border-brand-pink bg-brand-pink/10 shadow-pink-glow"
                      : "border-brand-black/30 bg-surface hover:border-brand-black"
                  }
                  ${!variant.availableForSale ? "opacity-40 cursor-not-allowed" : ""}
                `}
                disabled={!variant.availableForSale}
              >
                <span className="block text-sm">{variant.title}</span>
                <span className="block text-xs text-muted mt-1">
                  ${parseFloat(variant.price.amount).toFixed(2)}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mb-8">
        <p className="font-display text-lg mb-3">QUANTITY:</p>
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-12 h-12 bg-brand-pink text-white rounded-comic border-[3px] border-brand-black font-display text-xl cursor-pointer shadow-comic"
          >
            -
          </motion.button>
          <motion.span
            key={quantity}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="font-display text-2xl w-8 text-center"
          >
            {quantity}
          </motion.span>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setQuantity((q) => q + 1)}
            className="w-12 h-12 bg-brand-pink text-white rounded-comic border-[3px] border-brand-black font-display text-xl cursor-pointer shadow-comic"
          >
            +
          </motion.button>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.02, y: -3 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className={`
            w-full py-3 sm:py-4 font-display text-lg sm:text-xl rounded-pill border-[3px] border-brand-black shadow-comic-lg cursor-pointer transition-colors
            ${added ? "bg-mascot-green text-brand-black" : "bg-brand-pink text-white"}
          `}
        >
          {added ? "ADDED! ✓" : "ADD TO CART"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02, y: -3 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBuyNow}
          className="w-full py-3 sm:py-4 bg-brand-yellow text-brand-black font-display text-lg sm:text-xl rounded-pill border-[3px] border-brand-black shadow-comic-lg cursor-pointer"
        >
          BUY IT NOW
        </motion.button>
      </div>

      {/* Ingredient Bursts */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
        <BurstBadge size="sm" delay={0.3}>250MG<br />CAFFEINE</BurstBadge>
        <BurstBadge size="sm" delay={0.5}>3G BETA<br />ALANINE</BurstBadge>
        <BurstBadge size="sm" delay={0.7}>1100MG<br />GLYCEROL</BurstBadge>
      </div>
    </div>
  );
}
