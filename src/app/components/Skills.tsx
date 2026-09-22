const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "REST API",
      "Supabase",
      "MySQL",
      "MariaDB",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-y border-white/5 bg-white/[0.015]"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-white/10 bg-[#080b11] p-7"
            >
              <h3 className="text-lg font-semibold text-white">
                {skill.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition hover:border-blue-500/30 hover:text-blue-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}