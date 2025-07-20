"use client";

import EducationSection from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Separator } from "@/components/ui/separator";
import { Dictionary, Language } from "@/types/definitions";

interface PortfolioClientProps {
  dict: Dictionary;
  lang: Language;
}

export function PortfolioClient({ dict, lang }: PortfolioClientProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {dict.hero.greeting} - {lang}
      <EducationSection dict={dict} />
      <Separator className="max-w-7xl mx-auto" />
      <SkillsSection dict={dict} />
    </div>
  );
}
