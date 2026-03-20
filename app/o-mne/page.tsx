import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "O mně – František Stejskal PPC Specialista",
  description:
    "PPC specialista od roku 2019. Spravuji kampaně s celkovým rozpočtem přes 200 milionů Kč pro 70+ klientů. Google certifikace, Google Ads, Meta Ads.",
};

const timeline = [
  {
    year: "2019",
    title: "Začátek v PPC",
    description:
      "Začal jsem se naplno věnovat PPC kampaním a budovat portfolio prvních klientů.",
  },
  {
    year: "2021",
    title: "Rozšíření na Meta Ads",
    description:
      "Přidal jsem ke Google Ads správu Facebook a Instagram kampaní a rozšířil služby o přesahy do UX a SEO.",
  },
  {
    year: "2023",
    title: "Automatizovaný reporting",
    description:
      "Zavedl jsem automatizované reporty v Looker Studiu – klienti mají výsledky přehledně v reálném čase.",
  },
  {
    year: "2024",
    title: "200 milionů Kč",
    description:
      "Překročil jsem hranici 200 milionů Kč spravovaného rozpočtu napříč více než 70 projekty.",
  },
];

const values = [
  {
    title: "Transparentnost",
    description:
      "Vždy víte přesně, kde jsou vaše peníze a co přinášejí. Žádné skryté náklady ani nepřehledné reporty.",
  },
  {
    title: "Výsledky nad čísly",
    description:
      "Nestačí mi hezky vypadající CTR. Zajímá mě, jestli kampaně přinášejí skutečné zakázky a tržby.",
  },
  {
    title: "Dlouhodobé partnerství",
    description:
      "Nechci rychlé projekty. Chci klienty, se kterými mohu růst, optimalizovat a dosahovat stále lepších výsledků.",
  },
];

export default function OmnePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-[oklch(0.08_0_0)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,oklch(0.20_0.12_260/0.20),transparent_70%)]" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-5">
                  O mně
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Jsem František Stejskal, PPC specialista
                </h1>
                <p className="text-[oklch(0.62_0_0)] text-lg leading-relaxed mb-6">
                  Od roku 2019 pomáhám firmám dostat z jejich reklamního rozpočtu maximum.
                  Pracoval jsem na více než 70 projektech z různých oborů – od e-commerce
                  přes služby až po B2B.
                </p>
                <p className="text-[oklch(0.62_0_0)] leading-relaxed mb-8">
                  Nestačí mi nastavit kampaně a nechat je běžet. Průběžně optimalizuji,
                  testuji a hledám, kde je prostor k růstu. Každý klient dostane
                  přehledný reporting, aby vždy věděl, co se děje s jeho investicí.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
                >
                  Domluvit konzultaci
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.22_260/0.12),transparent_65%)] blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.20_0_0)] max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  <Image
                    src="/frantisek-4.jpg"
                    alt="František Stejskal"
                    width={480}
                    height={560}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-[oklch(0.10_0_0)] border-y border-[oklch(0.15_0_0)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "2019", label: "Rok začátku" },
                { value: "70+", label: "Projektů" },
                { value: "200M+", label: "Kč spravovaného rozpočtu" },
                { value: "Google", label: "Certifikovaný specialista" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-[oklch(0.52_0_0)] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-[oklch(0.08_0_0)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-4">
                Cesta
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Jak jsem se dostal tam, kde jsem
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[oklch(0.18_0_0)] hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="md:flex gap-8 items-start">
                    <div className="hidden md:flex shrink-0 w-12 h-12 bg-[oklch(0.55_0.22_260/0.15)] border border-[oklch(0.55_0.22_260/0.30)] rounded-xl items-center justify-center text-[oklch(0.65_0.18_260)] font-bold text-sm z-10 relative">
                      {item.year}
                    </div>
                    <div className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-6 flex-1">
                      <div className="md:hidden text-[oklch(0.55_0.22_260)] text-sm font-semibold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-[oklch(0.58_0_0)] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[oklch(0.10_0_0)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-4">
                Hodnoty
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Na čem mi záleží
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-7 hover:border-[oklch(0.55_0.22_260/0.30)] transition-colors duration-300"
                >
                  <h3 className="text-white font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-[oklch(0.58_0_0)] text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[oklch(0.08_0_0)]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Chcete se o mně dozvědět více?
            </h2>
            <p className="text-[oklch(0.60_0_0)] mb-8">
              Napište mi – rád se potkám a probereme vaše kampaně.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Domluvit konzultaci zdarma
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
