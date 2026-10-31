/**
 * All website copy lives here so text and images can be updated without
 * touching layout code. Swedish copy, tone inspired by softainterior.se.
 *
 */

export const brand = {
  name: "Softa Interiör",
  initial: "S",
  tagline: "Skandinaviska hemtextilier",
};

export const nav = [
  { id: "story", number: "02", label: "Om oss" },
  { id: "development", number: "03", label: "Produktutveckling" },
  { id: "collections", number: "04", label: "Kollektioner" },
  { id: "sustainability", number: "05", label: "Hållbarhet" },
  { id: "private-label", number: "06", label: "B2B / Profilprodukter" },
];

export const hero = {
  number: "01",
  badge: "Familjeägt sedan 1999",
  title: "Textilier, framtagna för ert sortiment.",
  lead: "Skandinaviska hemtextilier, utvecklade med erfarenhet, nyfikenhet och en passion för god design.",
  body: "I mer än fyra decennier har vi arbetat med hemtextilier och byggt långvariga relationer med kunder och fabriker världen över. Idag förenar vi vår erfarenhet med ett modernt skandinaviskt perspektiv för att utveckla produkter anpassade för ert sortiment, era kunder och er marknad.",
  image: {
    src: "/images/textile-1.jpg",
    alt: "Ljust vardagsrum med en vit linnesoffa, kuddar i terrakotta och beige, en stor jutematta och flätade korgar.",
  },
};

export const statement = {
  lines: ["Vi kan textil.", "Ni känner era kunder."],
  kicker: "Tillsammans skapar vi produkter som hör hemma i ert sortiment.",
  paragraphs: [
    "Från första idé till färdig produkt arbetar vi nära våra kunder för att ta fram textilier som förenar design, kvalitet och kommersiell dragningskraft.",
    "Oavsett om ni söker en säsongskollektion, tidlösa basprodukter eller något helt nytt hjälper vi er att förvandla en idé till en produkt.",
  ],
  image: {
    src: "/images/weaving.jpg",
    alt: "En vävare i vit rock väver en blå matta med fransar i en handvävstol.",
  },
};

export const story = {
  number: "02",
  eyebrow: "Vår historia",
  title: "Ett familjeföretag.",
  subtitle: "En lång historia inom textil.",
  paragraphs: [
    "Det som började som ett familjeföretag 1999 har vuxit till en pålitlig partner inom utveckling av hemtextilier.",
    "Genom åren har trender skiftat, marknader förändrats och material utvecklats. Det som bestått är vårt sätt att arbeta: nära relationer, gedigen produktkunskap och ett personligt engagemang i varje kollektion vi skapar.",
  ],
  image: {
    src: "/images/story.jpg",
    alt: "Besök i en leverantörs showroom där mattor i rutmönster visas upp för oss.",
  },
};

export const development = {
  number: "03",
  eyebrow: "Produktutveckling",
  title: "Från idé till produkt.",
  body: "Vi arbetar nära våra kunder genom hela processen – från första idé och färgriktning till material, provtagning och slutlig produktion.",
  steps: [
    {
      number: "01",
      label: "Design",
      note: "Första idé och färgriktning.",
      image: {
        src: "/images/embroidery.jpg",
        alt: "En hantverkare broderar blommor för hand på rosa sammet.",
      },
    },
    {
      number: "02",
      label: "Utveckling",
      note: "Material, kvalitet och konstruktion.",
      image: {
        src: "/images/handwork.jpg",
        alt: "En hantverkare arbetar för hand med broderade linnetextilier.",
      },
    },
    {
      number: "03",
      label: "Inköp",
      note: "Långsiktiga produktionspartner.",
      image: {
        src: "/images/showroom.jpg",
        alt: "Ett stort showroom fyllt med mattor i olika mönster och staplar av textilier.",
      },
    },
    {
      number: "04",
      label: "Produktion",
      note: "Provtagning och slutlig produktion.",
      image: {
        src: "/images/packing.jpg",
        alt: "Medarbetare hos en av våra produktionspartner kontrollerar och packar färdiga textilier.",
      },
    },
  ],
};

