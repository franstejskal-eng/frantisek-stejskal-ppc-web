import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function PlanSection() {
  const t = useTranslations("plan");

  const steps = [
    { number: "01", title: t("step1Title"), description: t("step1Desc") },
    { number: "02", title: t("step2Title"), description: t("step2Desc") },
    { number: "03", title: t("step3Title"), description: t("step3Desc") },
  ];

  return (
    <section id="plan" className="py-24 bg-[oklch(0.08_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            {t("headline")}
          </h2>
          <p className="text-[oklch(0.60_0_0)] text-lg leading-relaxed">{t("description")}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.22_260/0.4)] to-transparent" />
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-8 h-full hover:border-[oklch(0.55_0.22_260/0.35)] transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-[oklch(0.55_0.22_260)] rounded-xl flex items-center justify-center mb-6 text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
                    {step.number}
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-4 leading-snug">{step.title}</h3>
                  <p className="text-[oklch(0.58_0_0)] text-sm leading-relaxed">{step.description}</p>
                </div>
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

        <div className="mt-14 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
          >
            {t("cta")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-[oklch(0.45_0_0)] text-sm mt-3">{t("ctaNote")}</p>
        </div>
      </div>
    </section>
  );
}
