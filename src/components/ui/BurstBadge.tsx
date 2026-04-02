"use client";

import { motion } from "framer-motion";

interface BurstBadgeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-24 h-24 text-xs",
  md: "w-32 h-32 text-sm",
  lg: "w-40 h-40 text-base",
};

export function BurstBadge({ children, className = "", delay = 0, size = "md" }: BurstBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay,
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`
        clip-burst bg-brand-pink
        flex items-center justify-center text-center
        font-display text-white uppercase leading-tight
        p-4 ${sizes[size]} ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  );
}
