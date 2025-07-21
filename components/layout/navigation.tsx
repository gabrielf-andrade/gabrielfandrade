"use client";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { useDictionary } from "@/contexts/dictionary-context";
import { useActiveSectionObserver } from "@/hooks/use-active-section-observer";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useNavigation } from "@/hooks/use-navigation";
import { useScrollDetection } from "@/hooks/use-scroll-detection";

export function Navigation({}) {
  const { dict } = useDictionary();
  const navigationItems = [
    { id: "home", label: dict.nav.home, href: "#home" },
    { id: "education", label: dict.nav.education, href: "#education" },
    { id: "projects", label: dict.nav.projects, href: "#projects" },
    { id: "skills", label: dict.nav.skills, href: "#skills" },
    { id: "contact", label: dict.nav.contact, href: "#contact" },
  ];

  const { activeSection, setActiveSection } = useActiveSectionObserver(
    navigationItems.map((item) => ({ id: item.id }))
  );
  const isScrolled = useScrollDetection();
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const { handleNavClick, handleKeyDown } = useNavigation();

  const onNavClick = (href: string, id: string) => {
    handleNavClick(href, id, setActiveSection);
    setIsMenuOpen(false);
  };

  const onKeyDown = (event: React.KeyboardEvent, href: string, id: string) => {
    handleKeyDown(event, href, id, setActiveSection);
  };

  return (
    <>
      <DesktopNavigation
        navigationItems={navigationItems}
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavClick={onNavClick}
        onKeyDown={onKeyDown}
      />

      <MobileNavigation
        navigationItems={navigationItems}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onNavClick={onNavClick}
        onKeyDown={onKeyDown}
      />
    </>
  );
}
