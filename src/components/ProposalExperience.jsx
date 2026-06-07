import { TransitionLink } from "./RouteTransition";

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
    src: "/images/bouquetrouge2.jpg",
    title: "Bouquet de 50 roses Équateur",
    detail: "Composition de roses rouges",
    price: "225 €",
  },
  {
    src: "/images/mariage3.png",
    title: "Bouquet de 25 roses Portanova",
    detail: "Bouquet de roses rouges",
    price: "110 €",
  },
];

const packItems = [
  {
    number: "01",
    title: "Décoration complète",
    text: "Installation incluse, 100 % personnalisable.",
    price: "400 €",
  },
  {
    number: "02",
    title: "Bouquet de roses rouges Portanova",
    text: "25 roses rouges incluses, personnalisables avec possibilité d'ajouter des roses sur demande.",
    price: "110 €",
  },
  {
    number: "03",
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
          <p className="proposal-kicker">Promise Events · Expérience signature</p>
          <h1>
            Demande
            <span>en mariage</span>
          </h1>
          <p className="proposal-hero__lead">
            Une scénographie pensée autour de votre histoire, pour faire de cet instant une
            promesse inoubliable.
          </p>
          <div className="proposal-hero__details">
            <span>Décoration sur mesure</span>
            <span>À partir de 400 €</span>
          </div>
          <TransitionLink className="proposal-link" href="/contact">
            Imaginer votre demande
          </TransitionLink>
        </div>

        <figure className="proposal-hero__media" data-proposal-hero-media>
          <iframe
            src="https://customer-8z1yg93quaaa9ooh.cloudflarestream.com/1b3aae398aba4398e5b8f8d629ec7fb3/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true"
            title="Une demande en mariage signée Promise Events"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          <figcaption>
            <span>01</span>
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
              <figcaption>0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="proposal-bouquets">
        <header className="proposal-section-heading proposal-section-heading--center" data-reveal>
          <p className="proposal-kicker">La touche finale</p>
          <h2>Nos bouquets pour votre grand oui.</h2>
        </header>

        <div className="proposal-bouquets__grid" data-proposal-bouquet-grid>
          {bouquets.map((bouquet, index) => (
            <article
              className="proposal-bouquet"
              key={bouquet.src}
              data-proposal-bouquet
            >
              <div className="proposal-bouquet__media">
                {bouquet.fallback ? (
                  <picture>
                    <source srcSet={bouquet.src} type="image/heic" />
                    <img src={bouquet.fallback} alt={bouquet.title} />
                  </picture>
                ) : (
                  <img src={bouquet.src} alt={bouquet.title} />
                )}
                <span>0{index + 1}</span>
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
          <iframe
            src="https://customer-8z1yg93quaaa9ooh.cloudflarestream.com/fb31c83bab4d0bacfb6e38ce3ac3b5eb/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true"
            title="Les détails d'une mise en scène Promise Events"
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          <div className="proposal-film__veil" />
          <div className="proposal-film__copy">
            <h2>Votre histoire,<br />mise en scène.</h2>
            <span>Promise Events · Genève · Lac Léman</span>
          </div>
        </div>
      </section>

      <section className="proposal-pack" data-proposal-pack>
        <div className="proposal-pack__heading" data-reveal>
          <p className="proposal-kicker">Une expérience clé en main</p>
          <h2>Pack demande en mariage complet</h2>
          <p>Tout est pensé pour vous laisser vivre pleinement l'instant.</p>
        </div>

        <div className="proposal-pack__items">
          {packItems.map((item) => (
            <article key={item.number} data-proposal-pack-item>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>

        <div className="proposal-pack__total">
          <span>Tarif du pack complet</span>
          <strong>540 €</strong>
        </div>
      </section>
    </>
  );
}
