"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";

export default function LuxuryEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const compactViewport = window.matchMedia("(max-width: 1024px)").matches;

    const lenis = new Lenis({
      duration: 1.18,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.84,
      touchMultiplier: 1.1,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const splitInstances = Array.from(document.querySelectorAll("[data-luxe-split]")).map((element) => {
      const split = new SplitType(element, { types: "words,chars" });
      gsap.fromTo(
        split.chars,
        { opacity: 0, yPercent: 84, rotateX: -62, filter: "blur(14px)" },
        {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.18,
          ease: "power4.out",
          stagger: 0.014,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
      return split;
    });

    gsap.utils.toArray("[data-gsap-float]").forEach((element, index) => {
      gsap.to(element, {
        y: index % 2 ? 34 : -28,
        rotate: index % 2 ? 2.6 : -2.2,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    });

    const heroCopy = document.querySelector("[data-proposal-hero-copy]");
    const heroMedia = document.querySelector("[data-proposal-hero-media]");
    if (heroCopy && heroMedia) {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTimeline
        .fromTo(
          heroCopy,
          { opacity: 0, x: compactViewport ? -24 : -54, y: compactViewport ? 26 : 0 },
          { opacity: 1, x: 0, y: 0, duration: 1.25 },
        )
        .fromTo(
          heroMedia,
          {
            opacity: 0,
            x: compactViewport ? 0 : 72,
            y: compactViewport ? 46 : 0,
            clipPath: compactViewport ? "inset(16% 0 0 0)" : "inset(0 0 0 24%)",
          },
          { opacity: 1, x: 0, y: 0, clipPath: "inset(0 0 0 0%)", duration: 1.45 },
          0.16,
        );
    }

    const proposalSceneGrid = document.querySelector("[data-proposal-scene-grid]");
    if (proposalSceneGrid) {
      const sceneItems = gsap.utils.toArray("[data-proposal-scene]");
      if (compactViewport) {
        sceneItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -34 : 34,
              y: 64,
              clipPath: "inset(14% 0 8% 0)",
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              clipPath: "inset(0% 0 0% 0)",
              duration: 1.05,
              ease: "power4.out",
              scrollTrigger: { trigger: item, start: "top 88%", once: true },
            },
          );
        });
      } else {
        gsap.fromTo(
          sceneItems,
          { opacity: 0, y: 90, clipPath: "inset(18% 0 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            duration: 1.15,
            stagger: 0.22,
            ease: "power4.out",
            scrollTrigger: { trigger: proposalSceneGrid, start: "top 78%", once: true },
          },
        );
      }
    }

    const proposalFilm = document.querySelector("[data-proposal-film]");
    if (proposalFilm) {
      gsap.fromTo(
        proposalFilm,
        { clipPath: "inset(0 48% 0 48%)", scale: 0.94 },
        {
          clipPath: "inset(0 0% 0 0%)",
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: proposalFilm,
            start: "top 86%",
            end: "top 30%",
            scrub: 1.1,
          },
        },
      );
    }

    const proposalBouquetGrid = document.querySelector("[data-proposal-bouquet-grid]");
    if (proposalBouquetGrid) {
      const bouquetItems = gsap.utils.toArray("[data-proposal-bouquet]");
      if (compactViewport) {
        bouquetItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -28 : 28,
              y: 68,
              rotateY: index % 2 === 0 ? -7 : 7,
              clipPath: "inset(0 0 16% 0)",
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.08,
              ease: "power4.out",
              scrollTrigger: { trigger: item, start: "top 88%", once: true },
            },
          );
        });
      } else {
        gsap.fromTo(
          bouquetItems,
          { opacity: 0, y: 82, rotateY: -8, clipPath: "inset(0 0 18% 0)" },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.15,
            stagger: 0.24,
            ease: "power4.out",
            scrollTrigger: { trigger: proposalBouquetGrid, start: "top 82%", once: true },
          },
        );
      }
    }

    const proposalPack = document.querySelector("[data-proposal-pack]");
    if (proposalPack) {
      gsap.fromTo(
        proposalPack,
        { clipPath: "inset(12% 0 12% 0)", opacity: 0.45 },
        {
          clipPath: "inset(0% 0 0% 0)",
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: proposalPack,
            start: "top 88%",
            end: "top 52%",
            scrub: 1,
          },
        },
      );

      const packItems = gsap.utils.toArray("[data-proposal-pack-item]");
      if (compactViewport) {
        packItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: index % 2 === 0 ? -26 : 26, y: 38 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 90%", once: true },
            },
          );
        });
      } else {
        gsap.fromTo(
          packItems,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: proposalPack, start: "top 68%", once: true },
          },
        );
      }
    }

    const onPointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    ScrollTrigger.refresh();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      splitInstances.forEach((split) => split.revert());
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
