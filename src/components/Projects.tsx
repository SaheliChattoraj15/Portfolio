"use client";

import React, { useState } from "react";
import { featuredProjects } from "@/data/portfolioData";
import SpotlightCard from "@/components/SpotlightCard";
import {
  CheckCircle2,
  Award,
  ChevronDown,
  ChevronUp,
  Workflow,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Projects & Cases (4)" },
    { id: "analytics", label: "Data & Business Analytics" },
    { id: "operations", label: "Operations & Agile Scoping" },
  ];

  const filteredProjects = featuredProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "analytics") return p.id === "retailpulse" || p.id === "supplytrack";
    if (filter === "operations") return p.id === "eventflow" || p.id === "insightdesk";
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="relative py-24 border-b border-zinc-800/60 scroll-mt-12 overflow-hidden content-visibility-auto">
      {/* Dedicated Projects Ambient Amber Glow */}
      <div
        className="absolute top-1/3 right-0 w-[650px] h-[550px] bg-gradient-to-br from-amber-500/25 via-yellow-400/20 to-transparent rounded-full blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
            Selected Projects &amp; Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-heading">
            Practical initiatives in data analysis, operations, and product coordination.
          </h2>
          <p className="text-base text-zinc-400">
            Showcasing business reporting, structured SQL queries, user research synthesis, and agile event management.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-amber-400 text-zinc-950 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <SpotlightCard
                key={project.id}
                className="p-8 md:p-10"
              >
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-800/60">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-zinc-400 font-medium">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-100 font-heading">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          Featured Case
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-zinc-300">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.githubUrl && (
                    <div className="shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-800 text-xs font-medium text-zinc-200 border border-zinc-700/60 hover:border-zinc-600 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Project Overview</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Main Content */}
                <div className="py-6 space-y-6">
                  {/* Business & Operational Impact Box */}
                  <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-500/25 flex items-start gap-3 text-xs leading-relaxed">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-amber-200 block sm:inline">
                        Business &amp; Operational Takeaway:{" "}
                      </span>
                      <span className="text-zinc-300">{project.businessImpact}</span>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem vs Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                    <div className="p-4 rounded-lg bg-zinc-950/50 border border-zinc-800/50 space-y-1.5">
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                        Problem Identified
                      </span>
                      <p className="text-zinc-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-zinc-950/50 border border-zinc-800/50 space-y-1.5">
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                        Approach &amp; Execution
                      </span>
                      <p className="text-zinc-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
                      Key Outcomes &amp; Deliverables
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {project.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-md bg-zinc-950/40 border border-zinc-800/40"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Workflow Drawer */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-zinc-800/60 space-y-3 animate-in fade-in duration-200">
                      <div className="p-4 rounded-lg bg-zinc-950/70 border border-zinc-800 text-xs space-y-3">
                        <div className="flex items-center gap-2 font-semibold text-zinc-200">
                          <Workflow className="w-4 h-4 text-zinc-400" />
                          <span>Analytical Methodology &amp; Workflow Steps</span>
                        </div>
                        <div className="font-mono text-[11px] p-3 rounded bg-zinc-900 border border-zinc-800/80 text-zinc-300 overflow-x-auto">
                          {project.id === "retailpulse" && (
                            <pre>{`[ Raw Transaction Data ] ---> [ SQL Filtering & Joins ] ---> [ RFM Customer Scoring ]
                                                                       |
                                                      [ Power BI / Tableau Dashboard ]
                                                                       |
                                                    [ Targeted Retention Recommendations ]`}</pre>
                          )}
                          {project.id === "eventflow" && (
                            <pre>{`[ Event Requirements ] ---> [ Task Milestone Breakdown ] ---> [ Volunteer Team Sync ]
                                                                       |
                                                      [ Centralized Registration Sheet ]
                                                                       |
                                                     [ 450+ Attendees Checked In Seamlessly ]`}</pre>
                          )}
                          {project.id === "insightdesk" && (
                            <pre>{`[ Student User Interviews ] ---> [ Pain Point Synthesis ] ---> [ MoSCoW Prioritization ]
                                                                       |
                                                           [ Low-Fidelity Wireframes ]
                                                                       |
                                                      [ Final Product Requirement Doc (PRD) ]`}</pre>
                          )}
                          {project.id === "supplytrack" && (
                            <pre>{`[ Inventory Database ] ---> [ SQL Safety-Stock Queries ] ---> [ Automated Alert Rules ]
                                                                       |
                                                        [ Excel Pivot Reporting Summary ]
                                                                       |
                                                      [ Weekly Stock-out Prevention Review ]`}</pre>
                          )}
                        </div>
                        <p className="text-zinc-400 text-xs">
                          Focused on clarity, practical outcomes, and structured documentation that teams can review and act on easily.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Strip with Drawer Toggle & Tool Badges */}
                <div className="pt-4 border-t border-zinc-800/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-zinc-400 mr-1 font-medium">Tools:</span>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/40 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-md bg-zinc-850 hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Collapse Workflow" : "View Workflow Steps"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
