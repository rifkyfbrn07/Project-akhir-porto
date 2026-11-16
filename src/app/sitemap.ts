import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  return [
    {
      url: DATA.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `${DATA.url}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt
        ? new Date(post.metadata.publishedAt)
        : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
