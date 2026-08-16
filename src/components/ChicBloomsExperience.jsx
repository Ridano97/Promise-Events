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
    price: "Sur devis",
    note: "Romantique",
  },
  {
    image: "/images/bouquet1.png",
    name: "White Garden",
    detail: "fleurs blanches de saison",
    price: "Sur devis",
    note: "Signature",
  },
  {
    image: "/images/bouquet2.png",
    name: "Lys perlé",
    detail: "callas et perles",
    price: "Sur devis",
    note: "Précieux",
  },
  {
    image: "/images/bouquet4.jpg",
    name: "Pivoine",
    detail: "composition sur mesure",
    price: "Sur devis",
    note: "Délicat",
  },
  {
    image: "/images/bouquet6.JPG",
    name: "Callas perlé",
    detail: "finitions joaillières",
    price: "Sur devis",
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
            Chic Blooms, c’est l’art de créer des compositions florales uniques et personnalisées.
          </p>
          <p>
            Chaque création est confectionnée avec soin à partir d’une sélection de fleurs qui
            évolue au fil des saisons, tout en mettant à l’honneur la rose éternelle, symbole
            d’amour et véritable signature de notre savoir-faire.
          </p>
          <h3>Retrouvez Chic Blooms à Annemasse</h3>
          <p>
            Chic Blooms vous accueille désormais dans sa boutique à Annemasse, un écrin dédié aux
            fleurs et aux cadeaux personnalisés pour toutes les occasions.
          </p>
          <p>
            Bouquets à offrir, bouquets de mariée, demandes en mariage, anniversaires,
            naissances, événements ou simplement pour faire plaisir : nous réalisons des
            compositions florales adaptées à chaque envie et à chaque moment de vie.
          </p>
          <p>
            Découvrez nos créations et passez votre commande directement sur le site internet
            Chic Blooms. Grâce au Click & Collect, commandez en ligne et récupérez simplement
            votre bouquet dans notre boutique à Annemasse.
          </p>
          <div className="chic-welcome__actions">
            <a
              className="chic-text-link"
              href="https://chicblooms.fr"
              target="_blank"
              rel="noreferrer"
            >
              Commander sur le site Chic Blooms <ArrowUpRight size={17} />
            </a>
            <a
              className="chic-text-link"
              href="https://wa.me/33773433824"
              target="_blank"
              rel="noreferrer"
            >
              Demande particulière sur WhatsApp : 07 73 43 38 24 <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
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
    </>
  );
}
