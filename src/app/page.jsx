import Hero from "../components/Hero";
import Services from "../components/Services";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Décoration événementielle à Genève",
  description:
    "Promise Events crée des décorations événementielles élégantes à Genève : demandes en mariage, scénographies, bouquets, location de matériel et événements sur mesure.",
  path: "/",
  keywords: [
    "décoration événementielle Genève",
    "Promise Events Genève",
    "demande en mariage Genève",
    "location matériel décoration Genève",
  ],
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  );
}
