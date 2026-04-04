import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { ProblemSection } from "@/components/about/ProblemSection";
import { SolutionSection } from "@/components/about/SolutionSection";
import { DosageSection } from "@/components/about/DosageSection";
import { QualitySection } from "@/components/about/QualitySection";
import { MissionSection } from "@/components/about/MissionSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About GymSnacks | Pre-Workout Gummies That Taste Like Candy",
  description: "GymSnacks created the first pre-workout gummies that taste like candy but perform like a clinically dosed pre. 250mg caffeine, 3g beta-alanine, 1100mg glycerol — no powder, no shaker, no crash.",
  alternates: {
    canonical: "https://www.gymsnacksinc.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ProblemSection />
      <SolutionSection />
      <DosageSection />
      <QualitySection />
      <MissionSection />
      <CtaSection />
    </>
  );
}
