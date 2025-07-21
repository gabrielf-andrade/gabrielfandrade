"use client";
import { useEffect, useRef, useState } from "react";

interface NavigationItem {
  id: string;
}

export function useActiveSectionObserver(navigationItems: NavigationItem[]) {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const intersectingSectionsRef = useRef(new Set<string>());

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const isMobile = window.innerWidth < 1024;
    const topOffset = isMobile ? 100 : 150;

    const rootMargin = `-${topOffset}px 0px -45% 0px`;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingSectionsRef.current.add(entry.target.id);
        } else {
          intersectingSectionsRef.current.delete(entry.target.id);
        }
      });

      let currentActiveSection = "";
      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const id = navigationItems[i].id;
        if (intersectingSectionsRef.current.has(id)) {
          currentActiveSection = id;
          break;
        }
      }

      if (currentActiveSection) {
        setActiveSection(currentActiveSection);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, { rootMargin });
    const currentObserver = observerRef.current;

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      currentObserver.disconnect();
    };
  }, [navigationItems]);

  return { activeSection, setActiveSection };
}
