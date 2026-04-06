"use client";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section className="relative bg-neutral-900 text-neutral-0 pt-24 pb-16">
      {/* Banner */}
      <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
        30% off until <span className="font-bold">4d : 2h : 41m : 17s</span>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Master Focus & Get More Done in Less Time
          </h1>
          <p className="text-neutral-200 text-lg mb-8">
            A step-by-step system to eliminate procrastination, train your brain
            for deep work, and boost productivity effortlessly.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-semibold">
              Enroll now
            </button>
            <button className="border border-neutral-400 text-neutral-200 hover:text-primary-400 hover:border-primary-400 px-6 py-3 rounded-md font-semibold">
              Curriculum
            </button>
          </div>
        </div>

        {/* Right Video Thumbnail */}
        <div className="relative">
          <img
            src="/video-thumbnail.jpg"
            alt="Course Preview"
            className="rounded-lg shadow-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-neutral-800 bg-opacity-70 rounded-full p-4 hover:bg-opacity-90 transition">
              <PlayIcon className="w-10 h-10 text-primary-500" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
