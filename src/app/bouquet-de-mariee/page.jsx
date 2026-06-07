import Gallery from "../../components/Gallery";
import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Bouquet de mariée - Promise Events",
};

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
