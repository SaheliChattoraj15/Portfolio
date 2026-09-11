import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { Mail, FileText, ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-zinc-800/60 overflow-hidden">
      {/* Hero Dedicated Luminous Golden Aura */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-amber-500/30 via-yellow-400/25 to-amber-600/15 rounded-full blur-[95px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-950/30 border border-amber-500/35 text-xs font-medium text-amber-200 mb-8 shadow-[0_0_20px_rgba(245,158,11,0.18)] backdrop-blur-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span>{personalInfo.availability.status}</span>
        </div>

        {/* Hero Title & Description */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.08] font-heading">
            Bridging data analytics, project coordination, and technology management.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
            Hi, I&apos;m <span className="text-zinc-100 font-medium">{personalInfo.name}</span>. A final-year B.Tech (Computer Science &amp; Engineering) student passionate about business analytics, product operations, and structured project management. I help translate goals into clear data insights, coordinate cross-functional teams, and ensure projects deliver measurable value.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-zinc-950 font-semibold text-sm hover:from-amber-300 hover:to-yellow-300 transition-all shadow-[0_0_25px_rgba(245,158,11,0.28)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]"
          >
            <span>Explore Projects &amp; Cases</span>
            <ArrowDown className="w-4 h-4 text-zinc-900" />
          </Link>

          <Link
            href="#fast-track"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900/90 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 hover:border-amber-500/30 font-medium text-sm transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>30-Sec Executive Brief</span>
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Get in Touch</span>
          </Link>

          <a
            href={personalInfo.socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 text-sm font-medium transition-colors"
          >
            <FileText className="w-4 h-4 text-zinc-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Metadata Details Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-zinc-900">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-zinc-900/40 border border-zinc-800/50 hover:border-amber-500/35 hover:bg-zinc-900/60 transition-all flex flex-col justify-between"
            >
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-heading">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-400 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
