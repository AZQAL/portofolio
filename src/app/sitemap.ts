import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();

  const { data: projects, error } = await supabase
    .from("project")
    .select("id");

  if (error) {
    console.error("Gagal mengambil project untuk sitemap:", error.message);
  }

  const baseUrl = "https://portofolio-nsxh.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const projectPages: MetadataRoute.Sitemap =
    projects?.map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })) ?? [];

  return [...staticPages, ...projectPages];
}