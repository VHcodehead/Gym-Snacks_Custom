"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cart";
import { useUIStore } from "@/store/ui";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cartOpen = useUIStore((s) => s.cartOpen);
  const toggleCart = useUIStore((s) => s.toggleCart);
  const menuOpen = useUIStore((s) => s.menuOpen);
  const toggleMenu = useUIStore((s) => s.toggleMenu);
  const closeMenu = useUIStore((s) => s.closeMenu);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <AnnouncementBar />

      <nav
        className={`fixed top-8 left-0 right-0 z-50 border-b-[3px] border-brand-black transition-all duration-500 ${
          scrolled
            ? "bg-transparent backdrop-blur-sm border-b-white/10"
            : "bg-brand-yellow"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10" onClick={closeMenu}>
              <Image
                src="/assets/logo-full.png"
                alt="GymSnacks"
                width={160}
                height={50}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#shop"
                className="font-display text-lg text-brand-black hover:text-brand-pink transition-colors relative group"
              >
                SHOP
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-brand-pink rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/about"
                className="font-display text-lg text-brand-black hover:text-brand-pink transition-colors relative group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-brand-pink rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleCart}
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-pink text-white font-display text-base rounded-pill border-[3px] border-brand-black shadow-comic cursor-pointer"
              >
                <span className="text-xl">🛒</span>
                <CartCount />
              </motion.button>
            </div>

            {/* Mobile: Cart + Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleCart}
                className="flex items-center gap-1.5 px-3 py-2 bg-brand-pink text-white font-display text-sm rounded-pill border-2 border-brand-black shadow-comic cursor-pointer"
              >
                <span>🛒</span>
                <CartCount />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-brand-black rounded-xl cursor-pointer"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-brand-yellow block"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-brand-yellow block"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-brand-yellow block"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-yellow flex flex-col items-center justify-center gap-8"
          >
            {[
              { href: "/#shop", label: "SHOP" },
              { href: "/about", label: "ABOUT" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="font-display text-5xl text-brand-black hover:text-brand-pink transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      {/* Spacer: announcement bar (h-8) + nav (h-14/h-16/h-20) */}
      <div className="h-22 sm:h-24 md:h-28" />
    </>
  );
}

const announcements = [
  "⚡ FREE SHIPPING OVER $99",
  "🔥 NEW FORMULA DROPPING SOON",
  "💪 250MG CAFFEINE PER SERVING",
  "🍬 PRE-WORKOUT GUMMIES THAT ACTUALLY TASTE GOOD",
];

function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-brand-pink border-b-[2px] border-brand-black h-8 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="font-display text-xs sm:text-sm text-white tracking-wide px-4 text-center"
        >
          {announcements[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function CartCount() {
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount);

  useEffect(() => setMounted(true), []);
  const count = mounted ? itemCount() : 0;

  return (
    <motion.span
      key={count}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      className="bg-brand-black text-brand-yellow w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-brand-yellow"
    >
      {count}
    </motion.span>
  );
}
