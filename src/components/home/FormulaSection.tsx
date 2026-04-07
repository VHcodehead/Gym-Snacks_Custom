"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ingredients = [
  {
    dose: "250mg",
    name: "Caffeine",
    description:
      "The highest caffeine dose in any gummy on the market. Supports sustained energy and razor focus from rep one to your last set. No crash — just clean drive.",
    legal: "Supports Energy & Focus",
    highlight: false,
  },
  {
    dose: "3g",
    name: "Betaine Glycerol",
    description:
      "Clinical-dose pump and hydration agent. Most gummies have zero. We give you a full 3 grams. Supports skin-splitting pumps and intracellular hydration.",
    legal: "Supports Pump & Hydration",
    highlight: true,
  },
  {
    dose: "Real",
    name: "Carb Fuel",
    description:
      "Fast-absorbing carbs work synergistically with glycerol — pulling fuel directly into muscle tissue. You don't just start the workout, you fuel it all the way through.",
    legal: "Supports Endurance & Performance",
    highlight: false,
  },
];

export function FormulaSection() {
  return (
    <section className="py-20 bg-background border-y-[5px] border-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          accent="ACTUALLY WORKS"
          subtitle="Full doses. Every ingredient labeled. No hiding behind proprietary blends."
        >
          WHY IT
        </SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {ingredients.map((ing, index) => (
            <motion.div
              key={ing.name}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.85 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`p-8 rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg h-full flex flex-col text-center ${
                  ing.highlight ? "bg-brand-yellow" : "bg-surface"
                }`}
              >
                <div className={`font-display text-6xl sm:text-7xl leading-none mb-1 ${ing.highlight ? "text-brand-black" : "text-brand-pink"}`}>
                  {ing.dose}
                </div>
                <div className="font-display text-xl tracking-widest text-brand-black mb-4 uppercase">
                  {ing.name}
                </div>
                <div className="w-12 h-1 bg-brand-black rounded-full mx-auto mb-4" />
                <p className={`text-sm leading-relaxed flex-1 mb-6 ${ing.highlight ? "text-brand-black" : "text-muted"}`}>
                  {ing.description}
                </p>
                <span className="inline-block px-4 py-1.5 bg-brand-pink text-white font-display text-xs tracking-widest rounded-pill border-[2px] border-brand-black shadow-comic">
                  {ing.legal}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {["⚗️ Lab Tested", "🏭 GMP Certified Facility", "✅ Full Label Transparency"].map((badge) => (
            <span
              key={badge}
              className="px-5 py-2 bg-surface border-[3px] border-brand-black rounded-pill shadow-comic font-semibold text-sm text-brand-black"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
