"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function QualitySection() {
  return (
    <section className="py-20 bg-brand-yellow-cream border-y-[5px] border-brand-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle accent="COMPROMISES">NO SHORTCUTS. NO</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-5">
              <p className="text-lg text-muted leading-relaxed">
                Most companies cut corners for taste or cost.
                <br />
                <strong className="text-brand-black">We refused to.</strong>
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Every batch of GymSnacks is formulated with clinically backed doses of real
                performance ingredients — the same standards trusted by serious athletes and
                supplement enthusiasts worldwide.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                You get the full effect of a top-tier pre-workout — without the artificial
                flavors, dyes, or filler.
              </p>
              <p className="text-xl text-brand-pink font-bold mt-6">
                Because we believe fun shouldn&apos;t mean fake, and flavor should never come at
                the expense of performance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64"
              >
                {/* Spinning badge */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-yellow via-brand-pink to-brand-yellow border-[5px] border-brand-black shadow-comic-xl" />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <p className="font-display text-lg sm:text-2xl md:text-3xl text-brand-black leading-tight">
                      CLINICALLY
                      <br />
                      DOSED
                      <br />
                      FORMULA
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
