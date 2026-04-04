"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-brand-black border-t-[5px] border-brand-pink relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-center md:text-left"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="font-display text-4xl text-brand-yellow mb-2 cursor-default"
            >
              GYM<span className="text-brand-pink">SNACKS</span>
            </motion.h3>
            <p className="text-brand-yellow/60 font-medium">
              Fuel your fitness. One gummy at a time.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            {[
              { href: "/#shop", label: "SHOP" },
              { href: "/about", label: "ABOUT" },
              { href: "/#contact", label: "CONTACT" },
            ].map((link) => (
              <motion.div
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={link.href}
                  className="font-display text-lg text-white hover:text-brand-pink transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-pink rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} GymSnacks Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
