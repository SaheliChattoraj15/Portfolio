"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 border-b border-zinc-800/60 scroll-mt-12 overflow-hidden content-visibility-auto">
      {/* Dedicated Contact Golden Sunset Horizon Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-t from-amber-500/28 via-yellow-500/18 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-heading">
            Let&apos;s connect — open to graduate opportunities &amp; roles.
          </h2>
          <p className="text-base text-zinc-400">
            I am actively interviewing for Business Analyst, Product Operations, APM, and Project Coordination roles for 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-xl bg-zinc-900/30 border border-zinc-800/80 space-y-6">
              <h3 className="text-lg font-bold text-zinc-100 font-heading">
                Direct Communication
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Prefer email? Feel free to write directly or copy the address to your clipboard.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/60 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Personal Email</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="text-sm font-mono text-zinc-200 hover:text-white transition-colors block break-all"
                >
                  {personalInfo.socialLinks.email}
                </a>
              </div>

              {/* Professional Profiles */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide block mb-3">
                  Professional Profiles
                </span>
                <div className="space-y-2">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/40 border border-zinc-800/50 hover:border-zinc-700/60 text-xs font-medium text-zinc-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/40 border border-zinc-800/50 hover:border-zinc-700/60 text-xs font-medium text-zinc-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                  </a>

                  <a
                    href={personalInfo.socialLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/40 border border-zinc-800/50 hover:border-zinc-700/60 text-xs font-medium text-zinc-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                      <span>Official Curriculum Vitae</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
            <h3 className="text-lg font-bold text-zinc-100 font-heading mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Drop a note regarding career opportunities, discussions, or inquiries.
            </p>

            {submitted ? (
              <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-sm space-y-2">
                <div className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4" />
                  <span>Message Sent Successfully</span>
                </div>
                <p className="text-xs text-emerald-400/80 leading-relaxed">
                  Thank you for reaching out. Saheli will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-300">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-zinc-300">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-zinc-300">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Role Opportunity / Project Discussion"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Saheli, I came across your portfolio and would like to connect regarding..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-zinc-950 text-xs font-semibold hover:from-amber-300 hover:to-yellow-300 transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_28px_rgba(245,158,11,0.38)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
