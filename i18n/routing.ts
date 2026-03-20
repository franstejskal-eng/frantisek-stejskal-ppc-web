import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["cs", "en", "de"],
  defaultLocale: "cs",
  pathnames: {
    "/": "/",
    "/o-mne": {
      cs: "/o-mne",
      en: "/about",
      de: "/ueber-mich",
    },
    "/sluzby": {
      cs: "/sluzby",
      en: "/services",
      de: "/leistungen",
    },
    "/kontakt": {
      cs: "/kontakt",
      en: "/contact",
      de: "/kontakt",
    },
  },
});
