export function useNavigation() {
  const handleNavClick = (_href: string, id: string, setActiveSection: (id: string) => void) => {
    setActiveSection(id);

    const isMobile = window.innerWidth < 1024;
    const scrollOffset = isMobile ? 10 : 80;

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "contact") {
      const footer = document.querySelector("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      } else {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const offsetTop = contactSection.offsetTop - scrollOffset;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - scrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    href: string,
    id: string,
    setActiveSection: (id: string) => void
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavClick(href, id, setActiveSection);
    }
  };

  return { handleNavClick, handleKeyDown };
}
