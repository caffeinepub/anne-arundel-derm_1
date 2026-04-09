import { ChevronDown, Menu, Phone, X } from "lucide-react";
import React from "react";
import { NAV_ITEMS, UTILITY_LINKS } from "../constants";
import type { NavItem } from "../types";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(
    null,
  );
  const menuTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleMouseEnter(label: string) {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  }

  function handleMouseLeave() {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  }

  const isOnHero = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOnHero && !mobileOpen ? "bg-transparent" : "bg-white shadow-subtle"
      }`}
      data-ocid="site-header"
    >
      {/* Utility Bar */}
      <div className="bg-brand-dark text-white/70 text-xs font-body">
        <div className="container-site flex items-center justify-between h-10">
          <span className="text-white/50 hidden sm:block">
            Serving Maryland, Virginia, Pennsylvania &amp; Florida
          </span>
          <div className="flex items-center gap-1 ml-auto">
            {UTILITY_LINKS.map((link, i) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 px-2 py-1 whitespace-nowrap"
                  data-ocid={`utility-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </a>
                {i < UTILITY_LINKS.length - 1 && (
                  <span className="text-white/20" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
            <span className="text-white/20 mx-1" aria-hidden="true">
              |
            </span>
            <a
              href="#schedule"
              className="text-white font-semibold hover:text-white/80 transition-colors duration-200 px-2 py-1"
              data-ocid="utility-schedule"
            >
              Schedule Online
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`border-b transition-colors duration-300 ${
          isOnHero && !mobileOpen ? "border-white/10" : "border-border"
        }`}
      >
        <div className="container-site flex items-center h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 mr-auto" data-ocid="site-logo">
            <img
              src="/assets/logo.png"
              alt="Anne Arundel Dermatology"
              className={`h-12 w-auto object-contain transition-all duration-300 ${
                isOnHero && !mobileOpen ? "brightness-0 invert" : ""
              }`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const next = e.currentTarget.nextSibling as HTMLElement;
                if (next) next.style.display = "block";
              }}
            />
            <span
              className={`hidden font-display text-xl font-bold leading-tight ${
                isOnHero && !mobileOpen ? "text-white" : "text-brand-blue"
              }`}
            >
              Anne Arundel
              <br />
              <span className="text-sm font-body font-semibold tracking-widest uppercase">
                Dermatology
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            aria-label="Main navigation"
            onMouseLeave={handleMouseLeave}
          >
            {NAV_ITEMS.map((item: NavItem) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-body font-semibold uppercase tracking-wider transition-colors duration-200 nav-link-animated ${
                    isOnHero && !mobileOpen
                      ? "text-white hover:text-white/80"
                      : "text-brand-dark hover:text-brand-blue"
                  }`}
                  aria-expanded={activeMenu === item.label}
                  data-ocid={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                  {item.columns && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Schedule CTA */}
          <a
            href="#schedule"
            className="hidden lg:flex items-center gap-2 bg-brand-blue text-white px-6 py-3 text-sm font-body font-bold uppercase tracking-wider hover:bg-brand-blue-dark transition-colors duration-200 flex-shrink-0"
            data-ocid="header-schedule-cta"
          >
            Schedule Online
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`lg:hidden ml-4 p-2 transition-colors duration-200 ${
              isOnHero && !mobileOpen ? "text-white" : "text-brand-dark"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="mobile-menu-toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu Panels */}
      {NAV_ITEMS.map((item) =>
        item.columns && activeMenu === item.label ? (
          <div
            key={item.label}
            className="hidden lg:block mega-menu-panel animate-slide-down"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container-site py-10">
              <div
                className={`grid gap-8 ${
                  item.columns.length === 1
                    ? "grid-cols-1 max-w-xs"
                    : item.columns.length === 2
                      ? "grid-cols-2 max-w-2xl"
                      : "grid-cols-3 max-w-4xl"
                }`}
              >
                {item.columns.map((col, ci) => (
                  <div key={`col-${item.label}-${ci}`}>
                    {col.heading && (
                      <p className="text-xs font-body font-bold uppercase tracking-[0.12em] text-brand-gray mb-4 border-b border-border pb-2">
                        {col.heading}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {col.items.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            className="text-sm font-body text-brand-dark hover:text-brand-blue transition-colors duration-150 block py-1"
                            data-ocid={`mega-link-${sub.label.toLowerCase().replace(/[\s→]+/g, "-")}`}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null,
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t border-border overflow-y-auto max-h-[calc(100vh-120px)]"
          data-ocid="mobile-menu-drawer"
        >
          <div className="container-site py-4">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="border-b border-border last:border-0"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-4 text-sm font-body font-semibold uppercase tracking-wider text-brand-dark"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                  data-ocid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                  {item.columns && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.columns && mobileExpanded === item.label && (
                  <div className="pb-4 space-y-4">
                    {item.columns.map((col, ci) => (
                      <div key={`mobile-col-${item.label}-${ci}`}>
                        {col.heading && (
                          <p className="text-xs font-body font-bold uppercase tracking-wider text-brand-gray mb-2">
                            {col.heading}
                          </p>
                        )}
                        <ul className="space-y-2 ml-2">
                          {col.items.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                className="text-sm font-body text-brand-dark hover:text-brand-blue transition-colors duration-150 block py-1"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3">
              <button
                type="button"
                className="block w-full bg-brand-blue text-white text-center py-3 text-sm font-body font-bold uppercase tracking-wider"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.hash = "schedule";
                }}
                data-ocid="mobile-schedule-cta"
              >
                Schedule Online
              </button>
              <a
                href="tel:4102638110"
                className="flex items-center justify-center gap-2 border border-border py-3 text-sm font-body font-semibold text-brand-dark"
              >
                <Phone className="w-4 h-4" />
                (410) 263-8110
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
