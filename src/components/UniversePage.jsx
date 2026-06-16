"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Promise Event, c'est ma promesse. Celle de transformer chaque événement en moment unique.",
  "Tout a commencé par une passion : celle des fêtes réussies, des détails qui font la différence et des ambiances élégantes.",
  "Je m'appelle Hanna je suis la créatrice de Promise Event, À travers chaque projet, mon objectif est de créer des instants uniques et harmonieux, pensés entièrement selon vos envies. Mariages, demandes en mariage, décoration de chambre des mariés ou scénographies florales : j’imagine chaque mise en scène avec sensibilité et attention.",
  "Spécialisée dans l’univers floral, je réalise des créations sur mesure afin d’apporter douceur, élégance et cohérence à chaque événement. Du bouquet de demande au bouquet de la mariée, chaque composition est pensée pour sublimer votre histoire.",
  "Parce que chaque couple est unique, j’accorde une importance particulière à l’écoute et à l’accompagnement, afin de vous offrir une expérience personnalisée et des souvenirs inoubliables.",
  "J’interviens en Suisse et dans la région Auvergne-Rhône-Alpes pour donner vie à vos plus beaux projets.",
];

export default function UniversePage() {
  return (
    <main className="universe-page">
      <motion.header
        className="universe-page__header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1>L&apos;univers Promise Events</h1>
      </motion.header>

      <section className="universe-page__story">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.85, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            {paragraph}
          </motion.p>
        ))}
      </section>
    </main>
  );
}
