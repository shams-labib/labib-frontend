"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, MoveRight, Clock } from "lucide-react";
import Animation from "@/components/shared/Animation";

const perks = [
  "6h of videos – Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others.",
];

export default function PricingCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 2,
    minutes: 46,
    seconds: 17,
  });

  // Timing control trying to added

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-background py-16 md:py-24 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-16 items-start">
        {/* Left side  */}
        <div className="md:col-span-6 space-y-8 md:space-y-12">
          <div className="space-y-6">
            <Animation delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                  Introducing
                </p>
              </div>
            </Animation>
            <Animation delay={0.2} y={10}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white leading-[1.1] tracking-tight">
                The Deep Work <br /> Blueprint
              </h2>
            </Animation>
            <Animation delay={0.3}>
              <p className="text-base md:text-xl font-medium text-neutral-700 dark:text-neutral-300 max-w-lg leading-relaxed">
                Here's what you will get if you enroll now
              </p>
            </Animation>
          </div>

          <Animation delay={0.4}>
            <ul className="space-y-4 md:space-y-8">
              {[
                {
                  label: "Bonus:",
                  text: "YT coaching sessions to boost focus.",
                },
                { label: "Discount:", text: "Save $200 when you enroll now!" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 md:gap-6 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-inner max-w-md group transition-all hover:bg-white dark:hover:bg-neutral-950"
                >
                  <div className="size-10 md:size-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.6)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm md:text-lg font-medium text-neutral-700 dark:text-neutral-300 pr-4">
                    <span className="font-bold text-blue-600 dark:text-blue-500">
                      {item.label}
                    </span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </Animation>
        </div>

        {/* Right Side */}
        <div className="md:col-span-6 mt-12 md:mt-0 lg:sticky lg:top-24">
          <Animation direction="left" delay={0.5}>
            <div className="bg-neutral-50 dark:bg-neutral-950 rounded-[32px] p-6 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-8 md:space-y-12 transition-all">
              {/* Price & Discount */}
              <div className="flex items-center justify-between gap-4 pb-8 md:pb-12 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-end gap-2 md:gap-3">
                  <span className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white leading-none">
                    $349
                  </span>
                  <span className="text-xl md:text-3xl font-medium text-neutral-500 dark:text-neutral-600 line-through">
                    $560
                  </span>
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_#3b82f6]">
                  30% off
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="p-4 md:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="size-10 md:size-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0">
                    <Clock size={20} />
                  </div>
                  <p className="text-xs md:text-base font-medium text-neutral-600 dark:text-neutral-400">
                    30% off until{" "}
                    <span className="font-bold text-neutral-900 dark:text-white block md:inline">
                      4d: {timeLeft.days}d: {timeLeft.hours}h:{" "}
                      {timeLeft.minutes}m: {timeLeft.seconds}s
                    </span>
                  </p>
                </div>
              </div>

              {/* Included Items */}
              <div className="space-y-4 md:space-y-8">
                <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                  Included in this course
                </h4>
                <ul className="space-y-3 md:space-y-5">
                  {perks.map((perk, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 md:gap-4 text-[13px] md:text-sm font-medium leading-relaxed text-neutral-600 dark:text-neutral-400"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-blue-500 mt-1 shrink-0"
                      />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enroll Button */}
              <button className="relative w-full py-4 md:py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg active:scale-[0.98] group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg">
                  Enroll now
                  <MoveRight
                    className="transition-transform group-hover:translate-x-2"
                    size={20}
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-glimmer" />
              </button>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}
