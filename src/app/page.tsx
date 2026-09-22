import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FallingStars from "./components/FallingStars";
import BackgroundMusic from "./components/BackgroundMusic";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-[#05070b]">
        <FallingStars />
        <BackgroundMusic />
        <div className="relative z-10">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>


      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 text-sm text-gray-600 sm:flex-row">
          <p>
            © 2026 Azqal. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}