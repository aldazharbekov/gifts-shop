import Image from "next/image";
import { Text } from "../components/Text";

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
            <Text type="SliderText">live</Text>
            <Image
              src="/snowman.png"
              alt="snowman"
              width={200}
              height={200}
              className="rounded-[20px]"
            />
            <Text type="SliderText">Create</Text>
            <Image
              src="/christmas-trees.png"
              alt="christmas-trees"
              width={200}
              height={200}
              className="rounded-[20px]"
            />

            <Text type="SliderText">Love</Text>
            <Image
              src="/christmas-tree-ball.png"
              alt="christmas-tree-ball"
              width={200}
              height={200}
              className="rounded-[20px]"
            />

            <Text type="SliderText">Dream</Text>
            <Image
              src="/fairytale-house.png"
              alt="fairytale-house"
              width={200}
              height={200}
              className="rounded-[20px]"
            />
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
