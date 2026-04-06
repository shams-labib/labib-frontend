"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Animation from "@/components/shared/Animation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black py-16 px-4 border-t border-neutral-100 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-12 mb-20 text-center md:text-left">
          {/* Brand Info */}
          <div className="space-y-4 max-w-sm flex flex-col items-center md:items-start">
            <Animation delay={0.1}>
              <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                The Deep Work <br className="hidden md:block" /> Blueprint
              </h2>
            </Animation>
            <Animation delay={0.2}>
              <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                Master Focus & Get More Done in Less Time
              </p>
            </Animation>
          </div>

          {/* CTA Card (The Blue Box) */}
          <Animation
            delay={0.3}
            x={0}
            className="w-full md:w-auto flex justify-center"
          >
            {/* Card width fixed to 400px but shrinks on small screens using w-full */}
            <div className="relative group cursor-pointer w-full md:w-[400px]">
              {/* Shadow Fixed: Light mode e normal shadow, Dark mode e blue glowing shadow */}
              <div className="bg-blue-600 p-8 md:p-10 rounded-[32px] w-full shadow-xl dark:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:-translate-y-2">
                {/* Overlapping Avatars */}
                <div className="flex items-center -space-x-3 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="size-10 rounded-full border-2 border-blue-600 overflow-hidden bg-neutral-800"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Floating Action Button */}
                  <div className="ml-auto size-12 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-md group-hover:scale-110 transition-transform">
                    <ArrowRight size={24} strokeWidth={3} />
                  </div>
                </div>

                <p className="text-white font-bold text-lg text-left">
                  Join with 5K other students
                </p>
              </div>

              {/* Decorative Glow: Strictly for Dark Mode */}
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-0 dark:opacity-20 -z-10 group-hover:dark:opacity-40 transition-opacity" />
            </div>
          </Animation>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-500 font-medium">
            © Copyright {currentYear}, All Rights Reserved
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Terms & conditions", "Refund policy", "Pricing", "Support"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
