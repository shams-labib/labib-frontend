"use client";

import React from "react";
import { Lightbulb, Target, CheckCircle2, TrendingUp } from "lucide-react";
import Animation from "@/components/shared/Animation";

// Component data for clean mapping
const features = [
  {
    icon: <Lightbulb className="text-neutral-800 dark:text-white" size={20} />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <Target className="text-neutral-800 dark:text-white" size={20} />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: (
      <CheckCircle2 className="text-neutral-800 dark:text-white" size={20} />
    ),
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <TrendingUp className="text-neutral-800 dark:text-white" size={20} />,
    text: "Build lasting habits for long-term success.",
  },
];

export default function BlueprintSection() {
  return (
    <section className="bg-white dark:bg-background py-20 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center mb-16">
        {/* Badge */}
        <Animation delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-8">
            <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
              The Deep Work Blueprint
            </p>
          </div>
        </Animation>

        <Animation delay={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            A self-paced, results-driven <br className="hidden md:block" />
            course designed to help you
          </h2>
        </Animation>
      </div>

      {/* Timeline Section */}
      <div className="max-w-xl mx-auto relative">
        {/* Vertical Line Overlay */}
        <div className="absolute left-[15px] top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-blue-500/50 via-neutral-300 dark:via-neutral-800 to-transparent" />

        <div className="space-y-12">
          {features.map((feature, index) => (
            <Animation key={index} delay={index * 0.15} y={20}>
              <div className="flex items-start gap-8 group">
                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="size-8 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110 duration-300">
                    <span className="size-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex flex-col gap-4">
                  <div className="size-12 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-sm dark:shadow-lg">
                    {feature.icon}
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 leading-snug max-w-sm">
                    {feature.text}
                  </p>
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
}
