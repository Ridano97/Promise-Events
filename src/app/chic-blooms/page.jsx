import ChicBloomsExperience from "../../components/ChicBloomsExperience";

export const metadata = {
  title: "Chic Blooms x Promise Events - Catalogue floral",
  description: "Bouquets de mariée et créations florales signature Chic Blooms.",
  openGraph: {
    title: "Chic Blooms x Promise Events - Catalogue floral",
    description: "Bouquets de mariée et créations florales signature Chic Blooms.",
    url: "https://www.promise-events.com/chic-blooms",
    images: [
      {
        url: "/images/og-promise-logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Promise Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chic Blooms x Promise Events - Catalogue floral",
    description: "Bouquets de mariée et créations florales signature Chic Blooms.",
    images: ["/images/og-promise-logo.png"],
  },
};

export default function ChicBloomsPage() {
  return (
    <main className="chic-page">
      <ChicBloomsExperience />
    </main>
  );
}
