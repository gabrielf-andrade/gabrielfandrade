import HeroContent from "@/components/hero/hero-content";
import HeroElements from "@/components/hero/hero-elements";
import ScrollIndicator from "@/components/hero/scroll-indicator";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Dictionary, Language } from "@/types/definitions";
import { motion } from "motion/react";

interface HeroSectionProps {
  dict: Dictionary;
  lang: Language;
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <ShootingStars />
      <StarsBackground />

      {/* <LanguageSelector currentLanguage={lang} /> */}

      <motion.div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center px-8">
          <HeroContent dict={dict} lang={lang} />
          <HeroElements />
        </div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}
