"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Animation from "@/components/shared/Animation";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Freelance Designer",
    content:
      "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    video: false,
  },
  {
    id: 2,
    name: "Daniel Foster",
    role: "Content Creator",
    content:
      "The deep work techniques I learned here are game-changing for creators.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    video: true,
  },
  {
    id: 3,
    name: "Mark Davidson",
    role: "Software Developer",
    content:
      "I never realized how much distractions were holding me back. My efficiency has doubled!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    video: false,
  },
  {
    id: 4,
    name: "Tom David",
    role: "Entrepreneur",
    content:
      "Strategic thinking requires deep focus, and this course provides exactly that.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    video: true,
  },
  {
    id: 4,
    name: "Tom David",
    role: "Entrepreneur",
    content:
      "Strategic thinking requires deep focus, and this course provides exactly that.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    video: true,
  },
  {
    id: 4,
    name: "Tom David",
    role: "Entrepreneur",
    content:
      "Strategic thinking requires deep focus, and this course provides exactly that.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    video: true,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-background py-24 px-4 transition-colors duration-300 overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Animation delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
              <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                Testimonials
              </p>
            </div>
          </Animation>
          <Animation delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
              Real Results from <br /> Real People
            </h2>
          </Animation>
        </div>

        {/* Slider Controls & Info */}
        <div className="flex items-center justify-between mb-10">
          <Animation delay={0.3} x={-20}>
            <p className="text-xl font-medium text-neutral-700 dark:text-neutral-300">
              Join with{" "}
              <span className="text-blue-600 dark:text-white font-bold">
                5K other students
              </span>
            </p>
          </Animation>

          <div className="flex gap-4">
            <button className="swiper-prev size-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all text-neutral-900 dark:text-white">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-next size-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all text-neutral-900 dark:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[480px] rounded-[32px] overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 group">
                {/* Image Logic */}
                <img
                  src={item.image}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 
                    ${item.video ? "brightness-50" : "opacity-10 dark:opacity-20 grayscale"}`}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between h-full">
                  {/* Top: Video Play Icon Overlay */}
                  <div className="flex justify-center items-center flex-grow">
                    {item.video && (
                      <div className="size-16 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                        <Play fill="white" size={24} />
                      </div>
                    )}
                  </div>

                  {/* Bottom: Text & Branding */}
                  <div className="space-y-6">
                    {!item.video && (
                      <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300 italic">
                        "{item.content}"
                      </p>
                    )}

                    <div className="flex items-center gap-3">
                      {/* Avatar for video cards bottom left, or just name info */}
                      <div className="size-10 rounded-full border border-blue-500/50 overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-neutral-900 dark:text-white leading-none mb-1">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-blue-600 dark:text-neutral-500 font-bold uppercase tracking-widest">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
