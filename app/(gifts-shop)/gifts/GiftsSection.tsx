import GiftCard from "../components/GiftCard";
import { Text } from "../components/Text";
export default function GiftsSection() {
  return (
    <section
      id="gifts"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-top bg-contain rounded-2xl"
      style={{ backgroundImage: "url('/bg-garland.png')" }}
    >
      <div className="section-container flex flex-col items-center gap-5 h-auto text-center">
        <Text type="Header1">
          Achieve health,
          <br /> harmony, and
          <br /> inner strength{" "}
        </Text>
        <div className="flex justify-center items-center gap-0 md:gap-2 w-full">
          <p className="font-[montserrat] font-semibold text-xs text-cs-static-white uppercase tracking-widest hover:bg-cs-static-white-20 animation px-2 md:px-5 py-3 rounded-xl cursor-pointer bg-cs-static-white-20">
            All
          </p>
          <p className="font-[montserrat] font-semibold text-xs text-cs-static-white uppercase tracking-widest hover:bg-cs-static-white-20 animation px-2 md:px-5 py-3 rounded-xl cursor-pointer">
            For work
          </p>
          <p className="font-[montserrat] font-semibold text-xs text-cs-static-white uppercase tracking-widest hover:bg-cs-static-white-20 animation px-2 md:px-5 py-3 rounded-xl cursor-pointer">
            For health
          </p>
          <p className="font-[montserrat] font-semibold text-xs text-cs-static-white uppercase tracking-widest hover:bg-cs-static-white-20 animation px-2 md:px-5 py-3 rounded-xl cursor-pointer">
            For harmony
          </p>
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
