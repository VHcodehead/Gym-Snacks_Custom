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
  title: "About Us | GymSnacks",
  description: "Learn about GymSnacks - The world's first candy-like pre-workout that actually works.",
  alternates: {
    canonical: "https://gymsnackinc.com/about",
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
