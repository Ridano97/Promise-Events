"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TransitionLink } from "./RouteTransition";

const bouquets = [
  {
    image: "/images/bouquet3.png",
    name: "Rose blanche",
    detail: "avec gypsophile",
    price: "90 €",
    note: "Romantique",
  },
  {
    image: "/images/bouquet4.png",
    name: "Équateur",
    detail: "roses ivoire",
    price: "120 €",
    note: "Intemporel",
  },
  {
    image: "/images/bouquet1.png",
    name: "White Garden",
    detail: "fleurs blanches de saison",
    price: "150 €",
    note: "Signature",
  },
  {
    image: "/images/bouquet2.png",
    name: "Lys perlé",
    detail: "callas et perles",
    price: "120 €",
    note: "Précieux",
  },
  {
    image: "/images/bouquet4.jpg",
    name: "Pivoine",
    detail: "composition sur mesure",
    price: "140 €",
    note: "Délicat",
  },
  {
    image: "/images/bouquet6.JPG",
    name: "Callas perlé",
    detail: "finitions joaillières",
    price: "180 €",
    note: "Couture",
  },
  {
    image: "/images/bouquetrouge1.jpg",
    name: "Portanova 50",
    detail: "cinquante roses rouges",
    price: "225 €",
    note: "Passion",
  },
  {
    image: "/images/bouquetrouge2.jpg",
    name: "Portanova 25",
    detail: "vingt-cinq roses rouges",
    price: "110 €",
    note: "Iconique",
  },
];

const reveal = {
  initial: { opacity: 0, y: 70, clipPath: "inset(12% 0 0 0)" },
  whileInView: { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
};

export default function ChicBloomsExperience() {
  return (
    <>
      <section className="chic-hero">
        <motion.div
          className="chic-hero__brand"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>Collection florale · Genève</p>
          <img src="/images/logochicblooms.png" alt="Chic Blooms" />
          <h1>Le bouquet devient une pièce de caractère.</h1>
          <a className="chic-scroll-cue" href="#collection">
            Découvrir la collection
            <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.figure
          className="chic-hero__visual chic-hero__visual--main"
          initial={{ opacity: 0, y: 70, clipPath: "inset(18% 0 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/images/bouquet1.png" alt="Bouquet White Garden" />
          <figcaption>01 · White Garden</figcaption>
        </motion.figure>

        <motion.figure
          className="chic-hero__visual chic-hero__visual--detail"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.15, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/images/bouquet6.JPG" alt="Bouquet de callas perlé" />
        </motion.figure>
        <span className="chic-hero__edition">Édition 2026</span>
      </section>

      <div className="chic-marquee" aria-hidden="true">
        <div>
          <span>Say it with flowers</span><i>✦</i><span>Chic Blooms</span><i>✦</i>
          <span>Créations signature</span><i>✦</i><span>Say it with flowers</span><i>✦</i>
          <span>Chic Blooms</span><i>✦</i><span>Créations signature</span><i>✦</i>
        </div>
      </div>

      <section className="chic-intro">
        <motion.p {...reveal} className="chic-label">Notre vision</motion.p>
        <motion.h2 {...reveal}>
          Des fleurs choisies comme des mots.<br />
          <em>Une composition pensée comme une allure.</em>
        </motion.h2>
        <motion.p {...reveal} className="chic-intro__copy">
          Chic Blooms imagine des bouquets de mariée sur mesure, avec une attention portée aux
          volumes, aux textures et aux finitions. Chaque création accompagne votre silhouette et
          raconte votre histoire sans jamais la surcharger.
        </motion.p>
      </section>

      <section className="chic-collection" id="collection">
        <header className="chic-collection__heading">
          <motion.div {...reveal}>
            <p className="chic-label">Catalogue bouquet de mariée</p>
            <h2>La collection</h2>
          </motion.div>
          <motion.p {...reveal}>Faites glisser pour explorer les créations.</motion.p>
        </header>

        <Swiper
          className="chic-rail"
          modules={[Autoplay, FreeMode]}
          freeMode={{ enabled: true, momentumRatio: 0.8 }}
          grabCursor
          loop
          speed={1100}
          autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={18}
          slidesPerView={1.12}
          breakpoints={{
            620: { slidesPerView: 2.1, spaceBetween: 22 },
            980: { slidesPerView: 3.15, spaceBetween: 26 },
            1440: { slidesPerView: 3.65, spaceBetween: 30 },
          }}
        >
          {bouquets.map((bouquet, index) => (
            <SwiperSlide key={`${bouquet.name}-${index}`}>
              <article className="chic-product">
                <div className="chic-product__media">
                  <img src={bouquet.image} alt={`Bouquet ${bouquet.name}`} />
                  <span>{bouquet.note}</span>
                  <b>0{index + 1}</b>
                </div>
                <div className="chic-product__info">
                  <div>
                    <h3>{bouquet.name}</h3>
                    <p>{bouquet.detail}</p>
                  </div>
                  <strong>{bouquet.price}</strong>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="chic-editorial">
        <motion.figure {...reveal} className="chic-editorial__large">
          <img src="/images/bouquet2.png" alt="Bouquet de lys orné de perles" />
        </motion.figure>
        <motion.div {...reveal} className="chic-editorial__copy">
          <p className="chic-label">Le geste Chic Blooms</p>
          <h2>Fleurs fraîches.<br /><em>Détails précieux.</em></h2>
          <p>
            Rubans de satin, perles délicates, tiges sculpturales : les finitions sont choisies
            pour prolonger la robe, le bijou et l’atmosphère de votre journée.
          </p>
          <TransitionLink className="chic-text-link" href="/contact">
            Imaginer mon bouquet <ArrowUpRight size={17} />
          </TransitionLink>
        </motion.div>
        <motion.figure {...reveal} className="chic-editorial__small">
          <img src="/images/bouquet6.JPG" alt="Détail d’un bouquet de callas perlé" />
          <figcaption>Chaque détail compte.</figcaption>
        </motion.figure>
      </section>

      <section className="chic-grid">
        <motion.header {...reveal}>
          <p className="chic-label">Nos essentiels</p>
          <h2>Huit bouquets.<br />Huit personnalités.</h2>
        </motion.header>
        <div className="chic-grid__items">
          {bouquets.map((bouquet, index) => (
            <motion.article
              {...reveal}
              transition={{ ...reveal.transition, delay: (index % 3) * 0.08 }}
              className={`chic-grid-card chic-grid-card--${index + 1}`}
              key={`grid-${bouquet.name}-${index}`}
            >
              <div key={`media-${index}`}>
                <img src={bouquet.image} alt={`Bouquet ${bouquet.name}`} />
                <span>0{index + 1}</span>
              </div>
              <h3 key={`name-${index}`}>{bouquet.name}</h3>
              <p key={`detail-${index}`}>{bouquet.detail} · {bouquet.price}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="chic-cta">
        <motion.img {...reveal} src="/images/chic-blooms-logo.jpeg" alt="Chic Blooms, say it with flowers" />
        <motion.div {...reveal}>
          <p className="chic-label">Sur rendez-vous</p>
          <h2>Votre bouquet,<br /><em>votre signature.</em></h2>
          <p>Parlez-nous de votre robe, de votre cérémonie et de la fleur qui vous ressemble.</p>
          <TransitionLink className="chic-button" href="/contact">
            Créer mon bouquet <ArrowUpRight size={18} />
          </TransitionLink>
        </motion.div>
      </section>
    </>
  );
}
