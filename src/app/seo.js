const siteUrl = "https://www.promise-events.com";
const defaultImage = "/images/url.jpg";

export const seoConfig = {
  siteUrl,
  siteName: "Promise Events",
  defaultImage,
  phone: "+33773433824",
  email: "contact.promiseevents@gmail.com",
  instagram: "https://www.instagram.com/promiseevents_/",
};

export function pageMetadata({ title, description, path = "/", image = defaultImage, keywords = [] }) {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Décoration de demande en mariage Promise Events au bord du lac",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/demande-en-mariage", priority: 0.95, changeFrequency: "weekly" },
  { path: "/catalogue-de-location", priority: 0.9, changeFrequency: "weekly" },
  { path: "/chic-blooms", priority: 0.9, changeFrequency: "weekly" },
  { path: "/projet-evenementiel", priority: 0.85, changeFrequency: "monthly" },
  { path: "/bouquet-de-mariee", priority: 0.8, changeFrequency: "monthly" },
  { path: "/univers-promise-events", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/mentions-legales", priority: 0.25, changeFrequency: "yearly" },
  { path: "/politique-de-confidentialite", priority: 0.25, changeFrequency: "yearly" },
  { path: "/cgv", priority: 0.25, changeFrequency: "yearly" },
];
