import ProposalExperience from "../../components/ProposalExperience";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Demande en mariage à Genève",
  description:
    "Organisez une demande en mariage romantique à Genève avec décor floral, arche de roses, bougies, bouquet et pack complet clé en main.",
  path: "/demande-en-mariage",
  keywords: [
    "demande en mariage Genève",
    "organisation demande en mariage",
    "arche coeur roses rouges",
    "pack demande en mariage",
  ],
});

export default function DemandeEnMariagePage() {
  return (
    <main className="proposal-page">
      <ProposalExperience />
    </main>
  );
}
