import Image from "next/image";
import { Text } from "../components/Text";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-snow.png')" }}
    >
      <div className="section-container flex flex-wrap md:flex-nowrap justify-between items-center bg-cs-static-white h-auto text-start rounded-[20px]">
        <div className="flex h-auto px-5 md:px-15 flex-[1_1_50vw]">
          <div className="flex flex-col justify-center gap-5 w-full max-w-[426px] py-15">
            <p
              className={`font-[allura] w-full font-normal text-2xl text-cs-primary leading-[1] tracking-widest`}
            >
              About
            </p>
            <Text type="Header2" color="dark">
              Unleash your inner superhero!
            </Text>
            <Text color="dark">
              This New Year marks the beginning of your journey to inner harmony
              and new strengths. We offer unique gifts that will help you
              improve your life.
            </Text>
          </div>
        </div>
        <div className="flex flex-[1_1_50vw] justify-center overflow-hidden rounded-[20px]">
          <Image
            src="/santa.png"
            alt="Santa"
            className="rounded-[20px] min-w-[638px] min-h-[528px]"
            width={638}
            height={528}
          />
        </div>
      </div>
    </section>
  );
}
