import { useTranslations } from "next-intl";

const successIcons = [
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>,
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
];

export default function ResultsSection() {
  const t = useTranslations("results");

  const successItems = [
    { title: t("success1Title"), description: t("success1Desc") },
    { title: t("success2Title"), description: t("success2Desc") },
    { title: t("success3Title"), description: t("success3Desc") },
  ];

  const failureItems = [t("fail1"), t("fail2"), t("fail3")];

  return (
    <section id="vysledky" className="py-24 bg-[oklch(0.10_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            {t("headline")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[oklch(0.55_0_0)] text-xs uppercase tracking-widest mb-5">{t("withOptimized")}</p>
            {successItems.map((item, i) => (
              <div key={item.title} className="flex gap-4 bg-[oklch(0.55_0.22_260/0.07)] border border-[oklch(0.55_0.22_260/0.2)] rounded-xl p-5">
                <div className="w-10 h-10 bg-[oklch(0.55_0.22_260/0.15)] rounded-lg flex items-center justify-center text-[oklch(0.65_0.18_260)] shrink-0">
                  {successIcons[i]}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-[oklch(0.58_0_0)] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="h-full w-px bg-[oklch(0.18_0_0)] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[oklch(0.10_0_0)] border border-[oklch(0.22_0_0)] rounded-full w-10 h-10 flex items-center justify-center text-[oklch(0.45_0_0)] text-xs font-medium">
                vs
              </div>
            </div>
          </div>
          <div className="lg:hidden border-t border-[oklch(0.18_0_0)] my-4" />

          <div className="lg:col-span-1">
            <p className="text-[oklch(0.55_0_0)] text-xs uppercase tracking-widest mb-5">{t("withoutChange")}</p>
            <div className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-xl p-5 space-y-4">
              {failureItems.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[oklch(0.55_0.20_30)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-[oklch(0.55_0_0)] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
