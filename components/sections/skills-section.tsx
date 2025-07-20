"use client";

import { AWSIcon } from "@/components/icons/aws";
import { CloudflareIcon } from "@/components/icons/cloudflare";
import { DockerIcon } from "@/components/icons/docker";
import { ExpressIcon } from "@/components/icons/express";
import { GitHubIcon } from "@/components/icons/github";
import { HTMLIcon } from "@/components/icons/html";
import { JavascriptIcon } from "@/components/icons/javascript";
import { MongoIcon } from "@/components/icons/mongo";
import { MotionIcon } from "@/components/icons/motion";
import { NestIcon } from "@/components/icons/nest";
import { NextIcon } from "@/components/icons/next";
import { NodeIcon } from "@/components/icons/node";
import { NuxtIcon } from "@/components/icons/nuxt";
import { ReactIcon } from "@/components/icons/react";
import { ReactRouterIcon } from "@/components/icons/react-router";
import { SQLIcon } from "@/components/icons/sql";
import { TailwindIcon } from "@/components/icons/tailwind";
import { TypescriptIcon } from "@/components/icons/typescript";
import { VueIcon } from "@/components/icons/vue";
import { WordpressIcon } from "@/components/icons/wordpress";
import SectionShell from "@/components/section-shell";
import SkillCard from "@/components/skill-card";
import { Dictionary } from "@/types/definitions";
import { motion, stagger } from "motion/react";
import { ComponentType } from "react";

const iconsMap: Record<string, ComponentType<{ className?: string; fill?: string }>> = {
  HTML: HTMLIcon,
  React: ReactIcon,
  "Next.js": NextIcon,
  "React Router": ReactRouterIcon,
  "Vue.js": VueIcon,
  Nuxt: NuxtIcon,
  "Tailwind CSS": TailwindIcon,
  Motion: MotionIcon,
  Javascript: JavascriptIcon,
  TypeScript: TypescriptIcon,
  "Node.js": NodeIcon,
  Express: ExpressIcon,
  NestJS: NestIcon,
  WordPress: WordpressIcon,
  MongoDB: MongoIcon,
  SQL: SQLIcon,
  Cloudflare: CloudflareIcon,
  AWS: AWSIcon,
  Docker: DockerIcon,
  Git: GitHubIcon,
};

interface SkillsSectionProps {
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

export function SkillsSection({ dict }: SkillsSectionProps) {
  function renderIcon(iconName: string) {
    const IconComponent = iconsMap[iconName];
    if (!IconComponent) return null;

    const iconProps = {
      className: "size-8",
      ...(iconName === "Motion" && { fill: "#f7f7f7" }),
      ...(iconName === "Express" && { fill: "#f7f7f7" }),
    };

    return <IconComponent {...iconProps} />;
  }

  return (
    <SectionShell id="skills" title={dict.skills.title} subtitle={dict.skills.subtitle}>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center max-w-3xl gap-2 relative mx-auto"
      >
        {dict.skills.list.map((skill) => (
          <SkillCard key={skill.name} skill={skill} renderIcon={renderIcon} variants={staggerItem} />
        ))}
      </motion.div>
    </SectionShell>
  );
}
