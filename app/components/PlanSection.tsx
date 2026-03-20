const steps = [
  {
    number: "01",
    title: "Bezplatná konzultace",
    description:
      "Projdeme vaše aktuální kampaně, identifikujeme kde přicházíte o peníze a co konkrétně funguje. Dostanete jasný přehled se zjištěními – bez závazků.",
    cta: null,
  },
  {
    number: "02",
    title: "Strategie a nastavení na míru",
    description:
      "Na základě konzultace navrhnu strategii přesně pro váš byznys a cílovou skupinu. Nastavíme kampaně, tracking a automatizovaný reporting v Looker Studiu.",
    cta: null,
  },
  {
    number: "03",
    title: "Optimalizace a jasné výsledky",
    description:
      "Kampaně průběžně optimalizuji a každý měsíc dostanete přehledný report. Vždy víte, kolik jste investovali a co vám to přineslo.",
    cta: null,
  },
];

export default function PlanSection() {
  return (
    <section id="plan" className="py-24 bg-[oklch(0.08_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-4">
            Plán spolupráce
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Tři jednoduché kroky ke kampanám, které vydělávají
          </h2>
          <p className="text-[oklch(0.60_0_0)] text-lg leading-relaxed">
            Bez zbytečné složitosti. Přesně víte, co se kdy stane.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.22_260/0.4)] to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-8 h-full hover:border-[oklch(0.55_0.22_260/0.35)] transition-colors duration-300 group">
                  {/* Number bubble */}
                  <div className="w-12 h-12 bg-[oklch(0.55_0.22_260)] rounded-xl flex items-center justify-center mb-6 text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
                    {step.number}
                  </div>

                  <h3 className="text-white font-semibold text-xl mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[oklch(0.58_0_0)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4 text-[oklch(0.35_0_0)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA below steps */}
        <div className="mt-14 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
          >
            Chci konzultaci zdarma
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-[oklch(0.45_0_0)] text-sm mt-3">
            Bez závazků. Bezplatně. Do 48 hodin odpovím.
          </p>
        </div>
      </div>
    </section>
  );
}
