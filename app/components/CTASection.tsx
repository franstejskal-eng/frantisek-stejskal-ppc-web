import Image from "next/image";

export default function CTASection() {
  return (
    <section id="kontakt" className="py-24 bg-[oklch(0.08_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden bg-[oklch(0.12_0_0)] border border-[oklch(0.55_0.22_260/0.25)] rounded-3xl p-10 lg:p-16">
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,oklch(0.55_0.22_260/0.08),transparent_70%)]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[oklch(0.55_0.22_260/0.06)] rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left – copy */}
            <div>
              <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-5">
                Pojďme na to
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Začněte bezplatnou konzultací
              </h2>
              <p className="text-[oklch(0.60_0_0)] text-lg leading-relaxed mb-8">
                Napište mi a do 48 hodin se ozvím zpět. Probereme váš byznys,
                kampaně a zjistíme, kde máte prostor k růstu – zdarma a bez závazků.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  "Konzultace zdarma",
                  "Zjistíte, kde máte prostor k růstu",
                  "Žádné závazky, odpovím do 48 hodin",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-[oklch(0.65_0.18_260)] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-[oklch(0.70_0_0)] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact options */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@frantisekstejskal.cz"
                  className="inline-flex items-center justify-center gap-2 bg-[oklch(0.55_0.22_260)] hover:bg-[oklch(0.65_0.20_260)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Napsat e-mail
                </a>
                <a
                  href="https://linkedin.com/in/frantisek-stejskal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[oklch(0.65_0_0)] hover:text-white border border-[oklch(0.22_0_0)] hover:border-[oklch(0.35_0_0)] px-6 py-3.5 rounded-xl transition-all duration-200 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right – photo */}
            <div className="relative hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.20_0_0)] max-w-sm mx-auto">
                <Image
                  src="/frantisek-2.jpg"
                  alt="František Stejskal"
                  width={400}
                  height={480}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
