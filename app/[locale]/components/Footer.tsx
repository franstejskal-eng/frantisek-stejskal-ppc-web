import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[oklch(0.14_0_0)] bg-[oklch(0.08_0_0)] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">František Stejskal</p>
            <p className="text-[oklch(0.45_0_0)] text-sm mt-0.5">{t("role")}</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-[oklch(0.45_0_0)]">
            <a href="mailto:info@frantisekstejskal.cz" className="hover:text-white transition-colors">
              info@frantisekstejskal.cz
            </a>
            <a href="https://linkedin.com/in/frantisek-stejskal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-[oklch(0.35_0_0)] text-sm">© {currentYear} František Stejskal</p>
        </div>
      </div>
    </footer>
  );
}
