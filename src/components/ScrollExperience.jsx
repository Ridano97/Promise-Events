"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const scenes = [
  {
    image: "/images/accueil2.jpg",
    label: "01",
    title: "Le décor s'installe",
    text: "Une arche florale, des bougies et la lumière du lac deviennent le premier souvenir.",
  },
  {
    image: "/images/mariage2.png",
    label: "02",
    title: "Le moment bascule",
    text: "La scène guide le regard et laisse toute la place à l'émotion.",
  },
  {
    image: "/images/bouquet6.JPG",
    label: "03",
    title: "Le détail signe l'ensemble",
    text: "Perles, textures et fleurs fraîches composent une finition précieuse.",
  },
];

export default function ScrollExperience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-24, 360]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.92, 1.08, 0.96]);

  return (
    <section className="scroll-experience" ref={sectionRef}>
      <div className="scroll-experience__sticky section-shell">
        <div className="scroll-experience__copy">
          <p className="eyebrow" data-reveal>
            Signature Promise Event
          </p>
          <h2 className="display-title" data-reveal style={{ "--reveal-delay": "80ms" }}>
            Chaque détail accompagne l'émotion.
          </h2>
          <p className="text-body" data-reveal style={{ "--reveal-delay": "160ms" }}>
            Du premier regard aux derniers pétales, chaque décor est pensé pour guider
            l'instant avec douceur, élégance et cohérence.
          </p>
        </div>

        <div className="scroll-experience__stage" aria-label="Moments Promise Event">
          <motion.div className="scroll-experience__ring" style={{ rotate, y, scale }} />
          <motion.div className="scroll-experience__track">
            {scenes.map((scene, index) => (
              <motion.article
                className="scroll-card"
                key={scene.title}
                style={{ y: index === 1 ? y : undefined }}
                whileHover={{ rotateY: index % 2 ? -8 : 8, y: -14, scale: 1.025 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <img src={scene.image} alt={scene.title} />
                <div>
                  <span>{scene.label}</span>
                  <h3>{scene.title}</h3>
                  <p>{scene.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
