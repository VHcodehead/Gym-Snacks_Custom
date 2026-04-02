"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PatternBackground } from "@/components/ui/PatternBackground";
import { MascotFloat } from "@/components/ui/MascotFloat";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function CtaSection() {
  return (
    <section className="py-24 bg-brand-pink relative overflow-hidden">
      <PatternBackground density="medium" color="text-white/[0.08]" />

      {/* Mascots */}
      <div className="hidden lg:block">
        <MascotFloat index={2} size={80} className="absolute top-10 left-[5%]" />
        <MascotFloat index={4} size={70} className="absolute bottom-10 right-[5%]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white text-shadow-black mb-8">
            JOIN THE MOVEMENT
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/90 text-xl font-semibold mb-8">
            Thousands are already making the switch from powder to gummy.
          </p>
        </ScrollReveal>

        {/* Benefit Pills */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["No Shaker.", "No Crash.", "No Compromise."].map((text) => (
              <motion.span
                key={text}
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="px-6 py-3 bg-brand-yellow text-brand-black font-display text-lg rounded-pill border-[3px] border-brand-black shadow-comic"
              >
                {text}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-white/80 text-lg mb-10">
            Just pure performance, one bite at a time.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="relative inline-block">
            {/* Energy pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-pill bg-brand-yellow/30 -m-2 pointer-events-none"
            />
            <Button href="/#shop" variant="secondary" size="lg">
              SHOP GYMSNACKS →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
