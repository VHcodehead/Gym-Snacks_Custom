"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "⚡",
    title: "Instant Energy Kick",
    description: "Fast-acting formula starts working within 15 minutes. No more waiting around!",
  },
  {
    icon: "🧠",
    title: "Laser Focus",
    description: "Nootropic blend keeps you locked in and motivated throughout your entire workout.",
  },
  {
    icon: "💪",
    title: "Enhanced Performance",
    description: "Scientifically proven ingredients to boost strength, endurance, and power output.",
  },
  {
    icon: "😋",
    title: "Delicious Taste",
    description: "No more choking down bitter powders. These gummies actually taste amazing!",
  },
];

export function ProductFeatures() {
  return (
    <section className="py-20 bg-surface border-t-[5px] border-brand-black">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>WHY YOU&apos;LL LOVE IT</SectionTitle>

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
