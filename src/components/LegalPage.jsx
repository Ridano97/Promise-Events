import { TransitionLink } from "./RouteTransition";

export default function LegalPage({ eyebrow, title, intro, children, updated = "Juin 2026" }) {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div>
          <p>{intro}</p>
          <span>Dernière mise à jour · {updated}</span>
        </div>
      </header>
      <article className="legal-content">{children}</article>
      <aside className="legal-contact">
        <p className="eyebrow">Une question ?</p>
        <h2>Parlons-en simplement.</h2>
        <TransitionLink href="/contact">Contacter Promise Events</TransitionLink>
      </aside>
    </main>
  );
}
