import type {
  Location,
  NavItem,
  Provider,
  ServiceCategory,
  Stat,
  Testimonial,
  TickerItem,
  UtilityLink,
} from "./types";

export const UTILITY_LINKS: UtilityLink[] = [
  { label: "Already a Patient?", href: "#" },
  { label: "Patient Portal", href: "#" },
  { label: "Pay My Bill", href: "#" },
  { label: "Request a Refill", href: "#" },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dermatology",
    href: "#dermatology",
    columns: [
      {
        heading: "Common Conditions",
        items: [
          { label: "Acne", href: "#" },
          { label: "Eczema", href: "#" },
          { label: "Psoriasis", href: "#" },
          { label: "Rosacea", href: "#" },
          { label: "Warts", href: "#" },
        ],
      },
      {
        heading: "Specialized Care",
        items: [
          { label: "Hair Conditions", href: "#" },
          { label: "Pediatric Dermatology", href: "#" },
          { label: "Scars and Lesions", href: "#" },
          { label: "Nail Disorders", href: "#" },
        ],
      },
      {
        heading: "",
        items: [{ label: "View All Conditions →", href: "#" }],
      },
    ],
  },
  {
    label: "Skin Cancer",
    href: "#skin-cancer",
    columns: [
      {
        heading: "Detection & Diagnosis",
        items: [
          { label: "Skin Cancer Screenings", href: "#" },
          { label: "Actinic Keratosis", href: "#" },
          { label: "Suspicious Moles", href: "#" },
        ],
      },
      {
        heading: "Types of Skin Cancer",
        items: [
          { label: "Basal Cell Carcinoma", href: "#" },
          { label: "Squamous Cell Carcinoma", href: "#" },
          { label: "Melanoma", href: "#" },
        ],
      },
      {
        heading: "Treatment",
        items: [
          { label: "Mohs Surgery", href: "#" },
          { label: "Excision", href: "#" },
          { label: "Topical Therapies", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Aesthetics",
    href: "#aesthetics",
    columns: [
      {
        heading: "Injectables",
        items: [
          { label: "Botox & Wrinkle Relaxers", href: "#" },
          { label: "Dermal Fillers", href: "#" },
          { label: "Kybella", href: "#" },
        ],
      },
      {
        heading: "Skin Treatments",
        items: [
          { label: "Laser & Light Treatments", href: "#" },
          { label: "HydraFacial & Chemical Peels", href: "#" },
          { label: "Microneedling", href: "#" },
        ],
      },
      {
        heading: "Body",
        items: [
          { label: "Body Contouring", href: "#" },
          { label: "Sclerotherapy", href: "#" },
          { label: "View All Services →", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "#locations",
    columns: [
      {
        heading: "Find Care Near You",
        items: [
          { label: "Find a Location", href: "#locations" },
          { label: "Map View", href: "#" },
          { label: "Maryland Locations", href: "#" },
          { label: "Virginia Locations", href: "#" },
          { label: "Pennsylvania Locations", href: "#" },
          { label: "Florida Locations", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Patient Resources",
    href: "#resources",
    columns: [
      {
        heading: "Patient Services",
        items: [
          { label: "Patient Portal", href: "#" },
          { label: "Pay My Bill", href: "#" },
          { label: "Request a Refill", href: "#" },
          { label: "New Patients", href: "#" },
          { label: "Frequently Asked Questions", href: "#" },
          { label: "Insurance Information", href: "#" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "#about",
    columns: [
      {
        heading: "Our Practice",
        items: [
          { label: "Our Story", href: "#about" },
          { label: "Our Providers", href: "#providers" },
          { label: "Careers", href: "#" },
          { label: "Press & News", href: "#" },
          { label: "Contact Us", href: "#" },
        ],
      },
    ],
  },
];

export const STATS: Stat[] = [
  { value: "40+", label: "Years of Excellence" },
  { value: "100+", label: "Board-Certified Providers" },
  { value: "50+", label: "Convenient Locations" },
  { value: "500K+", label: "Patients Served" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "medical",
    title: "Medical Dermatology",
    description:
      "Comprehensive diagnosis and treatment of skin conditions — from acne and eczema to complex inflammatory diseases.",
    image: "/assets/generated/services-aesthetics.dim_800x600.jpg",
    href: "#dermatology",
    services: [
      "Acne",
      "Eczema",
      "Psoriasis",
      "Rosacea",
      "Pediatric Dermatology",
    ],
  },
  {
    id: "skin-cancer",
    title: "Skin Cancer Care",
    description:
      "Advanced screening, early detection, and comprehensive treatment including Mohs micrographic surgery.",
    image: "/assets/generated/skin-cancer-screening.dim_800x600.jpg",
    href: "#skin-cancer",
    services: [
      "Annual Screenings",
      "Mohs Surgery",
      "Melanoma",
      "Basal Cell",
      "Squamous Cell",
    ],
  },
  {
    id: "aesthetics",
    title: "Aesthetic Services",
    description:
      "Rejuvenate your appearance with the latest cosmetic treatments administered by expert providers.",
    image: "/assets/generated/clinic-interior.dim_1200x800.jpg",
    href: "#aesthetics",
    services: [
      "Botox & Fillers",
      "Laser Treatments",
      "HydraFacial",
      "Microneedling",
      "Body Contouring",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Dr. Smith identified my melanoma early. The team at Anne Arundel Dermatology literally saved my life. I can't recommend them highly enough.",
    author: "Michael R.",
    location: "Annapolis, MD",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "After struggling with severe cystic acne for years, I finally found a treatment that worked. My skin has completely transformed — I feel like myself again.",
    author: "Sarah K.",
    location: "Columbia, MD",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The HydraFacial and Botox treatments have been amazing. I look refreshed and natural — not overdone. The staff always makes me feel comfortable.",
    author: "Jennifer L.",
    location: "Bowie, MD",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Professional, thorough, and genuinely caring. My eczema is under control for the first time in a decade. The doctors here are truly exceptional.",
    author: "David M.",
    location: "Glen Burnie, MD",
    rating: 5,
  },
];

export const PROVIDERS: Provider[] = [
  {
    id: "1",
    name: "Dr. Emily Carter, MD",
    title: "Board-Certified Dermatologist",
    specialty: "Medical & Surgical Dermatology",
    location: "Annapolis, MD",
    image: "/assets/generated/provider-doctor.dim_600x800.jpg",
    href: "#",
  },
  {
    id: "2",
    name: "Dr. James Wilson, MD",
    title: "Board-Certified Dermatologist",
    specialty: "Mohs Surgeon & Skin Cancer",
    location: "Columbia, MD",
    image: "/assets/generated/provider-doctor.dim_600x800.jpg",
    href: "#",
  },
  {
    id: "3",
    name: "Dr. Sarah Chen, MD",
    title: "Board-Certified Dermatologist",
    specialty: "Pediatric & Medical Dermatology",
    location: "Bowie, MD",
    image: "/assets/generated/provider-doctor.dim_600x800.jpg",
    href: "#",
  },
  {
    id: "4",
    name: "Dr. Michael Torres, MD",
    title: "Board-Certified Dermatologist",
    specialty: "Aesthetic & Cosmetic Dermatology",
    location: "Pasadena, MD",
    image: "/assets/generated/provider-doctor.dim_600x800.jpg",
    href: "#",
  },
];

export const LOCATIONS: Location[] = [
  {
    id: "1",
    name: "Annapolis",
    address: "121 Cathedral St",
    city: "Annapolis",
    state: "MD",
    phone: "(410) 263-8110",
    hours: "Mon–Fri 8am–5pm",
  },
  {
    id: "2",
    name: "Columbia",
    address: "6310 Hillside Court, Suite 200",
    city: "Columbia",
    state: "MD",
    phone: "(410) 995-8030",
    hours: "Mon–Fri 8am–5pm",
  },
  {
    id: "3",
    name: "Glen Burnie",
    address: "1 Stevens Forest Rd, Suite 200",
    city: "Glen Burnie",
    state: "MD",
    phone: "(410) 766-6400",
    hours: "Mon–Fri 8am–5pm",
  },
  {
    id: "4",
    name: "Bowie",
    address: "3300 Beaverdam Rd",
    city: "Bowie",
    state: "MD",
    phone: "(301) 805-8065",
    hours: "Mon–Fri 8am–5pm",
  },
  {
    id: "5",
    name: "Pasadena",
    address: "8109 Ritchie Hwy",
    city: "Pasadena",
    state: "MD",
    phone: "(410) 647-6439",
    hours: "Mon–Fri 8am–5pm",
  },
  {
    id: "6",
    name: "Crofton",
    address: "2411 Crofton Lane, Suite 25",
    city: "Crofton",
    state: "MD",
    phone: "(410) 721-3370",
    hours: "Mon–Fri 8am–5pm",
  },
];

export const TICKER_ITEMS: TickerItem[] = [
  { text: "Advanced Dermatology Care" },
  { text: "Board-Certified Experts" },
  { text: "Innovative Treatments" },
  { text: "Patient-Centric Approach" },
  { text: "50+ Convenient Locations" },
  { text: "Skin Cancer Specialists" },
  { text: "Aesthetic Excellence" },
  { text: "Compassionate Care" },
];
