import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts";

const BASE_URL = "https://jadenarceneaux.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const postSlugs = getAllSlugs();

  const postEntries: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${BASE_URL}/posts/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/posts`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/misc`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...postEntries,
  ];
}
