import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Wouter keeps the same component instance mounted across route changes
 * (e.g. /services/a -> /services/b), so the browser doesn't reset scroll
 * position on its own like a full page navigation would. This forces every
 * route change back to the top of the page.
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // The site sets `html { scroll-behavior: smooth }` globally, which would
    // otherwise turn this into a slow animated scroll instead of an instant jump.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
