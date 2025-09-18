import Image from "next/image";
import React from "react";
import { Text } from "../components/Text";

const slide = [
  { title: "live", src: "/snowman.png" },
  { title: "Create", src: "/christmas-trees.png" },
  { title: "Love", src: "/christmas-tree-ball.png" },
  { title: "Dream", src: "/fairytale-house.png" },
];

export default function SliderSection() {
  return (
    <section
      id="slider"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-snow.png')" }}
    >
      <div className="section-container flex flex-col justify-center items-center gap-5 h-auto text-center">
        <div className="flex flex-col items-center gap-3 w-full">
          <Text type="Caption">Become Happier!</Text>
          <Text type="Header2">In the new 2025</Text>
        </div>
        <div className="flex items-center w-full h-auto">
          <div className="flex items-center gap-5 w-auto h-auto animation">
            {slide.map((item) => (
              <React.Fragment key={item.src}>
                <p className="font-[montserrat] font-semibold text-[80px] text-cs-static-white uppercase">
                  {item.title}
                </p>
                <Image
                  src={item.src}
                  alt={item.src}
                  width={200}
                  height={200}
                  className="rounded-[20px]"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center gap-5 w-full">
          <button className="flex justify-center items-center w-14 h-14 rounded-[20px] bg-inherit text-cs-static-white-40 border border-cs-static-white-40">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 12H6M6 12L12 6M6 12L12 18"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="flex justify-center items-center w-14 h-14 rounded-[20px] bg-inherit text-cs-static-white border border-cs-static-white cursor-pointer hover:bg-cs-static-white hover:text-cs-primary animation">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
