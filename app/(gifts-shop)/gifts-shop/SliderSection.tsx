"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slide = [
  { title: "live", src: "/snowman.png" },
  { title: "Create", src: "/christmas-trees.png" },
  { title: "Love", src: "/christmas-tree-ball.png" },
  { title: "Dream", src: "/fairytale-house.png" },
];

export default function SliderSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(0);
  const [maxClick, setMaxClick] = useState(3);
  const [clickStep, setClickStep] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    const calculateMaxClick = () => {
      setSliderPosition(0);
      setCurrentIndex(0);

      let sliderWidth = 0;
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.clientWidth);
        sliderWidth = sliderRef.current.clientWidth;
      } else {
        console.log("sliderRef.current false");
      }

      let sliderContainerWidth = 0;
      if (sliderContainerRef.current) {
        setSliderContainerWidth(sliderContainerRef.current.clientWidth);
        sliderContainerWidth = sliderContainerRef.current.clientWidth;
      } else {
        console.log("sliderContainerRef.current false");
      }

      const maxClick = window.innerWidth <= 768 ? 6 : 3;
      setMaxClick(maxClick);

      setClickStep((sliderWidth - sliderContainerWidth) / maxClick);
    };

    calculateMaxClick(); // вызов при маунте

    window.addEventListener("resize", calculateMaxClick); // Когда компонент появился → навесили слушатель
    return () => {
      window.removeEventListener("resize", calculateMaxClick); // Когда компонент уходит со страницы → вызывается cleanup
    };
  }, []);

  function handlePrev() {
    if (currentIndex > 0) {
      currentIndex === 1
        ? setSliderPosition(0)
        : setSliderPosition(sliderPosition - clickStep);
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex < maxClick) {
      currentIndex === maxClick - 1
        ? setSliderPosition(sliderWidth - sliderContainerWidth)
        : setSliderPosition(sliderPosition + clickStep);
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <section
      id="slider"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-snow.png')" }}
    >
      <div className="section-container flex flex-col justify-center items-center gap-5 h-auto text-center">
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="font-[allura] w-full font-normal text-2xl text-cs-static-white leading-[1] tracking-widest">
            Become Happier!
          </p>
          <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
            In the new 2025
          </h2>
        </div>

        <div
          ref={sliderContainerRef}
          className="flex items-center w-full h-auto" //overflow-hidden
        >
          <div
            ref={sliderRef}
            className="flex items-center gap-5 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${sliderPosition}px)`,
            }}
          >
            {slide.map((item) => (
              <div className="flex items-center gap-5 min-w-max" key={item.src}>
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
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center gap-5 w-full">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex justify-center items-center w-14 h-14 rounded-[20px] bg-inherit text-cs-static-white border border-cs-static-white cursor-pointer disabled:cursor-default disabled:opacity-40 hover:bg-cs-static-white disabled:hover:bg-transparent hover:text-cs-primary disabled:hover:text-cs-static-white animation"
          >
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
          <button
            onClick={handleNext}
            disabled={currentIndex === maxClick}
            className="flex justify-center items-center w-14 h-14 rounded-[20px] bg-inherit text-cs-static-white border border-cs-static-white cursor-pointer disabled:cursor-default disabled:opacity-40 hover:bg-cs-static-white disabled:hover:bg-transparent hover:text-cs-primary disabled:hover:text-cs-static-white animation"
          >
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
