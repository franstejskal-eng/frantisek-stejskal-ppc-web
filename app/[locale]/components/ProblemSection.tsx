import { useTranslations } from "next-intl";

const icons = [
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

export default function ProblemSection() {
  const t = useTranslations("problem");

  const problems = [
    { title: t("card1Title"), description: t("card1Desc") },
    { title: t("card2Title"), description: t("card2Desc") },
    { title: t("card3Title"), description: t("card3Desc") },
  ];

  return (
    <section className="py-24 bg-[oklch(0.08_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {t("headline")}
          </h2>
          <p className="text-[oklch(0.60_0_0)] text-lg leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-6 hover:border-[oklch(0.25_0_0)] transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[oklch(0.55_0.22_260/0.12)] border border-[oklch(0.55_0.22_260/0.25)] rounded-xl flex items-center justify-center text-[oklch(0.65_0.18_260)] mb-5">
                {icons[i]}
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{problem.title}</h3>
              <p className="text-[oklch(0.60_0_0)] text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[oklch(0.12_0_0)] border border-[oklch(0.18_0_0)] rounded-2xl p-8 text-center">
          <p className="text-white text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            &ldquo;{t("quote")}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
