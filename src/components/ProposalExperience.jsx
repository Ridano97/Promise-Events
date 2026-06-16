import CloudflareStream from "./CloudflareStream";

const scenes = [
  { src: "/images/mariage2.png", alt: "Demande en mariage devant une arche de roses rouges" },
  { src: "/images/mariage1.png", alt: "Couple devant une arche de roses rouges au bord du lac" },
  { src: "/images/mariage4.png", alt: "Allée de bougies et fleurs blanches au bord du lac" },
];

const bouquets = [
  {
    src: "/images/bouquetrouge1.jpg",
    title: "Bouquet de 50 roses Portanova",
    detail: "Bouquet raffiné pour demande en mariage",
    price: "225 €",
  },
  {
    src: "/images/mariage3.png",
    title: "Bouquet de 25 roses Portanova",
    detail: "Bouquet de roses rouges",
    price: "110 €",
  },
  {
    src: "/images/bouquetrouge2.jpg",
    title: "Bouquet de 50 roses rouges",
    detail: "Composition florale généreuse",
    price: "225 €",
  },
];

const packItems = [
  {
    title: "Décoration complète",
    text: "Installation incluse, 100 % personnalisable.",
    price: "450 €",
  },
  {
    title: "Bouquet de roses rouges Portanova",
    text: "25 roses rouges incluses, personnalisables avec possibilité d'ajouter des roses sur demande.",
    price: "110 €",
  },
  {
    title: "Photos et vidéos souvenirs",
    text: "Vidéo lors de la découverte du lieu et de la demande en mariage, photos et vidéos à volonté.",
    price: "30 €",
  },
];

export default function ProposalExperience() {
  return (
    <>
      <section className="proposal-hero">
        <div className="proposal-hero__copy" data-proposal-hero-copy>
          <h1>
            Demande
            <span>en mariage</span>
          </h1>
          <a className="proposal-hero__button" href="#tarifs-packs-complets">
            Voir les tarifs du pack complet
          </a>
        </div>

        <figure className="proposal-hero__media" data-proposal-hero-media>
          <CloudflareStream
            videoId="1b3aae398aba4398e5b8f8d629ec7fb3"
            title="Une demande en mariage signée Promise Events"
          />
          <figcaption>
            <p>Une demande imaginée comme une scène de cinéma</p>
          </figcaption>
        </figure>
      </section>

      <section className="proposal-scenes">
        <header className="proposal-section-heading" data-reveal>
          <p className="proposal-kicker">Nos mises en scène</p>
          <h2>Le décor devient le premier souvenir.</h2>
          <p>
            Chaque lumière, chaque rose et chaque détail est composé pour révéler un moment qui
            vous ressemble.
          </p>
        </header>

        <div className="proposal-scenes__grid" data-proposal-scene-grid>
          {scenes.map((scene, index) => (
            <figure
              className={`proposal-scene proposal-scene--${index + 1}`}
              key={scene.src}
              data-proposal-scene
            >
              <img src={scene.src} alt={scene.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="proposal-pack" id="tarifs-packs-complets" data-proposal-pack>
        <div className="proposal-pack__heading" data-reveal>
          <p className="proposal-kicker">Une expérience clé en main</p>
          <h2>Pack demande en mariage complet</h2>
          <div className="proposal-pack__price">
            <span>Tarif du pack complet</span>
            <strong>590 €</strong>
          </div>
        </div>

        <div className="proposal-pack__items">
          {packItems.map((item) => (
            <article key={item.title} data-proposal-pack-item>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="proposal-bouquets">
        <header className="proposal-section-heading proposal-section-heading--center" data-reveal>
          <p className="proposal-kicker">La touche finale</p>
          <h2>Nos bouquets pour votre grand oui.</h2>
        </header>

        <div className="proposal-bouquets__grid" data-proposal-bouquet-grid>
          {bouquets.map((bouquet) => (
            <article className="proposal-bouquet" key={bouquet.src} data-proposal-bouquet>
              <div className="proposal-bouquet__media">
                <img src={bouquet.src} alt={bouquet.title} />
              </div>
              <div className="proposal-bouquet__copy">
                <div>
                  <h3>{bouquet.title}</h3>
                  <p>{bouquet.detail}</p>
                </div>
                <strong>{bouquet.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proposal-film" data-proposal-film>
        <div className="proposal-film__media">
          <CloudflareStream
            videoId="fb31c83bab4d0bacfb6e38ce3ac3b5eb"
            title="Les détails d'une mise en scène Promise Events"
            loading="lazy"
          />
          <div className="proposal-film__veil" />
          <div className="proposal-film__copy">
            <h2>Votre histoire,<br />mise en scène.</h2>
            <span>Promise Events · Genève · Lac Léman</span>
          </div>
        </div>
      </section>
    </>
  );
}
