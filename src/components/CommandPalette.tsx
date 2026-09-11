"use client";

import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Search,
  Users,
  Briefcase,
  GraduationCap,
  Mail,
  FileText,
  Copy,
  Check,
  Sparkles,
  BarChart3,
  BookOpen,
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface ActionItem {
  id: string;
  label: string;
  category: "Navigation" | "Actions";
  icon: React.ComponentType<{ className?: string }>;
  perform: () => void;
  badge?: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) {
            setQuery("");
            setSelectedIndex(0);
          }
          return !prev;
        });
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setQuery("");
      setSelectedIndex(0);
      setOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const navigateTo = (hash: string) => {
    setOpen(false);
    const elem = document.querySelector(hash);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  const actions: ActionItem[] = [
    {
      id: "nav-fast-track",
      label: "30-Sec Executive Brief",
      category: "Navigation",
      icon: Sparkles,
      perform: () => navigateTo("#fast-track"),
      badge: "High Priority",
    },
    {
      id: "nav-about",
      label: "View About & Leadership Vision",
      category: "Navigation",
      icon: Users,
      perform: () => navigateTo("#about"),
    },
    {
      id: "nav-projects",
      label: "View Analytics Projects & Case Studies",
      category: "Navigation",
      icon: BarChart3,
      perform: () => navigateTo("#projects"),
    },
    {
      id: "nav-experience",
      label: "View Operations & Leadership Experience",
      category: "Navigation",
      icon: Briefcase,
      perform: () => navigateTo("#experience"),
    },
    {
      id: "nav-skills",
      label: "View Skills & Analytical Toolkit",
      category: "Navigation",
      icon: BookOpen,
      perform: () => navigateTo("#skills"),
    },
    {
      id: "nav-education",
      label: "View B.Tech Education & Coursework",
      category: "Navigation",
      icon: GraduationCap,
      perform: () => navigateTo("#education"),
    },
    {
      id: "nav-contact",
      label: "Get in Touch & Send Message",
      category: "Navigation",
      icon: Mail,
      perform: () => navigateTo("#contact"),
    },
    {
      id: "act-copy-email",
      label: copied ? "Email Copied!" : "Copy Personal Email",
      category: "Actions",
      icon: copied ? Check : Copy,
      perform: copyEmail,
    },
    {
      id: "act-resume",
      label: "Download Official Curriculum Vitae",
      category: "Actions",
      icon: FileText,
      perform: () => {
        window.open(personalInfo.socialLinks.resume, "_blank");
        setOpen(false);
      },
    },
    {
      id: "act-linkedin",
      label: "Open LinkedIn Profile",
      category: "Actions",
      icon: LinkedinIcon,
      perform: () => {
        window.open(personalInfo.socialLinks.linkedin, "_blank");
        setOpen(false);
      },
    },
    {
      id: "act-github",
      label: "Open GitHub Profile",
      category: "Actions",
      icon: GithubIcon,
      perform: () => {
        window.open(personalInfo.socialLinks.github, "_blank");
        setOpen(false);
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? (filtered.length || 1) - 1 : prev - 1
      );
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].perform();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4 bg-zinc-950/75 backdrop-blur-md"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search sections, case studies, or quick actions..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded text-zinc-400 hover:text-zinc-200"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-400">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => item.perform()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-colors text-left cursor-pointer ${
                    isSelected
                      ? "bg-zinc-800 text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span className="font-medium text-zinc-200">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono text-[10px] text-zinc-300">
                ↑↓
              </kbd>{" "}
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono text-[10px] text-zinc-300">
                ↵
              </kbd>{" "}
              Select
            </span>
          </div>
          <span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono text-[10px] text-zinc-300">
              Esc
            </kbd>{" "}
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