export const collections = {
  number: "04",
  eyebrow: "Kollektioner",
  title: "Kuddar · Mattor · Plädar · Sängkläder · Gardiner · Frotté · Badrockar · Kökstextil · Bädd · Överkast",
  body: "Vi gör allt inom hemtextil – från kuddar och mattor till frotté, badrockar och kökstextil.",
  categories: ["Kuddar", "Mattor", "Plädar", "Sängkläder", "Gardiner"],
  more: ["Frotté", "Badrockar", "Kökstextil", "Bädd", "Överkast"],
  images: [
    {
      src: "/images/textile-7.jpg",
      alt: "Minimalistiskt vardagsrum med en dagbädd i trä, neutrala linnekuddar, en flätad golvkudde och en jutematta.",
      span: "tall" as const,
    },
    {
      src: "/images/textile-8.jpg",
      alt: "Matrum med ett runt träbord, trästolar med ljusa dynor och en rödvitrutig matta.",
      span: "wide" as const,
    },
    {
      src: "/images/textile-9.jpg",
      alt: "Texturerad geometrisk matta i brunt och gräddvitt i ett minimalistiskt rum med träpallar.",
      span: "wide" as const,
    },
  ],
};

export const sustainability = {
  number: "05",
  eyebrow: "Ansvarsfull produktion",
  title: "Ansvarsfull produktion.",
  subtitle: "Ansvarsfull produktion är en del av hur vi arbetar.",
  paragraphs: [
    "Vi tror att vackra textilier ska tillverkas med lika stor omsorg om människor som om miljön.",
    "Därför arbetar vi med noggrant utvalda, långsiktiga produktionspartner som delar vårt engagemang för ansvarsfull tillverkning och ständigt arbetar för att förbättra sina miljömässiga och sociala standarder.",
    "Våra leverantörer har internationellt erkända certifieringar inom bland annat ekologiska och återvunna material, textilsäkerhet, miljöansvar och social hållbarhet.",
  ],
  closing: "För oss är hållbarhet inte en trend. Det är en del av att driva företag ansvarsfullt.",
  note: "Vi arbetar med noggrant utvalda produktionspartner som uppfyller höga krav på miljöansvar, social hållbarhet och produktsäkerhet.",
  certificationsImage: {
    src: "/images/textile-10.jpg",
    alt: "Certifieringar som våra leverantörer innehar: AENOR ISO 9001, GOTS, Fairtrade, Global Recycled Standard, OEKO-TEX Standard 100 och Better Cotton Initiative.",
  },
  certifications: [
    "AENOR ISO 9001",
    "GOTS",
    "Fairtrade",
    "Global Recycled Standard",
    "OEKO-TEX Standard 100",
    "Better Cotton Initiative",
  ],
};

export const privateLabel = {
  number: "06",
  eyebrow: "B2B / Profilprodukter",
  title: "Från ert varumärke till en produkt man vill behålla.",
  paragraphs: [
    "Vi tar fram skräddarsydda textilprodukter med er logotyp, i tryck eller brodyr – perfekt som presentartiklar, give-aways och marknadsföringsprodukter.",
    "Tillsammans hittar vi rätt produkt, material och uttryck för ert varumärke.",
    "Tack vare våra direkta relationer med fabrikerna går produkterna direkt från fabrik till kund utan mellanhänder – enkelt och effektivt.",
  ],
  points: [
    "Er logotyp i tryck eller brodyr",
    "Rätt produkt, material och uttryck för ert varumärke",
    "Direkta relationer med våra fabriker",
    "Direkt från fabrik till kund, utan mellanhänder",
  ],
};

export const contact = {
  number: "07",
  eyebrow: "Kontakt",
  title: "Kontakta oss.",
  body: "Berätta om ert varumärke, ert sortiment och er marknad – så tar vi det därifrån. Kontakta oss för information om priser och kvantiteter.",
  details: [
    { label: "Adress", value: "Softa Interiör AB, Gathes v. 80, 439 36 Onsala", href: null },
  ],
  people: [
    { name: "Frida Aalvik", phone: "0709-85 47 63", phoneHref: "tel:+46709854763", email: "frida@softainterior.se" },
  ],
};
