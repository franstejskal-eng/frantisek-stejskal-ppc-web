import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,oklch(0.20_0.12_260/0.25),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_100%,oklch(0.15_0.08_260/0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260/0.15)] border border-[oklch(0.55_0.22_260/0.35)] text-[oklch(0.70_0.18_260)] text-xs font-medium px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-[oklch(0.70_0.18_260)] rounded-full animate-pulse" />
              {t("badge")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              {t("headline1")}{" "}
              <span className="text-[oklch(0.55_0.22_260)]">{t("headlineAccent")}</span>
              <br />
              {t("headline2")}
            </h1>

            <p className="text-lg text-[oklch(0.65_0_0)] leading-relaxed mb-10 max-w-lg">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
              >
                {t("ctaPrimary")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/o-mne"
                className="inline-flex items-center justify-center gap-2 text-[oklch(0.65_0_0)] hover:text-white border border-[oklch(0.22_0_0)] hover:border-[oklch(0.35_0_0)] px-6 py-3.5 rounded-xl transition-all duration-200 text-sm"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-[oklch(0.18_0_0)] grid grid-cols-3 gap-6">
              {[
                { value: t("stat1Value"), label: t("stat1Label") },
                { value: t("stat2Value"), label: t("stat2Label") },
                { value: t("stat3Value"), label: t("stat3Label") },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-[oklch(0.55_0_0)] leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.22_260/0.20),transparent_70%)] blur-2xl scale-110" />
              <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.20_0.06_260/0.4)] shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="František Stejskal – PPC Specialista"
                  width={560}
                  height={620}
                  className="object-cover w-full max-w-[480px] lg:max-w-full"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.08_0_0)] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.08_0_0)] to-transparent" />
    </section>
  );
}
