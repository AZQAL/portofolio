export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Turning ideas into digital products.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-lg leading-9 text-gray-400">
              I'm a Full Stack Developer passionate about building
              modern web applications. I enjoy turning ideas and
              designs into functional, responsive, and user-friendly
              digital experiences.
            </p>

            <p className="mt-6 leading-8 text-gray-500">
              My focus is writing clean code, creating intuitive
              interfaces, and building applications that are fast,
              maintainable, and scalable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="mt-2 text-sm text-gray-500">
                Projects Built
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="mt-2 text-sm text-gray-500">
                Technologies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="mt-2 text-sm text-gray-500">
                Passion
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="mt-2 text-sm text-gray-500">
                Learning
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}