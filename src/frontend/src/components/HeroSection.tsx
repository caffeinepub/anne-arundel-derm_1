import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay may be blocked — silently continue
      });
    }
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      data-ocid="hero-section"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/generated/hero-dermatology.dim_1920x1080.jpg"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-woman-applying-lotion-on-her-skin-4545-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-washing-in-a-sink-in-close-up-22779-large.mp4"
          type="video/mp4"
        />
        {/* Fallback image if video fails */}
        <img
          src="/assets/generated/hero-dermatology.dim_1920x1080.jpg"
          alt="Dermatology care"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        data-ocid="hero-content"
      >
        <p className="text-white/70 font-body text-xs font-bold uppercase tracking-[0.25em] mb-6">
          Anne Arundel Dermatology
        </p>
        <h1
          className="font-display text-white font-bold mb-6 leading-tight"
          style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)", lineHeight: "1.08" }}
        >
          Better Skin Health
          <br />
          Begins Here
        </h1>
        <p
          className="font-body text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
        >
          Board-certified dermatologists and licensed aesthetic providers under
          one roof, serving 60+ locations across the Mid-Atlantic and Southeast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#schedule"
            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-9 py-4 text-sm font-body font-bold uppercase tracking-widest hover:bg-[#005fa3] transition-colors duration-200"
            data-ocid="hero-schedule-cta"
          >
            Schedule Online
          </a>
          <a
            href="#locations"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-9 py-4 text-sm font-body font-bold uppercase tracking-widest hover:bg-white hover:text-[#141414] transition-colors duration-200"
            data-ocid="hero-find-location"
          >
            Find a Location
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
        aria-label="Scroll down"
        data-ocid="hero-scroll-arrow"
      >
        <span className="font-body text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
