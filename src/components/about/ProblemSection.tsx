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
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.08, rotate: -2, y: -4 }}
                className="bg-brand-black/5 p-6 sm:p-8 rounded-comic-lg border-[3px] border-brand-black/20 text-center w-full sm:w-auto"
              >
                <p className="font-display text-lg text-muted mb-3">BEFORE</p>
                <motion.p
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl sm:text-5xl mb-3"
                >
                  😖
                </motion.p>
                <p className="text-sm text-muted">Messy powders, bad taste</p>
              </motion.div>

              <motion.span
                animate={{ x: [-4, 4, -4], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-display text-3xl text-brand-pink rotate-90 sm:rotate-0"
              >
                →
              </motion.span>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                whileHover={{ scale: 1.08, rotate: 2, y: -4 }}
                className="bg-brand-yellow p-6 sm:p-8 rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg text-center w-full sm:w-auto"
              >
                <p className="font-display text-lg text-brand-black mb-3">AFTER</p>
                <motion.p
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl sm:text-5xl mb-3"
                >
                  😄
                </motion.p>
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
