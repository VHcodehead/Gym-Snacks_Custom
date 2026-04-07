"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "⚡",
    title: "250mg Caffeine — Highest in Any Gummy",
    description: "Supports sustained energy and focus from rep one to your last set. No crash — just clean, locked-in drive all workout long.",
  },
  {
    icon: "💧",
    title: "3g Betaine Glycerol — Clinical Dose Pump",
    description: "Supports skin-splitting pumps and intracellular hydration. Most gummies have zero. We give you a full clinical dose.",
  },
  {
    icon: "🔥",
    title: "Real Carbs — Synergistic Workout Fuel",
    description: "Glycerol pulls fast-absorbing carbs directly into muscle tissue. Supports endurance all the way through — you don't just start the workout, you fuel it.",
  },
  {
    icon: "🍬",
    title: "Tastes Like Actual Candy",
    description: "57 reviews. 5.0 stars. Customers say it's better than the candy they grew up on — zero chalky aftertaste, zero bloat, zero medicinal smell.",
  },
];

export function ProductFeatures() {
  return (
    <section className="py-20 bg-surface border-t-[5px] border-brand-black">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle accent="THE PROOF">THE FORMULA.</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <motion.div
                whileHover={{ x: 8, y: -4, boxShadow: "8px 8px 0 #1A1A1A" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex gap-5 p-6 bg-brand-yellow-cream rounded-comic-lg border-[3px] border-brand-black shadow-comic cursor-default"
              >
                <motion.span
                  animate={{ rotate: [-5, 5, -5], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl flex-shrink-0"
                >
                  {feature.icon}
                </motion.span>
                <div>
                  <h4 className="font-display text-lg text-brand-pink mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
