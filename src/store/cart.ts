"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/lib/types";

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  checkout: () => Promise<void>;
  itemCount: () => number;
  total: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existing = state.items.find((i) => i.variantId === item.variantId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.variantId === item.variantId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },

      removeItem: (variantId) => {
        set((state) => ({
          items: state.items.filter((i) => i.variantId !== variantId),
        }));
      },

      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.variantId === variantId ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      checkout: async () => {
        const { items } = get();
        if (items.length === 0) return;

        const lineItems = items.map((item) => ({
          variantId: item.variantId,
          quantity: item.quantity,
        }));

        const mutation = `
          mutation {
            checkoutCreate(input: {
              lineItems: [${lineItems
                .map((item) => `{ variantId: "${item.variantId}", quantity: ${item.quantity} }`)
                .join(", ")}]
            }) {
              checkout {
                id
                webUrl
              }
              checkoutUserErrors {
                message
              }
            }
          }
        `;

        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mutation }),
        });

        const data = await response.json();
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else if (data.errors?.length) {
          alert("Checkout error: " + data.errors[0].message);
        }
      },

      itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: "gymsnacks-cart",
    }
  )
);
