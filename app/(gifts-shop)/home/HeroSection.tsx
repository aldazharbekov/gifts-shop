import Link from "next/link";
import { Text } from "../components/Text";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover rounded-t-3xl"
      style={{ backgroundImage: "url('/bg-snow.png'), url('/bg-ball.png')" }}
    >
      <div className="flex flex-col justify-center items-center self-stretch gap-3 max-w-[426px] h-auto py-15 text-center">
        <Text type="Caption">Merry Christmas</Text>
        <Text type="Header1">Gift yourself the magic of new possibilities</Text>

        <Link
          href="/gifts"
          className="group px-8 py-5 bg-cs-dark rounded-2xl hover:bg-cs-static-white animation"
          type="button"
        >
          <Text type="ActionSmall" color="static-white" hov="dark">
            Explore Magical Gifts
          </Text>
        </Link>
        <Text type="Caption">and Happy New Year</Text>
      </div>
    </section>
  );
}
