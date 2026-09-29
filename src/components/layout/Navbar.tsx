"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavbarProps = {
  hasDoorAccess: boolean;
  isLoggedIn: boolean;
};

export default function Navbar({
  hasDoorAccess,
  isLoggedIn,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Sembunyikan Navbar di halaman login dan admin
  const hideNavbar =
    pathname.startsWith("/admin") ||
    pathname === "/login" ||
    pathname.startsWith("/auth/login");

  if (hideNavbar) {
    return null;
  }

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#05070b]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          AZQAL<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Admin Login */}
        {hasDoorAccess && (
          <Link
            href={isLoggedIn ? "/admin" : "/auth/login"}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Admin Login
          </Link>
        )}

        {/* Let's Talk */}
        <a
          href="#contact"
          className="hidden rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white md:block"
        >
          Let's Talk
        </a>

        {/* Let's Join */}
        <a
          href="/JOIN"
          className="hidden rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white md:block"
        >
          LET'S JOIN!!
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#05070b] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-400 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            {/* Admin Login Mobile */}
            {hasDoorAccess && (
              <Link
                href="/auth/login"
                onClick={() => setOpen(false)}
                className="text-blue-400 transition hover:text-blue-300"
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}