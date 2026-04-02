"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { useUIStore } from "@/store/ui";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const cartOpen = useUIStore((s) => s.cartOpen);
  const closeCart = useUIStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = useCartStore((s) => s.total);
  const itemCount = useCartStore((s) => s.itemCount);
  const checkout = useCartStore((s) => s.checkout);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white border-l-[4px] border-brand-black z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-brand-yellow border-b-[3px] border-brand-black">
              <h3 className="font-display text-3xl text-brand-black">YOUR CART</h3>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                className="w-10 h-10 bg-brand-pink text-white rounded-full border-[3px] border-brand-black flex items-center justify-center font-bold text-xl cursor-pointer"
              >
                &times;
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-4xl mb-4">🛒</p>
                  <p className="text-muted font-medium">Your cart is empty</p>
                  <p className="text-subtle text-sm mt-2">
                    Add some gummies to get started!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.variantId}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 p-4 bg-brand-yellow-cream rounded-comic border-[3px] border-brand-black"
                    >
                      {item.image && (
                        <div className="w-20 h-20 rounded-xl border-2 border-brand-black overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate">
                          {item.title}
                        </h4>
                        <p className="font-display text-brand-pink text-lg">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() =>
                              updateQuantity(item.variantId, item.quantity - 1)
                            }
                            className="w-7 h-7 bg-brand-pink text-white rounded-lg border-2 border-brand-black text-sm font-bold cursor-pointer"
                          >
                            -
                          </motion.button>
                          <span className="font-bold text-sm w-4 text-center">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() =>
                              updateQuantity(item.variantId, item.quantity + 1)
                            }
                            className="w-7 h-7 bg-brand-pink text-white rounded-lg border-2 border-brand-black text-sm font-bold cursor-pointer"
                          >
                            +
                          </motion.button>
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => removeItem(item.variantId)}
                            className="ml-auto text-brand-pink hover:text-brand-pink-dark text-lg cursor-pointer"
                          >
                            🗑
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-brand-yellow-cream border-t-[3px] border-brand-black">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl">TOTAL</span>
                  <span className="font-display text-2xl text-brand-pink">
                    ${total().toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={checkout}
                  className="w-full py-4 bg-brand-pink text-white font-display text-xl rounded-pill border-[3px] border-brand-black shadow-comic-lg cursor-pointer"
                >
                  CHECKOUT
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
