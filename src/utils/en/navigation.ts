// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Equipment", url: "/products" },
  { name: "Purchasing Method", url: "/#methode" },
  { name: "Contact", url: "/contact" },
];

// An array of links for footer
const footerLinks = [
  {
    section: "Teranga Trade And Logistics",
    links: [
      { name: "Home", url: "/" },
      { name: "Equipment", url: "/products" },
      { name: "Purchasing Method", url: "/#methode" },
    ],
  },
  {
    section: "Contact",
    links: [
      { name: "Request a Quote", url: "/contact" },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: "",
  x: "",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};