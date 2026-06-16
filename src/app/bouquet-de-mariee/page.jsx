import Gallery from "../../components/Gallery";
import PageHero from "../../components/PageHero";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Bouquet de mariée sur mesure",
  description:
    "Bouquets de mariée élégants et compositions florales sur mesure : roses, lys, callas, pivoines et fleurs de saison pour sublimer votre cérémonie.",
  path: "/bouquet-de-mariee",
  keywords: [
    "bouquet de mariée",
    "bouquet mariage Genève",
    "composition florale mariée",
    "fleurs mariage",
  ],
});

export default function BouquetDeMarieePage() {
  return (
    <main className="page-canvas">
      <PageHero
        eyebrow="Bouquet de mariée"
        title="Des compositions florales haute couture."
        text="Bouquets de lys, pivoines, callas perlés ou roses blanches : chaque création est travaillée sur mesure pour accompagner l'allure, la robe et l'atmosphère du jour."
        image="/images/bouquet6.JPG"
        imageAlt="Bouquet de callas blanc avec perles"
      />
      <Gallery />
    </main>
  );
}
