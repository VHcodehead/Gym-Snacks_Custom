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
        <SectionTitle accent="PRE-WORKOUT GUMMIES?">WHY GYMSNACKS</SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.85 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <motion.div
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="bg-surface p-8 rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg text-center h-full"
              >
                <motion.div
                  animate={{ rotate: [-8, 8, -8], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full ${feature.color} border-[3px] border-brand-black flex items-center justify-center text-3xl shadow-comic`}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
