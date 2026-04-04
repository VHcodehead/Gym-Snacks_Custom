"use client";

import { motion } from "framer-motion";

interface BurstBadgeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-20 h-20 sm:w-24 sm:h-24 text-[10px] sm:text-xs",
  md: "w-24 h-24 sm:w-32 sm:h-32 text-xs sm:text-sm",
  lg: "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 text-xs sm:text-sm md:text-base",
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
      whileHover={{
        scale: 1.25,
        rotate: [0, -8, 8, -4, 0],
        transition: { duration: 0.4, type: "spring", stiffness: 500 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`
        clip-burst bg-brand-pink cursor-pointer
        flex items-center justify-center text-center
        font-display text-white uppercase leading-tight
        drop-shadow-[3px_3px_0_rgba(26,26,26,0.8)]
        p-4 ${sizes[size]} ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  );
}
