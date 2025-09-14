import Image from "next/image";

export default function GiftCard() {
  return (
    <div className="group flex flex-col justify-between items-center w-[310px] h-[342px] bg-cs-content-background rounded-2xl cursor-pointer animation">
      {/* <Image src="/gifts-for-work.png" alt="gifts-for-work" height={230} fill /> */}

      <div style={{ position: "relative", height: "230px", width: "100%" }}>
        <Image
          src="/gift-for-work.png"
          alt="gift-for-work"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col gap-2 w-full p-5 bg-cs-static-white rounded-2xl">
        <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-tag-pink uppercase tracking-widest">
          For work
        </h4>
        <h3 className="font-[montserrat] font-semibold text-base leading-[1.52] text-cs-dark group-hover:text-cs-primary uppercase tracking-wider animation">
          Gift Name
        </h3>
      </div>
    </div>
  );
}
