"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Languages } from "lucide-react";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

interface LanguageSelectorProps {
  currentLanguage: string;
}

const languages = { en: "English", pt: "Português" };

export function LanguageSelector({ currentLanguage }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLanguage: string) => {
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "");
    const newPath = `/${newLanguage}${pathWithoutLang}`;
    router.push(newPath);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 right-6 z-50"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Languages className="size-4 mr-2" />
            {languages[currentLanguage as keyof typeof languages]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {Object.entries(languages).map(([code, lang]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`cursor-pointer hover:bg-gray-700/50 focus:bg-gray-700/50 ${
                currentLanguage === code ? "bg-secondary" : ""
              }`}
            >
              {lang}
              {currentLanguage === code && <Check />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
