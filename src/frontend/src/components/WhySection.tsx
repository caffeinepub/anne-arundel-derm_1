import {
  Award,
  Calendar,
  FlaskConical,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  heading: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: Award,
    heading: "Board-Certified Expertise",
    description:
      "Our dermatologists are board certified and nationally recognized for excellence in medical, surgical, and aesthetic care.",
  },
  {
    icon: MapPin,
    heading: "Connected Community of Practices",
    description:
      "60+ locations across seven states, locally focused but backed by the resources of a national network.",
  },
  {
    icon: Star,
    heading: "Skin Health & Beauty Under One Roof",
    description:
      "An integrated care model for medical, surgical, and aesthetic needs — all in one coordinated team.",
  },
  {
    icon: FlaskConical,
    heading: "In-House Pathology & Research",
    description:
      "Expertise-based answers from dermatopathology capabilities and active clinical research programs.",
  },
  {
    icon: Sparkles,
    heading: "Aesthetics Backed by Dermatology",
    description:
      "Licensed medical aesthetic providers working alongside your dermatologist for safe, effective results.",
  },
  {
    icon: Calendar,
    heading: "Same-Week Appointments",
    description:
      "Flexible scheduling across 60+ locations so you can get prompt, expert care when you need it.",
  },
];

export function WhySection() {
  return (
    <section
      id="why"
      className="section-padding bg-background"
      data-ocid="why-section"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-display-lg font-display text-foreground mb-6">
            Care That Starts With You
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Your skin is personal. So is our care. We're a network of
            dermatologists, providers, and specialists who believe great skin
            care starts with genuinely knowing our patients.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.heading}
              className="bg-card border border-border p-8 group hover:border-brand-blue hover:shadow-lg transition-all duration-300 card-hover"
              data-ocid={`why-card-${feature.heading.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 bg-brand-blue/8 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <feature.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors duration-200">
                {feature.heading}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
