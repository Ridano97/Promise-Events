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
];

const otherBouquets = [
  { image: "/images/bouqet21.png", name: "Jardin rosé", detail: "Bouquet frais sur mesure", price: "Sur devis", note: "Délicat" },
  { image: "/images/bouquet20.jpg", name: "Monogramme rouge", detail: "Bouquet personnalisé", price: "Sur devis", note: "Signature" },
  { image: "/images/bouquet22.jpg", name: "Nuage poudré", detail: "Tons pastel et fleurs fraîches", price: "Sur devis", note: "Romantique" },
  { image: "/images/bouquet23.jpg", name: "Soleil d'ambre", detail: "Composition chaleureuse", price: "Sur devis", note: "Solaire" },
  { image: "/images/bouquet24.jpg", name: "Duo velours", detail: "Roses rouges et blanches", price: "Sur devis", note: "Graphique" },
  { image: "/images/bouquet25.jpg", name: "Jardin pastel", detail: "Fleurs de saison", price: "Sur devis", note: "Poétique" },
  { image: "/images/bouquet26.jpg", name: "Rouge absolu", detail: "Roses rouges de caractère", price: "Sur devis", note: "Intense" },
  { image: "/images/bouquet27.jpg", name: "Roseraie poudrée", detail: "Bouquet tendre et généreux", price: "Sur devis", note: "Élégant" },
  { image: "/images/bouquet28.jpg", name: "Cœur rubis", detail: "Composition rouge sur mesure", price: "Sur devis", note: "Précieux" },
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
          <img src="/images/bouquet6.JPG" alt="Bouquet de callas perlé" />
          <figcaption>01 · Callas perlé</figcaption>
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

      <section className="chic-welcome">
        <motion.div {...reveal} className="chic-welcome__heading">
          <p className="chic-label">L'univers Chic Blooms</p>
          <h2>Bienvenue dans l’univers de <em>Chic Blooms</em></h2>
        </motion.div>

        <motion.div {...reveal} className="chic-welcome__copy">
          <span>01</span>
          <p>
            Du bouquet délicat aux créations plus majestueuses, nous réalisons des compositions
            confectionnées sur mesure avec une attention particulière portée à chaque détail.
          </p>
          <p>
            Nos bouquets évoluent au fil des saisons et des floraisons, tout en mettant à
            l’honneur la rose, éternel symbole d’amour et de raffinement.
          </p>
        </motion.div>

        <motion.aside {...reveal} className="chic-order">
          <span>02</span>
          <h3>Comment commander&nbsp;?</h3>
          <p>
            Les prises de commande s’effectuent uniquement via WhatsApp. Merci de répondre au
            message automatique afin de faciliter le traitement de votre demande.
          </p>
          <p>
            Pour les bouquets de moins de 30 roses, la création est possible uniquement en
            retrait. À partir de 30 roses, la livraison est disponible dans un rayon de 50 km
            autour de Genève, selon le lieu de prestation. Des frais de déplacement peuvent
            s’appliquer.
          </p>
          <a
            className="chic-text-link"
            href="https://wa.me/33773433824"
            target="_blank"
            rel="noreferrer"
          >
            Commander via WhatsApp <ArrowUpRight size={17} />
          </a>
        </motion.aside>
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
            1440: { slidesPerView: 4, spaceBetween: 26 },
            1800: { slidesPerView: 4.4, spaceBetween: 28 },
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

      <section className="chic-collection chic-collection--other">
        <header className="chic-collection__heading">
          <motion.div {...reveal}>
            <p className="chic-label">Créations pour chaque occasion</p>
            <h2>Nos autres réalisations de bouquet</h2>
          </motion.div>
          <motion.p {...reveal}>
            Des compositions fraîches et singulières, imaginées sur mesure.
          </motion.p>
        </header>
        <Swiper
          className="chic-rail"
          modules={[Autoplay, FreeMode]}
          freeMode={{ enabled: true, momentumRatio: 0.8 }}
          grabCursor
          loop
          speed={1100}
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={18}
          slidesPerView={1.12}
          breakpoints={{
            620: { slidesPerView: 2.1, spaceBetween: 22 },
            980: { slidesPerView: 3.15, spaceBetween: 26 },
            1440: { slidesPerView: 4, spaceBetween: 26 },
            1800: { slidesPerView: 4.4, spaceBetween: 28 },
          }}
        >
          {otherBouquets.map((bouquet, index) => (
            <SwiperSlide key={bouquet.image}>
              <motion.article
                className="chic-product"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, delay: Math.min(index * 0.04, 0.2) }}
              >
                <div className="chic-product__media">
                  <img src={bouquet.image} alt={bouquet.name} />
                  <span>{bouquet.note}</span>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </div>
                <div className="chic-product__info">
                  <div>
                    <h3>{bouquet.name}</h3>
                    <p>{bouquet.detail}</p>
                  </div>
                  <strong>{bouquet.price}</strong>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
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
