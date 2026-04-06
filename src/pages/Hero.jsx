"use client";

import React from "react";
import Image from "next/image"; // Next.js Image component for optimization
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import banner from "../../public/bannar.png";
import Animation from "@/components/shared/Animation";

export default function Hero() {
  return (
    <Animation>
      <section className="relative w-full overflow-hidden bg-background pt-20 pb-24 md:pt-32 md:pb-40">
        {/* ---  BACKGROUND --- */}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[600px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary-900)_0%,_transparent_60%)] opacity-0 dark:opacity-60 pointer-events-none transition-opacity duration-500" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* --- BADGE --- */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm mb-10">
            <span className="size-2 rounded-full bg-primary-500 shadow-[0_0_10px_var(--color-primary-500)]" />
            <p className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-300">
              30% off until 4d : 2h : 41m : 17s
            </p>
          </div>

          {/* --- MAIN TITLE --- */}
          <h1 className="max-w-4xl mx-auto text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            Master Focus & Get <br className="hidden md:block" />
            More Done in Less Time
          </h1>

          {/* --- SUBTEXT --- */}
          <p className="max-w-2xl mx-auto text-neutral-500 dark:text-neutral-400 text-base md:text-lg mb-10 leading-relaxed">
            A step-by-step system to eliminate procrastination, train your brain
            for deep work, and boost productivity effortlessly.
          </p>

          {/* --- CTA BUTTONS --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button className="w-full sm:w-auto h-14 px-10 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary-500/25">
              Enroll now
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-14 px-10 border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 text-foreground rounded-2xl font-bold transition-all"
            >
              Curriculum
            </Button>
          </div>

          {/* --- VIDEO CONTAINER WITH ADAPTIVE GLOW --- */}
          <div className="relative max-w-5xl mx-auto group">
            {/* Outer Glow: Only visible in dark mode when hovered */}
            <div className="absolute -inset-10 bg-primary-700/20 rounded-full blur-[120px] opacity-0 dark:group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative aspect-video rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl dark:shadow-[0_0_100px_-20px_rgba(51,102,255,0.6)]">
              {/* Banner Image Set Properly */}
              <Image
                src={banner}
                alt="Course Preview Banner"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-black/40 group-hover:bg-black/50 transition-all duration-300">
                <button className="size-20 md:size-24 flex items-center justify-center rounded-full bg-white text-primary-500 shadow-2xl hover:scale-110 transition-transform active:scale-90 border-8 border-white/20 backdrop-blur-sm">
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
