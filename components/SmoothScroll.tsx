"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Resume view stays native and immediate for quick reading.
    if (pathname === "/resume") return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      smoothWheel: true,
      syncTouch: false,
      respectReducedMotion: true,
    });

    // Intercept same-page anchors before Next's Link handler jumps to them.
    // Cross-page links retain Next's normal routing and scroll restoration.
    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
          event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.hasAttribute("download") ||
          (link.target && link.target !== "_self")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin ||
          url.pathname !== window.location.pathname ||
          url.search !== window.location.search || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      const header = document.querySelector<HTMLElement>(".site-header");
      lenis.scrollTo(target, { offset: -(header?.offsetHeight ?? 80) - 16 });
      if (window.location.hash !== url.hash) {
        window.history.pushState(window.history.state, "", url.href);
      }
      // Preserve keyboard focus behavior for the skip link.
      if (link.classList.contains("skip-link")) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    };

    document.addEventListener("click", onAnchorClick, true);
    return () => {
      document.removeEventListener("click", onAnchorClick, true);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
