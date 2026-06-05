"use client";

import { TransitionLink } from "./RouteTransition";

const footerLinks = [
  ["Accueil", "/"],
  ["L'univers Promise event", "/#univers"],
  ["Demande en mariage", "/demande-en-mariage"],
  ["Bouquet de mariée", "/bouquet-de-mariee"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-claim">Sublimons vos moments ensemble.</div>
      <nav aria-label="Navigation secondaire">
        {footerLinks.map(([label, href]) => (
          <TransitionLink key={href} href={href}>
            {label}
          </TransitionLink>
        ))}
      </nav>
      <form className="newsletter">
        <h2>Newsletter</h2>
        <p>Recevez les nouveautes en avant-premiere.</p>
        <div>
          <input type="email" placeholder="Adresse e-mail" />
          <button type="button">S'inscrire</button>
        </div>
      </form>
      <p className="footer-credit"></p>
    </footer>
  );
}
