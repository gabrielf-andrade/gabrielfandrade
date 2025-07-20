import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionShellProps {
  children: React.ReactNode;
  id: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionShell({ children, id, title, subtitle, className }: SectionShellProps) {
  return (
    <section id={id} className={cn("py-16 px-4 max-w-7xl mx-auto", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gradient-elegant">{title}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      </motion.div>
      {children}
    </section>
  );
}
