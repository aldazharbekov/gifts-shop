"use client";
import { useEffect, useState } from "react";
import { loadData } from "../api/loadData";
import GiftCard from "../components/GiftCard";

const categoryNames = ["All", "For Work", "For Health", "For Harmony"];

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

export default function GiftsSection() {
  const [allGifts, setAllGifts] = useState<Item[]>([]);
  const [filteredGifts, setFilteredGifts] = useState<Item[]>([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const getItems = async (): Promise<Item[]> => {
      const data: Item[] = await loadData();
      return data;
    };
    getItems().then((items) => {
      setAllGifts(items);
      setFilteredGifts(items);
    });
  }, []);

  function handleClick(params: string) {
    setActiveTab(params);
    if (params === "All") {
      setFilteredGifts(allGifts);
    } else {
      setFilteredGifts(allGifts.filter((gift) => gift.category === params));
    }
  }

  return (
    <section
      id="gifts"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-top bg-contain rounded-[20px]"
      style={{ backgroundImage: "url('/bg-garland.png')" }}
    >
      <div className="section-container flex flex-col items-center gap-5 h-auto text-center">
        <h1 className="font-[montserrat] w-full font-semibold text-[32px] leading-[1.5] text-cs-static-white  uppercase tracking-widest">
          Achieve health,
          <br /> harmony, and
          <br /> inner strength
        </h1>

        <div className="flex justify-center items-center gap-0 md:gap-2 w-full">
          {categoryNames.map((name, i) => (
            <p
              key={i}
              onClick={() => handleClick(name)}
              className={`font-[montserrat] font-semibold text-xs text-cs-static-white uppercase tracking-widest hover:bg-cs-static-white-40 animation px-2 md:px-5 py-3 rounded-xl cursor-pointer
              ${name === activeTab ? "bg-cs-static-white-40" : ""}
              `}
            >
              {name}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-start gap-3 w-full h-auto min-h-[1050px] text-start">
          {filteredGifts.map((gift, idx) => (
            <GiftCard key={idx} name={gift.name} category={gift.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
