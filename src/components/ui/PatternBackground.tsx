"use client";

import { motion } from "framer-motion";
import { LightningBolt } from "@/components/svg/LightningBolt";
import { FourPointStar } from "@/components/svg/FourPointStar";
import { Dumbbell } from "@/components/svg/Dumbbell";
import { Kettlebell } from "@/components/svg/Kettlebell";

interface PatternBackgroundProps {
  className?: string;
  density?: "light" | "medium" | "heavy";
  color?: string;
}

export function PatternBackground({
  className = "",
  density = "medium",
  color = "text-brand-black/[0.06]",
}: PatternBackgroundProps) {
  const counts = { light: 12, medium: 20, heavy: 30 };
  const count = counts[density];

  const icons = [LightningBolt, FourPointStar, Dumbbell, Kettlebell];

  const elements = Array.from({ length: count }, (_, i) => {
    const Icon = icons[i % icons.length];
    const size = 12 + Math.random() * 20;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const rotate = Math.random() * 360;

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.05 }}
        className={`absolute ${color}`}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <Icon size={size} />
      </motion.div>
    );
  });

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {elements}
    </div>
  );
}
