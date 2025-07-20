"use client";

import { SkillsSection } from "@/components/sections/skills-section";
import { Dictionary, Language } from "@/types/definitions";

interface PortfolioClientProps {
  dict: Dictionary;
  lang: Language;
}

export function PortfolioClient({ dict, lang }: PortfolioClientProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {dict.hero.greeting} - {lang}
      <SkillsSection dict={dict} />
    </div>
  );
}
