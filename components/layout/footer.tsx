"use client";

import { GitHubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Dictionary, Language } from "@/types/definitions";
import { Check, Copy, Download, Mail } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  dict: Dictionary;
  lang: Language;
}

export function Footer({ dict, lang }: FooterProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  return (
    <footer id="contact" className="pt-16 pb-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-4xl font-bold">
            <span className="text-gradient-elegant">{dict.footer.title}</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{dict.footer.description}</p>
          <p className="text-muted-foreground sm:pb-2 flex flex-col items-center sm:flex-row justify-center gap-2">
            <span>Email: </span>
            <span className="flex items-center bg-secondary py-1 pl-3 pr-0 rounded-md">
              gabrielf_andrade_dev@outlook.com
              <Button size="icon" variant="ghost" onClick={() => copyToClipboard("gabrielf_andrade_dev@outlook.com")}>
                {copied ? <Check className="size-4 text-green-600" /> : <Copy className="size-4" />}
              </Button>
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-foreground text-background min-w-[192px]" asChild>
              <a href="mailto:gabrielf_andrade_dev@outlook.com">
                <Mail className="mr-2 size-5" />
                {dict.footer.buttons.sendMessage}
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="min-w-[192px]" asChild>
              <a href={lang === "en" ? "/Gabriel_Andrade_CV-EN.pdf" : "/Gabriel_Andrade_CV.pdf"}>
                <Download className="mr-2 size-5" />
                {dict.footer.buttons.downloadResume}
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/gabrielf-andrade" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="size-9" />
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-filipe-andrade-691226287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="size-9" />
            </a>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} | {dict.footer.copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
