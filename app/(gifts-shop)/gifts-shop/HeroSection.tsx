import ActionButton from "../components/ActionButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover rounded-t-[20px]"
      style={{ backgroundImage: "url('/bg-snow.png'), url('/bg-ball.png')" }}
    >
      <div className="flex flex-col justify-center items-center self-stretch gap-3 max-w-[426px] h-auto py-15 text-center">
        <p className="font-[allura] w-full font-normal text-2xl text-cs-static-white leading-[1] tracking-widest">
          Merry Christmas
        </p>
        <h1 className="font-[montserrat] w-full font-semibold text-[32px] leading-[1.5] text-cs-static-white  uppercase tracking-widest">
          Gift yourself the magic of new possibilities
        </h1>
        <ActionButton />
        <p className="font-[allura] w-full font-normal text-2xl text-cs-static-white leading-[1] tracking-widest">
          and Happy New Year
        </p>
      </div>
    </section>
  );
}
