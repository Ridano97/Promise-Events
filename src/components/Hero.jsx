import { TransitionLink } from "./RouteTransition";

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-video" aria-hidden="true">
        <iframe
          src="https://customer-8z1yg93quaaa9ooh.cloudflarestream.com/c2fe61b6266dbd15cd4b96e70b7f1a9f/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true"
          title=""
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">Promise Events</h1>
        <p className="hero-services">Décoration | Bouquets | Scénographie | Location</p>
        <p className="hero-signature">
          <span>L'art de sublimer vos</span>
          <span>Plus belle promesse</span>
        </p>
        <TransitionLink className="hero-button" href="/#mariage">
          Découvrez nos services
        </TransitionLink>
      </div>
    </section>
  );
}
