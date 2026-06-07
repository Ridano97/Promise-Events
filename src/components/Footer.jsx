"use client";

import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./RouteTransition";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="social-brand-icon" viewBox="0 0 24 24">
      <rect height="18" rx="5" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4.1" />
      <circle className="social-brand-icon__fill" cx="17.45" cy="6.65" r="1.05" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" className="social-brand-icon social-brand-icon--fill" viewBox="0 0 24 24">
      <path d="M14.1 2h3.1c.23 1.32.97 2.48 2.04 3.25A6.1 6.1 0 0 0 22 6.35v3.18a9.2 9.2 0 0 1-4.76-1.42v7.08a6.8 6.8 0 1 1-5.87-6.73v3.27a3.6 3.6 0 1 0 2.73 3.48V2Z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg aria-hidden="true" className="social-brand-icon social-brand-icon--fill" viewBox="0 0 24 24">
      <path d="M12 2.35c-3.24 0-5.22 2.45-5.22 5.62 0 .95.17 1.86.29 2.51-.36.56-1.16.83-1.92.59-.58-.19-1.05.02-1.13.44-.11.58.65 1.08 2.28 1.72.35.14.45.44.25.75-.65 1.01-1.86 1.77-3.36 2.05-.55.1-.85.42-.76.85.12.57 1.01.74 2.17.92.39.06.58.24.72.61.35.91.81 1.13 1.74.96.58-.11 1.18-.18 1.63.11.87.56 1.88 1.16 3.31 1.16s2.44-.6 3.31-1.16c.45-.29 1.05-.22 1.63-.11.93.17 1.39-.05 1.74-.96.14-.37.33-.55.72-.61 1.16-.18 2.05-.35 2.17-.92.09-.43-.21-.75-.76-.85-1.5-.28-2.71-1.04-3.36-2.05-.2-.31-.1-.61.25-.75 1.63-.64 2.39-1.14 2.28-1.72-.08-.42-.55-.63-1.13-.44-.76.24-1.56-.03-1.92-.59.12-.65.29-1.56.29-2.51 0-3.17-1.98-5.62-5.22-5.62Z" />
    </svg>
  );
}

const footerLinks = [
  ["Accueil", "/"],
  ["Univers Promise Events", "/#univers"],
  ["Chic Blooms x Promise Events", "/chic-blooms"],
  ["Nos services", "/#mariage"],
  ["Demande en mariage", "/demande-en-mariage"],
  ["Contact", "/contact"],
  ["Mentions légales", "/mentions-legales"],
  ["Conditions générales de vente", "/cgv"],
  ["Politique de confidentialité", "/politique-de-confidentialite"],
];

const socialLinks = [
  {
    label: "Instagram floral",
    handle: "@chicblooms__",
    href: "https://www.instagram.com/chicblooms__/",
    icon: InstagramIcon,
  },
  {
    label: "Instagram événementiel",
    handle: "@promiseevents_",
    href: "https://www.instagram.com/promiseevents_/",
    icon: InstagramIcon,
  },
  {
    label: "Snapchat",
    handle: "chicblooms",
    href: "https://www.snapchat.com/add/chicblooms",
    icon: SnapchatIcon,
  },
  {
    label: "TikTok",
    handle: "@chicblooms__",
    href: "https://www.tiktok.com/@chicblooms__",
    icon: TikTokIcon,
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isChicBlooms = pathname === "/chic-blooms";

  return (
    <footer className={isChicBlooms ? "site-footer site-footer--chic" : "site-footer"}>
      <div className="footer-brand">
        {!isChicBlooms && <img src="/images/H.png" alt="Promise Events" />}
        <p className="footer-claim">
          {isChicBlooms ? "Say it with flowers." : "Sublimons vos moments ensemble."}
        </p>
        <p className="footer-intro">
          {isChicBlooms
            ? "Bouquets de mariée et créations florales façonnés comme des pièces signatures."
            : "Décoration événementielle et créations florales pensées pour vos plus beaux moments."}
        </p>
      </div>

      <div className="footer-column">
        <p className="footer-heading">Navigation</p>
        <nav aria-label="Navigation secondaire">
          {footerLinks.map(([label, href]) => (
            <TransitionLink key={href} href={href}>
              {label}
            </TransitionLink>
          ))}
        </nav>
      </div>

      <div className="footer-column footer-socials">
        <p className="footer-heading">Nous suivre</p>
        <div className="footer-social-list">
          {socialLinks.map(({ label, handle, href, icon: Icon }) => (
            <a href={href} key={label} rel="noreferrer" target="_blank">
              <Icon />
              <span>
                <strong>{label}</strong>
                <small>{handle}</small>
              </span>
              <ExternalLink aria-hidden="true" className="footer-social-arrow" size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-credit">
        <span>© 2026 {isChicBlooms ? "Chic Blooms x Promise Events" : "Promise Events"}</span>
        <span>RIO DIGITAL LAB</span>
      </div>
    </footer>
  );
}
