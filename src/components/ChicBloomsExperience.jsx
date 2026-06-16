"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Flower2, Gem, Heart, MapPin } from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const bouquets = [
  {
    image: "/images/bouquet3.png",
    name: "Rose blanche",
    detail: "avec gypsophile",
    price: "90 €",
    note: "Romantique",
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

const benefits = [
  {
    icon: Flower2,
    title: "Fleurs fraîches et de saison",
    text: "Sélectionnées avec soin pour leur beauté et leur tenue.",
  },
  {
    icon: Heart,
    title: "Créations sur mesure",
    text: "Chaque détail est pensé selon vos envies.",
  },
  {
    icon: MapPin,
    title: "Basé à Genève",
    text: "Livraison possible dans un rayon de 50 km.",
  },
  {
    icon: Gem,
    title: "Élégance et raffinement",
    text: "Des compositions uniques pour sublimer vos moments.",
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
      <section className="chic-welcome chic-welcome--top">
        <motion.div {...reveal} className="chic-welcome__heading">
          <p className="chic-label">L'univers Chic Blooms</p>
          <h2>Bienvenue dans l’univers de <em>Chic Blooms</em></h2>
        </motion.div>

        <motion.div {...reveal} className="chic-welcome__copy">
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
          <h3>Comment commander&nbsp;?</h3>
          <ul className="chic-order__steps">
            <li>
              <strong>Commande sur WhatsApp uniquement.</strong>
              <span>Répondez au message automatique pour que votre demande soit traitée rapidement.</span>
            </li>
            <li>
              <strong>Bouquets de moins de 30 roses.</strong>
              <span>La création est possible uniquement en retrait.</span>
            </li>
            <li>
              <strong>À partir de 30 roses.</strong>
              <span>La livraison est possible dans un rayon de 50 km autour de Genève.</span>
            </li>
            <li>
              <strong>Délai minimum.</strong>
              <span>Merci de commander au moins 48 heures à l’avance pour garantir la disponibilité des fleurs.</span>
            </li>
            <li>
              <strong>Validation de la commande.</strong>
              <span>Un acompte de 30 % est demandé. La commande est confirmée uniquement après réception de l’acompte.</span>
            </li>
            <li>
              <strong>Retrait ou livraison.</strong>
              <span>Une fois l’acompte reçu, nous fixons ensemble l’heure du retrait ou de la livraison. Des frais de déplacement peuvent s’appliquer.</span>
            </li>
          </ul>
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
          rewind
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
          {bouquets.map((bouquet) => (
            <SwiperSlide key={bouquet.name}>
              <article className="chic-product" key={bouquet.image}>
                <div className="chic-product__media">
                  <img src={bouquet.image} alt={`Bouquet ${bouquet.name}`} />
                  <span>{bouquet.note}</span>
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

      <section className="chic-collection chic-collection--other" id="autres-creations">
        <header className="chic-collection__heading">
          <motion.div {...reveal}>
            <p className="chic-label">Créations pour chaque occasion</p>
            <h2>Nos autres réalisations de bouquet</h2>
          </motion.div>
          <motion.div {...reveal} className="chic-heading-action">
            <p>Des compositions fraîches et singulières, imaginées sur mesure.</p>
            <a href="https://wa.me/33773433824" target="_blank" rel="noreferrer">
              WhatsApp <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </header>
        <Swiper
          className="chic-rail"
          modules={[Autoplay, FreeMode]}
          freeMode={{ enabled: true, momentumRatio: 0.8 }}
          grabCursor
          rewind
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
                key={bouquet.image}
                className="chic-product"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, delay: Math.min(index * 0.04, 0.2) }}
              >
                <div className="chic-product__media">
                  <img src={bouquet.image} alt={bouquet.name} />
                  <span>{bouquet.note}</span>
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

      <section className="chic-benefits">
        {benefits.map(({ icon: Icon, title, text }) => (
          <motion.article {...reveal} key={title}>
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </section>

      <section className="chic-cta">
        <motion.div {...reveal} className="chic-cta__button-wrap">
          <a
            className="chic-button"
            href="https://wa.me/33773433824?text=Bonjour%20Chic%20Blooms%2C%20je%20souhaite%20cr%C3%A9er%20mon%20bouquet."
            target="_blank"
            rel="noreferrer"
          >
            Créer mon bouquet <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>
    </>
  );
}
