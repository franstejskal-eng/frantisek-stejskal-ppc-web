import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Služby – František Stejskal PPC Specialista",
  description:
    "Google Ads, Meta Ads, automatizovaný reporting v Looker Studiu, UX konzultace a SEO poradenství. Komplexní správa PPC kampaní.",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Google Ads",
    subtitle: "Search · Shopping · Display · YouTube",
    description:
      "Komplexní správa Google Ads kampaní – od strategie a nastavení po průběžnou optimalizaci. Zaměřuji se na reálné výsledky: zakázky, objednávky a tržby – ne jen na kliknutí.",
    bullets: [
      "Search kampaně cílené na klíčová slova s vysokým záměrem",
      "Shopping kampaně pro e-commerce s optimalizací feedu",
      "Display a YouTube pro budování povědomí o značce",
      "Nastavení a správa Google Analytics a Merchant Center",
      "Conversion tracking a měření výsledků",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: "Meta Ads",
    subtitle: "Facebook · Instagram",
    description:
      "Správa reklam na Facebooku a Instagramu s důrazem na správnou cílovou skupinu, kreativu a optimalizaci pro konverze. Pomáhám firmám oslovit zákazníky tam, kde tráví čas.",
    bullets: [
      "Nastavení a optimalizace reklamních kampaní",
      "Tvorba a testování různých kreativ a copy",
      "Retargeting a lookalike audience strategie",
      "Správa Meta Pixel a Conversion API",
      "A/B testování pro maximální výkon",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Automatizovaný reporting",
    subtitle: "Looker Studio · Google Analytics",
    description:
      "Přehledné dashboardy v Looker Studiu, které vám dají kompletní přehled o výkonu kampaní v reálném čase. Žádné tabulky plné čísel – jen to, co potřebujete vědět.",
    bullets: [
      "Přehledné dashboardy na míru vašemu byznysu",
      "Automatická aktualizace dat v reálném čase",
      "Propojení Google Ads, Meta Ads, Analytics a dalších zdrojů",
      "Měsíční komentovaný report s doporučeními",
      "Přístup kdykoliv z prohlížeče, bez nutnosti instalace",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UX konzultace",
    subtitle: "Konverzní optimalizace",
    description:
      "Nejlepší kampaně nepomůžou, pokud web nekonvertuje. Pomáhám identifikovat slabá místa na webu a navrhovat změny, které zvýší konverze bez nutnosti zvyšovat rozpočet.",
    bullets: [
      "Analýza uživatelského chování na webu",
      "Identifikace míst, kde zákazníci odcházejí",
      "Doporučení pro optimalizaci landing pages",
      "A/B testování klíčových prvků stránky",
      "Spolupráce s vaším webovým týmem",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    title: "SEO poradenství",
    subtitle: "Organický výkon",
    description:
      "PPC a SEO se navzájem doplňují. Pomáhám klientům pochopit, jak jejich placené a organické kampaně fungují dohromady, a navrhuji strategii pro dlouhodobý růst.",
    bullets: [
      "Technický SEO audit webu",
      "Analýza klíčových slov pro organický traffic",
      "Doporučení obsahu a struktury webu",
      "Propojení PPC a SEO strategie",
      "Monitoring pozic a organického výkonu",
    ],
  },
];

export default function SluzbyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-[oklch(0.08_0_0)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,oklch(0.20_0.12_260/0.20),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-5">
              Služby
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
              Co pro vás mohu udělat
            </h1>
            <p className="text-[oklch(0.62_0_0)] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Pomáhám firmám vydělávat více z jejich reklamního rozpočtu. Od správy
              kampaní přes reporting až po optimalizaci webu.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
            >
              Domluvit konzultaci zdarma
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-[oklch(0.10_0_0)]">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-8 lg:p-10 hover:border-[oklch(0.55_0.22_260/0.25)] transition-colors duration-300 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                } lg:flex gap-10 items-start`}
              >
                {/* Icon + title */}
                <div className="lg:w-72 shrink-0 mb-6 lg:mb-0">
                  <div className="w-14 h-14 bg-[oklch(0.55_0.22_260/0.12)] border border-[oklch(0.55_0.22_260/0.25)] rounded-xl flex items-center justify-center text-[oklch(0.65_0.18_260)] mb-5">
                    {service.icon}
                  </div>
                  <h2 className="text-white font-bold text-2xl mb-1">{service.title}</h2>
                  <p className="text-[oklch(0.50_0.10_260)] text-sm">{service.subtitle}</p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-[oklch(0.62_0_0)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-[oklch(0.55_0.22_260)] rounded-full mt-2 shrink-0" />
                        <span className="text-[oklch(0.65_0_0)] text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[oklch(0.08_0_0)]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Nevíte, kde začít?
            </h2>
            <p className="text-[oklch(0.60_0_0)] mb-8 max-w-lg mx-auto">
              Probereme váš byznys a doporučím, co bude pro vás nejvíce smysluplné.
              Konzultace je zdarma a bez závazků.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Chci konzultaci zdarma
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
