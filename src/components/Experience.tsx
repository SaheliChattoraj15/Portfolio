import React from "react";
import { experienceData } from "@/data/portfolioData";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-b border-zinc-800/60 scroll-mt-12 overflow-hidden content-visibility-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Career &amp; Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-heading">
            Work experience, operations management, and student leadership.
          </h2>
          <p className="text-base text-zinc-400">
            Practical roles that honed my coordination skills, stakeholder communication, and analytical approach.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/50">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-zinc-100 font-heading">
                      {item.role}
                    </h3>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-300 mt-1">
                    {item.organization}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                {item.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills tags */}
              {item.skills && (
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-zinc-400 font-medium">Core Focus:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-300 border border-zinc-700/40 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
