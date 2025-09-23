import Image from "next/image";
import Link from "next/link";

export default function ContactCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full max-w-[1276px] text-center">
      <Link
        href="tel:+1234567890"
        className="group flex flex-col justify-center items-center gap-3 w-full h-auto p-5 bg-cs-content-background rounded-[20px] cursor-pointer animation"
      >
        <div className="relative w-20 h-20">
          <Image
            src="/santa-claus.png"
            alt="santa-claus"
            fill
            style={{ objectFit: "contain" }}
            sizes="80px"
          />
        </div>
        <p className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-dark uppercase tracking-widest group-hover:text-cs-primary animation">
          +375 (29) 111-22-33
        </p>
        <h3 className="font-[montserrat] font-semibold text-base leading-[1.52] text-cs-dark uppercase tracking-wider group-hover:text-cs-primary animation">
          Call Us
        </h3>
      </Link>
      <Link
        href="https://www.google.com/maps?q=42.87804206649229,74.67574827770231"
        className="group flex flex-col justify-center items-center gap-3 w-full h-auto p-5 bg-cs-content-background rounded-[20px] cursor-pointer animation"
        target="_blank"
      >
        <div className="relative w-20 h-20">
          <Image
            src="/christmas-tree.png"
            alt="christmas-tree"
            fill
            style={{ objectFit: "contain" }}
            sizes="80px"
          />
        </div>
        <p className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-dark uppercase tracking-widest group-hover:text-cs-primary animation">
          Magic forest{" "}
        </p>
        <h3 className="font-[montserrat] font-semibold text-base leading-[1.52] text-cs-dark uppercase tracking-wider group-hover:text-cs-primary animation">
          meet us
        </h3>
      </Link>
      <Link
        href="mailto:example@domain.com?subject=Hello&body=Christmas%20shop"
        className="group flex flex-col justify-center items-center gap-3 w-full h-auto p-5 bg-cs-content-background rounded-[20px] cursor-pointer animation"
      >
        <div className="relative w-20 h-20">
          <Image
            src="/snake.png"
            alt="snake"
            fill
            style={{ objectFit: "contain" }}
            sizes="80px"
          />
        </div>
        <p className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-dark uppercase tracking-widest group-hover:text-cs-primary animation">
          gifts@magic.com
        </p>
        <h3 className="font-[montserrat] font-semibold text-base leading-[1.52] text-cs-dark uppercase tracking-wider group-hover:text-cs-primary animation">
          write us
        </h3>
      </Link>
    </div>
  );
}
