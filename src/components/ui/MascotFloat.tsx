"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mascots = [
  { src: "/assets/mascot1.png", alt: "Cherry Mascot" },
  { src: "/assets/mascot2.png", alt: "Orange Mascot" },
  { src: "/assets/mascot3.png", alt: "Lemon Mascot" },
  { src: "/assets/mascot4.png", alt: "Peach Mascot" },
  { src: "/assets/mascot5.png", alt: "Watermelon Mascot" },
];

interface MascotFloatProps {
  index: number;
  className?: string;
  size?: number;
}

export function MascotFloat({ index, className = "", size = 100 }: MascotFloatProps) {
  const mascot = mascots[index % mascots.length];
  const duration = 4 + (index % 3) * 2;
  const delay = index * 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay, type: "spring", stiffness: 200 }}
      className={`pointer-events-none select-none ${className}`}
    >
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <Image
          src={mascot.src}
          alt={mascot.alt}
          width={size}
          height={size}
          className="drop-shadow-[4px_4px_0_rgba(26,26,26,0.2)]"
        />
      </motion.div>
    </motion.div>
  );
}
