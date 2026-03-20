import Image from "next/image";

const credentials = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Google certifikace",
    description: "Certifikovaný specialista Google Ads",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    label: "200M+ Kč",
    description: "Spravovaný rozpočet kampaní",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "70+ projektů",
    description: "Zkušenosti z různých oborů",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
      </svg>
    ),
    label: "Od roku 2019",
    description: "Více než 6 let v oboru",
  },
];

const services = [
  "Google Ads (Search, Shopping, Display, YouTube)",
  "Meta Ads (Facebook & Instagram)",
  "Automatizovaný reporting v Looker Studiu",
  "UX konzultace a optimalizace konverzí",
  "SEO poradenství",
];

export default function GuideSection() {
  return (
    <section id="o-mne" className="py-24 bg-[oklch(0.10_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-16 text-center">
          Průvodce
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.55_0.22_260/0.12),transparent_60%)]" />
            <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.20_0_0)]">
              <Image
                src="/frantisek-4.jpg"
                alt="František Stejskal"
                width={560}
                height={640}
                className="object-cover w-full"
              />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-5 -right-5 bg-[oklch(0.12_0_0)] border border-[oklch(0.22_0_0)] rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[oklch(0.55_0.22_260/0.15)] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[oklch(0.65_0.18_260)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Google certifikát</div>
                  <div className="text-[oklch(0.55_0_0)] text-xs">Certifikovaný specialista</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right – content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Vím, jak bolí platit za reklamy,{" "}
              <span className="text-[oklch(0.65_0.18_260)]">které nepřináší výsledky</span>
            </h2>
            <p className="text-[oklch(0.60_0_0)] text-lg leading-relaxed mb-6">
              Od roku 2019 pomáhám firmám z desítek oborů dostat z jejich
              reklamního rozpočtu maximum. Přes 70 projektů mi dalo přesné
              čidlo pro to, co funguje a co jsou jen hezky vypadající čísla.
            </p>
            <p className="text-[oklch(0.60_0_0)] leading-relaxed mb-8">
              Nejen že nastavím a spravuji kampaně – vždy víte přesně, co se
              děje. Automatizovaný reporting v Looker Studiu zajistí, že máte
              data v reálném čase, srozumitelně a přehledně.
            </p>

            {/* Credential grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-start gap-3 bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-xl p-4"
                >
                  <div className="text-[oklch(0.65_0.18_260)] mt-0.5 shrink-0">
                    {cred.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{cred.label}</div>
                    <div className="text-[oklch(0.55_0_0)] text-xs mt-0.5">{cred.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div>
              <p className="text-[oklch(0.55_0_0)] text-xs uppercase tracking-widest mb-3">
                S čím pomáhám
              </p>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2.5 text-[oklch(0.70_0_0)] text-sm">
                    <span className="w-1.5 h-1.5 bg-[oklch(0.55_0.22_260)] rounded-full shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
