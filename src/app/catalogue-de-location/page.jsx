import RentalCatalogue from "../../components/RentalCatalogue";

export const metadata = {
  title: "Catalogue de location - Promise Events",
  description:
    "Mobilier, décoration, fleurs artificielles, textiles et animations disponibles à la location.",
};

export default function RentalCataloguePage() {
  return (
    <main className="rental-page">
      <RentalCatalogue />
    </main>
  );
}
