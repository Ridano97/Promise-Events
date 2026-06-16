import RentalCatalogue from "../../components/RentalCatalogue";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Catalogue de location événementielle",
  description:
    "Découvrez le catalogue de location Promise Events : mobilier, colonnes, arches, fleurs artificielles, textiles, bougies et accessoires de décoration.",
  path: "/catalogue-de-location",
  keywords: [
    "location décoration événementielle",
    "location matériel mariage",
    "location arche fleurs",
    "location mobilier événementiel",
  ],
});

export default function RentalCataloguePage() {
  return (
    <main className="rental-page">
      <RentalCatalogue />
    </main>
  );
}
