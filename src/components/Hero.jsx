import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-video" aria-hidden="true">
        <HeroVideo videoId="c2fe61b6266dbd15cd4b96e70b7f1a9f" />
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">Promise Events</h1>
        <p className="hero-services">Décoration | Bouquet | Scénographie | Location</p>
      </div>
    </section>
  );
}
