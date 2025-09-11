import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import SliderSection from "./SliderSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSection />
      <AboutSection />
      <SliderSection />

      <section id="best-gifts">
        {" "}
        <div className="section-container">best-gifts</div>
      </section>
      <section id="cta">
        {" "}
        <div className="section-container">cta</div>
      </section>
    </div>
  );
}
