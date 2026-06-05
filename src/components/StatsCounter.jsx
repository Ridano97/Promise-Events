"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 100,
    label: ["Demande", "en mariage"],
  },
  {
    value: 500,
    label: ["Événements", "organisés"],
  },
  {
    value: 200,
    label: ["Créations", "florales"],
  },
];

function AnimatedNumber({ target, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frame = 0;
    const duration = 1750;
    const startedAt = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [start, target]);

  return <span>{value}</span>;
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    let countTimer = 0;
    let frame = 0;

    const openSection = () => {
      setIsOpen(true);
      countTimer = window.setTimeout(() => setStartCount(true), 760);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkPosition);
      if (frame) window.cancelAnimationFrame(frame);
    };

    const checkPosition = () => {
      const rect = section.getBoundingClientRect();
      const shouldOpen = rect.top < window.innerHeight * 0.78 && rect.bottom > window.innerHeight * 0.12;
      if (shouldOpen) openSection();
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(checkPosition);
    };

    checkPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkPosition);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkPosition);
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(countTimer);
    };
  }, []);

  return (
    <section className={isOpen ? "stats-counter is-open" : "stats-counter"} ref={sectionRef}>
      <div className="stats-counter__backdrop" aria-hidden="true" />

      <div className="stats-counter__content">
        <p className="stats-counter__brand">Promise Events</p>
        <p className="stats-counter__intro">C'est :</p>

        <div className="stats-counter__grid">
          {stats.map((stat, index) => (
            <article
              className="stats-counter__item"
              key={stat.value}
              style={{ "--counter-delay": `${160 + index * 140}ms` }}
            >
              <p className="stats-counter__number">
                + <AnimatedNumber start={startCount} target={stat.value} />
              </p>
              <p className="stats-counter__label">
                {stat.label.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
