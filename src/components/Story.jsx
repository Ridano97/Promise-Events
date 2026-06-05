export default function Story() {
  return (
    <section className="story">
      <div className="section-shell story-top">
        <div className="story-copy">
          <p className="eyebrow" data-reveal>
            Notre histoire
          </p>
          <h2 className="display-title story-title" data-reveal style={{ "--reveal-delay": "70ms" }}>
            Je m'appelle Hanna, je suis la créatrice de Promise Event.
          </h2>
        </div>
        <p className="text-body story-text" data-reveal style={{ "--reveal-delay": "160ms" }}>
          Promise Event, c'est ma promesse. Celle de transformer chaque événement en moment
          unique. Spécialisée dans l'univers floral, je réalise des créations sur mesure afin
          d'apporter douceur, élégance et cohérence à chaque événement.
        </p>
      </div>

      <div className="story-strip" aria-hidden="true">
        <div>
          Promise Event * Floral design * Moments sur mesure * Promise Event * Floral design *
        </div>
      </div>
    </section>
  );
}
