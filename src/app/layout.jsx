import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { RouteTransitionProvider } from "../components/RouteTransition";
import ScrollEffects from "../components/ScrollEffects";
import LuxuryEffects from "../components/LuxuryEffects";
import BackToTop from "../components/BackToTop";

const nativeTransitionScript = `
(() => {
  if (window.__promiseEventNativeTransition) return;
  window.__promiseEventNativeTransition = true;

  const createText = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const openLetter = (anchor, url) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.href = url.href;
      return;
    }

    const previous = document.querySelector("[data-native-page-transition]");
    if (previous) previous.remove();

    const rect = anchor.getBoundingClientRect();
    const label = anchor.textContent.trim() || "Promise Event";
    const transition = document.createElement("div");
    transition.className = "page-transition is-fly";
    transition.setAttribute("aria-hidden", "true");
    transition.dataset.nativePageTransition = "true";
    transition.style.setProperty("--letter-origin-x", rect.left + rect.width / 2 + "px");
    transition.style.setProperty("--letter-origin-y", rect.top + rect.height / 2 + "px");

    const veil = document.createElement("div");
    veil.className = "transition-veil";

    const letter = document.createElement("div");
    letter.className = "transition-letter";
    letter.appendChild(createText("span", "transition-stamp", "Promise Event"));
    letter.appendChild(createText("span", "transition-seal", "PE"));
    letter.appendChild(createText("strong", "", label));

    transition.appendChild(veil);
    transition.appendChild(letter);
    document.body.appendChild(transition);

    window.setTimeout(() => {
      transition.className = "page-transition is-open";
    }, 560);
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 1120);
  };

  document.addEventListener("click", (event) => {
    if (document.documentElement.classList.contains("route-transition-ready")) return;
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof event.button === "number" && event.button !== 0) return;

    const target = event.target instanceof Element ? event.target : event.target && event.target.parentElement;
    const anchor = target && target.closest ? target.closest("a[href]") : null;
    if (!anchor || anchor.target && anchor.target !== "_self" || anchor.hasAttribute("download")) return;

    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.hash) return;

    event.preventDefault();
    openLetter(anchor, url);
  }, true);
})();
`;

export const metadata = {
  title: "Promise Events - Décoration événementielle",
  description:
    "Décoration événementielle, demandes en mariage et compositions florales haut de gamme.",
  icons: {
    icon: "/images/H.png",
    shortcut: "/images/H.png",
    apple: "/images/H.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <script dangerouslySetInnerHTML={{ __html: nativeTransitionScript }} />
        <RouteTransitionProvider>
          <ScrollEffects />
          <LuxuryEffects />
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </RouteTransitionProvider>
      </body>
    </html>
  );
}
