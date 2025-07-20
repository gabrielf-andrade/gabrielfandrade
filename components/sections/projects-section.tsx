import { GitHubIcon } from "@/components/icons/github";
import SectionShell from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dictionary } from "@/types/definitions";
import { ExternalLink } from "lucide-react";
import { motion, stagger } from "motion/react";

interface ProjectsSectionProps {
  dict: Dictionary;
}

const staggerContainer = {
  animate: {
    transition: {
      delayChildren: stagger(0.07),
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ProjectsSection({ dict }: ProjectsSectionProps) {
  return (
    <SectionShell id="projects" title={dict.projects.title} subtitle={dict.projects.subtitle}>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        {dict.projects.items.map((project) => (
          <motion.div key={project.id} variants={staggerItem} className="h-full">
            <Card className="gap-2 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="pb-1">{project.title}</CardTitle>
                <CardDescription className="pb-4">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <GitHubIcon className="mr-2 size-4" />
                    {dict.projects.buttons.code}
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 size-4" />
                    {dict.projects.buttons.liveDemo}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
