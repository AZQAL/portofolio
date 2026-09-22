export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-white/5"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Let's build something
          <span className="gradient-text"> great.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-500">
          Have a project, idea, or opportunity? Feel free to reach
          out. I'm always interested in building something useful
          and meaningful.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <a
            href="mailto:azqalrpl@gmail.com"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Send Me an Email
          </a>

          <a
            href="https://www.instagram.com/sxqall.exe?stkn=OGcycnc2a3Ntanoy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            Instagram
          </a>

        </div>

      </div>
    </section>
  );
}