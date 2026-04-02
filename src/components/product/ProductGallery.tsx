"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ShopifyProduct } from "@/lib/types";

interface ProductGalleryProps {
  product: ShopifyProduct;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.images.edges.map((e) => e.node);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div>
      {/* Main Image */}
      <div className="relative bg-surface rounded-comic-xl border-[5px] border-brand-black shadow-comic-xl overflow-hidden mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {activeImage ? (
              <Image
                src={activeImage.url}
                alt={activeImage.altText || product.title}
                width={700}
                height={700}
                priority
                className="w-full h-auto aspect-square object-cover"
              />
            ) : (
              <div className="w-full aspect-square flex items-center justify-center bg-brand-yellow-cream text-8xl">
                🍬
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
              className={`
                w-20 h-20 rounded-comic border-[3px] overflow-hidden cursor-pointer transition-all
                ${
                  activeIndex === index
                    ? "border-brand-pink shadow-pink-glow"
                    : "border-brand-black/30 hover:border-brand-black"
                }
              `}
            >
              <Image
                src={img.url}
                alt={img.altText || `${product.title} ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
