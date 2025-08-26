import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSection />
      <AboutSection />
      <section id="slider">
        <div className="section-container">slider</div>
      </section>
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
