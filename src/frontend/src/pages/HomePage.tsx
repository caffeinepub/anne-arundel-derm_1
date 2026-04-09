import { CtaBanner } from "../components/CtaBanner";
import { HeroSection } from "../components/HeroSection";
import { LocationsSection } from "../components/LocationsSection";
import { ResourcesSection } from "../components/ResourcesSection";
import { ServicesSection } from "../components/ServicesSection";
import { StatsBar } from "../components/StatsBar";
import { TeamSection } from "../components/TeamSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TickerRibbon } from "../components/TickerRibbon";
import { WhySection } from "../components/WhySection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerRibbon />
      <StatsBar />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <TeamSection />
      <LocationsSection />
      <ResourcesSection />
      <CtaBanner />
    </>
  );
}
