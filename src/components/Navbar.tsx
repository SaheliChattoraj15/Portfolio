"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileText, Search } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScroll = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const navLinks = [
    { name: "Summary", href: "#fast-track" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-[0_4px_25px_rgba(245,158,11,0.05)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <Link
          href="#"
          className="shrink-0 group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-950/40 border border-amber-500/35 flex items-center justify-center text-xs font-bold text-amber-200 tracking-wider group-hover:border-amber-400/60 transition-colors shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            SC
          </div>
          <div className="flex flex-col shrink-0">
            <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors whitespace-nowrap leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-zinc-400 font-normal whitespace-nowrap leading-tight">
              Final Year B.Tech • Analytics &amp; Management
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-300 hover:text-white transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Items */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Quick Command Palette Launcher */}
          <button
            onClick={openPalette}
            type="button"
            aria-label="Open Command Palette (Cmd+K)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer shrink-0"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="text-[10px] font-mono px-1 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
              ⌘K
            </kbd>
          </button>

          {/* Social Profiles */}
          <div className="flex items-center gap-1 border-l border-zinc-800 pl-2.5 shrink-0">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-800/60"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-800/60"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href={personalInfo.socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-zinc-950 rounded-md hover:from-amber-300 hover:to-yellow-300 transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_22px_rgba(245,158,11,0.38)] shrink-0 whitespace-nowrap ml-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-800" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <button
            onClick={openPalette}
            aria-label="Command search"
            className="p-2 text-zinc-400 hover:text-zinc-100"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-zinc-100 focus-visible:outline-none rounded-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/80 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-zinc-300 hover:text-white py-1 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-zinc-100"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-zinc-100"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href={personalInfo.socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-zinc-950 rounded-md shadow-[0_0_15px_rgba(245,158,11,0.25)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
