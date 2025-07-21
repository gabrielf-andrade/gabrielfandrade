"use client";

import HeroContent from "@/components/hero/hero-content";
import HeroElements from "@/components/hero/hero-elements";
import ScrollIndicator from "@/components/hero/scroll-indicator";
import { LanguageSelector } from "@/components/language-selector";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "motion/react";

export default function HeroSection({}) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <ShootingStars />
      <StarsBackground />

      <LanguageSelector />

      <motion.div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center px-8">
          <HeroContent />
          <HeroElements />
        </div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}
