"use client";

import React from "react";
import { useDeviceCapability } from "@/context/DeviceCapabilityContext";

export default function AmbientBackground() {
  const { activeTier, isReady } = useDeviceCapability();

  // Tier 1: Low-Performance / Battery Saver / Data Saver / Reduced Motion Mode
  if (isReady && activeTier === "low") {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
      >
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245, 158, 11, 0.16) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 40%, rgba(234, 179, 8, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>
    );
  }

  // Tier 2: Medium-Performance / Standard Laptop / Mobile Mode (Static GPU meshes, no infinite keyframes)
  if (isReady && activeTier === "medium") {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
      >
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[950px] h-[480px] rounded-full blur-[90px] opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 850px 460px at 50% 10%, rgba(251, 191, 36, 0.32) 0%, rgba(245, 158, 11, 0.22) 35%, rgba(217, 119, 6, 0.08) 65%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(245,158,11,0.18)_1.2px,transparent_1.2px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_60%,transparent_100%)] opacity-70" />
        <div className="absolute top-[35%] -right-40 w-[580px] h-[520px] bg-gradient-to-bl from-amber-500/28 via-yellow-500/20 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-[60%] -left-40 w-[580px] h-[500px] bg-gradient-to-tr from-yellow-500/24 via-amber-500/20 to-transparent rounded-full blur-[100px]" />
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[850px] h-[350px] rounded-full blur-[90px] opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 750px 320px at 50% 90%, rgba(245, 158, 11, 0.28) 0%, rgba(234, 179, 8, 0.16) 40%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  // Tier 3: High-Performance Mode (Full Visual Fidelity & Smooth GPU Floating)
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.6)]" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] rounded-full blur-[100px] opacity-95 animate-ambient-pulse"
        style={{
          background:
            "radial-gradient(ellipse 900px 520px at 50% 10%, rgba(251, 191, 36, 0.38) 0%, rgba(245, 158, 11, 0.28) 35%, rgba(217, 119, 6, 0.12) 65%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(245,158,11,0.22)_1.2px,transparent_1.2px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_60%,transparent_100%)] opacity-80" />
      <div className="absolute -top-10 -right-32 w-[650px] h-[550px] bg-gradient-to-br from-yellow-400/30 via-amber-500/25 to-transparent rounded-full blur-[110px] animate-ambient-float" />
      <div className="absolute top-[35%] -right-44 w-[700px] h-[650px] bg-gradient-to-bl from-amber-500/32 via-yellow-500/24 to-amber-600/12 rounded-full blur-[120px] animate-ambient-pulse" />
      <div className="absolute top-[60%] -left-48 w-[680px] h-[600px] bg-gradient-to-tr from-yellow-500/28 via-amber-500/24 to-transparent rounded-full blur-[120px] animate-ambient-float" />
      <div
        className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] rounded-full blur-[100px] opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 850px 400px at 50% 90%, rgba(245, 158, 11, 0.35) 0%, rgba(234, 179, 8, 0.22) 40%, rgba(217, 119, 6, 0.08) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}
