import GiftCard from "../components/GiftCard";
import { Text } from "../components/Text";

const categoryNames = ["All", "For work", "For health", "For harmony"];

export default function GiftsSection() {
  return (
    <section
      id="gifts"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-top bg-contain rounded-[20px]"
      style={{ backgroundImage: "url('/bg-garland.png')" }}
    >
      <div className="section-container flex flex-col items-center gap-5 h-auto text-center">
        <Text type="Header1">
          Achieve health,
          <br /> harmony, and
          <br /> inner strength{" "}
        </Text>
        <div className="flex justify-center items-center gap-0 md:gap-2 w-full">
          {categoryNames.map((name, i) => (
            <p
              key={i}
              className="font-[montserrat] font-semibold text-xs text-cs-static-white uppercase tracking-widest hover:bg-cs-static-white-40 animation px-2 md:px-5 py-3 rounded-xl cursor-pointer bg-cs-static-white-20"
            >
              {name}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-start gap-3 w-full h-auto min-h-[1050px] text-start">
          <GiftCard />
          <GiftCard />
          <GiftCard />
          <GiftCard />

          <GiftCard />
          <GiftCard />
          <GiftCard />
          <GiftCard />

          <GiftCard />
          <GiftCard />
          <GiftCard />
          <GiftCard />
        </div>
      </div>
    </section>
  );
}
