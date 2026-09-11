import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 border-b border-zinc-800/60 scroll-mt-12 overflow-hidden content-visibility-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Education &amp; Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-heading">
            Formal education in engineering and analytical methods.
          </h2>
          <p className="text-base text-zinc-400">
            An undergraduate foundation emphasizing structured databases, project lifecycle management, and logical problem solving.
          </p>
        </div>

        {/* Education Highlight Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Degree Card */}
          <div className="lg:col-span-8 p-8 md:p-10 rounded-xl bg-zinc-900/30 border border-zinc-800/80 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-200">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 font-heading">
                      {personalInfo.education.degree}
                    </h3>
                    <p className="text-sm text-zinc-300">
                      {personalInfo.education.major}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                  {personalInfo.education.duration}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                  <span className="text-xs text-zinc-400 block mb-1">Cumulative GPA</span>
                  <span className="text-xl font-bold text-zinc-100 font-heading">
                    {personalInfo.education.cgpa}
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                  <span className="text-xs text-zinc-400 block mb-1">Academic Standing</span>
                  <span className="text-sm font-semibold text-emerald-400">
                    {personalInfo.education.honors}
                  </span>
                </div>
              </div>
            </div>

            {/* Coursework listing */}
            <div className="pt-6 border-t border-zinc-800/60">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Relevant Coursework &amp; Management Subjects</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalInfo.education.relevantCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-zinc-300 p-2.5 rounded-md bg-zinc-950/40 border border-zinc-800/40"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Achievements / Milestones */}
          <div className="lg:col-span-4 p-8 rounded-xl bg-zinc-900/30 border border-zinc-800/80 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-zinc-200" />
                <h4 className="text-base font-bold text-zinc-100 font-heading">
                  Key Accomplishments
                </h4>
              </div>

              <div className="space-y-4 text-xs text-zinc-300">
                <div className="p-3.5 rounded-lg bg-zinc-950/50 border border-zinc-800/50 space-y-1">
                  <span className="font-semibold text-zinc-100 block">
                    Top 5% Cohort Ranking
                  </span>
                  <p className="text-zinc-400 leading-relaxed">
                    Maintained consistent academic excellence across 7 university semesters.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-950/50 border border-zinc-800/50 space-y-1">
                  <span className="font-semibold text-zinc-100 block">
                    Hackathon Operations Lead
                  </span>
                  <p className="text-zinc-400 leading-relaxed">
                    Managed registration, venue logistics, and team schedules for 450+ participants across 4 events.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-950/50 border border-zinc-800/50 space-y-1">
                  <span className="font-semibold text-zinc-100 block">
                    Academic Peer Mentorship
                  </span>
                  <p className="text-zinc-400 leading-relaxed">
                    Mentored 120+ junior students in university database concepts and coursework.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/60">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Expected Graduation: Summer 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
