"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, PlayCircle, CheckCircle2 } from "lucide-react";
import Animation from "@/components/shared/Animation";

const modules = [
  {
    id: 1,
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        name: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
        videoUrl: "https://www.youtube.com/embed/NNv80mMzFDs",
      },
      {
        name: "The Science Behind Deep Work",
        time: "22:51",
        preview: false,
        videoUrl: "https://www.youtube.com/embed/h6pXm48qJ60",
      },
      {
        name: "Identifying Your Productivity Killers",
        time: "34:42",
        preview: false,
        videoUrl: "https://www.youtube.com/embed/8KIdf5_8s_k",
      },
    ],
  },
  {
    id: 2,
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      {
        name: "Setting Up Your Workspace",
        time: "12:10",
        preview: true,
        videoUrl: "https://www.youtube.com/embed/6mR-m9L2b8U",
      },
    ],
  },
];

export default function CourseCurriculum() {
  const [openModule, setOpenModule] = useState(1);

  // Video added baby
  const [currentVideo, setCurrentVideo] = useState(
    "https://www.youtube.com/embed/NNv80mMzFDs",
  );

  return (
    <section className="bg-white dark:bg-background py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Animation delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
              <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-widest">
                Course Curriculum
              </p>
            </div>
          </Animation>
          <Animation delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight">
              Mastering Deep Work Path
            </h2>
          </Animation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Accordion List */}
          <div className="lg:col-span-7 space-y-2">
            {modules.map((module, idx) => (
              <Animation key={module.id} delay={idx * 0.1} y={10}>
                <div className="border-b border-neutral-200 dark:border-neutral-800">
                  <button
                    onClick={() =>
                      setOpenModule(openModule === module.id ? null : module.id)
                    }
                    className="w-full py-6 flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-500 transition-colors">
                        {module.title}
                      </h4>
                      <p className="text-sm text-neutral-500 font-medium">
                        {module.duration}
                      </p>
                    </div>
                    {openModule === module.id ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>

                  {/* Ei section halka ai use korchi bro for short time */}

                  {openModule === module.id && (
                    <div className="pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      {module.lessons.map((lesson, i) => (
                        <div
                          key={i}
                          onClick={() =>
                            setCurrentVideo(`${lesson.videoUrl}?autoplay=1`)
                          } // Autoplay added
                          className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border ${
                            currentVideo.includes(lesson.videoUrl)
                              ? "bg-blue-500/10 border-blue-500/30 shadow-sm"
                              : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50 border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <PlayCircle
                              size={20}
                              className={
                                currentVideo.includes(lesson.videoUrl)
                                  ? "text-blue-500"
                                  : "text-neutral-400"
                              }
                            />
                            <span
                              className={`text-sm md:text-base font-medium ${currentVideo.includes(lesson.videoUrl) ? "text-blue-600 dark:text-blue-400" : "text-neutral-700 dark:text-neutral-300"}`}
                            >
                              {lesson.name}
                            </span>
                          </div>
                          <span className="text-sm font-mono text-neutral-500">
                            {lesson.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Animation>
            ))}
          </div>

          {/* RIGHT: Iframe Video Player */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <Animation direction="left" delay={0.3}>
              <div className="bg-neutral-50 dark:bg-neutral-950 rounded-[32px] p-6 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
                {/* Responsive Iframe Wrapper */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-8 ring-1 ring-neutral-200 dark:ring-neutral-800">
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentVideo}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>

                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wide">
                  Included in this course
                </h4>
                <ul className="space-y-4 mb-8">
                  {[
                    "Instant access to all videos",
                    "Step-by-step PDF guides",
                    "Community support access",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm font-medium text-neutral-600 dark:text-neutral-400"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-blue-500 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg active:scale-[0.95]">
                  Enroll Now
                </button>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
}
