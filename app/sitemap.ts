import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

const routes = [
  "",
  "/sobre",
  "/areas-de-atuacao",
  "/equipe",
  "/artigos",
  "/contato",
  "/politica-de-privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
