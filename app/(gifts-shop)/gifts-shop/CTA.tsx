import ActionButton from "../components/ActionButton";
import Timer from "../components/Timer";

export default function CTA() {
  return (
    <section
      id="cta"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover rounded-b-[20px]"
      style={{ backgroundImage: "url('/bg-snow.png'), url('/bg-forest.png')" }}
    >
      <div className="section-container flex justify-center items-center h-auto py-15 rounded-[20px]">
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[426px] h-auto py-15 text-center">
          <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
            Ready to start your journey to a better version of yourself?
          </h2>
          <ActionButton />
          <div className="flex flex-col justify-center items-center gap-2">
            <p
              className={`font-[allura] w-full font-normal text-2xl text-cs-static-white leading-[1] tracking-widest`}
            >
              The New Year is Coming Soon...{" "}
            </p>
            <Timer />
          </div>
        </div>
      </div>
    </section>
  );
}
