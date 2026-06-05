"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./RouteTransition";

const navItems = [
  ["Accueil", "/"],
  ["Univers Promise Events", "/#univers"],
  ["Chic Blooms x\nPromise Events", null],
  ["Demande en mariage", "/demande-en-mariage"],
  ["Contact", "/contact"],
];

const leftNavItems = navItems.slice(0, 3);
const rightNavItems = navItems.slice(3);

function NavEntry({ label, href, pathname, onNavigate }) {
  if (!href) {
    return (
      <span className="nav-placeholder" aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <TransitionLink
      className={pathname === href ? "is-active" : undefined}
      href={href}
      onNavigate={onNavigate}
    >
      {label}
    </TransitionLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <TransitionLink
        className="brand-mark brand-mark--mobile"
        href="/"
        aria-label="Promise Events"
        onNavigate={() => setOpen(false)}
      >
        <img src="/images/logo.png" alt="" />
      </TransitionLink>

      <button
        className={open ? "nav-toggle is-open" : "nav-toggle"}
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-controls="primary-navigation"
        aria-expanded={open}
        data-state={open ? "open" : "closed"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav
        className={open ? "main-nav is-open" : "main-nav"}
        id="primary-navigation"
        aria-label="Navigation principale"
      >
        <div className="main-nav__group main-nav__group--left">
          {leftNavItems.map(([label, href]) => (
            <NavEntry
              href={href}
              key={label}
              label={label}
              pathname={pathname}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </div>

        <div className="main-nav__group main-nav__group--right">
          {rightNavItems.map(([label, href]) => (
            <NavEntry
              href={href}
              key={label}
              label={label}
              pathname={pathname}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </div>
      </nav>

      <TransitionLink
        className="brand-mark brand-mark--desktop"
        href="/"
        aria-label="Promise Events"
        onNavigate={() => setOpen(false)}
      >
        <img src="/images/logo.png" alt="" />
      </TransitionLink>
    </header>
  );
}
