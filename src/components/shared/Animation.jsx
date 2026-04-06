"use client";

import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Register GSAP Plugins
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global Utility for Smooth Scrolling
 * URL hash clutter avoid korar jonno exported function
 */
export const scrollToSection = (id, offset = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Next.js SSR safe useLayoutEffect
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Animation({
  children,
  delay = 0,
  y = 40, // Slide up distance
  x = 0, // Side slide distance (optional)
  scale = 1, // Zoom effect (optional)
  duration = 1,
  start = "top 90%",
  className = "",
}) {
  const elementRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el = elementRef.current;

    const ctx = gsap.context(() => {
      // Step 1: Set initial hidden state (No Blur used here)
      gsap.set(el, {
        opacity: 0,
        y: y,
        x: x,
        scale: scale,
        visibility: "hidden",
      });

      // Step 2: Smooth transition to original position
      gsap.to(el, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        visibility: "visible",
        duration: duration,
        delay: delay,
        ease: "power3.out", // High-end smooth easing
        scrollTrigger: {
          trigger: el,
          start: start,
          toggleActions: "play none none none",
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [delay, y, x, scale, duration, start]);

  return (
    <div
      ref={elementRef}
      className={`w-full ${className}`}
      style={{ opacity: 0, visibility: "hidden" }} // Prevent initial flash
    >
      {children}
    </div>
  );
}
