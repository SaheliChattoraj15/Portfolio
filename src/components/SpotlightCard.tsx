"use client";

import React, { useRef } from "react";
import { useDeviceCapability } from "@/context/DeviceCapabilityContext";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(245, 158, 11, 0.18)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const { activeTier, capability } = useDeviceCapability();

  const isLowOrTouch = activeTier === "low" || capability.isTouchDevice;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLowOrTouch || !divRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      divRef.current.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
      divRef.current.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={isLowOrTouch ? undefined : handleMouseMove}
      className={`group/spotlight relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 transition-all duration-300 hover:border-amber-500/35 hover:shadow-[0_0_35px_rgba(245,158,11,0.08)] ${className}`}
      {...props}
    >
      {/* Radiant Amber & Gold Spotlight Glow (active for desktop & high/medium tiers) */}
      {!isLowOrTouch && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-300 will-change-[opacity]"
          style={{
            background: `radial-gradient(550px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), ${spotlightColor}, transparent 55%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
