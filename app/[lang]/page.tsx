import EducationSection from "@/components/sections/education-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Separator } from "@/components/ui/separator";

export const runtime = "edge";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <EducationSection />
      <Separator className="max-w-7xl mx-auto" />
      <ProjectsSection />
      <Separator className="max-w-7xl mx-auto" />
      <SkillsSection />
    </div>
  );
}
