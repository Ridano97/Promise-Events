"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Demande en mariage",
    text: "Décoration complète avec installation incluse, 100 % personnalisable selon vos envies, pour créer une ambiance romantique et inoubliable.",
    image: "/images/accueil2.jpg",
    alt: "Décor de demande en mariage avec bougies et fleurs blanches",
  },
  {
    number: "02",
    title: "Composition florale",
    text: "Créations florales sur mesure, du bouquet de demande à celui de la mariée, afin d'apporter une parfaite harmonie à chaque mise en scène.",
    image: "/images/bouquet4.png",
    alt: "Composition florale raffinée pour événement",
    position: "center center",
  },
  {
    number: "03",
    title: "Projet événementiel",
    text: "Mariages, décoration de chambre des mariés ou scénographies florales : chaque mise en scène est imaginée avec sensibilité et attention.",
    image: "/images/fete.png",
    alt: "Scénographie événementielle élégante",
  },
  {
    number: "04",
    title: "Location de matériel de décoration",
    text: "Arches, colonnes, bougeoirs, supports floraux et éléments de décor à louer pour composer une mise en scène élégante et cohérente.",
    image: "/images/decorationevenementiel.png",
    alt: "Matériel de décoration événementielle à louer",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualSelection, setIsManualSelection] = useState(false);
  const activeService = services[activeIndex];

  useEffect(() => {
    if (isPaused || isManualSelection) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isManualSelection, isPaused]);

  const selectService = (index) => {
    setActiveIndex(index);
    setIsManualSelection(true);
    setIsPaused(true);
  };

  const resumeAutoIfNeeded = () => {
    if (!isManualSelection) {
      setIsPaused(false);
    }
  };

  return (
    <section className="services section-shell" id="mariage">
      <div
        className="services-media"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={resumeAutoIfNeeded}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeService.image}
            src={activeService.image}
            alt={activeService.alt}
            initial={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.985, filter: "blur(10px)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{
              objectFit: activeService.fit || "cover",
              objectPosition: activeService.position || "center 52%",
              padding: activeService.padding || 0,
            }}
          />
        </AnimatePresence>
      </div>
      <div className="services-content">
        <p className="services-label" data-reveal>
          Nos services <span aria-hidden="true">*</span>
        </p>
        <div className="services-list">
          {services.map((service, index) => (
            <button
              type="button"
              className={`service-row ${activeIndex === index ? "is-selected" : ""}`}
              key={service.number}
              aria-pressed={activeIndex === index}
              onClick={() => selectService(index)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={resumeAutoIfNeeded}
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
