import Image from "next/image";

export default function GiftCard() {
  return (
    <div className="group flex flex-col justify-between items-center w-[310px] h-[342px] bg-cs-content-background rounded-[20px] cursor-pointer animation">
      <Image
        src="/gift-for-work.png"
        alt="gift-for-work"
        width={310}
        height={230}
      />
      <div className="flex flex-col gap-2 w-full p-5 bg-cs-static-white rounded-[20px]">
        <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-tag-pink uppercase tracking-widest">
          For work or
        </h4>
        <h3 className="font-[montserrat] font-semibold text-base leading-[1.52] text-cs-dark group-hover:text-cs-primary uppercase tracking-wider animation">
          Card name
        </h3>
      </div>
    </div>
  );
}
