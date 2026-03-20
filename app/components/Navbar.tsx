"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Jak to funguje", href: "/#plan" },
    { label: "O mně", href: "/o-mne" },
    { label: "Služby", href: "/sluzby" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.08_0_0/0.95)] backdrop-blur-md border-b border-[oklch(0.22_0_0)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-tight"
        >
          František Stejskal
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-[oklch(0.65_0_0)] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/kontakt"
          className="hidden md:inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Konzultace zdarma
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : "mb-1.5"}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : "mb-1.5"}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.10_0_0)] border-t border-[oklch(0.22_0_0)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors py-1 ${
                isActive(link.href)
                  ? "text-white font-medium"
                  : "text-[oklch(0.65_0_0)] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="inline-flex justify-center bg-[oklch(0.55_0.22_260)] text-white text-sm font-medium px-4 py-2.5 rounded-lg"
          >
            Konzultace zdarma
          </Link>
        </div>
      )}
    </header>
  );
}
