"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import img1 from "../../public/5.png";
import img2 from "../../public/7.png";
import img3 from "../../public/2.png";
import img4 from "../../public/3.png";
import Animation from "@/components/shared/Animation";

export default function FeatureIntro() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  return (
    <Animation>
      <section
        ref={sectionRef}
        className="bg-white dark:bg-background py-16 md:py-24 transition-colors duration-300 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* --- LEFT SIDE: IMAGE (Hidden on Mobile) --- */}
            <div
              ref={leftRef}
              className="hidden lg:block lg:col-span-5 relative min-h-[550px] rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <Image
                src={img1}
                alt="Deep work session"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
            </div>

            {/* --- RIGHT SIDE: CONTENT CARD --- */}
            <div
              ref={rightRef}
              className="lg:col-span-7 bg-neutral-100 dark:bg-neutral-950 rounded-[32px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl"
            >
              {/* Top Bar: Badge & Avatar Group */}
              <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-inner">
                  <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                  <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-tight">
                    No worries
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[img2, img3, img4].map((avatarImg, index) => (
                      <div
                        key={index}
                        className="size-10 rounded-full border-2 border-white dark:border-neutral-950 overflow-hidden relative ring-1 ring-neutral-200 dark:ring-neutral-800"
                      >
                        <Image
                          src={avatarImg}
                          alt="student"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-semibold">
                    Join with{" "}
                    <span className="text-neutral-900 dark:text-white font-bold">
                      5k+
                    </span>{" "}
                    other students
                  </p>
                </div>
              </div>

              {/* Middle Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-9">
                  <p className="text-neutral-500 dark:text-neutral-500 text-sm md:text-base font-bold mb-6 leading-relaxed uppercase tracking-[0.2em]">
                    The ability to concentrate deeply is the ultimate
                    productivity hack.
                  </p>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white leading-[1.1] tracking-tight">
                    And fortunately it's <br />
                    a skill you can train <br />& develop.
                  </h3>
                </div>

                {/* Sidebar Thumbnails */}
                <div className="hidden md:flex md:col-span-3 flex-col gap-4">
                  {[img2, img3, img4].map((thumbImg, idx) => (
                    <div
                      key={idx}
                      className="relative w-full aspect-square rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-700/50 group/thumb"
                    >
                      <Image
                        src={thumbImg}
                        alt="thumbnail"
                        fill
                        className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 flex items-center gap-4 text-blue-600 dark:text-blue-500 font-bold cursor-pointer group w-fit transition-colors hover:text-blue-500 dark:hover:text-blue-400">
                <span className="text-lg">Learn more about our system</span>
                <div className="p-2 rounded-full bg-blue-600/10 dark:bg-blue-500/10 group-hover:bg-blue-600/20 dark:group-hover:bg-blue-500/20 transition-all">
                  <MoveRight
                    className="transition-transform group-hover:translate-x-2"
                    size={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animation>
  );
}
