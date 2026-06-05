import ContactSection from "../../components/ContactSection";
import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Contact - Promise Events",
};

export default function ContactPage() {
  return (
    <main className="page-canvas">
      <PageHero
        eyebrow="Contact"
        title="Racontez-nous votre projet."
        text="Partagez votre date, votre lieu, vos inspirations et votre budget. Nous imaginons une proposition sur mesure, pensée pour votre moment."
        image="/images/proposal-pack-reference.png"
        imageAlt="Décoration événementielle lumineuse au bord du lac"
        tone="dark"
      />
      <ContactSection />
    </main>
  );
}
