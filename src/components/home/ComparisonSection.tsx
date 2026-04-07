"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const rows = [
  { label: "Caffeine",          gs: "250mg ✅",    energy: "80–100mg ❌", other: "~150mg ⚠️" },
  { label: "Betaine Glycerol",  gs: "3g ✅",       energy: "None ❌",     other: "Rarely ❌" },
  { label: "Real Carb Fuel",    gs: "✅",           energy: "❌",          other: "❌" },
  { label: "Tastes Like Candy", gs: "✅",           energy: "Mediocre ⚠️", other: "Medicinal ❌" },
  { label: "No Bloat",          gs: "✅",           energy: "⚠️",          other: "❌" },
  { label: "GMP Certified",     gs: "✅",           energy: "Unknown ❌",  other: "Varies ⚠️" },
  { label: "Prop Blends",       gs: "None ✅",      energy: "Common ❌",   other: "Common ❌" },
];

export function ComparisonSection() {
  return (
    <section className="py-20 bg-surface border-y-[5px] border-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle>
          OTHER GUMMIES GIVE YOU A SNACK.{" "}
          <span className="text-brand-pink">WE GIVE YOU A WEAPON.</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg"
        >
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-brand-black text-brand-yellow font-display text-left px-5 py-4 text-base tracking-wide" />
                <th className="bg-brand-pink text-white font-display px-5 py-4 text-base tracking-wide text-center">
                  GymSnacks
                </th>
                <th className="bg-brand-black text-white/70 font-display px-5 py-4 text-base tracking-wide text-center">
                  Energy Gummies
                </th>
                <th className="bg-brand-black text-white/70 font-display px-5 py-4 text-base tracking-wide text-center">
                  Other Pre-Workout Gummies
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-background" : "bg-surface"}
                >
                  <td className="font-display text-brand-black px-5 py-4 text-sm tracking-wider border-r-[3px] border-brand-black">
                    {row.label}
                  </td>
                  <td className="text-center px-5 py-4 font-bold text-green-700 bg-brand-yellow/20 border-r-[2px] border-brand-black/10">
                    {row.gs}
                  </td>
                  <td className="text-center px-5 py-4 font-semibold text-red-600 border-r-[2px] border-brand-black/10">
                    {row.energy}
                  </td>
                  <td className="text-center px-5 py-4 font-semibold text-red-600">
                    {row.other}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
