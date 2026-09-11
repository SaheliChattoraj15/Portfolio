import React from "react";
import { personalInfo, coreValues } from "@/data/portfolioData";
import { GraduationCap, Compass, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 border-b border-zinc-800/60 scroll-mt-12 overflow-hidden content-visibility-auto">
      {/* Dedicated About Ambient Glow */}
      <div
        className="absolute top-1/3 -right-20 w-[600px] h-[500px] bg-gradient-to-bl from-amber-500/20 via-yellow-500/15 to-transparent rounded-full blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
            About &amp; Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-heading">
            A technology graduate focused on data analysis and project execution.
          </h2>
        </div>

        {/* Narrative & Academic Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base leading-relaxed">
            {personalInfo.bioExact.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-300">
                {paragraph}
              </p>
            ))}

            <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-500/25 text-sm text-zinc-300 leading-relaxed space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block">
                Analytics &amp; Management Vision
              </span>
              <p>{personalInfo.managementVision}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-zinc-300" />
                <span>Focus: Business Analytics &amp; Project Coordination</span>
              </div>
              <div className="hidden sm:block text-zinc-700">•</div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-zinc-300" />
                <span>Open to 2025 Graduate Roles</span>
              </div>
            </div>
          </div>

          {/* Academic Snapshot Card */}
          <div className="lg:col-span-5 bg-zinc-900/50 border border-zinc-800/90 hover:border-amber-500/30 transition-colors rounded-xl p-7 space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {personalInfo.education.degree}
                </h3>
                <p className="text-xs text-zinc-400">
                  {personalInfo.education.major} • {personalInfo.education.duration}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                <span className="text-zinc-400">Academic Standing</span>
                <span className="font-semibold text-zinc-200">{personalInfo.education.cgpa}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                <span className="text-zinc-400">Recognition</span>
                <span className="text-xs font-medium text-emerald-400">
                  Dean&apos;s Honors List
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs font-medium text-zinc-400 block mb-2.5">
                Key Analytical &amp; Technical Coursework
              </span>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.education.relevantCoursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Operational Values Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold tracking-tight text-zinc-100 font-heading">
              Guiding Principles &amp; Work Ethic
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              How I approach problem solving, cross-functional collaboration, and project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((principle) => (
              <div
                key={principle.number}
                className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-amber-500/35 hover:bg-zinc-900/50 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    {principle.number}
                  </span>
                  <h4 className="text-base font-semibold text-zinc-100">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
