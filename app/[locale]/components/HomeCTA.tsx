import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomeCTA() {
  const t = useTranslations("homeCta");

  return (
    <section className="py-24 bg-[oklch(0.08_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden bg-[oklch(0.12_0_0)] border border-[oklch(0.55_0.22_260/0.25)] rounded-3xl p-10 lg:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,oklch(0.55_0.22_260/0.08),transparent_70%)]" />
          <div className="relative">
            <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-5">
              {t("sectionLabel")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight max-w-2xl mx-auto">
              {t("headline")}
            </h2>
            <p className="text-[oklch(0.60_0_0)] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
              >
                {t("ctaPrimary")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/o-mne"
                className="inline-flex items-center justify-center gap-2 text-[oklch(0.65_0_0)] hover:text-white border border-[oklch(0.22_0_0)] hover:border-[oklch(0.35_0_0)] px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
