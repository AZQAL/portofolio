"use client";

import Aurora from "./Aurora";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05070b]"
    >
      {/* ================= AURORA ================= */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#2563eb", "#6366f1", "#06b6d4"]}
          amplitude={1.2}
          blend={0.8}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#05070b]/55" />

      {/* Grid */}
      {/* <div className="grid-background absolute inset-0 z-[2] opacity-60" /> */}

      {/* Existing glow */}
      <div className="absolute left-1/2 top-1/3 z-[2] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 pt-20 sm:px-6">
        <div className="grid w-full grid-cols-2 items-center gap-5 sm:gap-8 md:gap-12 lg:gap-16">
          {/* ================================================== */}
          {/* LEFT - TEXT */}
          {/* ================================================== */}
          <div className="min-w-0">
            {/* Availability */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[9px] text-blue-400 backdrop-blur-sm sm:mb-5 sm:px-3.5 sm:py-2 sm:text-[10px] md:px-4 md:text-xs lg:mb-6 lg:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2" />

              <span className="whitespace-nowrap">
                Available for opportunities
              </span>
            </div>

            {/* Hello */}
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-[10px] sm:tracking-[0.25em] md:text-xs lg:mb-3 lg:text-sm lg:tracking-[0.3em]">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Azqal
              <span className="text-blue-500">.</span>
            </h1>

            {/* Job */}
            <h2 className="gradient-text mt-2 text-sm font-bold leading-tight sm:mt-3 sm:text-lg md:text-2xl lg:mt-4 lg:text-3xl">
              Full Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-xl text-[10px] leading-5 text-gray-400 sm:mt-4 sm:text-xs sm:leading-6 md:mt-5 md:text-sm md:leading-7 lg:mt-6 lg:text-lg lg:leading-8">
              I build modern, responsive, and scalable web applications using
              modern technologies and clean user interfaces.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-7 lg:mt-9 lg:gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-3 py-2 text-[9px] font-semibold text-white transition hover:bg-blue-500 sm:px-4 sm:py-2.5 sm:text-[10px] md:px-5 md:py-3 md:text-xs lg:px-7 lg:py-3.5 lg:text-sm"
              >
                View My Projects →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-3 py-2 text-[9px] font-semibold text-gray-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/5 hover:text-white sm:px-4 sm:py-2.5 sm:text-[10px] md:px-5 md:py-3 md:text-xs lg:px-7 lg:py-3.5 lg:text-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT - PROFILE */}
          {/* ================================================== */}
          <div className="flex min-w-0 justify-center md:justify-end">
            <div className="relative animate-[float_4s_ease-in-out_infinite]">
              {/* Profile glow */}
              <div className="absolute -inset-3 rounded-[25px] bg-blue-500/20 blur-xl sm:-inset-4 sm:rounded-[30px] lg:-inset-5 lg:rounded-[40px] lg:blur-2xl" />

              {/* ================= PROFILE CARD ================= */}
              <div className="glow relative h-[260px] w-[190px] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-sm sm:h-[320px] sm:w-[230px] sm:rounded-[26px] md:h-[370px] md:w-[280px] md:rounded-[30px] lg:h-[450px] lg:w-[350px] lg:rounded-[32px]">
                {/* ================= PHOTO HOVER ================= */}
                <div className="group relative h-full w-full">
                  {/* Photo 1 */}
                  <img
                    src="/images/profile.jpeg"
                    alt="Azqal"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                  />

                  {/* Photo 2 */}
                  <img
                    src="/images/profile2.jpeg"
                    alt="Azqal"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent p-3 pt-14 sm:p-4 sm:pt-20 md:p-5 md:pt-24 lg:p-6 lg:pt-24">
                    <p className="text-[9px] text-gray-400 sm:text-[10px] md:text-xs lg:text-sm">
                      Building digital experiences
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white sm:text-sm md:text-lg lg:mt-1 lg:text-xl">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* ================= END PHOTO ================= */}
              </div>

              {/* ================= EXPERIENCE ================= */}
              <div className="absolute -right-2 top-5 rounded-xl border border-white/10 bg-[#0b0f17]/80 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:-right-3 sm:top-7 sm:px-3 sm:py-2.5 md:-right-4 md:top-8 md:px-3.5 lg:-right-5 lg:top-10 lg:rounded-2xl lg:px-4 lg:py-3">
                <p className="text-[8px] text-gray-500 sm:text-[9px] md:text-[10px] lg:text-xs">
                  Experience
                </p>

                <p className="text-[9px] font-semibold text-white sm:text-[10px] md:text-xs lg:text-sm">
                  Web Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}