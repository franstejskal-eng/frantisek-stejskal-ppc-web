import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

export default async function OmnePage() {
  const t = await getTranslations("about");

  const timeline = [
    { year: t("t1Year"), title: t("t1Title"), description: t("t1Desc") },
    { year: t("t2Year"), title: t("t2Title"), description: t("t2Desc") },
    { year: t("t3Year"), title: t("t3Title"), description: t("t3Desc") },
    { year: t("t4Year"), title: t("t4Title"), description: t("t4Desc") },
  ];

  const values = [
    { title: t("v1Title"), description: t("v1Desc") },
    { title: t("v2Title"), description: t("v2Desc") },
    { title: t("v3Title"), description: t("v3Desc") },
  ];

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
                  {t("sectionLabel")}
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  {t("headline")}
                </h1>
                <p className="text-[oklch(0.62_0_0)] text-lg leading-relaxed mb-6">{t("p1")}</p>
                <p className="text-[oklch(0.62_0_0)] leading-relaxed mb-8">{t("p2")}</p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
                >
                  {t("cta")}
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.22_260/0.12),transparent_65%)] blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.20_0_0)] max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  <Image src="/frantisek-4.jpg" alt="František Stejskal" width={480} height={560} className="object-cover w-full" />
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
                { value: t("stat1Value"), label: t("stat1Label") },
                { value: t("stat2Value"), label: t("stat2Label") },
                { value: t("stat3Value"), label: t("stat3Label") },
                { value: t("stat4Value"), label: t("stat4Label") },
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
                {t("timelineLabel")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t("timelineHeadline")}
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
                      <div className="md:hidden text-[oklch(0.55_0.22_260)] text-sm font-semibold mb-2">{item.year}</div>
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
                {t("valuesLabel")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{t("valuesHeadline")}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-7 hover:border-[oklch(0.55_0.22_260/0.30)] transition-colors duration-300">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("ctaHeadline")}</h2>
            <p className="text-[oklch(0.60_0_0)] mb-8">{t("ctaDesc")}</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              {t("ctaBtn")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
