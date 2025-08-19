import { Allura, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

type TextProps = {
  type?:
    | "Header1"
    | "Header2"
    | "Header3"
    | "Header4"
    | "Paragraph"
    | "ActionLarge"
    | "ActionSmall"
    | "Caption"
    | "SliderText";
  children: React.ReactNode;
};

export const Text = ({ type = "Paragraph", children }: TextProps) => {
  const map = {
    Header1: (
      <h1 className="font-[montserrat] w-full font-semibold text-3xl leading-[1.5] text-cs-static-white uppercase tracking-widest">
        {children}
      </h1>
    ),
    Header2: (
      <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
        {children}
      </h2>
    ),
    Header3: (
      <h3 className="font-[montserrat] font-semibold text-base leading-[1.52] text-cs-dark uppercase tracking-wider">
        {children}
      </h3>
    ),
    Header4: (
      <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-static-white uppercase tracking-widest">
        {children}
      </h4>
    ),
    Paragraph: (
      <p className="font-[montserrat] font-normal text-base leading-[1.48] text-cs-dark">
        {children}
      </p>
    ),
    ActionLarge: (
      <p className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-dark uppercase tracking-widest">
        {children}
      </p>
    ),
    ActionSmall: (
      <p className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-dark uppercase tracking-widest">
        {children}
      </p>
    ),
    Caption: (
      <p className="font-[allura] w-full font-normal text-2xl leading-[1] text-cs-static-white tracking-widest">
        {children}
      </p>
    ),
    SliderText: (
      <p className="font-[montserrat] font-semibold text-[80px] text-cs-static-white uppercase">
        {children}
      </p>
    ),
  };

  return map[type] || map.Caption;
};
