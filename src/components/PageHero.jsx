export default function PageHero({ eyebrow, title, text, image, imageAlt, tone = "light" }) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title">{title}</h1>
        <p className="text-body">{text}</p>
      </div>
      <div className="page-hero__image">
        <img src={image} alt={imageAlt} />
      </div>
    </section>
  );
}
