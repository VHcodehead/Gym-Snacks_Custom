"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PatternBackground } from "@/components/ui/PatternBackground";

export function MissionSection() {
  return (
    <section className="py-20 bg-brand-black relative overflow-hidden">
      <PatternBackground density="medium" color="text-white/[0.04]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-brand-yellow text-center mb-12">
            WHY WE <span className="text-brand-pink">MADE IT</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {[
            "We didn't create GymSnacks just to make something new. We made it to fix something broken.",
            "For too long, supplements were intimidating, messy, and unpleasant. Fitness should feel empowering, not complicated.",
            "So we combined the science of elite performance with the simplicity of a snack — to help people enjoy training again, fuel smarter, and feel good doing it.",
          ].map((text, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed text-center">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 p-8 bg-brand-yellow/10 rounded-comic-xl border-[3px] border-brand-yellow/30 text-center"
          >
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Because when something tastes this good and performs this well, it stops feeling like
              a supplement...
              <br />
              <span className="text-brand-pink font-display text-2xl md:text-3xl mt-2 block">
                and starts feeling like motivation in a bag.
              </span>
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
