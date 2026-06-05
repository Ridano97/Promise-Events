import ContactSection from "../../components/ContactSection";
import PageHero from "../../components/PageHero";
import Services from "../../components/Services";
import Story from "../../components/Story";

export const metadata = {
  title: "Projet événementiel - Promise Events",
};

export default function ProjetEvenementielPage() {
  return (
    <main className="page-canvas">
      <PageHero
        eyebrow="Projet événementiel"
        title="Une scénographie florale pour vos instants d'exception."
        text="Mariage, anniversaire, baptême, réception privée ou décoration de chambre : Promise Event imagine des ambiances complètes, élégantes et parfaitement coordonnées."
        image="/images/proposal-red-heart-lake.png"
        imageAlt="Mise en scène florale avec roses rouges et bougies"
        tone="proposal"
      />
      <Services />
      <Story />
      <ContactSection />
    </main>
  );
}
