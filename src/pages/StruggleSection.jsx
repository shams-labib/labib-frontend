"use client";

import React from "react";
import Image from "next/image";
import banner1 from "../../public/3.png";
import banner2 from "../../public/11.png";
import banner3 from "../../public/1.png";
import Animation from "@/components/shared/Animation";

// Strictly sized Image Card for consistency across all devices
const StruggleCard = ({ src, alt }) => (
  <div className="relative w-full aspect-[4/5] rounded-[12px] sm:rounded-[20px] overflow-hidden group border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 33vw, 200px"
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
  </div>
);

export default function StruggleSection() {
  const images = [
    { src: banner1, alt: "Struggle 1" },
    { src: banner2, alt: "Struggle 2" },
    { src: banner3, alt: "Struggle 3" },
  ];

  return (
    <Animation>
      <section className="relative w-full bg-background py-16 md:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          {/* --- BADGE --- */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-8">
            <span className="size-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_var(--color-primary-500)]" />
            <p className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
              Are Distractions Holding You Back?
            </p>
          </div>

          {/* --- HEADLINE --- */}
          <h2 className="max-w-[900px] mx-auto text-2xl md:text-5xl font-bold tracking-tight leading-[1.2] mb-12 px-2">
            <span className="text-foreground">
              If you struggle to focus, feel overwhelmed by endless tasks, or
            </span>
            <span className="text-neutral-400 dark:text-neutral-600">
              {" "}
              procrastinate instead of making progress, you're not alone.
            </span>
          </h2>

          {/* --- ALWAYS 3 COLUMNS GRID (Mobile & Desktop) --- */}

          <div className="max-w-[320px] sm:max-w-[600px] md:max-w-[750px] mx-auto">
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {images.map((image, index) => (
                <div key={index} className="w-full">
                  <StruggleCard src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Animation>
  );
}
