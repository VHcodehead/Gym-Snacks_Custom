"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const problems = [
  "Harsh chemical taste that ruins the experience",
  "Upset stomachs and bloating from heavy stimulants and dyes",
  "Energy spikes that fade fast, leaving you drained halfway through your set",
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-surface border-y-[5px] border-brand-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle accent="POWDER PRE-WORKOUTS">THE PROBLEM WITH</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem List */}
          <div className="space-y-6">
            {problems.map((problem, i) => (
              <ScrollReveal key={i} direction="left" delay={i * 0.15}>
                <div className="flex gap-4 items-start">
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    className="flex-shrink-0 w-10 h-10 bg-mascot-red text-white rounded-full border-[3px] border-brand-black flex items-center justify-center font-display text-lg"
                  >
                    ✕
                  </motion.span>
                  <p className="text-muted text-lg leading-relaxed pt-1">{problem}</p>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.5}>
              <p className="text-brand-black font-semibold text-lg mt-8 pl-14">
                Powder pre-workouts felt more like a chore than something to look forward to.
                <br />
                <span className="text-brand-pink font-bold">
                  That&apos;s not how fitness should feel.
                </span>
              </p>
            </ScrollReveal>
          </div>

          {/* Before/After */}
          <ScrollReveal direction="right">
            <div className="flex items-center gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-brand-black/5 p-8 rounded-comic-lg border-[3px] border-brand-black/20 text-center"
              >
                <p className="font-display text-lg text-muted mb-3">BEFORE</p>
                <p className="text-5xl mb-3">😖</p>
                <p className="text-sm text-muted">Messy powders, bad taste</p>
              </motion.div>

              <motion.span
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-display text-3xl text-brand-pink"
              >
                →
              </motion.span>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-brand-yellow p-8 rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg text-center"
              >
                <p className="font-display text-lg text-brand-black mb-3">AFTER</p>
                <p className="text-5xl mb-3">😄</p>
                <p className="text-sm text-brand-black/70 font-semibold">
                  Clean gummies, amazing flavor
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
