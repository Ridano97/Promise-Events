import CloudflareStream from "./CloudflareStream";

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-video" aria-hidden="true">
        <CloudflareStream
          videoId="c2fe61b6266dbd15cd4b96e70b7f1a9f"
          title=""
        />
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">Promise Events</h1>
        <p className="hero-services">Décoration | Bouquet | Scénographie | Location</p>
      </div>
    </section>
  );
}
