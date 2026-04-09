import { ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  items: string[];
  cta: string;
  href: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: "dermatology",
    eyebrow: "Dermatology",
    title: "Caring for Your Skin's Health",
    description:
      "From routine skin checks and chronic condition management, our board-certified dermatologists are here for every stage of your skin health.",
    image: "/assets/generated/services-dermatology.dim_800x600.jpg",
    items: [
      "Acne",
      "Eczema",
      "Psoriasis",
      "Hair Conditions",
      "Pediatric Dermatology",
      "Scars and Lesions",
    ],
    cta: "View all conditions",
    href: "#dermatology",
  },
  {
    id: "skin-cancer",
    eyebrow: "Skin Cancer",
    title: "Care That Supports Your Journey",
    description:
      "Our specialists are experienced in identifying and treating all types of skin cancer, with in-house pathology and Mohs surgery capabilities.",
    image: "/assets/generated/services-skin-cancer.dim_800x600.jpg",
    items: [
      "Skin Cancer Screenings",
      "Basal Cell Carcinoma",
      "Squamous Cell Carcinoma",
      "Melanoma",
      "Actinic Keratosis",
      "Mohs Surgery",
    ],
    cta: "Learn about skin cancer care",
    href: "#skin-cancer",
  },
  {
    id: "aesthetics",
    eyebrow: "Aesthetic Services",
    title: "Loving the Skin You're In",
    description:
      "Our licensed medical providers offer advanced aesthetic care rooted in dermatology — from subtle injections to skin rejuvenation, always personalized.",
    image: "/assets/generated/services-aesthetics-new.dim_800x600.jpg",
    items: [
      "Botox & Wrinkle Relaxers",
      "Filler",
      "Laser & Light Treatments",
      "HydraFacial & Chemical Peels",
      "Microneedling",
      "Body Contouring",
    ],
    cta: "Explore aesthetic services",
    href: "#aesthetics",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-muted/30"
      data-ocid="services-section"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-lg font-display text-foreground mb-5">
            Skin Care That Suits Your Unique Needs
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive dermatology, skin cancer, and aesthetic services — all
            in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-card overflow-hidden card-hover border border-border group flex flex-col"
              data-ocid={`service-card-${service.id}`}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5">
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-brand-blue px-3 py-1.5">
                    {service.eyebrow}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-brand-blue transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service list */}
                <ul className="space-y-2 mb-8 flex-1">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-body text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-brand-blue text-sm font-body font-semibold group/link mt-auto"
                  data-ocid={`service-cta-${service.id}`}
                >
                  {service.cta}{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
