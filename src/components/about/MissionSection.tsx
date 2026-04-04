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
            whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.6)" }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.3 }}
            className="mt-12 p-8 bg-brand-yellow/10 rounded-comic-xl border-[3px] border-brand-yellow/30 text-center relative overflow-hidden"
          >
            {/* Subtle animated glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1),transparent_70%)] pointer-events-none"
            />
            <p className="text-xl md:text-2xl text-white leading-relaxed relative z-10">
              Because when something tastes this good and performs this well, it stops feeling like
              a supplement...
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="text-brand-pink font-display text-2xl md:text-3xl mt-2 block"
              >
                and starts feeling like motivation in a bag.
              </motion.span>
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
