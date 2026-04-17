export const COMPANY = {
  name: "Pro Built Construction Inc.",
  shortName: "Pro Built",
  tagline: "Built on Integrity. Driven by Results.",
  phone: "307-687-7526",
  phoneTel: "tel:+13076877526",
  email: "info@probuiltwy.com",
  address: "5358 Hitt Blvd",
  city: "Gillette",
  state: "WY",
  zip: "82718",
  fullAddress: "5358 Hitt Blvd, Gillette, WY 82718",
  founded: 1991,
  yearsInBusiness: "33+",
  projectsCompleted: "500+",
  employees: "20-49",
  owner: "Bryan Miller",
  ownerTitle: "Owner & Founder",
  url: "https://probuilt-construction.vercel.app",
  social: {
    facebook: "https://www.facebook.com/ProBuiltHomesIncAndPerfectPainting/",
    linkedin: "https://www.linkedin.com/company/pro-built-homes-inc/",
    gmb: "https://www.google.com/maps/place/Pro+Built+Homes+Inc/data=!4m2!3m1!1s0x0:0x3c07ad6767987c1e",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90458!2d-105.56!3d44.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c07ad6767987c1e!2sPro%20Built%20Homes%20Inc!5e0!3m2!1sen!2sus!4v1",
} as const;

export const SERVICES = [
  {
    slug: "new-construction",
    num: "01",
    title: "New Construction",
    short: "Commercial & Residential · Design/Build · Custom Homes",
    description:
      "From custom homes and spec builds to commercial buildings and room additions — we handle every phase from design through completion. One team, one agreement, one standard.",
    features: [
      "Commercial & residential",
      "Custom home builds",
      "Design/Build services",
      "Room additions",
      "Framing & structural",
      "Decks & outdoor structures",
    ],
    image: "/images/custom-home-framing.webp",
    heroImage: "/images/custom-home-exterior.webp",
    gallery: ["/images/custom-home-framing.webp", "/images/custom-home-exterior.webp", "/images/hero-wide.webp"],
    keywords: "new construction Gillette Wyoming, custom home builder, design build contractor WY",
  },
  {
    slug: "remodeling",
    num: "02",
    title: "Remodeling & Additions",
    short: "Renovations · Additions · Demolition · Interior Upgrades",
    description:
      "Full home renovations, room additions, and interior upgrades. We handle demolition, structural changes, and everything through final finish — bringing tired spaces back to life.",
    features: [
      "Remodels & additions",
      "Demolition",
      "Interior & exterior paint",
      "Drywall & texture",
      "Flooring installation",
      "Gutters & roofs",
    ],
    image: "/images/remodeling.webp",
    heroImage: "/images/remodel-bathroom.webp",
    gallery: ["/images/remodeling.webp", "/images/remodel-bathroom.webp", "/images/remodel-kitchen.webp"],
    keywords: "home remodeling Gillette Wyoming, room additions, renovation contractor WY",
  },
  {
    slug: "concrete",
    num: "03",
    title: "Concrete & Foundations",
    short: "Foundations · Flatwork · Driveways · Stamped & Broom Finish",
    description:
      "Commercial-grade mix design, reinforced prep, and a finish that holds up to Wyoming freeze-thaw. Foundations, flatwork, driveways, sidewalks, and decorative concrete.",
    features: [
      "Foundations & footings",
      "Flatwork & slabs",
      "Residential driveways",
      "Concrete finishing",
      "Framing",
      "Demo & replacement",
    ],
    image: "/images/concrete-pour.webp",
    heroImage: "/images/concrete-finished.webp",
    gallery: ["/images/concrete-pour.webp", "/images/concrete-finished.webp", "/images/concrete.webp"],
    keywords: "concrete contractor Gillette Wyoming, foundation contractor, driveway replacement WY",
  },
  {
    slug: "kitchen-bath",
    num: "04",
    title: "Kitchen & Bath",
    short: "Cabinets · Counters · Tile · Custom Installations",
    description:
      "Complete kitchen and bathroom renovations — from cabinet and counter installation to tile work, plumbing fixtures, and custom finishes. We transform the rooms that matter most.",
    features: [
      "Cabinet & counter installation",
      "Custom cabinetry",
      "Tile & shower installation",
      "Plumbing fixture upgrades",
      "Countertop fabrication",
      "Full design assistance",
    ],
    image: "/images/remodel-kitchen.webp",
    heroImage: "/images/remodel-kitchen.webp",
    gallery: ["/images/remodel-kitchen.webp", "/images/remodel-bathroom.webp"],
    keywords: "kitchen remodel Gillette Wyoming, bathroom renovation, cabinet installation WY",
  },
  {
    slug: "financing",
    num: "05",
    title: "Financing Available",
    short: "Flexible Payment Plans · Qualified Projects · Apply Today",
    description:
      "Need a new driveway, a kitchen remodel, or concrete work done now but want to pay over time? We offer financing options for qualified homeowners and commercial customers. Apply now and get started faster than you think.",
    features: [
      "Flexible payment plans",
      "Residential & commercial",
      "Quick application process",
      "Competitive rates",
      "No penalty for early payoff",
      "Ask us for details",
    ],
    image: "/images/blueprints-planning.webp",
    heroImage: "/images/blueprints-planning.webp",
    gallery: ["/images/blueprints-planning.webp", "/images/custom-home-exterior.webp"],
    keywords: "construction financing Gillette Wyoming, payment plans contractor WY",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Showed up when they said. Poured clean. Cleaned up. My driveway looks better than the neighbors' — and they paid twice as much.",
    name: "Mark D.",
    role: "Homeowner · Gillette",
    initial: "M",
  },
  {
    quote:
      "We've used Pro Built for three seasons of snow contracts. They answer the phone at 3am. That's the whole pitch.",
    name: "Sarah K.",
    role: "Property Manager",
    initial: "S",
  },
  {
    quote:
      "Honest quote, honest work. They told me what I didn't need, not just what would pad the bill. Rare around here.",
    name: "Dan R.",
    role: "Contractor · Wright",
    initial: "D",
  },
  {
    quote:
      "Outstanding! Does not cut corners, has an eye for style!",
    name: "Nancy N.",
    role: "Homeowner · Gillette",
    initial: "N",
  },
  {
    quote:
      "Pro Built Homes has consistently performed above expectations.",
    name: "Darren H.",
    role: "Commercial Client",
    initial: "D",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Consult & Scope",
    description:
      "A real conversation with a real operator. We visit the site, listen to your goals, and give you an honest read on what the job takes.",
  },
  {
    num: "02",
    title: "Transparent Quote",
    description:
      "No filler, no surprise line items. We put every cost in writing so you can compare us apples-to-apples against anyone else.",
  },
  {
    num: "03",
    title: "Prep & Build",
    description:
      "Our crew shows up on time, keeps the site clean, and does the prep work right — because prep is 80% of what makes a job last.",
  },
  {
    num: "04",
    title: "Walk & Warranty",
    description:
      "Final walk-through with you on-site. Everything to spec, or we fix it. We back our work because we stand behind it.",
  },
] as const;

export const SERVICE_AREAS = [
  "Gillette, WY",
  "Wright, WY",
  "Moorcroft, WY",
  "Newcastle, WY",
  "Sundance, WY",
  "Sheridan, WY",
  "Ranchester, WY",
  "Casper, WY",
  "Cheyenne, WY",
  "+ Surrounding Areas",
] as const;
