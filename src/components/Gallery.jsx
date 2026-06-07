"use client";

import { motion } from "framer-motion";
import { TransitionLink } from "./RouteTransition";

const proposalBouquets = [
  ["Décoration de demande en mariage", "400 EUR", "/images/mariage2.png"],
  ["Bouquet de roses rouges Portanova", "110 EUR", "/images/mariage3.png"],
  ["Photos et vidéos souvenirs", "30 EUR", "/images/mariage1.png"],
];

const bridalBouquets = [
  ["Bouquet de Lys", "120 EUR", "/images/bouquet2.png"],
  ["Bouquet de Pivoine", "140 EUR", "/images/bouquet4.jpg"],
  ["Bouquet Callas perlé", "180 EUR", "/images/bouquet6.JPG"],
  ["Bouquet de Rose blanche avec Gypsophile", "90 EUR", "/images/bouquet3.png"],
  ["Bouquet de Rénoncule", "145 EUR", "/images/bouquet4.png"],
  ["Bouquet White Garden", "150 EUR", "/images/bouquet1.png"],
];

const rollingImages = [
  "/images/accueil2.jpg",
  "/images/mariage2.png",
  "/images/mariage3.png",
  "/images/bouquet6.JPG",
  "/images/bouquet1.png",
  "/images/mariage1.png",
];

const cardMotion = {
  initial: false,
  transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] },
};

export default function Gallery() {
  return (
    <section className="gallery section-shell" id="bouquets">
      <div className="gallery-heading">
        <h2 className="display-title" data-reveal>
          Demande en mariage.
        </h2>
        <p className="text-body" data-reveal style={{ "--reveal-delay": "80ms" }}>
          Offrez une expérience unique et clé en main pour rendre ce moment encore plus magique.
          Des frais de déplacement sont à prévoir en supplément selon le lieu de prestation.
        </p>
      </div>

      <div className="gallery-grid">
        {proposalBouquets.map(([title, price, image], index) => (
          <motion.article
            className="gallery-item"
            key={title}
            data-reveal="image"
            style={{ "--reveal-delay": `${index * 90}ms` }}
            {...cardMotion}
            whileHover={{ y: -18, rotateX: 5, rotateY: index === 1 ? -5 : 5 }}
          >
            <div className="gallery-photo">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{price}</p>
          </motion.article>
        ))}
      </div>

      <div className="pack-panel" data-reveal>
        <p className="eyebrow">Pack demande en mariage complet</p>
        <h3>Décoration complète, bouquet, photos, vidéos et musique d'ambiance.</h3>
        <span>Tarif du pack complet : 540 EUR</span>
      </div>

      <div className="gallery-heading bouquet-heading">
        <h2 className="display-title" data-reveal>
          Nos bouquets de mariée.
        </h2>
        <p className="text-body" data-reveal style={{ "--reveal-delay": "80ms" }}>
          Du bouquet délicat aux créations plus majestueuses, les compositions sont
          confectionnées sur mesure avec une attention particulière portée à chaque détail.
        </p>
      </div>

      <div className="gallery-grid bridal-grid">
        {bridalBouquets.map(([title, price, image], index) => (
          <motion.article
            className="gallery-item"
            key={title}
            data-reveal="image"
            style={{ "--reveal-delay": `${index * 70}ms` }}
            {...cardMotion}
            whileHover={{ y: -16, rotateX: 4, rotateY: index % 2 ? -4 : 4 }}
          >
            <div className="gallery-photo">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{price}</p>
          </motion.article>
        ))}
      </div>

      <div className="slow-photo-roll" aria-hidden="true">
        <div>
          {[...rollingImages, ...rollingImages].map((image, index) => (
            <img src={image} alt="" key={`${image}-${index}`} />
          ))}
        </div>
      </div>

      <div className="order-note" data-reveal>
        <img src="/images/chic-blooms-logo.jpeg" alt="Chic Blooms" />
        <p>
          Les commandes de bouquets s'effectuent uniquement via WhatsApp, minimum 48 heures à
          l'avance. Un acompte de 30 % valide la commande.
        </p>
        <TransitionLink className="button-primary" href="/contact">
          Je commande
        </TransitionLink>
      </div>
    </section>
  );
}
