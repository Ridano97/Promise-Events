import ContactSection from "../../components/ContactSection";
import ContactHero from "../../components/ContactHero";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contactez Promise Events pour une demande en mariage, une décoration événementielle, un bouquet ou une location de matériel à Genève et alentours.",
  path: "/contact",
  keywords: ["contact Promise Events", "devis décoration événementielle", "devis mariage Genève"],
});

export default function ContactPage() {
  return (
    <main className="page-canvas">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
