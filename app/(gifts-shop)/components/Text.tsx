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
  color?: "static-white" | "dark" | "primary";
  hov?: "dark" | "primary";
  children: React.ReactNode;
};

export const Text = ({
  type = "Paragraph",
  color = "static-white",
  hov = "primary",
  children,
}: TextProps) => {
  const map = {
    Header1: (
      <h1
        className={`font-[montserrat] w-full font-semibold text-[32px] leading-[1.5] text-cs-${color}  uppercase tracking-widest`}
      >
        {children}
      </h1>
    ),
    Header2: (
      <h2
        className={`font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-${color} uppercase tracking-widest`}
      >
        {children}
      </h2>
    ),
    Header3: (
      <h3
        className={`font-[montserrat] font-semibold text-base leading-[1.52] text-cs-${color}  uppercase tracking-wider`}
      >
        {children}
      </h3>
    ),
    Header4: (
      <h4
        className={`font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-${color}  uppercase tracking-widest`}
      >
        {children}
      </h4>
    ),
    Paragraph: (
      <p
        className={`font-[montserrat] font-normal text-base leading-[1.48] text-cs-${color} `}
      >
        {children}
      </p>
    ),
    ActionLarge: (
      <p
        className={`font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-${color}  uppercase tracking-widest`}
      >
        {children}
      </p>
    ),
    ActionSmall: (
      <p
        className={`font-[montserrat] font-semibold text-xs text-cs-${color} group-hover:text-cs-${hov} uppercase tracking-widest animation`}
      >
        {children}
      </p>
    ),
    Caption: (
      <p
        className={`font-[allura] w-full font-normal text-2xl text-cs-${color} leading-[1] tracking-widest`}
      >
        {children}
      </p>
    ),
    SliderText: (
      <p
        className={`font-[montserrat] font-semibold text-[80px] text-cs-static-white uppercase`}
      >
        {children}
      </p>
    ),
  };

  return map[type] || map.Caption;
};
