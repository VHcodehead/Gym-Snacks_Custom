"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BurstBadge } from "@/components/ui/BurstBadge";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { CountUp } from "@/components/animation/CountUp";

const ingredients = [
  { amount: 250, unit: "mg", name: "Caffeine", desc: "Clean, sustained focus and energy", icon: "💥" },
  { amount: 3.2, unit: "g", name: "Beta-Alanine", desc: "Tingling endurance rush without nausea", icon: "🔥" },
  { amount: 1100, unit: "mg", name: "Glycerol", desc: "Skin-splitting pumps that count", icon: "💧" },
  { amount: 0, unit: "", name: "Fast Acting Carbs", desc: "Fuel your training naturally", icon: "🍭" },
];

export function SolutionSection() {
  return (
    <section className="py-20 bg-brand-yellow-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle accent="SOLUTION">THE GYMSNACKS</SectionTitle>

        <ScrollReveal>
          <p className="text-center text-xl text-muted font-medium mb-14 max-w-2xl mx-auto">
            We reinvented the pre-workout experience from the ground up — one gummy at a time.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {ingredients.map((ing, i) => (
            <ScrollReveal key={ing.name} delay={i * 0.15}>
              <div className="text-center">
                <BurstBadge size="lg" delay={0.3 + i * 0.15}>
                  {ing.amount > 0 ? (
                    <>
                      <CountUp end={ing.amount} suffix={ing.unit} className="text-lg" />
                      <br />
                      <span className="text-xs">{ing.name}</span>
                    </>
                  ) : (
                    <>
                      FAST
                      <br />
                      <span className="text-xs">{ing.name}</span>
                    </>
                  )}
                </BurstBadge>
                <p className="text-4xl mt-4 mb-2">{ing.icon}</p>
                <p className="text-sm text-muted font-medium">{ing.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <motion.div
            whileHover={{ y: -4, boxShadow: "12px 12px 0 #1A1A1A" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="max-w-2xl mx-auto text-center p-5 sm:p-8 bg-surface rounded-comic-xl border-[4px] border-brand-black shadow-comic-lg"
          >
            <p className="text-lg text-muted leading-relaxed">
              A delicious gummy that tastes like candy, hits like your favorite pre, and leaves you
              feeling <span className="text-brand-pink font-bold">incredible</span> — not wrecked.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
