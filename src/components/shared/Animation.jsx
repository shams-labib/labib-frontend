"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Animation({ children, delay = 0, y = 30 }) {
  const elRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elRef.current, {
        opacity: 0,
        y: y,
        duration: 1,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, elRef);

    return () => ctx.revert();
  }, [delay, y]);

  return <div ref={elRef}>{children}</div>;
}
