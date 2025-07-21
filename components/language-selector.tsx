"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDictionary } from "@/contexts/dictionary-context";
import { cn } from "@/lib/utils";
import { Check, Languages } from "lucide-react";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

const languages: Record<string, string> = { en: "English", pt: "Português" };

export function LanguageSelector({}) {
  const { lang: currentLanguage } = useDictionary();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLanguage: string) => {
    if (newLanguage === currentLanguage) return;
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "");
    const newPath = `/${newLanguage}${pathWithoutLang}`;
    router.push(newPath);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="absolute top-4 left-4 xl:top-6 xl:right-6 xl:left-auto z-50"
    >
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "h-auto rounded-md xl:rounded-full border dark:border-border/80 dark:bg-background/90 text-muted-foreground p-2",
              "backdrop-blur-xl shadow-2xl transition-all duration-300",
              "hover:bg-white/10 hover:text-white focus-visible:ring-white/50"
            )}
          >
            <Languages className="size-5" />
            <span className="sr-only">{languages[currentLanguage]}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className={cn(
            "min-w-[160px] rounded-xl border-border/50 bg-background/40 p-2",
            "backdrop-blur-xl shadow-2xl z-[60]"
          )}
          onCloseAutoFocus={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.stopPropagation()}
        >
          {Object.entries(languages).map(([code, lang]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm",
                "text-foreground transition-colors duration-200",
                "focus:bg-foreground/10 focus:text-foreground focus:outline-none",
                currentLanguage === code
                  ? "bg-foreground/5 font-medium text-foreground"
                  : "hover:bg-foreground/10 hover:text-foreground"
              )}
            >
              <span>{lang}</span>
              {currentLanguage === code && <Check className="size-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
