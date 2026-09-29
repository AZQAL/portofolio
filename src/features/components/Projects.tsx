"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string;
};

export default function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjects() {
      const { data, error } = await supabase
        .from("project")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error mengambil project:", error);
        setLoading(false);
        return;
      }

      const formattedProjects: Project[] = (data ?? []).map((project) => ({
        ...project,
        technologies:
          typeof project.technologies === "string"
            ? project.technologies
                .split(",")
                .map((tech: string) => tech.trim())
                .filter(Boolean)
            : [],
      }));

      setProjectData(formattedProjects);
      setLoading(false);
    }

    getProjects();
  }, []);

  const filteredProjects = projectData.filter((project) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      project.title.toLowerCase().includes(searchValue) ||
      project.description.toLowerCase().includes(searchValue) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchValue)
      );

    const matchesFilter =
      filter === "all" || project.technologies.includes(filter);

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="section-padding">
      {/* SEARCH + FILTER */}
      <section className="mx-auto mb-10 flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* SEARCH */}
        <div className="w-full lg:max-w-sm">
          <input
            type="text"
            value={search}
            placeholder="Cari Project.."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* FILTER */}
        <div className="flex w-full flex-wrap gap-2 lg:w-auto lg:justify-end">
          {["all", "Next.js", "TypeScript", "Tailwind CSS"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-md border px-3 py-2 text-xs font-medium transition duration-300 sm:px-4 sm:text-sm ${
                filter === item
                  ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              }`}
            >
              {item === "all" ? "All Projects" : item}
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-500 sm:text-sm">
              Portfolio
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-md text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
            A selection of projects I&apos;ve designed and developed using
            modern web technologies.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b11]"
              >
                <div className="aspect-video animate-pulse bg-white/5" />

                <div className="space-y-3 p-5">
                  <div className="h-5 w-2/3 animate-pulse rounded bg-white/5" />
                  <div className="h-4 w-full animate-pulse rounded bg-white/5" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-white/5" />

                  <div className="flex gap-2 pt-2">
                    <div className="h-6 w-16 animate-pulse rounded bg-white/5" />
                    <div className="h-6 w-20 animate-pulse rounded bg-white/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROJECT GRID */}
        {!loading && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080b11] transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
                style={{
                  animation: `float 4s ease-in-out ${
                    index * 0.2
                  }s infinite`,
                }}
              >
                {/* IMAGE */}
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-blue-500/0 transition duration-300 group-hover:bg-blue-500/5" />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base font-semibold text-white sm:text-lg lg:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 min-h-[60px] text-xs leading-5 text-gray-500 sm:mt-3 sm:min-h-[72px] sm:text-sm sm:leading-6">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-gray-400 sm:px-2.5 sm:py-1.5 sm:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 sm:mt-6 sm:pt-5">
                    <span className="text-xs text-gray-600">
                      View project
                    </span>

                    <span className="text-sm text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* NO RESULT */}
        {!loading && filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
            <p className="text-lg font-semibold text-white">
              Project tidak ditemukan
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Coba gunakan kata kunci atau filter yang berbeda.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
              className="mt-5 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}