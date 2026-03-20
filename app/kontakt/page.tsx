import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Kontakt – František Stejskal PPC Specialista",
  description:
    "Domluvte si bezplatnou konzultaci. Napište mi a do 48 hodin se ozvím zpět.",
};

const contactOptions = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "E-mail",
    value: "info@frantisekstejskal.cz",
    href: "mailto:info@frantisekstejskal.cz",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/frantisek-stejskal",
    href: "https://linkedin.com/in/frantisek-stejskal",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 min-h-screen bg-[oklch(0.08_0_0)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_30%,oklch(0.20_0.12_260/0.15),transparent_60%)]" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left – contact info */}
              <div>
                <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-5">
                  Kontakt
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Pojďme si promluvit
                </h1>
                <p className="text-[oklch(0.62_0_0)] text-lg leading-relaxed mb-10">
                  Napište mi – rád probereme váš byznys, kampaně a zjistíme,
                  kde máte prostor k růstu. Konzultace je zdarma a bez závazků.
                  Odpovím do 48 hodin.
                </p>

                {/* Contact options */}
                <div className="space-y-4 mb-12">
                  {contactOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      target={option.href.startsWith("http") ? "_blank" : undefined}
                      rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] hover:border-[oklch(0.55_0.22_260/0.35)] rounded-xl p-5 transition-colors duration-200 group"
                    >
                      <div className="w-11 h-11 bg-[oklch(0.55_0.22_260/0.12)] border border-[oklch(0.55_0.22_260/0.25)] rounded-lg flex items-center justify-center text-[oklch(0.65_0.18_260)] shrink-0 group-hover:bg-[oklch(0.55_0.22_260/0.20)] transition-colors">
                        {option.icon}
                      </div>
                      <div>
                        <div className="text-[oklch(0.50_0_0)] text-xs mb-0.5">{option.label}</div>
                        <div className="text-white text-sm font-medium">{option.value}</div>
                      </div>
                      <svg className="w-4 h-4 text-[oklch(0.40_0_0)] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ))}
                </div>

                {/* Trust signals */}
                <div className="border-t border-[oklch(0.15_0_0)] pt-8 space-y-3">
                  {[
                    "Odpovím do 48 hodin",
                    "Konzultace je zdarma a bez závazků",
                    "Přes 70 spokojených klientů",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[oklch(0.65_0.18_260)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-[oklch(0.62_0_0)] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – photo */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.22_260/0.10),transparent_65%)] blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.20_0_0)] max-w-md">
                  <Image
                    src="/hero.png"
                    alt="František Stejskal"
                    width={480}
                    height={560}
                    className="object-cover w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.08_0_0)] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
