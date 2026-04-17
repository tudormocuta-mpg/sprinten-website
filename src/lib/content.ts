export const content = {
  brand: {
    name: "SPRINTEN",
    tagline: "Sprinten tu... sprinteni și ei",
    mpgTag: "UN PROIECT MPG",
  },
  nav: {
    items: [
      { label: "Despre proiect", href: "#despre" },
      { label: "Principii", href: "#principii" },
      { label: "MPG", href: "#mpg" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Scrie-ne",
    ctaHref: "#contact",
  },
  hero: {
    titlePrefix: "Sprinten tu...",
    titleEmphasis: "sprinteni și ei",
    titleSuffix: ".",
    description:
      "Când alergi sau pedalezi — o faci și pentru copiii care nu pot încă. Sportul ca instrument de incluziune.",
    ctaLabel: "Descoperă",
    ctaHref: "#despre",
    scrollHint: "scroll pentru poveste",
    photoAlt: "Moment de bucurie prin mișcare — copil susținut cu brațele întinse",
  },
  despre: {
    number: "01",
    label: "Despre",
    titlePrefix: "Un proiect care trăiește ",
    titleEmphasis: "prin mișcare",
    titleSuffix: ".",
    paragraphs: [
      "SPRINTEN este un proiect dedicat copiilor cu dizabilități locomotorii din medii defavorizate. Credem că sportul amator este o punte — între oameni, între lumi, între ce e și ce poate deveni.",
      "Cei care alergăm sau pedalăm nu facem mișcare doar pentru noi. O facem cu gândul la copiii care, într-o zi, ar trebui să poată face la fel.",
    ],
  },
  principii: {
    number: "02",
    label: "Principii",
    titlePrefix: "Trei idei care ne ",
    titleEmphasis: "țin în mișcare",
    titleSuffix: ".",
    items: [
      {
        number: "01",
        accent: "terracotta" as const,
        title: "Incluziune",
        description:
          "Sportul șterge diferențele. Oricine poate face parte dintr-o comunitate activă — indiferent de punctul de pornire.",
      },
      {
        number: "02",
        accent: "teal" as const,
        title: "Comunitate",
        description:
          "Mișcarea e mai puternică împreună. Fiecare cursă amatori e o ocazie să fim unii cu ceilalți.",
      },
      {
        number: "03",
        accent: "brown" as const,
        title: "Bucurie",
        description:
          "Fiecare pas contează. Nu distanța definește participarea, ci intenția din spatele ei.",
      },
    ],
  },
  mpg: {
    number: "03",
    label: "Legătura cu MPG",
    titlePrefix: "Un proiect născut din ",
    titleEmphasis: "evenimente sportive",
    titleSuffix: ".",
    paragraph:
      "SPRINTEN este un proiect conex al evenimentelor sportive organizate de echipa MPG. Credem în puterea sportului amator de a genera schimbare reală — și asta e felul nostru de a contribui.",
    ctaLabel: "Vizitează MPG",
    linkText: "mpg.com.ro",
    linkHref: "https://mpg.com.ro",
  },
  contact: {
    number: "04",
    label: "Contact",
    titlePrefix: "Ne ",
    titleEmphasis: "scrii",
    titleSuffix: "?",
    paragraph:
      "Pentru orice întrebare legată de SPRINTEN sau de evenimentele noastre.",
    email: "events@mpg.com.ro",
  },
  footer: {
    copyright: "© 2026 SPRINTEN",
    attributionPrefix: "un proiect ",
    attributionLinkText: "MPG",
    attributionLinkHref: "https://mpg.com.ro",
  },
} as const;

export type PrincipiuAccent = (typeof content.principii.items)[number]["accent"];
