"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/types/definitions";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import type React from "react";

interface MobileNavigationProps {
  navigationItems: NavigationItem[];
  activeSection: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavClick: (href: string, id: string) => void;
  onKeyDown: (event: React.KeyboardEvent, href: string, id: string) => void;
}

export function MobileNavigation({
  navigationItems,
  activeSection,
  isMenuOpen,
  onMenuToggle,
  onNavClick,
  onKeyDown,
}: MobileNavigationProps) {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  return (
    <motion.nav
      className="fixed top-4 right-0 z-[60] lg:hidden"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.div
        style={{ opacity: navOpacity }}
        className={cn(
          "bg-background/60 border border-border/80 border-r-0 rounded-l-md",
          "backdrop-blur-xl shadow-2xl",
          "relative z-[60]"
        )}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="text-foreground hover:bg-foreground/10 p-2 h-auto relative z-[60]"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[45]"
              onClick={onMenuToggle}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute top-12 right-0",
                "bg-background/90 border border-border/50 rounded-l-md",
                "backdrop-blur-xl shadow-2xl",
                "min-w-[200px] py-4 z-[50]"
              )}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <ul className="space-y-1" role="none">
                {navigationItems.map((item, index) => (
                  <li key={item.id} role="none">
                    <button
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => onNavClick(item.href, item.id)}
                      onKeyDown={(e) => onKeyDown(e, item.href, item.id)}
                      className={cn(
                        "cursor-pointer w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200",
                        "hover:bg-foreground/10 focus:bg-foreground/10 focus:outline-none",
                        "focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset",
                        activeSection === item.id
                          ? "text-foreground bg-foreground/5 border-r-2 border-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        className="inline-block"
                      >
                        {item.label}
                      </motion.span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
