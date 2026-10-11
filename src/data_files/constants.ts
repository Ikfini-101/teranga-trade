import ogImageSrc from "@images/og_teranga_1200x630.jpg";

export const SITE = {
  title: "Teranga Trade And Logistics",
  tagline: "Votre partenaire logistique & négoce international Europe — Afrique",
  description: "Centrale d'achat européenne et opérateur de négoce international au service des professionnels d'Afrique de l'Ouest : autocars, matériel BTP et équipements agricoles.",
  description_short: "Centrale d'achat européenne et négoce international : autocars, matériel BTP et équipements agricoles.",
  url: "https://teranga-trade.pages.dev",
  author: "Teranga Trade And Logistics",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} — Partenaire Logistique & Négoce International Europe — Afrique`,
  description: SITE.description,
  image: ogImageSrc,
};

export interface Partner {
  icon: string;
  name: string;
  href: string;
}

export const partnersData: Partner[] = [];

export const CONTACT = {
  email: "contact@teranga-trade-logistics.com",
  whatsapp: "",
};