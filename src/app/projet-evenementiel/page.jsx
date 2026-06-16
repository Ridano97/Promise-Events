import ContactSection from "../../components/ContactSection";
import PageHero from "../../components/PageHero";
import Services from "../../components/Services";
import Story from "../../components/Story";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Projet événementiel sur mesure",
  description:
    "Promise Events imagine la scénographie et la décoration de vos mariages, anniversaires, baptêmes, réceptions privées et événements d'exception.",
  path: "/projet-evenementiel",
  keywords: [
    "projet événementiel Genève",
    "scénographie événementielle",
    "décoration mariage",
    "décoration anniversaire",
  ],
});

export default function ProjetEvenementielPage() {
  return (
    <main className="page-canvas">
      <PageHero
        eyebrow="Projet événementiel"
        title="Une scénographie florale pour vos instants d'exception."
        text="Mariage, anniversaire, baptême, réception privée ou décoration de chambre : Promise Event imagine des ambiances complètes, élégantes et parfaitement coordonnées."
        image="/images/fete.png"
        imageAlt="Mise en scène florale avec roses rouges et bougies"
        tone="proposal"
      />
      <Services />
      <Story />
      <ContactSection />
    </main>
  );
}
