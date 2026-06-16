"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TransitionLink } from "./RouteTransition";

const services = [
  {
    title: "Demande en mariage",
    image: "/images/accueil2.jpg",
    href: "/demande-en-mariage",
  },
  {
    title: "Composition florale",
    image: "/images/bouquet4.png",
    href: "/chic-blooms",
  },
  {
    title: "Projet événementiel",
    image: "/images/fete.png",
    href: "/contact",
  },
  {
    title: "Location de matériel de décoration",
    image: "/images/decorationevenementiel.png",
    href: "/catalogue-de-location",
  },
];

export default function Services() {
  return (
    <section className="services" id="mariage">
      <motion.header
        className="services-intro"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="services-intro__welcome">Bienvenue dans l&apos;univers de Promise Events</p>
        <div className="services-intro__story">
          <p>Ici commence la promesse d&apos;un moment unique et parfaitement sublimé.</p>
          <p>
            Créatrice d&apos;expériences sur mesure, je fais de vos instants les plus précieux des
            souvenirs inoubliables.
          </p>
          <p>
            À chaque étape de votre mariage, je vous accompagne : de la demande en mariage à la
            décoration du jour J, jusqu&apos;à la décoration de la chambre des mariés. Chaque
            détail est imaginé avec soin, selon vos envies.
          </p>
          <p>
            Forte d&apos;une expertise florale, je réalise des créations florales sur mesure, du
            bouquet de demande à celui de la mariée, afin d&apos;apporter une parfaite harmonie à
            chaque mise en scène.
          </p>
          <p>
            J&apos;interviens en Suisse et dans la région Auvergne-Rhône-Alpes pour donner vie à
            vos projets.
          </p>
          <strong>Confiez-moi la création d&apos;un moment inoubliable.</strong>
        </div>
        <h2>Nos services</h2>
      </motion.header>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <TransitionLink className="service-card" href={service.href} aria-label={`Voir ${service.title}`}>
              <div className="service-card__media">
                <Image src={service.image} alt="" fill sizes="(max-width: 760px) 100vw, 25vw" />
              </div>
              <div className="service-card__copy">
                <h3>{service.title}</h3>
              </div>
            </TransitionLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
