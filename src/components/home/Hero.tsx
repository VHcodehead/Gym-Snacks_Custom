"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BurstBadge } from "@/components/ui/BurstBadge";
import { MascotFloat } from "@/components/ui/MascotFloat";
import { PatternBackground } from "@/components/ui/PatternBackground";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-brand-black overflow-hidden flex items-center">
      {/* Ambient gradient washes for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(255,20,147,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_30%,rgba(255,215,0,0.08),transparent_60%)]" />

      <PatternBackground density="heavy" color="text-white/[0.04]" />

      {/* Mascots */}
      <div className="hidden lg:block">
        <MascotFloat index={0} size={90} className="absolute top-20 left-[5%] z-20" />
        <MascotFloat index={1} size={70} className="absolute bottom-32 left-[8%] z-20" />
        <MascotFloat index={3} size={80} className="absolute top-32 right-[3%] z-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-brand-yellow text-shadow-pink leading-none mb-4"
            >
              GYM
              <br />
              SNACKS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-2xl md:text-3xl text-brand-pink mb-2"
            >
              PRE-WORKOUT GUMMIES
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/70 font-semibold mb-8 max-w-md"
            >
              Fuel your workout one gummy at a time. Delicious, effective, and
              actually fun to take.
            </motion.p>

            {/* Burst Badges */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
              }}
            >
              <BurstBadge size="sm" delay={0.7}>
                250MG
                <br />
                CAFFEINE
              </BurstBadge>
              <BurstBadge size="sm" delay={0.85}>
                3G BETA
                <br />
                ALANINE
              </BurstBadge>
              <BurstBadge size="sm" delay={1.0}>
                1100MG
                <br />
                GLYCEROL
              </BurstBadge>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/#shop" variant="primary" size="lg">
                SHOP NOW
              </Button>
              <Button href="/about" variant="dark" size="lg">
                LEARN MORE
              </Button>
            </motion.div>
          </div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.5,
            }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [-15, 15, -15],
                rotate: [-2, 2, -2],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Radial spotlight behind product */}
              <div className="absolute inset-0 -z-10 scale-150 bg-[radial-gradient(circle,rgba(255,20,147,0.4)_0%,rgba(255,20,147,0.12)_40%,transparent_65%)] blur-2xl" />

              {/* Outer glow ring for drama */}
              <div className="absolute inset-0 -z-20 scale-[2] rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_50%)]" />

              {/* Transparent bag floating freely */}
              <Image
                src="/assets/bag-float.png"
                alt="GymSnacks Pre-Workout Gummies Variety Pack"
                width={420}
                height={480}
                priority
                className="max-h-[65vh] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Extra mascot near product */}
            <MascotFloat
              index={4}
              size={70}
              className="absolute -bottom-4 -right-4 z-20"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave - transitions from dark hero to cream content area */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40L48 35C96 30 192 20 288 25C384 30 480 50 576 55C672 60 768 50 864 40C960 30 1056 20 1152 25C1248 30 1344 50 1392 55L1440 60V80H0V40Z"
            fill="var(--color-brand-yellow-cream)"
          />
        </svg>
      </div>
    </section>
  );
}
