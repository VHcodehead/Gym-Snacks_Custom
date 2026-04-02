"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { useUIStore } from "@/store/ui";
import type { ShopifyProduct } from "@/lib/types";

interface ProductCardProps {
  product: ShopifyProduct;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useUIStore((s) => s.openCart);

  const image = product.images.edges[0]?.node.url;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const variantId = product.variants.edges[0]?.node.id;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      variantId,
      title: product.title,
      price,
      image: image || "",
    });
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/products/${product.handle}`}>
        <motion.div
          whileHover={{ y: -8, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-surface rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg overflow-hidden cursor-pointer group"
        >
          {/* Image */}
          <div className="relative overflow-hidden border-b-[4px] border-brand-black bg-brand-yellow-cream">
            {image ? (
              <Image
                src={image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-72 flex items-center justify-center text-6xl">
                🍬
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-6">
            <h3 className="font-display text-xl text-brand-black mb-2 truncate">
              {product.title}
            </h3>
            <p className="text-muted text-sm line-clamp-2 mb-4">
              {product.description?.replace(/<[^>]*>/g, "").slice(0, 100)}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl text-brand-pink">
                ${price.toFixed(2)}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                className="px-5 py-2.5 bg-brand-pink text-white font-display text-sm rounded-pill border-[3px] border-brand-black shadow-comic cursor-pointer"
              >
                ADD TO CART
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
