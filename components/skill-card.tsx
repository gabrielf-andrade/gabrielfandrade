import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SkillCardProps {
  className?: string;

  skill: { name: string; category: string };
  delay: number;
  renderIcon: (iconName: string) => React.ReactNode;
}

export default function SkillCard({ className, delay, renderIcon, skill }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={cn(
        `h-32 w-32 rounded-md flex flex-col gap-2 items-center justify-center cursor-default bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      <div>{renderIcon(skill.name)}</div>
      <div>
        <p className="mt-2 text-center">{skill.name}</p>
        <p className="text-xs text-center text-muted-foreground">{skill.category}</p>
      </div>
    </motion.div>
  );
}
