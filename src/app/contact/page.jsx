import ContactSection from "../../components/ContactSection";
import ContactHero from "../../components/ContactHero";

export const metadata = {
  title: "Contact - Promise Events",
};

export default function ContactPage() {
  return (
    <main className="page-canvas">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
