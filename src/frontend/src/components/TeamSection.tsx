import { ArrowRight } from "lucide-react";

interface Provider {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
}

const TEAM: Provider[] = [
  {
    id: "p1",
    name: "Dr. Sarah Johnson, MD",
    title: "Board-Certified Dermatologist",
    specialty: "Medical & Surgical Dermatology",
    bio: "Specializing in medical and surgical dermatology with 15+ years of experience treating a wide range of skin conditions.",
    image: "/assets/generated/provider-female-dermatologist.dim_600x800.jpg",
  },
  {
    id: "p2",
    name: "Dr. Michael Chen, MD",
    title: "Board-Certified Dermatologist",
    specialty: "Mohs Surgery & Skin Cancer",
    bio: "Expert in skin cancer detection and Mohs micrographic surgery, dedicated to precision and patient-centered outcomes.",
    image: "/assets/generated/provider-male-dermatologist.dim_600x800.jpg",
  },
  {
    id: "p3",
    name: "Lisa Thompson, PA-C",
    title: "Physician Assistant",
    specialty: "Aesthetic & Cosmetic Dermatology",
    bio: "Specializing in aesthetic procedures and cosmetic dermatology with a focus on natural, personalized results.",
    image: "/assets/generated/provider-pa-female.dim_600x800.jpg",
  },
];

export function TeamSection() {
  return (
    <section
      id="providers"
      className="section-padding bg-muted/30"
      data-ocid="team-section"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-blue font-body text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Our Team
          </p>
          <h2 className="text-display-lg font-display text-foreground mb-5">
            The Experts Behind Your Care
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Our team includes board-certified dermatologists, physician
            assistants, nurse practitioners, and licensed aesthetic providers.
          </p>
        </div>

        {/* Provider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((provider) => (
            <div
              key={provider.id}
              className="flex flex-col items-center text-center group"
              data-ocid={`provider-card-${provider.id}`}
            >
              {/* Circular Photo */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-border group-hover:ring-brand-blue transition-all duration-300">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {provider.name}
              </h3>
              <p className="font-body text-sm font-semibold text-brand-blue uppercase tracking-wider mb-1">
                {provider.title}
              </p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-4">
                {provider.specialty}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
                {provider.bio}
              </p>
              <a
                href={`#provider-${provider.id}`}
                className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-body font-semibold hover:underline underline-offset-4"
                data-ocid={`provider-profile-${provider.id}`}
              >
                View Profile{" "}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#providers"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue px-10 py-4 text-sm font-body font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors duration-200"
            data-ocid="meet-all-providers"
          >
            Meet All Providers <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
