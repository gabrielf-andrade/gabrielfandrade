import { GitHubIcon } from "@/components/icons/github";
import { LinkedinPlainIcon } from "@/components/icons/linkedin-plain";
import { Button } from "@/components/ui/button";
import { Dictionary, Language } from "@/types/definitions";
import { Download, Mail } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  dict: Dictionary;
  lang: Language;
}

export default function HeroContent({ dict, lang }: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8 mt-16 sm:mt-0"
    >
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center justify-center xl:justify-start gap-3"
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-muted-foreground" />
        <span className="text-muted-foreground text-sm uppercase tracking-wider">{dict.hero.greeting}</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl md:text-6xl font-bold tracking-tight mb-3 text-center xl:text-left"
      >
        <span className="text-gradient-elegant">{dict.hero.title}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-xl md:text-2xl text-gradient-elegant font-light leading-relaxed text-center xl:text-left"
      >
        {dict.hero.subtitle}
      </motion.p>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="space-y-4 flex items-center justify-center xl:justify-start"
      >
        <p className="text-base sm:text-lg text-gradient-elegant leading-relaxed max-w-xl whitespace-pre-line text-center xl:text-left">
          {dict.hero.description}
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex flex-wrap items-center justify-center xl:justify-start gap-4"
      >
        <Button size="lg" className="bg-foreground text-background" asChild>
          <a href="mailto:gabrielf_andrade_dev@outlook.com">
            <Mail className="mr-2 size-5" />
            {dict.hero.buttons.sendMessage}
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={lang === "en" ? "/Gabriel_Andrade_CV-EN.pdf" : "/Gabriel_Andrade_CV.pdf"}>
            <Download className="mr-2 size-4" />
            {dict.hero.buttons.downloadResume}
          </a>
        </Button>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex items-center justify-center xl:justify-start gap-6"
      >
        <span className="text-muted-foreground text-sm">{dict.hero.findMe}:</span>
        <div className="flex gap-6">
          <a href="https://github.com/gabrielf-andrade" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="size-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-filipe-andrade-691226287/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinPlainIcon fill="#f7f7f7" className="size-6" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
