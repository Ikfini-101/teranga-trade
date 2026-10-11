const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Équipements", url: "/products" },
  { name: "Méthode d'achat", url: "/#methode" },
  { name: "Contact", url: "/contact" },
];

const footerLinks = [
  {
    section: "Teranga Trade And Logistics",
    links: [
      { name: "Accueil", url: "/" },
      { name: "Équipements", url: "/products" },
      { name: "Méthode d'achat", url: "/#methode" },
    ],
  },
  {
    section: "Contact",
    links: [
      { name: "Demander un devis", url: "/contact" },
    ],
  },
  {
    section: "Informations légales",
    links: [
      { name: "Mentions légales", url: "/mentions-legales" },
      { name: "Données & Confidentialité", url: "/mentions-legales#donnees-personnelles" },
    ],
  },
];

const socialLinks = {
  facebook: "",
  x: "",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};