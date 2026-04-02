"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { MascotFloat } from "@/components/ui/MascotFloat";

const paragraphs = [
  "We were tired of choking down chalky powders that tasted like chemicals and hit like a freight train, only to crash halfway through our workout.",
  "We were tired of the upset stomachs, the jittery energy, and the bloated feeling that made training uncomfortable.",
  null, // highlight
  "We created GymSnacks — the first pre-workout gummy that actually tastes like candy but performs like a clinically dosed pre.",
  "Each gummy is packed with real ingredients proven to fuel your training — without the crash, nausea, or aftertaste.",
];

export function StorySection() {
  return (
    <section className="py-20 bg-brand-yellow-cream relative">
      <div className="max-w-3xl mx-auto px-6">
        {paragraphs.map((text, i) => {
          if (text === null) {
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-3xl md:text-4xl font-display text-brand-pink text-center my-12">
                  SO, WE DID SOMETHING ABOUT IT.
                </p>
              </ScrollReveal>
            );
          }

          const isEven = i % 2 === 0;
          return (
            <ScrollReveal key={i} direction={isEven ? "left" : "right"} delay={i * 0.1}>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 font-medium">
                {text.includes("GymSnacks") ? (
                  <>
                    {text.split("GymSnacks")[0]}
                    <strong className="text-brand-pink">GymSnacks</strong>
                    {text.split("GymSnacks")[1]}
                  </>
                ) : (
                  text
                )}
              </p>
            </ScrollReveal>
          );
        })}
      </div>

      <MascotFloat index={1} size={70} className="absolute top-20 right-[3%] hidden xl:block" />
    </section>
  );
}
