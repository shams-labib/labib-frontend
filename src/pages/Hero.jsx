"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Animation from "@/components/shared/Animation";
import banner from "../../public/banner.png";

export default function Hero() {
  return (
    <Animation>
      <section className="relative w-full overflow-hidden bg-background pt-20 pb-24 md:pt-32 md:pb-40">
        {/* Background Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[600px] 
                     bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary-900)_0%,_transparent_60%)] 
                     opacity-0 dark:opacity-60 pointer-events-none transition-opacity duration-500"
          aria-hidden="true"
        />

        {/* Main content */}
        <div className="relative z-10 mx-auto px-4 text-center max-w-full lg:max-w-7xl">
          {/* Discount Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full 
                       bg-neutral-100 dark:bg-neutral-900/40 border border-neutral-200 
                       dark:border-neutral-800 backdrop-blur-sm"
          >
            <span className="size-2 rounded-full bg-primary-500 shadow-[0_0_10px_var(--color-primary-500)]" />
            <p className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-300">
              30% off until 4d : 2h : 41m : 17s
            </p>
          </div>

          {/* Heading Section */}
          <header className="max-w-4xl mx-auto mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Master Focus & Get <br className="hidden md:block" />
              More Done in Less Time
            </h1>
          </header>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto mb-10 text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            A step-by-step system to eliminate procrastination, train your brain
            for deep work, and boost productivity effortlessly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button
              className="w-full sm:w-auto h-14 px-10 rounded-2xl font-bold text-white
                         bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/25
                         transition-all hover:scale-[1.02] active:scale-95"
            >
              Enroll now
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto h-14 px-10 rounded-2xl font-bold bg-transparent
                         border-neutral-200 dark:border-neutral-800 text-foreground 
                         hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            >
              Curriculum
            </Button>
          </div>

          {/* Video / Banner Preview */}
          <div className="relative max-w-7xl mx-auto group">
            {/* Interactive Glow Effect */}
            <div
              className="absolute -inset-10 rounded-full bg-primary-700/20 blur-[120px] 
                         opacity-0 dark:group-hover:opacity-100 transition-opacity duration-1000 
                         pointer-events-none"
            />

            <div
              className="relative aspect-video rounded-3xl overflow-hidden border border-neutral-200 
                         dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl 
                         dark:shadow-[0_0_100px_-20px_rgba(51,102,255,0.6)]"
            >
              <Image
                src={banner}
                alt="Course Preview Banner"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Play Button Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center 
                           bg-black/10 dark:bg-black/40 group-hover:bg-black/50 transition-all duration-300"
              >
                <button
                  className="size-20 md:size-24 flex items-center justify-center rounded-full 
                             bg-white text-primary-500 shadow-2xl transition-transform 
                             hover:scale-110 active:scale-90 border-8 border-white/20 backdrop-blur-sm"
                  aria-label="Play Preview Video"
                >
                  <Play size={32} fill="currentColor" className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animation>
  );
}
