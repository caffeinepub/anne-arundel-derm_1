import { MapPin, Phone } from "lucide-react";
import { NAV_ITEMS } from "../constants";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const quickLinks = NAV_ITEMS.slice(0, 3).map((n) => ({
    label: n.label,
    href: n.href,
  }));
  const patientLinks = [
    { label: "Patient Portal", href: "#patient-portal" },
    { label: "Pay My Bill", href: "#pay-bill" },
    { label: "Request a Refill", href: "#refill" },
    { label: "New Patients", href: "#new-patients" },
    { label: "FAQs", href: "#faqs" },
    { label: "Insurance", href: "#insurance" },
  ];
  const aboutLinks = [
    { label: "Our Story", href: "#about" },
    { label: "Our Providers", href: "#providers" },
    { label: "Locations", href: "#locations" },
    { label: "Careers", href: "#careers" },
    { label: "Press & News", href: "#news" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-brand-dark text-white" data-ocid="site-footer">
      {/* Top Strip */}
      <div className="bg-brand-blue py-5">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl font-bold text-white">
            Expert Skin Care Close to Home
          </p>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-3 text-sm font-body font-bold uppercase tracking-wider hover:bg-white/90 transition-colors duration-200"
            data-ocid="footer-schedule-cta"
          >
            Schedule Your Appointment
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img
                src="/assets/logo.png"
                alt="Anne Arundel Dermatology"
                className="h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const next = e.currentTarget.nextSibling as HTMLElement;
                  if (next) next.style.display = "block";
                }}
              />
              <span className="hidden font-display text-xl font-bold text-white leading-tight">
                Anne Arundel
                <br />
                <span className="text-sm font-body font-semibold tracking-widest uppercase text-white/60">
                  Dermatology
                </span>
              </span>
            </a>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-6">
              Comprehensive dermatology care from board-certified experts.
              Medical, surgical, and aesthetic services across 50+ convenient
              locations.
            </p>
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-blue" />
              <span>Maryland · Virginia · Pennsylvania · Florida</span>
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm mt-3">
              <Phone className="w-4 h-4 flex-shrink-0 text-brand-blue" />
              <a
                href="tel:18887332256"
                className="hover:text-white transition-colors"
              >
                1-888-733-2256
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-body text-xs font-bold uppercase tracking-[0.15em] mb-6 border-b border-white/10 pb-3">
              Services
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm font-body transition-colors duration-150"
                    data-ocid={`footer-services-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="text-white font-body text-xs font-bold uppercase tracking-[0.15em] mb-6 border-b border-white/10 pb-3">
              Patient Resources
            </h4>
            <ul className="space-y-2.5">
              {patientLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm font-body transition-colors duration-150"
                    data-ocid={`footer-patient-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-body text-xs font-bold uppercase tracking-[0.15em] mb-6 border-b border-white/10 pb-3">
              About Us
            </h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm font-body transition-colors duration-150"
                    data-ocid={`footer-about-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-white/40">
          <p>© {year} Anne Arundel Dermatology. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white/70 transition-colors">
              Terms of Use
            </a>
            <a
              href="#accessibility"
              className="hover:text-white/70 transition-colors"
            >
              Accessibility
            </a>
          </div>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
