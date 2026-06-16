import { routes, seoConfig } from "./seo";

export default function sitemap() {
  return routes.map((route) => ({
    url: `${seoConfig.siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
