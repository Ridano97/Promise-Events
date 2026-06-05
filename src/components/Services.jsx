const services = [
  {
    number: "01",
    title: "Demande en mariage",
    text: "Décoration complète avec installation incluse, 100 % personnalisable selon vos envies, pour créer une ambiance romantique et inoubliable.",
  },
  {
    number: "02",
    title: "Composition florale",
    text: "Créations florales sur mesure, du bouquet de demande à celui de la mariée, afin d'apporter une parfaite harmonie à chaque mise en scène.",
  },
  {
    number: "03",
    title: "Projet événementiel",
    text: "Mariages, décoration de chambre des mariés ou scénographies florales : chaque mise en scène est imaginée avec sensibilité et attention.",
  },
];

export default function Services() {
  return (
    <section className="services section-shell" id="mariage">
      <div className="services-media" data-reveal="image">
        <img src="/images/proposal-red-heart-lake.png" alt="Arche de roses rouges et bougies au bord du lac" />
      </div>
      <div className="services-content">
        <p className="services-label" data-reveal>
          Nos services <span aria-hidden="true">*</span>
        </p>
        <div className="services-list">
          {services.map((service, index) => (
            <article
              className="service-row"
              key={service.number}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
