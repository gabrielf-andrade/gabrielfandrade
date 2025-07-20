import SectionShell from "@/components/section-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dictionary } from "@/types/definitions";
import { Calendar, MapPin } from "lucide-react";
import { motion, stagger } from "motion/react";

interface EducationSectionProps {
  dict: Dictionary;
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      delayChildren: stagger(0.7),
    },
  },
};

export default function EducationSection({ dict }: EducationSectionProps) {
  return (
    <SectionShell id="education" title={dict.education.title} subtitle={dict.education.subtitle} className="max-w-5xl">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8"
      >
        {dict.education.items.map((item, index) => (
          <motion.div key={index} variants={index % 2 === 0 ? fadeInLeft : fadeInRight}>
            <Card key={item.degree} className="gap-2">
              <CardHeader>
                <CardTitle className="text-lg">{item.degree}</CardTitle>
                <CardDescription>{item.institution}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <div className="flex items-center text-muted-foreground text-sm gap-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                </div>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
