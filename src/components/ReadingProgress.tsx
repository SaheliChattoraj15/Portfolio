"use client";

import React, { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollCompletion = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentProgress = window.scrollY;
          const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          if (scrollHeight > 0) {
            setCompletion(
              Math.min(100, Math.max(0, (currentProgress / scrollHeight) * 100))
            );
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateScrollCompletion, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(completion)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-[60] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)] transition-transform duration-75 ease-out origin-left will-change-transform"
        style={{ transform: `scaleX(${completion / 100})` }}
      />
    </div>
  );
}
