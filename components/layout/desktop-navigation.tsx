"use client";

import { cn } from "@/lib/utils";
import { NavigationItem } from "@/types/definitions";
import { motion, useScroll, useTransform } from "motion/react";
import type React from "react";

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
  activeSection: string;
  isScrolled: boolean;
  onNavClick: (href: string, id: string) => void;
  onKeyDown: (event: React.KeyboardEvent, href: string, id: string) => void;
}

export function DesktopNavigation({
  navigationItems,
  activeSection,
  isScrolled,
  onNavClick,
  onKeyDown,
}: DesktopNavigationProps) {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 24]);

  return (
    <motion.nav
      style={{
        backdropFilter: `blur(${navBlur}px)`,
      }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{ opacity: navOpacity }}
        className={cn(
          "bg-background/40 border border-border rounded-full px-6 py-3",
          "backdrop-blur-xl shadow-2xl",
          isScrolled && "bg-background/60 border-border/50"
        )}
      >
        <ul className="flex items-center space-x-6" role="menubar" aria-label="Main navigation">
          {navigationItems.map((item, index) => (
            <motion.li
              key={item.id}
              role="none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <button
                role="menuitem"
                tabIndex={0}
                onClick={() => onNavClick(item.href, item.id)}
                onKeyDown={(e) => onKeyDown(e, item.href, item.id)}
                className={cn(
                  "relative cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300",
                  "hover:text-foreground focus:text-foreground focus:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  "rounded-full",
                  activeSection === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-foreground/5 rounded-full border border-border"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
