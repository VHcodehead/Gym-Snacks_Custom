"use client";

import { create } from "zustand";

interface UIStore {
  cartOpen: boolean;
  menuOpen: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  cartOpen: false,
  menuOpen: false,
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen, menuOpen: false })),
  openCart: () => set({ cartOpen: true, menuOpen: false }),
  closeCart: () => set({ cartOpen: false }),
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen, cartOpen: false })),
  closeMenu: () => set({ menuOpen: false }),
}));
