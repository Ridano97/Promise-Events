"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";

export default function LuxuryEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);

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
  }, []);

  return null;
}
