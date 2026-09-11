import React from "react";
import { skillCategories } from "@/data/portfolioData";
import SpotlightCard from "@/components/SpotlightCard";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-b border-zinc-800/60 scroll-mt-12 overflow-hidden content-visibility-auto">
      {/* Dedicated Skills Ambient Glow */}
      <div
        className="absolute top-1/2 -left-20 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-amber-500/22 via-yellow-500/15 to-transparent rounded-full blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
            Skills &amp; Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-heading">
            Analytical tools, project methodologies, and leadership skills.
          </h2>
          <p className="text-base text-zinc-400">
            A practical skill set combining data querying, business reporting, team coordination, and technical literacy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <SpotlightCard
              key={idx}
              className="p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-zinc-100 font-heading mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/50 hover:border-amber-500/35 hover:bg-zinc-900/60 transition-all"
                    >
                      <span className="text-xs font-medium text-zinc-200">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-zinc-300 font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/30">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
