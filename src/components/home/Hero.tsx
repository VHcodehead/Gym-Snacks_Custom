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
        <MascotFloat index={0} size={90} className="absolute top-20 left-[5%] z-20" shadow="light" />
        <MascotFloat index={1} size={70} className="absolute bottom-32 left-[8%] z-20" shadow="light" />
        <MascotFloat index={3} size={80} className="absolute top-32 right-[3%] z-20" shadow="light" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span className="block font-display text-lg sm:text-xl text-brand-pink tracking-widest mb-2">
                GYMSNACKS
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-yellow text-shadow-pink leading-none mb-4">
                THE STRONGEST
                <br />
                GUMMY PRE-WORKOUT
                <span className="block text-white mt-1">
                  THAT ACTUALLY
                </span>
                <span className="block text-brand-pink">
                  TASTES LIKE CANDY.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-white/70 font-semibold mb-8 max-w-md"
            >
              The strongest pre-workout gummy ever made. Doesn&apos;t just power your workout — it fuels it.
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
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
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
            className="relative flex flex-col items-center"
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
                className="max-h-[45vh] sm:max-h-[55vh] lg:max-h-[65vh] w-auto object-contain drop-shadow-[0_20px_60px_rgba(255,20,147,0.4)] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Coming Soon callouts — right of bag on lg+, below bag on mobile */}
            <div className="
              flex flex-wrap justify-center gap-2 mt-4
              lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-24 lg:mt-0
              lg:flex-col lg:items-start
              z-30
            ">
              {["NEW FORMULA", "NEW LOOK", "BETTER TASTE"].map((text, i) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    delay: 1.4 + i * 0.2,
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.2, rotate: i % 2 === 0 ? -5 : 5 }}
                  className="px-3 py-1 sm:px-4 sm:py-1.5 bg-brand-yellow text-brand-black font-display text-xs sm:text-sm md:text-base rounded-pill border-[3px] border-brand-black shadow-comic cursor-default whitespace-nowrap"
                >
                  {text}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  delay: 2.0,
                  scale: { delay: 2.2, duration: 1.5, repeat: Infinity },
                }}
                className="px-4 py-1.5 sm:px-5 sm:py-2 bg-brand-pink text-white font-display text-sm sm:text-base md:text-lg rounded-pill border-[3px] border-brand-black shadow-comic-lg cursor-default whitespace-nowrap"
              >
                DROPPING SOON 🔥
              </motion.span>
            </div>

            {/* Extra mascot near product */}
            <MascotFloat
              index={4}
              size={70}
              className="absolute -top-8 -right-4 z-20"
              shadow="light"
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
