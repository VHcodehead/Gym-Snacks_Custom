"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  accent?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, accent, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-black inline-block relative">
        {children}
        {accent && (
          <span className="text-brand-pink"> {accent}</span>
        )}
        <span className="absolute -bottom-3 left-[10%] right-[10%] h-2 bg-brand-yellow rounded-full border-2 border-brand-black" />
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted text-lg md:text-xl font-semibold mt-6"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
