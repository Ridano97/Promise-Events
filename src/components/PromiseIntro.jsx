"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const pages = [
  [
    {
      type: "image",
      src: "/images/apropos1.png",
      alt: "Décor événementiel blanc avec fleurs et assise",
      position: "center",
    },
    {
      type: "text",
      paragraphs: [
        "Promise Event, c'est ma promesse. Celle de transformer chaque événement en moment unique.",
        "Chez moi, tout a commencé par une passion : celle des fêtes réussies, des détails qui font la différence et des ambiances élégantes.",
      ],
    },
    {
      type: "image",
      src: "/images/bouquet2.png",
      alt: "Bouquet blanc avec perles",
      position: "center",
    },
    {
      type: "text",
      paragraphs: [
        "Je m'appelle Hanna je suis la créatrice de Promise Event. À travers chaque projet, mon objectif est de créer des instants uniques et harmonieux, pensés entièrement selon vos envies.",
        "Mariages, demandes en mariage, décoration de chambre des mariés ou scénographies florales : j'imagine chaque mise en scène avec sensibilité et attention.",
      ],
    },
  ],
  [
    {
      type: "image",
      src: "/images/bouquet6.JPG",
      alt: "Arche florale rouge au bord du lac",
      position: "center",
    },
    {
      type: "text",
      paragraphs: [
        "Spécialisée dans l'univers floral, je réalise des créations sur mesure afin d'apporter douceur, élégance et cohérence à chaque événement.",
        "Du bouquet de demande au bouquet de la mariée, chaque composition est pensée pour sublimer votre histoire.",
      ],
    },
    {
      type: "image",
      src: "/images/apropos2-web.png",
      alt: "Bouquet calla blanc perlé porté à la main",
      position: "center",
    },
    {
      type: "text",
      paragraphs: [
        "Parce que chaque couple est unique, j'accorde une importance particulière à l'écoute et à l'accompagnement, afin de vous offrir une expérience personnalisée et des souvenirs inoubliables.",
        "J'interviens en Suisse et dans la région Auvergne-Rhône-Alpes pour donner vie à vos plus beaux projets.",
      ],
    },
  ],
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 120 : -120,
    filter: "blur(12px)",
    scale: 0.985,
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -120 : 120,
    filter: "blur(12px)",
    scale: 0.985,
  }),
};

function TextCard({ item, index }) {
  return (
    <motion.div
      className="universe-card universe-card--text"
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.35, delay: 0.28 + index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </motion.div>
  );
}

function ImageCard({ item, index }) {
  return (
    <motion.figure
      className="universe-card universe-card--image"
      initial={{
        opacity: 0,
        y: 42,
        rotate: index % 2 === 0 ? -1.2 : 1.2,
        clipPath: "inset(18% 0 18% 0)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: index % 2 === 0 ? -0.28 : 0.28,
        clipPath: "inset(0% 0 0% 0)",
      }}
      transition={{ duration: 1.45, delay: 0.18 + index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src={item.src} alt={item.alt} style={{ objectPosition: item.position }} />
    </motion.figure>
  );
}

function CarouselPair({ image, text, index }) {
  return (
    <motion.article
      className="universe-pair"
      initial={{ opacity: 0, y: 46 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 0.12 + index * 0.16, ease: [0.16, 1, 0.3, 1] }}
    >
      <ImageCard item={image} index={index} />
      <TextCard item={text} index={index} />
    </motion.article>
  );
}

export default function PromiseIntro() {
  const [[activePage, direction], setActivePage] = useState([0, 1]);
  const [isPaused, setIsPaused] = useState(false);

  const navigate = (step) => {
    setActivePage(([current]) => {
      const next = (current + step + pages.length) % pages.length;
      return [next, step];
    });
  };

  const goToMarker = (nextPage) => {
    if (nextPage === activePage) return;
    setActivePage([nextPage, nextPage > activePage ? 1 : -1]);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActivePage(([current]) => [(current + 1) % pages.length, 1]);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="promise-intro section-shell" id="univers">
      <div className="universe-heading" data-reveal="universe-heading">
        <p className="universe-kicker">À propos</p>
        <h2>L'univers Promise Events</h2>
      </div>

      <div
        className="universe-carousel"
        data-reveal="universe-frame"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ "--reveal-delay": "90ms" }}
      >
        <span className="universe-aura universe-aura--one" aria-hidden="true" />
        <span className="universe-aura universe-aura--two" aria-hidden="true" />

        <button
          className="universe-arrow universe-arrow--prev"
          type="button"
          aria-label="Voir la partie précédente"
          onClick={(event) => {
            event.currentTarget.blur();
            navigate(-1);
          }}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div className="universe-viewport">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              className="universe-slide"
              key={activePage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) navigate(1);
                if (info.offset.x > 80) navigate(-1);
              }}
              transition={{ duration: 1.15, ease: [0.19, 1, 0.22, 1] }}
            >
              <CarouselPair image={pages[activePage][0]} index={0} text={pages[activePage][1]} />
              <CarouselPair image={pages[activePage][2]} index={1} text={pages[activePage][3]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="universe-arrow universe-arrow--next"
          type="button"
          aria-label="Voir la suite"
          onClick={(event) => {
            event.currentTarget.blur();
            navigate(1);
          }}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="universe-markers" aria-label="Navigation du carousel">
        {pages.map((_, marker) => (
          <button
            className={marker === activePage ? "is-active" : undefined}
            type="button"
            aria-label={`Aller au slide ${marker + 1}`}
            aria-current={marker === activePage ? "true" : undefined}
            key={marker}
            onClick={() => goToMarker(marker)}
          />
        ))}
      </div>
    </section>
  );
}
