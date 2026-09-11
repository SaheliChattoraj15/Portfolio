"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { useDeviceCapability } from "@/context/DeviceCapabilityContext";
import { ArrowUp, Mail, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const { capability, activeTier, isReady } = useDeviceCapability();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-semibold text-zinc-200">
              {personalInfo.name}
            </span>
            <span className="text-zinc-400">
              Final Year B.Tech • Computer Science & Engineering
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              aria-label="Email"
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Adaptive Machine & Browser Capability Auto-Detection Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-[11px]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>Adaptive Performance Engine:</span>
            </div>
            <span className="text-zinc-400">
              {isReady
                ? `${capability.browserName} on ${capability.osName} • ${capability.hardwareConcurrency} Cores • ${
                    capability.isTouchDevice ? "Touch Optimized" : "Desktop Precision"
                  }`
                : "Calibrating to machine..."}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25 uppercase font-semibold">
              {isReady ? `${activeTier} Tier Active` : "Auto"}
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>© {new Date().getFullYear()} Saheli Chattoraj. Designed with architectural restraint.</p>
          <p>Typeset in Plus Jakarta Sans & Outfit. Hardware-calibrated rendering.</p>
        </div>
      </div>
    </footer>
  );
}
