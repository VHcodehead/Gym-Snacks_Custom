"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { LightningBolt } from "@/components/svg/LightningBolt";
import { FourPointStar } from "@/components/svg/FourPointStar";

const features = [
  {
    icon: "⚡",
    title: "Instant Energy",
    description: "Fast-acting formula kicks in within 15 minutes. No chalky powders or pills to swallow.",
    color: "bg-brand-yellow",
  },
  {
    icon: "🧠",
    title: "Enhanced Focus",
    description: "Caffeine and nootropics for laser-sharp mental clarity during your workout.",
    color: "bg-brand-pink-light",
  },
  {
    icon: "💪",
    title: "Peak Performance",
    description: "Premium ingredients proven to boost endurance, strength, and recovery.",
    color: "bg-brand-yellow-light",
  },
  {
    icon: "😋",
    title: "Tastes Amazing",
    description: "No more choking down bitter pre-workout. Enjoy delicious flavors you'll crave.",
    color: "bg-brand-pink",
  },
];

export function WhySection() {
  return (
    <section className="py-20 bg-surface border-y-[5px] border-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle accent="GYMSNACKS?">WHY</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-surface p-8 rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg text-center h-full"
              >
                <motion.div
                  animate={{ rotate: [-8, 8, -8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-5xl mb-6 block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-display text-xl text-brand-pink mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
