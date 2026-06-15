const catalogueSections = [
  {
    number: "01",
    title: "Mobiliers",
    intro: "Assises, tables et structures pour composer un décor élégant et harmonieux.",
    products: [
      ["Chaise médaillon", "7 €", "chaise-medaillon.webp"],
      ["Chaise Napoléon", "12 €", "chaise-napoleon.webp"],
      ["Colonne blanche 80 cm", "25 €", "colonnes-blanches.webp"],
      ["Colonne blanche 100 cm", "40 €", "colonnes-blanches.webp"],
      ["Ensemble de backdrop", "150 €", "ensemble-backdrop.webp", "wide"],
      ["Table rectangulaire 6/8 personnes", "12 €", "table-rectangulaire.webp", "wide"],
      ["Canapé beige velours", "100 €", "canape-beige-100.webp", "wide"],
      ["Canapé beige velours", "190 €", "canape-beige-190.webp", "wide"],
      ["Miroir personnalisable", "100 €", "miroir-personnalisable.webp"],
    ],
  },
  {
    number: "02",
    title: "Éléments décoratifs",
    intro: "Les détails lumineux et raffinés qui donnent toute sa personnalité à votre réception.",
    products: [
      ["Bougeoir avec bougie LED", "20 €", "bougeoir-led.webp"],
      ["Vase transparent plexiglas 80 cm", "15 €", "vase-plexiglas.webp"],
      ["Lustre argenté avec structure 15 branches", "100 €", "lustre-argente.webp", "wide"],
    ],
  },
  {
    number: "03",
    title: "Fleurs artificielles",
    intro: "Des compositions généreuses pour créer des décors floraux durables et spectaculaires.",
    products: [
      ["Boule de fleurs blanches 60 cm", "10 €", "boule-fleurs-blanches.webp"],
      ["Boule de fleurs blanches 80 cm", "15 €", "boule-fleurs-blanches.webp"],
      ["Chemin de fleurs 200 cm", "20 €", "chemin-fleurs-blanches.webp", "tall"],
      ["Arc en cœur & Will you marry me lumineux", "200 €", "arc-coeur-lumineux.webp", "wide"],
      ["Boule de fleurs rouges 50 cm", "10 €", "boule-fleurs-rouges.webp"],
      ["Traînée de fleurs rouges", "15 €", "trainee-fleurs-rouges.webp", "tall"],
    ],
  },
  {
    number: "04",
    title: "Articles textiles",
    intro: "Nappes, rideaux et tapis pour habiller chaque espace jusque dans les moindres détails.",
    products: [
      ["Nappe rectangulaire blanche 300 × 300 cm", "20 €", "nappe-300.webp", "wide"],
      ["Nappe rectangulaire blanche 175 × 300 cm", "20 €", "nappe-175.webp", "wide"],
      ["Tapis beige", "30 €", "tapis-beige.webp"],
      ["Rideau 3 m × 4 m avec support", "100 €", "rideau-avec-support.webp", "wide"],
      ["Tapis rubis rouge", "30 €", "tapis-rubis.webp", "tall"],
    ],
  },
  {
    number: "05",
    title: "Décor traditionnel oriental",
    intro: "Une sélection chaleureuse aux détails dorés, pensée pour des scénographies d'exception.",
    products: [
      ["Canapé velours beige avec coussins", "100 €", "canape-oriental.webp", "wide"],
      ["Table marocaine en bois avec plateau doré", "15 €", "table-marocaine.webp"],
      ["Photophore doré sur pied", "30 €", "photophore-30.webp", "tall"],
      ["Photophore doré sur pied", "20 €", "photophore-20.webp", "tall"],
      ["Table orientale ajourée blanche", "30 €", "table-orientale-blanche.webp"],
      ["Lanterne lumineuse", "10 €", "lanterne-lumineuse.webp", "tall"],
      ["Objets décoratifs marocains", "15 €", "objets-marocains.webp", "wide"],
    ],
  },
  {
    number: "06",
    title: "Animations événementielles",
    intro: "Des expériences conviviales qui rythment l'événement et laissent un souvenir mémorable.",
    products: [
      ["Photo Booth 360", "150 €", "photo-booth-360.webp", "wide"],
      ["Barrière dorée", "40 €", "barriere-doree.webp", "wide"],
    ],
  },
];

function ProductCard({ product }) {
  const [name, price, image, size = ""] = product;

  return (
    <article
      className={`rental-card${size ? ` rental-card--${size}` : ""}`}
      data-product-image={image}
      data-reveal
    >
      <div className="rental-card__image">
        <img src={`/images/catalogue-location/${image}`} alt={name} loading="lazy" />
      </div>
      <div className="rental-card__details">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </article>
  );
}

export default function RentalCatalogue() {
  return (
    <>
      <section className="rental-hero">
        <div className="rental-hero__copy" data-reveal>
          <h1>Catalogue<br />de location</h1>
          <p className="rental-hero__intro">
            Découvrez notre sélection de mobilier, décoration et accessoires pour imaginer
            une réception à votre image.
          </p>
          <a className="button-primary" href="#catalogue">
            Découvrir la collection
          </a>
        </div>
        <div className="rental-hero__visual" data-reveal>
          <span className="rental-hero__frame" aria-hidden="true" />
          <img src="/images/catalogue-location/couverture.webp" alt="Décoration florale blanche Promise Events" />
        </div>
      </section>

      <div className="rental-catalogue" id="catalogue">
        {catalogueSections.map((section) => (
          <section className="rental-section" key={section.number}>
            <header className="rental-section__heading" data-reveal>
              <div>
                <p>Vol. {section.number}</p>
                <h2>{section.title}</h2>
              </div>
              <p>{section.intro}</p>
            </header>
            <div className="rental-grid">
              {section.products.map((product, index) => (
                <ProductCard key={`${product[0]}-${index}`} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rental-cta" data-reveal>
        <p>Une pièce vous plaît ?</p>
        <h2>Composons votre décor ensemble.</h2>
        <a className="button-primary" href="/contact">
          Demander une disponibilité
        </a>
        <small>Tarifs indiqués hors livraison et installation, selon disponibilité.</small>
      </section>
    </>
  );
}
