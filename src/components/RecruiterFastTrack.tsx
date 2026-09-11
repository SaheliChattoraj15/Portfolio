import React from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { personalInfo } from "@/data/portfolioData";
import {
  BarChart3,
  Users,
  Award,
  Zap,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

export default function RecruiterFastTrack() {
  return (
    <section id="fast-track" className="relative py-24 border-b border-zinc-800/60 scroll-mt-12 overflow-hidden">
      {/* Dedicated Executive Brief Ambient Glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-amber-500/20 via-yellow-500/15 to-transparent rounded-full blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/30 border border-amber-500/30 text-xs font-medium text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Fast-Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-heading">
            Why Consider Saheli? The 30-Second Brief.
          </h2>
          <p className="text-base text-zinc-400">
            A high-density synthesis of analytical aptitude, project coordination, and team leadership for hiring teams.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Data Analytics */}
          <SpotlightCard className="p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-100 font-heading">
                  Data &amp; Business Analytics
                </h3>
                <span className="text-[11px] text-zinc-400 font-mono">
                  SQL, Excel &amp; Dashboards
                </span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Structured SQL queries (joins, aggregations, filtering)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Microsoft Excel (Pivot tables, VLOOKUP, data modeling)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>KPI tracking, sales reports &amp; executive slide summaries</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-zinc-800/60">
              <span className="text-[11px] text-zinc-400 font-medium">
                Best Fit: Business Analyst, Data Analyst
              </span>
            </div>
          </SpotlightCard>

          {/* Card 2: Project & Agile Coordination */}
          <SpotlightCard className="p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-100 font-heading">
                  Project &amp; Agile Coordination
                </h3>
                <span className="text-[11px] text-zinc-400 font-mono">
                  Operations &amp; Team Delivery
                </span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Led 18-member student executive board</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Organized 4 campus hackathons (450+ attendees)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Familiar with Agile sprints, Jira/Trello, and timeline tracking</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-zinc-800/60">
              <span className="text-[11px] text-zinc-400 font-medium">
                Best Fit: Project Coordinator, APM
              </span>
            </div>
          </SpotlightCard>

          {/* Card 3: Communication & Problem Solving */}
          <SpotlightCard className="p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-100 font-heading">
                  Communication &amp; Empathy
                </h3>
                <span className="text-[11px] text-zinc-400 font-mono">
                  Cross-Functional Bridge
                </span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Clear stakeholder presentations and requirements documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Mentored 120+ juniors in academic coursework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Bridges communication between technical and business teams</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-zinc-800/60">
              <span className="text-[11px] text-zinc-400 font-medium">
                Culture Add: High Reliability &amp; Team Spirit
              </span>
            </div>
          </SpotlightCard>

          {/* Card 4: Academic Standing & Readiness */}
          <SpotlightCard className="p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-100 font-heading">
                  Availability &amp; Readiness
                </h3>
                <span className="text-[11px] text-zinc-400 font-mono">
                  B.Tech CSE • Summer 2025
                </span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Academic Standing: 8.9 / 10.0 CGPA (Top 5% Cohort)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Dean&apos;s Honor List across university semesters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Open to On-site &amp; Remote roles globally</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-zinc-800/60 flex items-center gap-2">
              <a
                href={personalInfo.socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-100 font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>View Official Resume</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
