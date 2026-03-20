"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

const localeLabels: Record<string, string> = { cs: "CS", en: "EN", de: "DE" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t("howItWorks"), href: "/" as const },
    { label: t("about"), href: "/o-mne" as const },
    { label: t("services"), href: "/sluzby" as const },
    { label: t("contact"), href: "/kontakt" as const },
  ];

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
    setLangOpen(false);
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
        <Link href="/" className="text-white font-semibold text-lg tracking-tight">
          František Stejskal
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href ? "text-white" : "text-[oklch(0.65_0_0)] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[oklch(0.60_0_0)] hover:text-white text-sm px-2 py-1.5 rounded-lg hover:bg-[oklch(0.15_0_0)] transition-colors"
            >
              {localeLabels[currentLocale]}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-[oklch(0.12_0_0)] border border-[oklch(0.22_0_0)] rounded-lg overflow-hidden shadow-xl">
                {Object.entries(localeLabels).map(([locale, label]) => (
                  <button
                    key={locale}
                    onClick={() => switchLocale(locale)}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      locale === currentLocale
                        ? "text-white bg-[oklch(0.55_0.22_260/0.15)]"
                        : "text-[oklch(0.65_0_0)] hover:text-white hover:bg-[oklch(0.18_0_0)]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setLangOpen(!langOpen)} className="text-[oklch(0.60_0_0)] text-sm px-2 py-1">
            {localeLabels[currentLocale]}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1 flex flex-col gap-1.5" aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-current transition-all origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {langOpen && (
        <div className="md:hidden bg-[oklch(0.10_0_0)] border-t border-[oklch(0.22_0_0)] flex">
          {Object.entries(localeLabels).map(([locale, label]) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                locale === currentLocale ? "text-white bg-[oklch(0.55_0.22_260/0.15)]" : "text-[oklch(0.65_0_0)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.10_0_0)] border-t border-[oklch(0.22_0_0)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[oklch(0.65_0_0)] hover:text-white transition-colors py-1">
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="inline-flex justify-center bg-[oklch(0.55_0.22_260)] text-white text-sm font-medium px-4 py-2.5 rounded-lg">
            {t("cta")}
          </Link>
        </div>
      )}
    </header>
  );
}
