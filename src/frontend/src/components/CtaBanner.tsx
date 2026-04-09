export function CtaBanner() {
  return (
    <section
      id="schedule"
      className="bg-brand-blue py-24"
      data-ocid="cta-banner"
    >
      <div className="container-site text-center">
        <h2
          className="font-display font-bold text-white mb-6 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Ready to Take Care of Your Skin?
        </h2>
        <p
          className="font-body text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
        >
          Whether you're dealing with a skin concern, due for a check, or
          curious about what aesthetic care can do for you — our team is here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#schedule-online"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue px-10 py-4 text-sm font-body font-bold uppercase tracking-widest hover:bg-white/90 transition-colors duration-200"
            data-ocid="cta-schedule-online"
          >
            Schedule Online
          </a>
          <a
            href="tel:+14102638110"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 text-sm font-body font-bold uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-colors duration-200"
            data-ocid="cta-call-to-schedule"
          >
            Call to Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
