import AboutSection from "./AboutSection";
import BestGiftsSection from "./BestGiftsSection";
import HeroSection from "./HeroSection";
import SliderSection from "./SliderSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSection />
      <AboutSection />
      <SliderSection />
      <BestGiftsSection />



      <section id="cta">
        {" "}
        <div className="section-container">cta</div>
      </section>

      
    </div>
  );
}
