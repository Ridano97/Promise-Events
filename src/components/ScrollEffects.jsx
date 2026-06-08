"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

    const revealVisibleItems = () => {
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const shouldReveal = rect.top < window.innerHeight * 0.92 && rect.bottom > -120;
        if (shouldReveal) item.classList.add("is-visible");
      });
    };

    const revealHashTarget = () => {
      if (!window.location.hash) return;
      const target = document.querySelector(window.location.hash);
      if (!target) return;
      target.querySelectorAll("[data-reveal]").forEach((item) => item.classList.add("is-visible"));
      if (target.matches("[data-reveal]")) target.classList.add("is-visible");
    };

    if (!reduceMotion) {
      document.documentElement.classList.add("reveal-enabled");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
      );

      revealItems.forEach((item) => observer.observe(item));
      window.requestAnimationFrame(revealVisibleItems);
      window.requestAnimationFrame(revealHashTarget);

      let frame = 0;
      const updateScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
        revealVisibleItems();
        document.querySelectorAll("[data-parallax]").forEach((item) => {
          const speed = Number(item.getAttribute("data-parallax")) || 0.12;
          item.style.setProperty("--parallax-y", `${window.scrollY * speed * -0.12}px`);
        });
        frame = 0;
      };

      const onScroll = () => {
        if (!frame) frame = window.requestAnimationFrame(updateScroll);
      };

      updateScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", revealVisibleItems);
      const safetyTimer = window.setTimeout(() => {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }, 1400);

      window.addEventListener("hashchange", revealHashTarget);

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", revealVisibleItems);
        window.removeEventListener("hashchange", revealHashTarget);
        if (frame) window.cancelAnimationFrame(frame);
        window.clearTimeout(safetyTimer);
        document.documentElement.classList.remove("reveal-enabled");
      };
    }

    revealItems.forEach((item) => item.classList.add("is-visible"));
    return undefined;
  }, [pathname]);

  return null;
}
