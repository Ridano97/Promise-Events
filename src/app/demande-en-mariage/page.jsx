import Gallery from "../../components/Gallery";
import PageHero from "../../components/PageHero";
import Services from "../../components/Services";
import ScrollExperience from "../../components/ScrollExperience";

export const metadata = {
  title: "Demande en mariage - Promise Events",
};

export default function DemandeEnMariagePage() {
  return (
    <main className="page-canvas">
      <PageHero
        eyebrow="Demande en mariage"
        title="Le décor du grand oui."
        text="Arche florale, bougies, mise en scène, bouquet et souvenirs : nous composons une demande en mariage clé en main, raffinée et mémorable."
        image="/images/proposal-red-heart-wide.png"
        imageAlt="Décoration de demande en mariage avec arche de roses rouges"
        tone="proposal"
      />
      <Services />
      <ScrollExperience />
      <Gallery />
    </main>
  );
}
