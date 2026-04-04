"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function DosageSection() {
  return (
    <section className="py-20 bg-surface border-y-[5px] border-brand-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle accent="YOU">
          DOSED FOR PERFORMANCE. DESIGNED FOR
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Each serving is <strong className="text-brand-black">10 gummies</strong>, which
                means you control your dose:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <span className="text-2xl">🏃</span>
                  <p className="text-muted">
                    Doing a light pump or cardio day? Take{" "}
                    <strong className="text-brand-pink">5 gummies</strong>.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-2xl">🏋️</span>
                  <p className="text-muted">
                    Going heavy on legs or pushing PRs? Take the full{" "}
                    <strong className="text-brand-pink">10 gummies</strong> for maximum intensity.
                  </p>
                </li>
              </ul>
              <p className="text-brand-black font-semibold text-lg">
                No measuring. No scooping. No mess.
                <br />
                <span className="text-brand-pink">Just grab, chew, and go.</span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-brand-yellow p-4 sm:p-8 rounded-comic-xl border-[4px] border-brand-black shadow-comic-xl">
              {/* Gummy Visual */}
              <div className="space-y-4">
                {[
                  { label: "Light Session", count: 4, color: "bg-brand-yellow-dark" },
                  { label: "Power Day", count: 8, color: "bg-brand-pink" },
                  { label: "Max Intensity", count: 10, color: "bg-mascot-red" },
                ].map((level, i) => (
                  <motion.div
                    key={level.label}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
                  >
                    <p className="font-display text-sm text-brand-black mb-2">{level.label}</p>
                    <div className="flex gap-1 sm:gap-1.5 flex-wrap">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.2 + j * 0.05 }}
                          className={`
                            w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-brand-black
                            ${j < level.count ? level.color : "bg-white/50"}
                          `}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
