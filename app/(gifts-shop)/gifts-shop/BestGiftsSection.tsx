"use client";
import { useEffect, useState } from "react";
import { loadData } from "../api/loadData";
import GiftCard from "../components/GiftCard";

type Item = {
  name: string;
  description: string;
  category: string;
  superpowers: {
    live: string;
    create: string;
    love: string;
    dream: string;
  };
};

export default function BestGiftsSection() {
  const [randomGifts, setRandomGifts] = useState<Item[]>([]);

  const getRandomItems = async (): Promise<Item[]> => {
    const data = await loadData();

    const randomItems: Item[] = [];
    while (randomItems.length < 4) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!randomItems.includes(data[randomIndex])) {
        randomItems.push(data[randomIndex]);
      }
    }
    return randomItems;
  };

  useEffect(() => {
    getRandomItems().then((items) => {
      setRandomGifts(items);
    });
  }, []);

  return (
    <section
      id="best-gifts"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-snow.png')" }}
    >
      <div className="section-container flex flex-col justify-center items-center gap-5 h-auto">
        <div className="flex flex-col items-center gap-3 w-full text-center">
          <p className="font-[allura] w-full font-normal text-2xl text-cs-static-white leading-[1] tracking-widest">
            Best Gifts
          </p>

          <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
            Especially for you
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 w-full h-auto">
          {randomGifts.map((gift, idx) => (
            <GiftCard key={idx} name={gift.name} category={gift.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
