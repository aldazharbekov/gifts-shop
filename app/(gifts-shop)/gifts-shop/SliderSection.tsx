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
  const rowRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Текущее состояние клика
  const [maxClick, setMaxClick] = useState(3); // количество кликов
  const [slideStep, setSlideStep] = useState(0); // шаг слайда в px
  const [sliderPosition, setSliderPosition] = useState(0); // шаг слайда в px

  useEffect(() => {
    let sliderContainer = 0;
    if (sliderRef.current) {
      sliderContainer = sliderRef.current.clientWidth;
    }
    let row = 0;
    if (rowRef.current) {
      row = rowRef.current.clientWidth;
    }
    setSlideStep((sliderContainer - row) / maxClick);
  }, [sliderPosition]);

  //1. Считаем maxClick в зависимости от ширины экрана
  useEffect(() => {
    const calculateMaxClick = () => {
      setSliderPosition(0);
      setCurrentIndex(0);
      if (window.innerWidth <= 768) {
        setMaxClick(6);
      } else {
        setMaxClick(3);
      }
    };
    calculateMaxClick(); // вызов при маунте
    // Когда компонент появился → навесили слушатель
    window.addEventListener("resize", calculateMaxClick);
    // Когда компонент уходит со страницы → вызывается cleanup
    return () => {
      window.removeEventListener("resize", calculateMaxClick);
    };
  }, []);

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSliderPosition(sliderPosition - slideStep);
    }
  }

  function handleNext() {
    if (currentIndex < maxClick) {
      setCurrentIndex(currentIndex + 1);
      setSliderPosition(sliderPosition + slideStep);
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
          ref={rowRef}
          className="flex items-center overflow-hidden w-full h-auto"
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
