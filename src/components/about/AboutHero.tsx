"use client";

import { motion } from "framer-motion";
import { PatternBackground } from "@/components/ui/PatternBackground";
import { MascotFloat } from "@/components/ui/MascotFloat";

export function AboutHero() {
  return (
    <section className="relative py-32 md:py-40 bg-brand-yellow overflow-hidden">
      <PatternBackground density="heavy" />

      <div className="hidden lg:block">
        <MascotFloat index={0} size={100} className="absolute top-16 left-[6%]" />
        <MascotFloat index={3} size={80} className="absolute bottom-16 right-[6%]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black text-shadow-pink leading-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {["WHERE", "PERFORMANCE"].map((word) => (
            <motion.span
              key={word}
              className="inline-block mr-[0.3em]"
              variants={{
                hidden: { y: 80, opacity: 0, rotateX: -40 },
                visible: { y: 0, opacity: 1, rotateX: 0 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            className="inline-block mr-[0.3em]"
            variants={{
              hidden: { y: 80, opacity: 0, rotateX: -40 },
              visible: { y: 0, opacity: 1, rotateX: 0 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            MEETS
          </motion.span>
          <motion.span
            className="inline-block text-brand-pink"
            variants={{
              hidden: { y: 80, opacity: 0, scale: 0.5, rotateX: -40 },
              visible: { y: 0, opacity: 1, scale: 1, rotateX: 0 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            FLAVOR
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-brand-black/70 font-semibold"
        >
          The story behind the world&apos;s first truly enjoyable pre-workout.
        </motion.p>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 30C1200 20 1320 10 1380 15L1440 20V60H0V30Z"
            fill="var(--color-brand-yellow-cream)"
          />
        </svg>
      </div>
    </section>
  );
}
