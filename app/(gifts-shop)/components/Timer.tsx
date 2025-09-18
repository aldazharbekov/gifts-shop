"use client";

import { useEffect, useState } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="w-20 h-auto">
      <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
        {value}
      </h2>
      <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-static-white uppercase tracking-widest">
        {label}
      </h4>
    </div>
  );
}

export default function Timer() {
  const targetDate = new Date("2025-12-31T23:59:59");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex justify-center items-center w-auto h-18 p-3 pt-2 bg-cs-static-white-40 rounded-[20px]">
      <TimeBlock value={days} label="days" />
      <span className="w-[1px] h-5 ml-[-1px] bg-cs-static-white-40"></span>
      <TimeBlock value={hours} label="hours" />
      <span className="w-[1px] h-5 ml-[-1px] bg-cs-static-white-40"></span>
      <TimeBlock value={minutes} label="minutes" />
      <span className="w-[1px] h-5 ml-[-1px] bg-cs-static-white-40"></span>
      <TimeBlock value={seconds} label="seconds" />
    </div>
  );
}
