import ChicBloomsExperience from "../../components/ChicBloomsExperience";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Chic Blooms - Bouquets de mariée",
  description:
    "Chic Blooms signe des bouquets de mariée, compositions florales et créations sur mesure avec roses, fleurs fraîches et finitions élégantes.",
  path: "/chic-blooms",
  keywords: [
    "bouquet de mariée Genève",
    "Chic Blooms",
    "composition florale mariage",
    "bouquet roses mariée",
  ],
});

export default function ChicBloomsPage() {
  return (
    <main className="chic-page">
      <ChicBloomsExperience />
    </main>
  );
}
