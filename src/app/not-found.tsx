import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070b] px-4 text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Glow kiri */}
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Glow tengah */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[150px]" />

        {/* Glow kanan */}
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-3xl text-center">

        {/* 404 */}
        <div className="relative mx-auto w-fit">

          {/* Shadow 404 */}
          <span className="select-none text-[140px] font-black leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[220px]">
            404
          </span>

          {/* Main 404 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-[90px] font-black leading-none tracking-[-0.08em] text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.2)] sm:text-[150px]">
              404
            </span>
          </div>

        </div>

        {/* CARD */}
        <div className="mx-auto -mt-5 max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:-mt-8 sm:p-10">

          {/* Badge */}
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

            Error 404
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
            Halaman yang kamu cari tidak ditemukan. Mungkin URL-nya salah
            atau halaman tersebut sudah dipindahkan.
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              Back to Home
            </Link>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
            >
              View Projects
              <span>↗</span>
            </Link>

          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-gray-600">
          <span className="h-px w-10 bg-white/10 sm:w-16" />

          <span>Azqal • Full Stack Developer</span>

          <span className="h-px w-10 bg-white/10 sm:w-16" />
        </div>

      </div>
    </main>
  );
}