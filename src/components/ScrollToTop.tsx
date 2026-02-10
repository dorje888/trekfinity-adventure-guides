import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Global scroll restoration handler.
 * - Forces manual scroll restoration so browsers don't keep previous scroll.
 * - Scrolls to top on every route change.
 * - If a hash is present, attempts to scroll that element into view.
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  // Ensure browser doesn't auto-restore previous scroll position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration; // keep original type
      window.history.scrollRestoration = "manual";
      return () => {
        // Restore previous behavior if this component ever unmounts
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  // On route change, scroll to top (or to the hash target)
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a frame so the target is in the DOM
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ block: "start", behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, search, hash]);

  return null;
}
