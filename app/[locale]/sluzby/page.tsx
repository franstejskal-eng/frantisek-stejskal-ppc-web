import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

const serviceIcons = [
  <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" /></svg>,
  <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>,
  <svg key="3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>,
  <svg key="4" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  <svg key="5" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>,
];

export default async function SluzbyPage() {
  const t = await getTranslations("services");

  const services = [
    { title: t("s1Title"), subtitle: t("s1Subtitle"), bullets: [t("s1b1"), t("s1b2"), t("s1b3"), t("s1b4"), t("s1b5")] },
    { title: t("s2Title"), subtitle: t("s2Subtitle"), bullets: [t("s2b1"), t("s2b2"), t("s2b3"), t("s2b4"), t("s2b5")] },
    { title: t("s3Title"), subtitle: t("s3Subtitle"), bullets: [t("s3b1"), t("s3b2"), t("s3b3"), t("s3b4"), t("s3b5")] },
    { title: t("s4Title"), subtitle: t("s4Subtitle"), bullets: [t("s4b1"), t("s4b2"), t("s4b3"), t("s4b4"), t("s4b5")] },
    { title: t("s5Title"), subtitle: t("s5Subtitle"), bullets: [t("s5b1"), t("s5b2"), t("s5b3"), t("s5b4"), t("s5b5")] },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-[oklch(0.08_0_0)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,oklch(0.20_0.12_260/0.20),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-5">{t("sectionLabel")}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">{t("headline")}</h1>
            <p className="text-[oklch(0.62_0_0)] text-lg leading-relaxed max-w-2xl mx-auto mb-10">{t("description")}</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200">
              {t("cta")}
            </Link>
          </div>
        </section>

        <section className="py-24 bg-[oklch(0.10_0_0)]">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            {services.map((service, i) => (
              <div key={service.title} className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-8 lg:p-10 hover:border-[oklch(0.55_0.22_260/0.25)] transition-colors duration-300 lg:flex gap-10 items-start">
                <div className="lg:w-72 shrink-0 mb-6 lg:mb-0">
                  <div className="w-14 h-14 bg-[oklch(0.55_0.22_260/0.12)] border border-[oklch(0.55_0.22_260/0.25)] rounded-xl flex items-center justify-center text-[oklch(0.65_0.18_260)] mb-5">
                    {serviceIcons[i]}
                  </div>
                  <h2 className="text-white font-bold text-2xl mb-1">{service.title}</h2>
                  <p className="text-[oklch(0.50_0.10_260)] text-sm">{service.subtitle}</p>
                </div>
                <div className="flex-1">
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

        <section className="py-16 bg-[oklch(0.08_0_0)]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("ctaHeadline")}</h2>
            <p className="text-[oklch(0.60_0_0)] mb-8 max-w-lg mx-auto">{t("ctaDesc")}</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200">
              {t("ctaBtn")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
