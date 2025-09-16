import AboutSection from "./AboutSection";
import BestGiftsSection from "./BestGiftsSection";
import CTA from "./CTA";
import HeroSection from "./HeroSection";
import SliderSection from "./SliderSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SliderSection />
      <BestGiftsSection />
      <CTA />
    </div>
  );
}
