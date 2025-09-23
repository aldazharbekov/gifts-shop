import GiftCard from "../components/GiftCard";

export default function BestGiftsSection() {
  return (
    <section
      id="best-gifts"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-snow.png')" }}
    >
      <div className="section-container flex flex-col justify-center items-center gap-5 h-auto">
        <div className="flex flex-col items-center gap-3 w-full text-center">
          <p className="font-[allura] w-full font-normal text-2xl text-cs-static-white leading-[1] tracking-widest">
            Best Gifts
          </p>

          <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
            Especially for you
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 w-full h-auto">
          <GiftCard />
          <GiftCard />
          <GiftCard />
          <GiftCard />
        </div>
      </div>
    </section>
  );
}
