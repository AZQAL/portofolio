import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Ambil project berdasarkan ID dari URL
  const { data, error } = await supabase
    .from("project")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  // Ubah data varchar dari Supabase menjadi array
  const project: Project = {
    ...data,
    technologies:
      typeof data.technologies === "string"
        ? data.technologies
            .split(",")
            .map((tech: string) => tech.trim())
            .filter(Boolean)
        : [],
    features:
      typeof data.features === "string"
        ? data.features
            .split(",")
            .map((feature: string) => feature.trim())
            .filter(Boolean)
        : [],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
        {/* BACK */}
        <Link
          href="/#projects"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 backdrop-blur-xl transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Projects
        </Link>

        {/* HERO */}
        <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* IMAGE */}
          <div className="group relative">
            <div className="absolute -inset-3 rounded-3xl bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-blue-500/20" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080b11] shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b]/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* INFORMATION */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-500 sm:text-sm">
              Featured Project
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/10 bg-blue-500/5 px-3 py-1.5 text-xs font-medium text-blue-300 transition hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW + FEATURES */}
        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          {/* OVERVIEW */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl lg:col-span-2 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-500">
              Overview
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              About this project
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              {project.description}
            </p>
          </div>

          {/* FEATURES */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-500">
              Features
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              What it does
            </h2>

            <div className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs text-blue-400">
                    ✓
                  </span>

                  <span className="text-sm leading-6 text-gray-400">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-500">
            Tech Stack
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Technologies used
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* BACK TO PROJECTS */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/#projects"
            className="text-sm text-gray-500 transition hover:text-blue-400"
          >
            ← Explore more projects
          </Link>
        </div>
      </div>
    </main>
  );
}