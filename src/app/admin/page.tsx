"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import {
  Pie,
  PieChart,
  Cell,
} from "recharts";

import { createClient } from "@/lib/supabase/client";
import DeleteProjectButton from "@/features/projects/components/DeleteProjectButton";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string;
  features: string;
};

// Warna chart
const chartColors = [
  "#3b82f6",
  "#06b6d4",
  "#6366f1",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const chartConfig = {
  count: {
    label: "Project",
  },
} satisfies ChartConfig;

export default function AdminPage() {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // ========================================
  // AMBIL DATA PROJECT DARI SUPABASE
  // ========================================

  useEffect(() => {
    async function getProjects() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("project")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Gagal mengambil project:", error);
        setLoading(false);
        return;
      }

      setProjects(data || []);
      setLoading(false);
    }

    getProjects();
  }, []);

  // ========================================
  // LOGOUT
  // ========================================

  async function handleLogout() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout gagal:", error);
      return;
    }

    router.push("/login");
    router.refresh();
  }

  // ========================================
  // HITUNG TECHNOLOGY
  // ========================================

  const technologyStats = useMemo(() => {
    const counts: Record<string, number> = {};

    projects.forEach((project) => {
      project.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean)
        .forEach((tech) => {
          counts[tech] = (counts[tech] || 0) + 1;
        });
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count], index) => ({
        name,
        count,
        fill: chartColors[index % chartColors.length],
      }));
  }, [projects]);

  // ========================================
  // TOTAL TECHNOLOGY
  // ========================================

  const totalTechnologies = technologyStats.length;

  // ========================================
  // RENDER
  // ========================================

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">

      {/* ================================= */}
      {/* BACKGROUND */}
      {/* ================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute right-[-100px] top-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-150px] left-[35%] h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

      </div>

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <header className="relative z-10 border-b border-white/10 bg-[#05070b]/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          {/* LOGO */}

          <Link
            href="/admin"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
              <span className="font-black text-blue-400">
                A
              </span>
            </div>

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                Admin Panel
              </p>

              <h1 className="font-bold">
                Portfolio
                <span className="text-blue-500">
                  .
                </span>
              </h1>

            </div>

          </Link>

          {/* HEADER ACTION */}

          <div className="flex items-center gap-2">

            <Link
              href="/"
              className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-400 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white sm:block"
            >
              ← Portfolio
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-500/40 hover:bg-red-500/20"
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {/* ================================= */}
      {/* CONTENT */}
      {/* ================================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-10 lg:px-8">

        {/* TITLE */}

        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

              SYSTEM ONLINE

            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">

              Dashboard

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Admin.
              </span>

            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Kelola seluruh project portfolio melalui dashboard
              admin.
            </p>

          </div>

          {/* TAMBAH PROJECT */}

          <Link
            href="/admin/projects/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >

            <span className="text-lg">
              +
            </span>

            Tambah Project

          </Link>

        </div>

        {/* ================================= */}
        {/* STATISTICS */}
        {/* ================================= */}

        <div className="mb-6 grid gap-4 sm:grid-cols-3">

          {/* TOTAL */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">

            <p className="text-sm text-gray-500">
              Total Project
            </p>

            <p className="mt-2 text-3xl font-black">
              {loading ? "..." : projects.length}
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Project portfolio
            </p>

          </div>

          {/* AUTH */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">

            <p className="text-sm text-gray-500">
              Authentication
            </p>

            <div className="mt-2 flex items-center gap-2">

              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

              <span className="font-bold text-emerald-400">
                Active
              </span>

            </div>

            <p className="mt-1 text-xs text-gray-600">
              Supabase Auth
            </p>

          </div>

          {/* DATABASE */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">

            <p className="text-sm text-gray-500">
              Database
            </p>

            <p className="mt-2 font-bold text-cyan-400">
              Supabase
            </p>

            <p className="mt-1 text-xs text-gray-600">
              PostgreSQL
            </p>

          </div>

        </div>

        {/* ================================= */}
        {/* ANALYTICS + PROJECT */}
        {/* ================================= */}

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">

          {/* ================================= */}
          {/* DONUT CHART */}
          {/* ================================= */}

          <aside className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Analytics
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Technologies
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Penggunaan teknologi pada project.
              </p>

            </div>

            {/* CHART */}

            <div className="mx-auto mt-5 w-full max-w-[240px]">

              {technologyStats.length > 0 ? (

                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[240px]"
                >

                  <PieChart>

                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          hideLabel
                        />
                      }
                    />

                    <Pie
                      data={technologyStats}
                      dataKey="count"
                      nameKey="name"
                      innerRadius={65}
                      outerRadius={95}
                      strokeWidth={3}
                    >

                      {technologyStats.map(
                        (item, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={item.fill}
                          />
                        )
                      )}

                    </Pie>

                  </PieChart>

                </ChartContainer>

              ) : (

                <div className="flex aspect-square items-center justify-center">

                  <div className="flex h-40 w-40 items-center justify-center rounded-full border-[25px] border-white/5">

                    <span className="text-xs text-gray-600">
                      No Data
                    </span>

                  </div>

                </div>

              )}

            </div>

            {/* CENTER INFO */}

            <div className="-mt-4 text-center">

              <p className="text-3xl font-black">
                {totalTechnologies}
              </p>

              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                Technologies
              </p>

            </div>

            {/* LEGEND */}

            <div className="mt-6 space-y-3">

              {technologyStats.map(
                (technology) => (

                  <div
                    key={technology.name}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-2">

                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            technology.fill,
                        }}
                      />

                      <span className="text-xs text-gray-400">
                        {technology.name}
                      </span>

                    </div>

                    <span className="text-xs font-bold text-white">
                      {technology.count}
                    </span>

                  </div>

                )
              )}

            </div>

          </aside>

          {/* ================================= */}
          {/* PROJECT LIST */}
          {/* ================================= */}

          <section>

            <div className="mb-4 flex items-end justify-between">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Portfolio
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Semua Project
                </h3>

              </div>

              <span className="text-xs text-gray-600">
                {projects.length} Project
              </span>

            </div>

            {/* LOADING */}

            {loading && (

              <div className="space-y-3">

                {[1, 2, 3].map((item) => (

                  <div
                    key={item}
                    className="h-28 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]"
                  />

                ))}

              </div>

            )}

            {/* EMPTY */}

            {!loading &&
              projects.length === 0 && (

                <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">

                  <p className="text-gray-500">
                    Belum ada project.
                  </p>

                  <Link
                    href="/admin/projects/new"
                    className="mt-4 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Tambah Project
                  </Link>

                </div>

              )}

            {/* PROJECT ROWS */}

            {!loading &&
              projects.length > 0 && (

                <div className="space-y-3">

                  {projects.map((project) => (

                    <article
                      key={project.id}
                      className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition hover:border-blue-500/30 hover:bg-white/[0.055] sm:flex-row sm:items-center"
                    >

                      {/* IMAGE */}

                      <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl bg-[#080b11] sm:h-20 sm:w-32">

                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                      </div>

                      {/* INFORMATION */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center gap-2">

                          <span className="text-[10px] text-gray-600">
                            #{project.id}
                          </span>

                          <h4 className="truncate font-bold transition group-hover:text-blue-400">
                            {project.title}
                          </h4>

                        </div>

                        <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                          {project.description}
                        </p>

                        {/* TECHNOLOGIES */}

                        <div className="mt-2 flex flex-wrap gap-1.5">

                          {project.technologies
                            .split(",")
                            .map((tech) =>
                              tech.trim()
                            )
                            .filter(Boolean)
                            .map((tech) => (

                              <span
                                key={tech}
                                className="rounded-md border border-blue-500/10 bg-blue-500/5 px-2 py-0.5 text-[10px] text-blue-400"
                              >
                                {tech}
                              </span>

                            ))}

                        </div>

                      </div>

                      {/* ACTION */}

                      <div className="flex shrink-0 gap-2">

                        <Link
                          href={`/admin/projects/edit/${project.id}`}
                          className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-center text-xs font-semibold text-blue-400 transition hover:border-blue-500/40 hover:bg-blue-500/20"
                        >
                          Edit
                        </Link>

                        <DeleteProjectButton
                          projectId={project.id}
                        />

                      </div>

                    </article>

                  ))}

                </div>

              )}

          </section>

        </div>

      </section>

    </main>
  );
}